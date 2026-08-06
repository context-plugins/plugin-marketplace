---
name: php-client-initialization
description: Initialize an APIMatic-generated PHP API client — construct it from a config array (or options object) you supply, choose a server environment or override the base URL, and wire it into a PSR-11 container or plain instantiation. Use the moment you write `new ShellEVClient(...)`, configure its options, pick an environment, or register the client in a DI container — load it even after reading the constructor in the SDK source, since the signature shows the arguments but not the Guzzle lifetime rules or environment constant names.
---

# Initializing an APIMatic PHP SDK client

> `ShellEVClient` is the SDK's client class — **read the real name** from the `*Client.php` file in
> `src/` (it is derived from the API title with APIMatic's own casing, so do not guess it from the
> API name). `ShellEVClientBuilder` sits beside it.

This applies to **any** APIMatic-generated PHP SDK. Replace placeholders with the real names from
the SDK you are using:

- `ShellEVClient` — the single public client class (read it from the `*Client.php` file in `src/`).
- `ShellEVLib` — the SDK's root namespace used in `use` directives.
- `{apiGroup}` — a controller property/method name on the client (e.g. `widgets()`).

## Shape of the client

APIMatic PHP SDKs expose **one public client class** constructed from a configuration array (or a
typed options object, depending on the SDK version):

```php
$client = new ShellEVClient([
    'timeout'     => 30,
    'environment' => ShellEVClient::ENVIRONMENT_PRODUCTION,
    // ...auth credentials (see php-authentication)
]);
```

Operations are exposed through **controller accessor methods** (one per API resource group), called
`$client->{apiGroup}()->{operation}(...)` — for example, a `Widgets` controller's `listWidgets`
operation is `$client->widgets()->listWidgets(...)`. An operation belonging to no group may sit
**directly on the client**. Open the client class **in the SDK source** to see the available
controller methods (and any direct operations). See **php-calling-endpoints**.

## Direct instantiation

```php
use ShellEVLib\ShellEVClient;

$client = new ShellEVClient([
    'timeout'     => 30,
    'environment' => ShellEVClient::ENVIRONMENT_PRODUCTION,
    // ...set the auth credentials your API uses (see php-authentication)
]);
```

### Guzzle client lifetime

The SDK creates a Guzzle `Client` internally. If you need a custom Guzzle client (for custom
middleware, a proxy, or a mock handler), pass it via the config:

```php
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;

$stack = HandlerStack::create();
// push custom middleware onto $stack here

$client = new ShellEVClient([
    'httpClient' => new Client(['handler' => $stack]),
    // ...other config
]);
```

Reuse the SDK client for the lifetime of the request handler (or the application). Do not construct
a new `ShellEVClient` per API call — Guzzle connection pooling is per-client-instance and per-request
construction leaks connections.

## Choosing the server / base URL

Environments are modeled as class constants on `ShellEVClient` (e.g.
`ShellEVClient::ENVIRONMENT_PRODUCTION`, `ShellEVClient::ENVIRONMENT_SANDBOX`). Pass the constant in
the config array. To override the base URL entirely (e.g. for a mock server or a self-hosted
gateway), set the `baseUrl` or `baseUri` key (the exact key name varies per SDK — check the client
constructor in the source):

```php
$client = new ShellEVClient([
    'environment' => ShellEVClient::ENVIRONMENT_PRODUCTION,
    // override the base URL (exact key — confirm in SDK source):
    'baseUrl'     => 'https://my-mock-server.example.com',
]);
```

## Dependency injection (PSR-11 container)

For Laravel, Symfony, or any PSR-11 container, bind the client as a singleton so it is
constructed once and reused:

```php
// Laravel service provider (AppServiceProvider or a dedicated provider):
use ShellEVLib\ShellEVClient;

$this->app->singleton(ShellEVClient::class, function ($app) {
    return new ShellEVClient([
        'timeout'     => 30,
        'environment' => ShellEVClient::ENVIRONMENT_PRODUCTION,
        // credentials from config/env (see php-authentication):
    ]);
});
```

Then inject it via the constructor:

```php
class MyService
{
    public function __construct(private readonly ShellEVClient $client) {}

    public function doWork(): mixed
    {
        return $this->client->{apiGroup}()->{operation}(/* ... */);
    }
}
```

## Next

- Configure authentication → **php-authentication**
- Make your first call → **php-calling-endpoints**
- Tune retries/timeouts/logging → **php-configuration-resilience**
