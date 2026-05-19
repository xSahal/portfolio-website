import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
// inspectAttr() injects code-path="src/..." attributes onto every rendered
// element for Claude Code's inspect-and-edit feature. That's useful in dev
// but should NOT ship to production (extra bytes + leaks source paths).
// command === 'serve' is only true during `vite` (dev). It's false for
// `vite build` (production), so the plugin is automatically tree-shaken out.
export default defineConfig(({ command }) => ({
  base: './',
  plugins: [
    ...(command === 'serve' ? [inspectAttr()] : []),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
