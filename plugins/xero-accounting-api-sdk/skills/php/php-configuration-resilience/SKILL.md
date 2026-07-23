---
name: php-configuration-resilience
description: Tune an APIMatic-generated PHP SDK client — per-request timeout via Guzzle config, adding a retry middleware (no built-in retry by default), overriding the base URL/environment, pagination via page/cursor params, and request/response logging with a Guzzle history or tap middleware. Use whenever adjusting timeout, adding retry logic, overriding the base URL, paging through results, or logging HTTP traffic for any APIMatic PHP SDK.
---

# Configuration & resilience for an APIMatic PHP SDK

All configuration is passed in the constructor array or via a custom Guzzle `HandlerStack`. These
patterns are generic across APIMatic PHP SDKs.

## Timeout

Set the per-request timeout in seconds in the constructor config. This maps to Guzzle's `timeout`
option:

```php
$client = new XeroAccountingAPIClient([
    'timeout' => 30.0,  // seconds (float); 0 = no timeout
    // ...auth config
]);
```

For a **connection** timeout (time to establish TCP, distinct from total request timeout):

```php
$httpClient = new \GuzzleHttp\Client([
    'timeout'         => 30.0,
    'connect_timeout' => 5.0,
]);

$client = new XeroAccountingAPIClient([
    'httpClient' => $httpClient,
    // ...auth config
]);
```

## Retries

APIMatic PHP SDKs do **not** retry by default. Add retries by attaching a
`GuzzleRetryMiddleware` (or a custom middleware) to the `HandlerStack`:

```php
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;

$stack = HandlerStack::create();

// Simple retry middleware: retry on 429/500/502/503/504, up to 3 times, with exponential backoff.
$stack->push(Middleware::retry(
    function (int $retries, Request $request, ?Response $response): bool {
        if ($retries >= 3) {
            return false;
        }
        if ($response === null) {
            return true;  // network failure — always retry
        }
        return in_array($response->getStatusCode(), [429, 500, 502, 503, 504], true);
    },
    function (int $retries, ?Response $response): int {
        // Exponential backoff in milliseconds: 1s, 2s, 4s
        $delay = (int) (1000 * (2 ** ($retries - 1)));
        // Honor Retry-After header on 429 if present:
        if ($response?->getStatusCode() === 429) {
            $retryAfter = $response->getHeaderLine('Retry-After');
            if (is_numeric($retryAfter)) {
                $delay = (int) ($retryAfter * 1000);
            }
        }
        return $delay;
    }
));

$client = new XeroAccountingAPIClient([
    'httpClient' => new Client(['handler' => $stack, 'timeout' => 30.0]),
    // ...auth config
]);
```

Notes:
- Only add `POST`/`DELETE` verbs to the retry condition if the operation is idempotent.
- The delay callback returns milliseconds (Guzzle multiplies by 1000 internally in some
  versions — verify with your installed version's docs).

## Base URL / environment override

To point the SDK at a mock server, staging environment, or self-hosted gateway, override the
base URL in the config:

```php
$client = new XeroAccountingAPIClient([
    'environment' => XeroAccountingAPIClient::ENVIRONMENT_PRODUCTION,  // picks server template
    'baseUrl'     => 'https://mock.example.com',           // overrides template entirely
    // exact config key — confirm in SDK source constructor
]);
```

To switch environments, change the `environment` constant. Open the client class in the source to
find the available environment constants and the exact base-URL config key name.

## Pagination

APIMatic PHP SDKs do not auto-paginate. Drive pagination manually with `page`/`perPage` (or
`cursor`/`limit`) query parameters; stop when a page returns fewer items than `perPage`, an empty
array, or when a cursor/next-page token is absent:

```php
$page   = 1;
$perPage = 100;
$allItems = [];

do {
    $result = $client->{apiGroup}()->{operation}(
        page: $page,
        perPage: $perPage,
        // ...other params
    );
    $items = is_array($result) ? $result : ($result->get{Items}() ?? []);
    $allItems = array_merge($allItems, $items);
    $page++;
} while (count($items) === $perPage);
```

For cursor-based pagination, extract the next cursor from the response and pass it on the next
call; stop when the cursor is `null` or absent.

## Logging

There is **no built-in logging hook**. Add logging by attaching a history middleware or a tap
middleware to the `HandlerStack`:

```php
use GuzzleHttp\Middleware;

$container = [];
$stack = HandlerStack::create();
$stack->push(Middleware::history($container));

$httpClient = new \GuzzleHttp\Client(['handler' => $stack]);
$client = new XeroAccountingAPIClient(['httpClient' => $httpClient, /* ...auth */]);

// After the call:
$client->{apiGroup}()->{operation}(/* ... */);

foreach ($container as $tx) {
    $req = $tx['request'];
    $res = $tx['response'];
    echo $req->getMethod() . ' ' . $req->getUri() . PHP_EOL;
    echo $res?->getStatusCode() . PHP_EOL;
}
```

For streaming / tap logging in production (without storing all history in memory):

```php
$stack->push(Middleware::tap(
    function (\Psr\Http\Message\RequestInterface $request) {
        error_log('--> ' . $request->getMethod() . ' ' . $request->getUri());
    },
    function (\Psr\Http\Message\ResponseInterface $response) {
        error_log('<-- ' . $response->getStatusCode());
    }
));
```

### Verify on the wire (first run of any new integration)

Run the tap middleware on the first execution of any new call and inspect the output:

1. The **verb** matches the operation (a `404` on a known path often means the wrong method).
2. The **path** has no literal `{placeholder}` left unsubstituted.
3. Each **path-param segment** is the value the API expects.
4. The query params you set appear in the query string.

Gate the logger behind an environment flag once verified.

