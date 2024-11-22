import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    server: {
        host: true,
        open: true,
    },
    root: 'src',
    build: {
        outDir: '../dist',
    },
    base: './',
    plugins: [
        react({
            // Use React plugin in all *.jsx and *.tsx files
            include: '**/*.{jsx,tsx}',
        }),

    ],
})