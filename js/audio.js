let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playScream() {
  try {
    const ctx = getAudioCtx();
    const dur = 1.1;
    const bufSize = ctx.sampleRate * dur;
    const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.setValueAtTime(800, ctx.currentTime);
    bp.frequency.exponentialRampToValueAtTime(3200, ctx.currentTime + 0.3);
    bp.frequency.exponentialRampToValueAtTime(600,  ctx.currentTime + dur);
    bp.Q.value = 1.8;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1.4, ctx.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 0.4);
    gainNode.gain.linearRampToValueAtTime(0,   ctx.currentTime + dur);

    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.15);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + dur);
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.5, ctx.currentTime);
    oscGain.gain.linearRampToValueAtTime(0, ctx.currentTime + dur);

    noise.connect(bp); bp.connect(gainNode); gainNode.connect(ctx.destination);
    osc.connect(oscGain); oscGain.connect(ctx.destination);
    noise.start(ctx.currentTime); noise.stop(ctx.currentTime + dur);
    osc.start(ctx.currentTime);   osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}
