"use client"

import { useEffect, useRef } from 'react'

export default function Component() {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawHalftoneWave = () => {
      const gridSize = 20
      const rows = Math.ceil(canvas.height / gridSize)
      const cols = Math.ceil(canvas.width / gridSize)

      const colors = [                                  // colors of wave 👍👍
            "rgba(0,255,248,0.5)",    // sky blue
            "rgba(0,255,0,0.5)",      // green
            "rgba(241,255,0,0.5)",    // yellow
            "rgba(191,0,255,0.5)",    // purple
          ]

          // HELPER THAT BLEND BETWEEN TWO COLORS BASED ON VALUE t FROM 0 -> 1 : 📌📌📌
          function lerpColor(color1 : string, color2 : string, t : number) : string {

              const extract = (c : string) => c.match(/\d+\.?\d*/g)!.map(Number);
              const [r1,g1,b1,a1] = extract(color1);
              const [r2,g2,b2,a2] = extract(color2);

              const r = r1 + (r2 - r1) * t;
              const g = g1 + (g2 - g1) * t;
              const b = b1 + (b2 - b1) * t;
              const a = a1 + (a2 - a1) * t;

              return `rgba(${r},${g},${b},${a})`;
          }
          
        const colorIndex = Math.floor(time * 0.05) % colors.length;
        const nextColorIndex = (colorIndex + 1) % colors.length;
        const t = (time * 0.05) % 1;
        const color = lerpColor(colors[colorIndex], colors[nextColorIndex], t);   //👈 One color per wave

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize
          const centerY = y * gridSize
          const distanceFromCenter = Math.sqrt(
            Math.pow(centerX - canvas.width / 2, 2) + 
            Math.pow(centerY - canvas.height / 2, 2)
          )
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + 
            Math.pow(canvas.height / 2, 2)
          )
          const normalizedDistance = distanceFromCenter / maxDistance
          
          const waveOffset = Math.sin(normalizedDistance * 10 - time) * 0.5 + 0.5
          const size = gridSize * waveOffset * 0.8


          ctx.beginPath()
          ctx.arc(centerX, centerY, size / 2.5, 0, Math.PI * 2)
          ctx.fillStyle = color;
          ctx.fill()
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawHalftoneWave()

      time += 0.08                    // waves wave time.. 👍👍
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)

    }
  }, [])

  return <canvas ref={canvasRef} className="w-full bg-black" />
}
