---
name: php-testing
description: Unit-test code that uses an APIMatic-generated PHP SDK by injecting a fake Guzzle HandlerStack — the Guzzle mock handler is the test seam (no SDK mocking helpers) — stub success and error responses with MockHandler, assert the outgoing request, assert ApiException on error paths, and bind a stub client in a DI container. Use when writing, mocking, or stubbing tests for calls made through an APIMatic PHP SDK client.
---

# Testing code that uses an APIMatic PHP SDK

The SDK uses Guzzle internally, which is the seam for testing: pass a Guzzle `Client` backed by
a `MockHandler`, so no real network calls happen. The SDK ships no mocking helpers — this is
standard Guzzle.

**Match the project's existing test stack.** Check the test project's `composer.json` and existing
tests, then mirror both the **test framework** (PHPUnit version, base class) and the **assertion
style**. The code samples below use PHPUnit `TestCase` purely for reference — they show the SDK
testing seam and *what* to assert, not a mandated style.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `ApiApisGuruClient`, `{apiGroup}`, `{operation}`) — replace it with the concrete identifier from the
> source.

## A reusable mock client helper

```php
use GuzzleHttp\Client;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Psr7\Response;
use FlightMostBookedDestinationsLib\ApiApisGuruClient;

/**
 * Build an SDK client that returns the given stub responses in order.
 *
 * @param Response[] $responses
 * @param array      &$container  Pass by reference to capture transaction history.
 */
function clientWithResponses(array $responses, array &$container = []): ApiApisGuruClient
{
    $mock  = new MockHandler($responses);
    $stack = HandlerStack::create($mock);
    $stack->push(Middleware::history($container));

    return new ApiApisGuruClient([
        'httpClient' => new Client(['handler' => $stack]),
        // credentials not needed for stub tests:
    ]);
}
```

## Test a success path

```php
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;

class {Operation}Test extends TestCase
{
    public function testReturnsDeserializedBody(): void
    {
        $client = clientWithResponses([
            new Response(200, ['Content-Type' => 'application/json'], '{"id": 123, "name": "Widget"}'),
        ]);

        $result = $client->{apiGroup}()->{operation}(/* args */);

        $this->assertSame(123, $result->getId());
        $this->assertSame('Widget', $result->getName());
    }
}
```

## Test an error path

Endpoint methods throw `ApiException` on non-2xx (see **php-error-handling**).

```php
use FlightMostBookedDestinationsLib\Exceptions\ApiException;
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;

public function testThrowsApiExceptionOn422(): void
{
    $body   = json_encode(['errors' => ['Name is required']]);
    $client = clientWithResponses([
        new Response(422, ['Content-Type' => 'application/json'], $body),
    ]);

    $this->expectException(ApiException::class);
    $this->expectExceptionCode(422);

    $client->{apiGroup}()->{operation}(/* args */);
}

public function testErrorBodyIsAccessible(): void
{
    $body   = json_encode(['errors' => ['Name is required']]);
    $client = clientWithResponses([
        new Response(422, ['Content-Type' => 'application/json'], $body),
    ]);

    try {
        $client->{apiGroup}()->{operation}(/* args */);
        $this->fail('Expected ApiException');
    } catch (ApiException $e) {
        $this->assertSame(422, $e->getStatusCode());
        $decoded = json_decode($e->getResponseBody(), true);
        $this->assertContains('Name is required', $decoded['errors']);
    }
}
```

If the operation throws a typed subclass, catch that first:

```php
use FlightMostBookedDestinationsLib\Exceptions\{OperationException};
use FlightMostBookedDestinationsLib\Exceptions\ApiException;

try {
    $client->{apiGroup}()->{operation}(/* args */);
} catch ({OperationException} $e) {
    // typed subclass — assert operation-specific accessors
    $this->assertNotEmpty($e->getErrorDetail());
} catch (ApiException $e) {
    $this->fail('Unexpected generic ApiException: ' . $e->getMessage());
}
```

## Assert the outgoing request

Use the history container captured by `Middleware::history` to assert the request the SDK sent:

```php
public function testSendsCorrectRequest(): void
{
    $container = [];
    $client    = clientWithResponses([new Response(200, [], '{}')], $container);

    $client->{apiGroup}()->{operation}(/* args */);

    $this->assertCount(1, $container);
    /** @var \GuzzleHttp\Psr7\Request $request */
    $request = $container[0]['request'];

    $this->assertSame('POST', $request->getMethod());
    $this->assertStringContainsString('/expected/path', (string) $request->getUri());
    $this->assertStringContainsString('per_page=20', $request->getUri()->getQuery());

    // Assert the serialized request body:
    $sentBody = (string) $request->getBody();
    $decoded  = json_decode($sentBody, true);
    $this->assertSame('expected_value', $decoded['expected_field'] ?? null);
}
```

## Test pagination

Stub multiple pages by queuing responses:

```php
public function testPaginatesAllResults(): void
{
    $page1 = json_encode([/* 100 items */]);
    $page2 = json_encode([/* 50 items — signals last page */]);

    $client = clientWithResponses([
        new Response(200, [], $page1),
        new Response(200, [], $page2),
    ]);

    // Drive pagination manually (see php-configuration-resilience):
    $allItems = [];
    $page = 1;
    do {
        $items = $client->{apiGroup}()->{operation}(page: $page, perPage: 100);
        $allItems = array_merge($allItems, $items);
        $page++;
    } while (count($items) === 100);

    $this->assertCount(150, $allItems);
}
```

## Bind a stub client in a DI container (Laravel example)

```php
use FlightMostBookedDestinationsLib\ApiApisGuruClient;

// In a test setUp or a service provider override:
app()->instance(ApiApisGuruClient::class, clientWithResponses([
    new Response(200, [], '{"id": 1}'),
]));

// The service under test receives the stub:
$service = app(MyService::class);
$result  = $service->doWork();
```

## Notes

- Guzzle's `MockHandler` throws a `\GuzzleHttp\Exception\ConnectException` (not `ApiException`)
  when the queue is empty and `$strict = true` is passed — test network errors separately.
- To disable any retry middleware added to the stack, simply omit it from the test `HandlerStack`.
- To look up an operation's signature, its request type, or a typed exception's accessor names,
  read the SDK source `.php` files — don't rely on IDE completion alone for generated code.
- Prefer this `MockHandler`-seam approach over mocking the SDK client class itself unless you
  need to test code that depends on an interface wrapping the SDK.
