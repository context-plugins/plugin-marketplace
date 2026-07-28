---
name: php-client-initialization
description: Initialize an APIMatic-generated PHP API client — construct it from a config array (or options object) you supply, choose a server environment or override the base URL, and wire it into a PSR-11 container or plain instantiation. Use the moment you write `new VimeoAPIClient(...)`, configure its options, pick an environment, or register the client in a DI container — load it even after reading the constructor in the SDK source, since the signature shows the arguments but not the Guzzle lifetime rules or environment constant names.
---

# Initializing an APIMatic PHP SDK client

This applies to **any** APIMatic-generated PHP SDK. Replace placeholders with the real names from
the SDK you are using:

- `VimeoAPIClient` — the single public client class (e.g. `FooClient`).
- `VimeoApiLib` — the SDK's root namespace used in `use` directives.
- `{apiGroup}` — a controller property/method name on the client (e.g. `widgets()`).

## Shape of the client

APIMatic PHP SDKs expose **one public client class** constructed from a configuration array (or a
typed options object, depending on the SDK version):

```php
$client = new VimeoAPIClient([
    'timeout'     => 30,
    'environment' => VimeoAPIClient::ENVIRONMENT_PRODUCTION,
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
use VimeoApiLib\VimeoAPIClient;

$client = new VimeoAPIClient([
    'timeout'     => 30,
    'environment' => VimeoAPIClient::ENVIRONMENT_PRODUCTION,
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

$client = new VimeoAPIClient([
    'httpClient' => new Client(['handler' => $stack]),
    // ...other config
]);
```

Reuse the SDK client for the lifetime of the request handler (or the application). Do not construct
a new `VimeoAPIClient` per API call — Guzzle connection pooling is per-client-instance and per-request
construction leaks connections.

## Choosing the server / base URL

Environments are modeled as class constants on `VimeoAPIClient` (e.g.
`VimeoAPIClient::ENVIRONMENT_PRODUCTION`, `VimeoAPIClient::ENVIRONMENT_SANDBOX`). Pass the constant in
the config array. To override the base URL entirely (e.g. for a mock server or a self-hosted
gateway), set the `baseUrl` or `baseUri` key (the exact key name varies per SDK — check the client
constructor in the source):

```php
$client = new VimeoAPIClient([
    'environment' => VimeoAPIClient::ENVIRONMENT_PRODUCTION,
    // override the base URL (exact key — confirm in SDK source):
    'baseUrl'     => 'https://my-mock-server.example.com',
]);
```

## Dependency injection (PSR-11 container)

For Laravel, Symfony, or any PSR-11 container, bind the client as a singleton so it is
constructed once and reused:

```php
// Laravel service provider (AppServiceProvider or a dedicated provider):
use VimeoApiLib\VimeoAPIClient;

$this->app->singleton(VimeoAPIClient::class, function ($app) {
    return new VimeoAPIClient([
        'timeout'     => 30,
        'environment' => VimeoAPIClient::ENVIRONMENT_PRODUCTION,
        // credentials from config/env (see php-authentication):
    ]);
});
```

Then inject it via the constructor:

```php
class MyService
{
    public function __construct(private readonly VimeoAPIClient $client) {}

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
