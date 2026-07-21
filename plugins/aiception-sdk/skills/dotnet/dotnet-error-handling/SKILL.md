---
name: dotnet-error-handling
description: Handle errors from an APIMatic-generated C#/.NET SDK — calls throw the generic SdkException<TError>, where TError is either a typed per-operation {Operation}Error or RawError directly (RawError — common for read/list/find/delete ops — has no TryGet accessors; read status/body straight off it), or use the optional non-throwing ApiResult variant to get the status code and response headers without catching. Use the moment you write a try/catch around a call, handle a non-2xx/error response, read a status code or rate-limit/Link headers, or want a no-throw result-style call on any APIMatic .NET SDK (e.g. AIception) — load it even after reading the thrown type in the source, since the type alone won't warn you about the RawError/TryGetRawError traps that make catch blocks subtly wrong.
---

# Error handling for an APIMatic .NET SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Operation}`,
> `{ApiGroup}`, `AIceptionInteractive`) — replace it with the concrete identifier from the source.

Endpoint methods **throw on non-success responses** by default (for a non-throwing alternative, see the
**`ApiResult`** section below). The thrown type is always the generic `SdkException<TError>` — but `TError`
comes in **two shapes**, depending on the operation:

- **Typed model (Case A)** — a per-operation `{Operation}Error` (subclass of `ApiError`) exists under
  `Errors/` for the operation; `TError` is that type and you read it with typed `TryGet*` accessors.
- **`RawError` (Case B)** — when the operation has no `{Operation}Error` type, `TError` is `RawError`
  *directly*. `RawError` is **not** an `ApiError` and has **no** `TryGet*` / `TryGetRawError` accessors; you
  read the status and body straight off `ex.Error`. This is common — many operations have no typed error
  model and so throw `SdkException<RawError>`.

`SdkException<TError>` is declared `public sealed class SdkException<TError> : Exception` with **no**
`where TError : ApiError` constraint — which is exactly why `TError` can be either an `ApiError` model or a
`RawError`.

These types live in **distinct** namespaces — `Core.*` is **not** a single namespace, so don't assume
`ApiError` sits with `SdkException` under `Core.Exceptions`:

- `SdkException<T>` → `AIceptionInteractive.Core.Exceptions`
- `ApiError` **and** `RawError` → `AIceptionInteractive.Core.ErrorResponse`
- the per-operation `{Operation}Error` models (e.g. `CreateWidgetError`) → `AIceptionInteractive.Errors`

So catching a typed (Case A) exception needs **three** usings — `Core.Exceptions`, `Core.ErrorResponse`,
and `.Errors`; a Case B catch needs only the first two (`Core.Exceptions` + `Core.ErrorResponse`). These
types are identical in shape across APIMatic .NET SDKs.

## Catch the exception

`SdkException<TError>` exposes a single property — `public required TError Error { get; init; }`, the parsed
error model. What `Error` *is* depends on the case (below).

**Read the error directly off the strongly-typed `SdkException<TError>` — never use reflection.** The
concrete `TError` is known right there at the `catch` (Case A: the typed `{Operation}Error`; Case B:
`RawError`), so `ex.Error` and the accessors on it are reachable directly. Do **not** dig the body out via
reflection (`ex.GetType().GetProperty("Error")`, then discovering and `Invoke`-ing the `TryGet*` methods):
it compiles, but it is brittle glue that reinvents what a per-operation typed `catch` gives you for free —
the concrete type is already known, so no runtime discovery is needed. Catch the concrete
`SdkException<{Operation}Error>` (or `SdkException<RawError>`) and read `ex.Error` straight off it.

### Which `TError` does an endpoint throw?

The method's XML doc names it in its `<exception>` line — on hover / in IntelliSense, and greppable in
source:

```csharp
/// <exception cref="SdkException{TResult}"> of <see cref="RawError"/> when the server returns an error response.</exception>
```

`SdkException{TResult}` is boilerplate (identical on every method — `{TResult}` is the doc-comment's generic
placeholder, **not** the type you catch). The type named after **`of <see cref="…"/>`** is the actual
`TError`:

- `… of <see cref="{Operation}Error"/> …` → catch `SdkException<{Operation}Error>` (Case A).
- `… of <see cref="RawError"/> …` → catch `SdkException<RawError>` (Case B).

