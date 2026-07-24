# Authentication reference (APIMatic TypeScript)

Full matrix of auth schemes the APIMatic TypeScript generator supports. Credential types live under `src/authentication/` and are identical across SDKs; only the **config property names** are generated per-API.

## Basic

```typescript
{
  {basicAuthProperty}: { username: '...', password: '...' }
}
```
Sends `Authorization: Basic base64(username:password)`.

## Bearer

```typescript
{
  {bearerAuthProperty}: 'ACCESS_TOKEN'
}
```
Sends `Authorization: Bearer ACCESS_TOKEN`.

## API key — header / query / cookie

A single key string; its placement (header name, query param, or cookie) is fixed by the generated scheme.

```typescript
{
  {apiKeyProperty}: 'API_KEY'
}
```

## OAuth 2.0 — client credentials (machine-to-machine)

```typescript
{
  {oAuthProperty}: {
    clientId: '...',
    clientSecret: '...',
    scopes: ['...'],   // optional
  }
}
```

## OAuth 2.0 — authorization code (3-legged, with PKCE)

```typescript
{
  {oAuthProperty}: {
    clientId: '...',
    clientSecret: '...',   // optional; needed only when PKCE is disabled
    redirectUri: 'https://app.example.com/callback',
    scopes: ['...'],       // optional
    state: '...',          // optional CSRF token
    pkce: 'S256',          // default; RFC 7636
    onPromptForAuthorizationCode: async (authorizationUrl: string) => {
      // Open/redirect the browser to authorizationUrl, then return the
      // authorization code your redirect endpoint received.
      return await getCodeFromUser(authorizationUrl);
    },
  }
}
```
The SDK exchanges the code for a token and refreshes it when it expires; if the refresh fails, it invokes `onPromptForAuthorizationCode` again to re-authorize.

## OAuth 2.0 — resource owner password

```typescript
{
  {oAuthProperty}: {
    clientId: '...',
    clientSecret: '...',   // optional
    username: '...',
    password: '...',
    scopes: ['...'],       // optional
  }
}
```

## Token caching & refresh (all OAuth2 grants)

- Tokens are cached in-memory and reused until ~30s before expiry.
- Refreshable grants (those that return a refresh token) refresh automatically; otherwise a new token is acquired.
- On `401`, the cached token is invalidated and re-acquired on the next call.

## Combined / multiple schemes

When an operation (or the whole API) requires more than one scheme, APIMatic composes them:

- **AND** — all schemes are applied to every request.
- **OR** — the first scheme that succeeds is used; if all fail, an error is thrown.

You configure this by setting the relevant credentials properties on the config object; the generated client wires the AND/OR composition for you.

## No auth

Some endpoints/APIs need no credentials — leave the credentials properties unset.

## Discovering what a specific SDK uses

1. Open `AdyenBinLookupAPIClientConfig` and list its optional credentials properties — this is the **source of truth** for what the SDK accepts.
2. The `src/authentication/` folder ships every scheme as shared runtime code, so it lists schemes the API may not accept — rely on the config interface instead.
