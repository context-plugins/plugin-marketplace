---
name: php-error-handling
description: Handle errors from an APIMatic-generated PHP SDK — all non-2xx responses throw ApiException (extends \Exception) with getCode() for the HTTP status and getHttpResponse()->getRawBody() for the body; some SDKs emit per-operation typed exception subclasses. Use the moment you write a try/catch around a call, handle a non-2xx/error response, inspect a status code, or read the error body from any APIMatic PHP SDK.
---

# Error handling for an APIMatic PHP SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{operation}`, `{apiGroup}`, `ShutterstockAPIExplorerLib`) — replace it with the concrete identifier from
> the source.

Endpoint methods **throw on non-success responses**. The base thrown type is always `ApiException`
(under `ShutterstockAPIExplorerLib\Exceptions\ApiException`, which extends `\Exception`). Depending on
the SDK, some operations throw typed subclasses of `ApiException` for specific status codes.

## `ApiException` — the base error type

`ApiException` exposes:

- `getCode(): int` — the HTTP status code (stored via PHP's `\Exception::$code`).
- `getMessage(): string` — the human-readable error reason.
- `getHttpResponse(): ?HttpResponse` — the full response object (null when the exception was raised for a network error before a response arrived).
- `getHttpRequest(): HttpRequest` — the outgoing request.
- `hasResponse(): bool` — convenience check before calling `getHttpResponse()`.

From `getHttpResponse()` (a `CoreResponse` subclass), you can read:

- `->getRawBody(): string` — the raw response body string.
- `->getHeaders(): array` — the response headers.
- `->getStatusCode(): int` — same value as `$e->getCode()`; prefer `getCode()` directly on the exception.

## Catch the exception

### Standard catch (all non-2xx)

```php
use ShutterstockAPIExplorerLib\Exceptions\ApiException;

try {
    $response = $client->{apiGroup}()->{operation}(/* ... */);
    // use $response
} catch (ApiException $e) {
    $status  = $e->getCode();                                          // HTTP status code
    $body    = $e->hasResponse() ? $e->getHttpResponse()->getRawBody() : '';
    $headers = $e->hasResponse() ? $e->getHttpResponse()->getHeaders() : [];

    error_log("API error {$status}: {$body}");

    // Branch on status code:
    if ($status === 422) {
        $errors = json_decode($body, true)['errors'] ?? [];
        // handle validation errors
    } elseif ($status === 404) {
        // handle not found
    } elseif ($status === 429) {
        $retryAfter = $headers['Retry-After'][0] ?? null;
        // handle rate limiting
    } else {
        throw $e;  // re-throw unexpected errors
    }
}
```

### Typed subclass (per-operation exceptions)

Some SDKs emit typed exception subclasses for specific operations or status codes. Open the
controller file in the SDK source and check whether the `@throws` docblock lists a subclass
beyond `ApiException`:

```php
use ShutterstockAPIExplorerLib\Exceptions\ApiException;
use ShutterstockAPIExplorerLib\Exceptions\{OperationException};

try {
    $response = $client->{apiGroup}()->{operation}(/* ... */);
} catch ({OperationException} $e) {
    // typed subclass with additional accessors (check the class in source)
    $detail = $e->getErrorDetail();
} catch (ApiException $e) {
    // fallback for all other non-2xx
    $body = $e->hasResponse() ? $e->getHttpResponse()->getRawBody() : '';
    error_log($e->getCode() . ': ' . $body);
}
```

Always catch the typed subclass **before** the base `ApiException`, since PHP catches in order.

## Reading the error body

`getHttpResponse()->getRawBody()` is a string. Guard with `hasResponse()` first (network errors
arrive as `ApiException` with no response), then parse as JSON when needed:

```php
if ($e->hasResponse()) {
    $raw     = $e->getHttpResponse()->getRawBody();
    $decoded = json_decode($raw, true);
    if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
        $message = $decoded['message'] ?? $decoded['error'] ?? 'Unknown error';
        $errors  = $decoded['errors'] ?? [];
    } else {
        // Non-JSON body (HTML error pages, plain text, etc.)
        $message = $raw;
    }
} else {
    // Network-level error — no HTTP response was received
    $message = $e->getMessage();
}
```

Do not assume the body is valid JSON — `4xx` and `5xx` responses from a gateway or proxy often
return HTML.

## Network and transport errors

Network-level failures (connection refused, DNS failure, timeout) surface as
`\GuzzleHttp\Exception\ConnectException` or `\GuzzleHttp\Exception\RequestException` — both
are `\RuntimeException` subclasses but **not** `ApiException`. Handle them separately:

```php
use ShutterstockAPIExplorerLib\Exceptions\ApiException;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;

try {
    $response = $client->{apiGroup}()->{operation}(/* ... */);
} catch (ApiException $e) {
    // non-2xx from the API server
} catch (ConnectException $e) {
    // network unreachable, DNS failure, TLS handshake failure
} catch (RequestException $e) {
    // other Guzzle-level request failure
}
```

## Notes

- Retries for transient statuses (if configured) happen automatically **before** an exception is
  thrown — see **php-configuration-resilience**.
- When you need the raw request/response for debugging, attach a Guzzle middleware or history
  handler — see **php-configuration-resilience** for the logging pattern.
- All `ApiException` subclasses live under `ShutterstockAPIExplorerLib\Exceptions\` — read the source to
  find any operation-specific types.
