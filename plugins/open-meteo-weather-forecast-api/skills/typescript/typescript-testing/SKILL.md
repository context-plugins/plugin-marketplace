---
name: typescript-testing
description: Unit-test code that uses an APIMatic-generated TypeScript/Node.js SDK by intercepting fetch — the SDK's HTTP transport is the test seam (no SDK mocking helpers) — stub success and error responses with a custom fetch mock or msw, assert the outgoing request, assert ApiError on error paths, and register a stub client in your DI container. Use when writing, mocking, or stubbing tests for calls made through an APIMatic TypeScript SDK client — load it even after reading the constructor in the source, since the seam alone won't tell you to match the project's test stack, assert the right error type per operation, or disable retries so a stubbed 5xx fails fast.
---

# Testing code that uses an APIMatic TypeScript SDK

The client accepts a `customFetch` option (when the SDK version supports it), which is the seam for testing: pass a stub `fetch` function so no real network calls happen. Alternatively, intercept at the global `fetch` level using a library such as `msw` or `jest-fetch-mock`.

**Match the project's existing test stack — don't impose one.** Check the test project's `package.json` and existing tests, then mirror both its **test framework** (Jest / Vitest / Mocha) and its **assertion style**. The samples below use Jest `test` + `expect` **purely for reference** — they show the SDK testing seam and *what* to assert, not a mandated framework. Substitute your `OpenMeteoWeatherForecastAPIClient`/config as well.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `OpenMeteoWeatherForecastAPIClient`, `{apiGroup}`, `{operation}`) — replace it with the concrete identifier from the source.

## A reusable stub helper

```typescript
import { OpenMeteoWeatherForecastAPIClient } from 'open-meteo-weather-forecast-apilib';

function clientReturning(status: number, body: unknown): {
  client: OpenMeteoWeatherForecastAPIClient;
  lastRequest: () => Request | undefined;
} {
  let captured: Request | undefined;

  const stubFetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    captured = new Request(input, init);
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const client = new OpenMeteoWeatherForecastAPIClient({
    customFetch: stubFetch,
    // auth not needed for stubs
    retryConfig: { maxNumberOfRetries: 0 },  // disable retries so a stubbed 5xx fails fast
  });

  return { client, lastRequest: () => captured };
}
```

> If your SDK version does not expose `customFetch`, use `jest-fetch-mock` or `msw` to intercept the global `fetch` instead.

## Test a success path

```typescript
test('returns deserialized body', async () => {
  const { client } = clientReturning(200, { '{resource}': { id: 123 } });

  const response = await client.{apiGroup}.{operation}({ /* args */ });

  expect(response.{resource}?.id).toBe(123);
});
```

## Test an error path

Endpoint methods throw `ApiError` on non-2xx (see `typescript-error-handling`). The thrown value is either a typed `{Operation}Error` subclass (**Case A**) for operations that have one under `src/errors/`, or base `ApiError` (**Case B**) otherwise.

**Case A — typed `{Operation}Error`:**

```typescript
import { {Operation}Error } from 'open-meteo-weather-forecast-apilib/errors';

test('throws typed error on API error', async () => {
  const { client } = clientReturning(422, { errors: ['bad input'] });

  await expect(
    client.{apiGroup}.{operation}({ /* args */ })
  ).rejects.toThrow({Operation}Error);
});
```

**Case B — base `ApiError`:**

```typescript
import { ApiError } from 'open-meteo-weather-forecast-apilib';

test('throws ApiError on non-2xx', async () => {
  const { client } = clientReturning(422, { errors: ['bad input'] });

  await expect(
    client.{apiGroup}.{operation}({ /* args */ })
  ).rejects.toBeInstanceOf(ApiError);

  // Or assert the status code:
  try {
    await client.{apiGroup}.{operation}({ /* args */ });
  } catch (err) {
    expect(err).toBeInstanceOf(ApiError);
    expect((err as ApiError).statusCode).toBe(422);
  }
});
```

## Assert the outgoing request

Because the stub captures the `Request`, you can assert method, URL, query params, headers, and body:

```typescript
test('sends correct request', async () => {
  const { client, lastRequest } = clientReturning(200, {});

  await client.{apiGroup}.{operation}({ /* args */ });

  const req = lastRequest()!;
  expect(req.method).toBe('POST');
  expect(req.url).toContain('/expected/path');

  // Assert the serialized request body:
  const sentBody = await req.json();
  expect(sentBody).toMatchObject({ expectedField: 'value' });
});
```

## Notes

- Disable retries in tests (`retryConfig: { maxNumberOfRetries: 0 }`) so a stubbed `5xx` fails on the first attempt without waiting for backoff.
- To test that retries *do* fire, have the stub return `503` then `200` and count invocations — but note retries apply to `GET/HEAD/PUT/OPTIONS` only by default, so a `POST` won't retry unless you add its method to `httpMethodsToRetry`.
- For DI-based code (e.g. NestJS), override the provider in your test module:
  ```typescript
  const moduleRef = await Test.createTestingModule({
    imports: [ApiModule],
  })
    .overrideProvider(OpenMeteoWeatherForecastAPIClient)
    .useValue(new OpenMeteoWeatherForecastAPIClient({ customFetch: stubFetch, retryConfig: { maxNumberOfRetries: 0 } }))
    .compile();
  ```
- To look up an operation's signature, its request type, or a `{Operation}Error`'s properties, read the SDK source `.ts` files — don't rely solely on the compiled `.d.ts` declarations, which may drop JSDoc comments and internal builder details.
