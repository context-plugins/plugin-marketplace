---
name: php-authentication
description: Configure authentication on an APIMatic-generated PHP API client — each scheme is a set of keys in the constructor config array (or a typed credentials object); covers Basic auth, Bearer token, API key (header/query), and OAuth 2.0 client credentials with automatic token caching. Use the moment you set credentials, an API key, a token, or OAuth on any APIMatic PHP SDK — load it even after reading the constructor config keys in the source, since the key names don't tell you when to set them or that secrets must come from environment variables.
---

# Authenticating an APIMatic PHP SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme
as **keys in the constructor config array** (or, in newer SDK versions, as a typed credentials
object). Set the key(s) your API uses, then construct the client
(see **php-client-initialization**).

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `NotionLib`, `NotionClient`, `{usernameKey}`, `{tokenKey}`) — replace it with the concrete
> identifier from the source.

To see which schemes a specific SDK accepts, read the **constructor config keys or credentials
properties on `NotionClient`** — those are the source of truth (read the class in the SDK source).

## Basic auth

```php
$client = new NotionClient([
    '{usernameKey}' => 'YOUR_USERNAME',  // e.g. 'username'
    '{passwordKey}' => 'YOUR_PASSWORD',  // e.g. 'password'
    // ...other config
]);
```

Sends `Authorization: Basic base64(username:password)` on every request.

## Bearer token

```php
$client = new NotionClient([
    '{tokenKey}' => 'YOUR_ACCESS_TOKEN',  // e.g. 'accessToken' or 'bearerToken'
    // ...other config
]);
```

Sends `Authorization: Bearer YOUR_ACCESS_TOKEN`.

## API key (header or query parameter)

The key is sent as a header or query parameter — its placement and parameter name are fixed by the
generated scheme. Set the configured key in the config array:

```php
$client = new NotionClient([
    '{apiKeyConfigKey}' => 'YOUR_API_KEY',  // e.g. 'apiKey' or 'xApiKey'
    // ...other config
]);
```

## OAuth 2.0 — client credentials

For machine-to-machine flows, provide the client ID and secret. The SDK fetches a token
automatically before the first request and caches it until near expiry:

```php
$client = new NotionClient([
    '{clientIdKey}'     => 'YOUR_CLIENT_ID',      // e.g. 'oauthClientId'
    '{clientSecretKey}' => 'YOUR_CLIENT_SECRET',   // e.g. 'oauthClientSecret'
    '{scopeKey}'        => 'read write',           // optional, if the SDK exposes it
    // ...other config
]);
```

The SDK acquires a token, caches it in memory, and re-acquires when it expires or a `401` is
received. No manual token management is needed.

## More schemes

For OAuth2 **authorization-code (3-legged)**, **resource-owner password**, **multiple/combined**
schemes (AND/OR), and **no-auth**, see [reference.md](reference.md).

## Notes

- A given SDK only exposes the config keys for the schemes its API uses — confirm the exact key
  names from the constructor in the SDK source.
- Set credentials **in the config array passed to the constructor**, or inside your DI binding
  (see **php-client-initialization**).
- Keep secrets out of source code — load them from environment variables or a secret store:

```php
$client = new NotionClient([
    '{usernameKey}' => $_ENV['API_USERNAME'] ?? getenv('API_USERNAME'),
    '{passwordKey}' => $_ENV['API_PASSWORD'] ?? getenv('API_PASSWORD'),
]);
```

For Laravel, use `config('services.{api}.key')` backed by `.env`; for Symfony, use
`%env(API_KEY)%` in the container binding.
