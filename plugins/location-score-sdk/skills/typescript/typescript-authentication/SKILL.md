---
name: typescript-authentication
description: Configure authentication on an APIMatic-generated TypeScript/Node.js API client — each scheme is an optional credentials property on the config object (set it when constructing the client) — Basic (username/password), Bearer token, API key (header/query/cookie), and OAuth 2.0 (client-credentials, authorization-code+PKCE, password) plus combined AND/OR schemes. Use the moment you set credentials, an API key, a token, or OAuth on any APIMatic TypeScript SDK, or need to know which schemes its config object exposes — load it even after reading the config interface in the source, since the property type doesn't tell you when to set it or that secrets belong in environment variables.
---

# Authenticating an APIMatic TypeScript SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as an **optional credentials property on the config object**; set the one(s) your API uses when constructing the client (see `typescript-client-initialization`).

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `location-scorelib`, `LocationScoreClientConfig`, `{basicAuthProperty}`) — replace it with the concrete identifier from the source.

To see which schemes a specific SDK accepts, read the **credentials properties on its `LocationScoreClientConfig` interface** — those are the source of truth. The `src/authentication` folder ships every scheme class as shared runtime code regardless of what the API accepts, so rely on the config interface rather than that folder.

## Basic auth

```typescript
import { LocationScoreClient } from 'location-scorelib';

const client = new LocationScoreClient({
  {basicAuthProperty}: {
    username: '...',
    password: '...',
  },
});
```

## Bearer token

```typescript
const client = new LocationScoreClient({
  {bearerAuthProperty}: 'ACCESS_TOKEN',
});
```

## API key (header, query, or cookie)

The key is sent as a header, query parameter, or cookie — its placement and name are fixed by the generated scheme:

```typescript
const client = new LocationScoreClient({
  {apiKeyProperty}: 'API_KEY',
});
```

## OAuth 2.0 — client credentials

```typescript
const client = new LocationScoreClient({
  {oAuthProperty}: {
    clientId: '...',
    clientSecret: '...',
    scopes: ['...'],   // optional
  },
});
```

The SDK fetches and caches the token, acquiring a fresh one when it expires; on a `401` it invalidates the cached token and re-acquires.

## More schemes

For OAuth2 **authorization-code (3-legged, with PKCE)**, **resource-owner password**, **multiple/combined** schemes (AND/OR), and **no-auth**, see [reference.md](reference.md).

## Notes

- A given SDK only exposes the credentials properties for the schemes its API uses; those names are generated per-API (hence the `{...Property}` placeholders above).
- Set credentials when constructing the client.
- Keep secrets out of source — load them from environment variables (`process.env.MY_API_KEY`) or a secrets manager, never hardcode them.
