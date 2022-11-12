import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    root: 'src',
    build: {
        manifest: true,
        outDir: '../dist',
    },
    plugins: [preact()],
});
