import { useEffect, useRef } from "react";
import { Header } from "./components/Header/Header";

const BLOBS = [
  { x: 0.2, y: 0.3, r: 0.35, vx: 0.0003, vy: 0.0002, color: '#8b0000' },
  { x: 0.7, y: 0.6, r: 0.3, vx: -0.0002, vy: 0.0003, color: '#cc2200' },
  { x: 0.5, y: 0.2, r: 0.25, vx: 0.0002, vy: -0.0002, color: '#ff4400' },
  { x: 0.3, y: 0.7, r: 0.28, vx: -0.0003, vy: -0.0001, color: '#6b0020' },
  { x: 0.8, y: 0.2, r: 0.22, vx: 0.0001, vy: 0.0003, color: '#991100' },
];

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const blobs = BLOBS.map(b => ({ ...b }));
    let raf: number;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw() {
      if (!canvas || !ctx) return;
      const { width: w, height: h } = canvas;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, w, h);

      blobs.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0 || b.x > 1) b.vx *= -1;
        if (b.y < 0 || b.y > 1) b.vy *= -1;

        const grd = ctx.createRadialGradient(
          b.x * w, b.y * h, 0,
          b.x * w, b.y * h, b.r * Math.max(w, h)
        );
        grd.addColorStop(0, b.color + 'cc');
        grd.addColorStop(1, b.color + '00');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      });

      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
      </div>
    </div>
  );
}

export default App;
