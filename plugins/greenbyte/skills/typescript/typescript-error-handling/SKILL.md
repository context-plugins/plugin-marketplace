---
name: typescript-error-handling
description: Handle errors from an APIMatic-generated TypeScript/Node.js SDK — calls throw ApiError (or a typed subclass per operation), which carries the HTTP status code and response body; or use the optional non-throwing result-style call to get the status code and response headers without try/catch. Use the moment you write a try/catch around a call, handle a non-2xx/error response, read a status code or rate-limit headers, or want a no-throw result-style call on any APIMatic TypeScript SDK — load it even after reading the thrown type in the source, since the type alone won't warn you about the typed-vs-raw error traps that make catch blocks subtly wrong.
---

# Error handling for an APIMatic TypeScript SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{operation}`, `{apiGroup}`, `greenbyte`) — replace it with the concrete identifier from the source.

Endpoint methods **throw on non-success responses** by default (for a non-throwing alternative, see the **`ApiResult`** section below). The thrown type is always `ApiError` — but it comes in **two shapes**, depending on the operation:

- **Typed subclass (Case A)** — a per-operation `{Operation}Error` (subclass of `ApiError`) exists under `src/errors/` for the operation; the catch block receives that subclass with typed body accessors.
- **Base `ApiError` (Case B)** — when the operation has no `{Operation}Error` type, the thrown error is `ApiError` directly. Read the `statusCode` and `body` straight off `err`. This is common — many operations have no typed error model.

## Which error shape does an endpoint throw?

Check whether a `{Operation}Error` type exists under `src/errors/` for that operation:

- If it exists → catch `{Operation}Error` (Case A).
- If it doesn't → catch `ApiError` (Case B).

## Catch the exception

`ApiError` exposes `statusCode: number` and `body: unknown` (the parsed response body, or the raw string when not JSON).

### Case A — operation has a typed `{Operation}Error`

```typescript
import { Client } from 'greenbyte';
import { ApiError } from 'greenbyte';
import { {Operation}Error } from 'greenbyte/errors';

try {
  const response = await api.{operation}({ /* ... */ });
  // use response
} catch (err) {
  if (err instanceof {Operation}Error) {
    // err has typed accessors specific to this operation — open {Operation}Error under src/errors/ for names
    console.error('Typed error:', err.statusCode, err.{typedBody});
  } else if (err instanceof ApiError) {
    // Fallback for any other API error
    console.error(`HTTP ${err.statusCode}:`, err.body);
  } else {
    throw err;  // re-throw non-API errors (network, timeout, etc.)
  }
}
```

### Case B — operation throws `ApiError`

For operations with no `{Operation}Error` type, `err` is `ApiError` — read the status and body straight off it:

```typescript
import { ApiError } from 'greenbyte';

try {
  const response = await api.{operation}({ /* ... */ });
  // use response
} catch (err) {
  if (err instanceof ApiError) {
    console.error(`HTTP ${err.statusCode}`);
    console.error(typeof err.body === 'string' ? err.body : JSON.stringify(err.body));
  } else {
    throw err;
  }
}
```

## Result-style alternative — non-throwing (where generated)

The generator can **optionally** emit a result-style variant of an operation — so it's not guaranteed to exist. When enabled, it appears as a **sibling method** named `{operation}OrFail` or `{operation}Result` (depending on the SDK version), and **does not throw** on a non-success status — the error is carried in the returned value. `ApiResult` exposes the HTTP **`statusCode`** and **`headers`** on both success and failure.

```typescript
const result = await api.{operation}Result({ /* ... */ });

if (result.isSuccess()) {
  console.log(`OK ${result.statusCode}`);
  const response = result.getValue();
  // use response
} else {
  console.error(`HTTP ${result.statusCode}`);
  const error = result.getError();  // ApiError or typed {Operation}Error
}
```

If the controller has no `{operation}Result` overload, this variant wasn't generated — use the throwing method with `try/catch` instead.

## Notes

- Network/transport failures surface as `TypeError` (e.g. `fetch failed`) or `AbortError` (cancellation via `AbortSignal`) — handle those separately from `ApiError`.
- On an SDK with **multiple/composite auth schemes**, a call may throw an `AuthError` when the configured schemes can't be satisfied — catch it separately.
- Retries for transient statuses happen automatically before an error is thrown — but only for idempotent methods (`GET/HEAD/PUT/OPTIONS`) by default, so `POST`/`PATCH`/`DELETE` errors surface without retry. See **typescript-configuration-resilience**.
