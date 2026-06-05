export default async (request: Request) => {
  try {
    // Import the server entry point from TanStack Start build
    const { default: handler } = await import('../.output/server/index.mjs');
    
    // Pass through to TanStack Start
    return await handler(request);
  } catch (error) {
    console.error('API Handler Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'content-type': 'application/json' },
      }
    );
  }
};
