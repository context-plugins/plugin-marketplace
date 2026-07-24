# Authentication reference (APIMatic PHP)

Full matrix of auth schemes the APIMatic PHP generator supports. Config keys are passed in the
constructor array and are generated per-API (hence the `{...Key}` placeholders below).

## Basic

```php
$client = new CellPointAPIClient([
    '{usernameKey}' => 'YOUR_USERNAME',
    '{passwordKey}' => 'YOUR_PASSWORD',
]);
```

Sends `Authorization: Basic base64(username:password)`.

## Bearer

```php
$client = new CellPointAPIClient([
    '{tokenKey}' => 'YOUR_ACCESS_TOKEN',
]);
```

Sends `Authorization: Bearer YOUR_ACCESS_TOKEN`.

## API key — header / query parameter

A single key string; placement (header name or query param) is fixed by the generated scheme.

```php
$client = new CellPointAPIClient([
    '{apiKeyConfigKey}' => 'YOUR_API_KEY',
]);
```

## OAuth 2.0 — client credentials (machine-to-machine)

```php
$client = new CellPointAPIClient([
    '{clientIdKey}'     => 'YOUR_CLIENT_ID',
    '{clientSecretKey}' => 'YOUR_CLIENT_SECRET',
    '{scopeKey}'        => 'read write',  // optional
]);
```

Token is fetched automatically, cached in memory, and re-acquired near expiry or on `401`.

## OAuth 2.0 — authorization code (3-legged)

```php
$client = new CellPointAPIClient([
    '{clientIdKey}'     => 'YOUR_CLIENT_ID',
    '{clientSecretKey}' => 'YOUR_CLIENT_SECRET',
    '{redirectUriKey}'  => 'https://app.example.com/callback',
    '{scopeKey}'        => 'read',  // optional
]);

// After the user authorizes, exchange the code for a token:
$client->{oauthController}()->exchangeCode($authorizationCode);
```

The SDK stores the token and refreshes it automatically when possible.

## OAuth 2.0 — resource owner password

```php
$client = new CellPointAPIClient([
    '{clientIdKey}'     => 'YOUR_CLIENT_ID',
    '{clientSecretKey}' => 'YOUR_CLIENT_SECRET',
    '{usernameKey}'     => 'USER_USERNAME',
    '{passwordKey}'     => 'USER_PASSWORD',
    '{scopeKey}'        => 'read',  // optional
]);
```

## Token caching & refresh (all OAuth2 grants)

- Tokens are cached in-memory and reused until near expiry.
- Grants that return a refresh token refresh automatically; otherwise a new token is acquired.
- On `401`, the cached token is invalidated and re-acquired on the next call.

## Combined / multiple schemes

When an operation or API requires more than one scheme:

- **AND** — all schemes are applied to every request.
- **OR** — the first scheme that succeeds is used.

Set the relevant credential keys in the config; the generated client wires the composition for you.

## No auth

Leave all credential config keys unset. The SDK sends requests with no auth header.

## Discovering what a specific SDK uses

1. Open `CellPointAPIClient.php` in the SDK source and read the constructor docblock or `__construct`
   parameter list — this is the **source of truth** for accepted config keys.
2. Cross-reference the `src/Http/Auth/` (or similar) folder to see how each scheme is applied,
   but rely on the constructor keys rather than the internal auth classes.
