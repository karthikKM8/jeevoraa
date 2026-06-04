import { VercelRequest, VercelResponse } from "@vercel/node";
import { startInstance } from "../src/start";

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    // Create a Web API Request from the Vercel request
    const url = `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}${request.url}`;
    const webRequest = new Request(url, {
      method: request.method,
      headers: new Headers(request.headers as Record<string, string>),
      body:
        request.method !== 'GET' && request.method !== 'HEAD'
          ? JSON.stringify(request.body)
          : undefined,
    });

    // Handle with TanStack Start
    const resp = await startInstance.fetch(webRequest);

    // Convert Web API Response to Vercel Response
    response.status(resp.status);
    
    // Set headers
    resp.headers.forEach((value, name) => {
      response.setHeader(name, value);
    });

    // Send response body
    const body = await resp.text();
    response.send(body);
  } catch (error) {
    console.error('API Error:', error);
    response.status(500).json({
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
