// place files you want to import through the `$lib` alias in this folder.

// initialize wasm module if present (built by `pnpm run build:wasm`)
export async function initWasm() {
  try {
    // dynamic import will resolve to the generated JS glue file
    const wasm = await import('./wasm/leed_pdf.js');
    await wasm.default();
    return wasm;
  } catch (e) {
    console.warn('WASM module failed to load', e);
    return null;
  }
}

// Export types
export type { SearchResult, SearchResponse } from './types/search.js';
