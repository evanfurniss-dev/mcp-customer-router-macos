export type EndpointVersion = 'v1' | 'v2'

const GLIDE_ENDPOINTS: Record<EndpointVersion, string> = {
  v1: 'https://mcp.glideapps.dev/mcp',
  v2: 'https://mcp.glideapps.dev/mcp/v2',
}
export const DEFAULT_ENDPOINT = GLIDE_ENDPOINTS.v2

const paths: Record<string, EndpointVersion> = { '/mcp': 'v1', '/mcp/v2': 'v2' }

/** Glide's two MCP endpoints, plus the same paths on a loopback fixture for local tests. Anything else is unsupported. */
export function endpointVersion(serverUrl: string): EndpointVersion | undefined {
  let url: URL
  try {
    url = new URL(serverUrl)
  } catch {
    return
  }
  if (url.username || url.password || url.search || url.hash) return
  const version = paths[url.pathname]
  if (!version) return
  if (url.origin === 'https://mcp.glideapps.dev') return version
  if (url.protocol === 'http:' && url.hostname === '127.0.0.1') return version
}