Equivalently, read the source — open the `.cs` files rather than decompiling or reflecting over the installed
package: a `{Operation}Error` type exists under `Errors/` **only** for Case-A
operations; if there is no `{Operation}Error`, the operation throws `SdkException<RawError>`. Guessing wrong
is a **compile-time** error (`SdkException<ListWidgetsError>` won't compile — no such type), not a silent
bug — so the compiler keeps you honest.

### Case A — operation has a typed `{Operation}Error` model

Handling a Case-A error is a **two-step, source-driven** process — you cannot write the `catch` block from
memory:

1. **Open the operation's `{Operation}Error` type in the SDK source (under `Errors/`) and list *every*
   `public bool TryGet...(out ...)` method it declares.** These accessors are generated per operation — one
   per response the operation maps — and their names embed the body type, so the only way to know them is to
   read the class. Expect a mix of:
   - **typed-body accessors** named after a model or scalar — `TryGetValidationErrors`, `TryGetProblemDetails`,
     `TryGetString`, `TryGetLong`, …;
   - **status-specific `RawError` accessors** — e.g. `TryGetNotFound(out RawError)`, `TryGetNoContent(out RawError)`;
   - the inherited **`TryGetRawError(out RawError)`**, which every `{Operation}Error` exposes.
2. **Write one `if` / `else if` branch per `TryGet*` method — cover them all, and put `TryGetRawError`
   *last*.** Each public `TryGet*` corresponds to a status/body the operation can return; skip one and you
   silently drop that response. `TryGetRawError` must be the final branch because it is **not** a catch-all
   (see below) — it only fires for statuses that have no more-specific accessor.

```csharp
using AIceptionInteractive.Core.Exceptions;     // SdkException<TError>
using AIceptionInteractive.Core.ErrorResponse;  // ApiError, RawError
using AIceptionInteractive.Errors;              // {Operation}Error types, e.g. CreateWidgetError

try
{
    var response = await client.{ApiGroup}.{Operation}(/* ... */, ct);
    // use response
}
catch (SdkException<{Operation}Error> ex)
{
    // ONE branch per public TryGet* declared on {Operation}Error — copy the exact names from the class
    // under Errors/. The TryGet{...} names below are PLACEHOLDERS; yours are named after this operation's
    // responses (a typed body may be a model OR a scalar such as TryGetString/TryGetLong).
    if (ex.Error.TryGet{TypedBody1}(out var body1))            // e.g. TryGetValidationErrors — a typed body
    {
        // inspect body1
    }
    else if (ex.Error.TryGet{TypedBody2}(out var body2))       // e.g. TryGetProblemDetails — another typed body
    {
        // inspect body2
    }
    else if (ex.Error.TryGet{Status}(out RawError statusRaw))  // e.g. TryGetNoContent(out RawError) — status-specific
    {
        Console.Error.WriteLine($"HTTP {(int)statusRaw.StatusCode}");
    }
    // ... KEEP GOING: one else-if for EVERY remaining TryGet* the class declares — do not stop early ...
    else if (ex.Error.TryGetRawError(out RawError raw))        // ALWAYS LAST: fallback for untyped statuses only
    {
        Console.Error.WriteLine($"HTTP {(int)raw.StatusCode}: {raw.ReadAsString()}");
    }
}
```

**Why `TryGetRawError` goes last — it is not a universal fallback.** It returns a raw body **only** for
statuses that have no more-specific accessor on this `{Operation}Error`; a status that has a typed accessor
(e.g. a `422` validation payload) lands in that typed slot and leaves `TryGetRawError` **false**. The
status-specific `RawError` accessors (e.g. `TryGetNoContent(out RawError)`) are likewise **not** surfaced by
`TryGetRawError`. So if you check `TryGetRawError` first — or omit any of the more-specific accessors — those
typed and status-specific bodies are silently dropped. Enumerate the class and handle every accessor
explicitly.

**Don't factor error-reading into a shared helper typed as `ApiError`.** The typed `TryGet*` accessors live
on the concrete `{Operation}Error`, *not* on the `ApiError` base — which exposes only `TryGetRawError`. A
helper like `string Describe(ApiError e)` can therefore reach **only** `TryGetRawError`, so for any status
that has a typed body it finds nothing and falls back to `e.ToString()` — a bare type name
(`AIceptionInteractive.Errors.{Operation}Error`), not the actual message. Read the typed accessors **inside the
per-operation `catch` block**, where the concrete `{Operation}Error` type is known; reserve shared code for
the `RawError`/transport fallback only.

### Case B — operation throws `SdkException<RawError>`

For operations with no `{Operation}Error` type (none under `Errors/`), `ex.Error` **is** a `RawError` —
there are no `TryGet*` accessors and no `TryGetRawError`; read the status and body straight off it:

```csharp
using AIceptionInteractive.Core.Exceptions;     // SdkException<TError>
using AIceptionInteractive.Core.ErrorResponse;  // RawError

try
{
    var response = await client.{ApiGroup}.{Operation}(/* ... */, ct);
    // use response
}
catch (SdkException<RawError> ex)
{
    RawError raw = ex.Error;                          // the error model IS RawError here
    Console.Error.WriteLine($"HTTP {(int)raw.StatusCode}");
    Console.Error.WriteLine(raw.ReadAsString());      // or raw.ReadAsJson<MyDto>()
}
```

Case B needs no `.Errors` using — `RawError` lives under `AIceptionInteractive.Core.ErrorResponse`. Its public
members (`StatusCode`, `ReadAsBytes`/`ReadAsString`/`ReadAsJson<T>`) are visible in the SDK source; note
`ReadAsJson<T>()` **throws `JsonException`** when the body isn't valid JSON — and a `RawError` body often
isn't (this is the no-typed-error-model case), so prefer `ReadAsString()` unless you know it's JSON.

## Result-style alternative — `ApiResult<TResponse, TError>` (no throwing)

The generator can **optionally** emit a result-style variant of an operation — so it's not guaranteed to
exist. When enabled, it appears as a **sibling method** named `{Operation}Result` (next to the throwing
`{Operation}`), returning `Task<ApiResult<TResponse, {TError}>>` and **does not throw** on a non-success
status — the error is carried in the returned value instead. (`{TError}` is the same two-case shape as
above: a typed `{Operation}Error`, or `RawError`.) `ApiResult<TResponse, TError>` is a public
`readonly struct` under `AIceptionInteractive.Core.Models`. If the controller has no `{Operation}Result`
overload, this variant wasn't generated — use the throwing method with `try/catch` instead.

Unlike the throwing path, `ApiResult` exposes the HTTP **`StatusCode`** and **`Headers`** on *both* success
and failure — so this is the variant to use when you need the status code, rate-limit headers, or pagination
`Link` headers.

```csharp
using AIceptionInteractive.Core.Models;        // ApiResult<TResponse, TError>
using AIceptionInteractive.Core.ErrorResponse; // RawError
using AIceptionInteractive.Errors;             // {Operation}Error (Case A only)

// No try/catch — the *Result variant returns the outcome instead of throwing.
ApiResult<{ReturnType}, {Operation}Error> result =
    await client.{ApiGroup}.{Operation}Result(/* ... */, ct);

if (result.TryGetResponse(out var response))        // success
{
    Console.WriteLine($"OK {(int)result.StatusCode}");   // status + result.Headers available here
    // use response
}
else if (result.TryGetError(out var error))         // failure
{
    // 'error' is the same TError as the throwing path:
    //   Case A → typed {Operation}Error (use its TryGet* accessors, then TryGetRawError)
    //   Case B → RawError (read error.StatusCode / error.ReadAsString())
    Console.Error.WriteLine($"HTTP {(int)result.StatusCode}");
}
```

Other ways to consume it:

```csharp
// Pattern-match to a value (Action overload also exists):
var summary = result.Match(onSuccess: r => "ok", onFailure: e => "failed");

// Tuple deconstruction:
var (isSuccess, response, error) = result;

// Bridge back to the throwing behavior (returns the response or throws SdkException<{TError}>):
{ReturnType} value = result.GetResponseOrThrow();
```

## Notes

- Network/transport failures surface as the usual `HttpRequestException` / `TaskCanceledException`
  (e.g. timeout or cancellation) — handle those separately from `SdkException<TError>`.
- On an SDK with **multiple/composite auth schemes**, a call can also throw `AuthSchemeException`
  (under `AIceptionInteractive.Core.Exceptions`) — an auth *application* failure, not an API error — when the
  configured schemes can't be satisfied; it carries `IReadOnlyList<Exception> SchemeFailures` and is **not**
  an `SdkException<T>`, so a `catch (SdkException<...>)` won't match it — catch it separately. (A
  single-scheme SDK (e.g. Basic-only) won't hit this.)
- Retries for transient statuses happen automatically before an exception is thrown — but only for
  idempotent methods (`GET/HEAD/PUT/OPTIONS`) by default, so `POST`/`PATCH`/`DELETE` errors surface without
  retry. See **dotnet-configuration-resilience**.
