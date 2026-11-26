---
name: dotnet-error-handling
description: Load before writing any try/catch around a call on an APIMatic .NET SDK in C#, an exception-translation layer or error middleware — which exception types reach your catch, the SdkException family, typed error bodies versus RawError, reading status codes and error bodies, and the non-throwing ApiResult variant.
---

# Error handling for an APIMatic .NET SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Operation}`,
> `{ApiGroup}`, `{RootNamespace}`) — replace it with the concrete identifier from the source.
>
> **One skill, every error shape.** This file covers every error shape the SDK can have. Which ones
> YOUR SDK uses — which case each operation is, whether typed bodies carry a status, which `TryGet…`
> accessors exist — is on the operation's map row or the contract sheet: **apply only the guidance
> that matches**. An API can be all Case B, nearly all Case A, or a mix.

Endpoint methods **throw on non-success responses** by default (for a non-throwing alternative, see the
**`ApiResult`** section below). The thrown type is always the generic `ApiException<TError>` — but `TError`
comes in **two shapes**, depending on the operation:

- **Typed model (Case A)** — a per-operation `{Operation}Error` (subclass of `ApiError`) exists under
  `Errors/` for the operation; `TError` is that type. Dispatch on it with its exhaustive `Match` (one
  `on{Arm}` per declared body plus a required `otherwise`), or read one body with a `TryGet*` accessor.
- **`RawError` (Case B)** — when the operation has no `{Operation}Error` type, `TError` is `RawError`
  *directly*. `RawError` is **not** an `ApiError` and has **no** `TryGet*` / `TryGetRawError` accessors; you
  read the status and body straight off `ex.Error`.

### The `SdkException` family

`ApiException<TError>` is one leaf of a small hierarchy. **Everything the SDK raises for a call derives from
the abstract `SdkException`**, and every level adds the members its meaning needs:

```
SdkException (abstract)                 Method, RequestUri          — the call that failed; every Message starts with it
├─ ApiException (abstract)              StatusCode, Headers, ContentType   — the server answered
│  ├─ ApiException<TError> (sealed)     Error                       — an error status; TError is the operation's error type
│  └─ ResponseDeserializationException  TargetType                  — a body (success OR error) did not match the declared type
├─ SdkConnectionException               —                           — no usable response: could not send, or could not read the body
│  └─ SdkTimeoutException (sealed)      Timeout                     — an attempt, the transport, or an SSE stream went silent
└─ AuthSchemeException (sealed)         SchemeFailures              — a required credential is not configured, a provider returned nothing, or a credential could not be applied
```

Three rules follow from the shape, and the rest of this skill applies them:

- **Catch specific to general.** `ApiException` means *the server answered* (you have a status);
  `SdkConnectionException` means *it did not*; `SdkException` is *everything the SDK raises*. A ladder that
  handles only `ApiException<TError>` is incomplete — see *Connection failures* below.
- **The raw cause is always `InnerException`** — the `JsonException`, the `HttpRequestException`, the
  per-attempt timeout's rejection, the token endpoint's own failure — never the thing you catch.
- **Your own cancellation is never wrapped.** An `OperationCanceledException` from a token *you* cancelled
  passes through untouched; a `catch (SdkException)` does not see it.

Every message names the call with its query stripped: `"GET https://host/path returned 400 (BadRequest)."`,
`"{call} could not be sent: …"`,
`"{call} could not read the response body: …"`, `"{call} received no response within 100 s."`,
`"{call} returned a body that could not be deserialized into {Type}."`. A log line therefore identifies the
failing call without a typed catch.

`Core.*` is **not** one namespace — don't assume `ApiError` sits with the exceptions:

| namespace | holds |
| --- | --- |
| `{RootNamespace}.Core.Exceptions` | the whole `SdkException` family, `ApiException<TError>` included |
| `{RootNamespace}.Core.ErrorResponse` | `ApiError` and `RawError` (which the inherited `TryGetRawError` hands back) |
| `{RootNamespace}.Errors` | the per-operation `{Operation}Error` models (e.g. `CreateWidgetError`) |

A typed body's type lives wherever its schema kind puts it — a model in `{RootNamespace}.Models`, a union in
`.Models.OneOf` / `.Models.AnyOf`, an enum in `.Models.Enums`, a binary body in `.Core.Models`
(`ErrorByteContent`), a map or dynamic body in the BCL (`IReadOnlyDictionary<string, JsonElement>` needs
`System.Collections.Generic` and `System.Text.Json`); a scalar body (`TryGetString`, `TryGetLong`) needs
nothing. Import what an `out` type you spell out names — `out var` needs none, which is why the template
below imports three namespaces.

## Catch the exception

`ApiException<TError>` adds a single property of its own — `public required TError Error { get; init; }`,
the parsed error model — on top of what it inherits: `StatusCode`, `Headers` and `ContentType` from
`ApiException`, and `Method` and `RequestUri` from `SdkException`. So the HTTP status is **always** on the
exception, in both cases; what `Error` *is* depends on the case (below).

**Read the error directly off the strongly-typed `ApiException<TError>` — never use reflection.** The
concrete `TError` is known right there at the `catch` (Case A: the typed `{Operation}Error`; Case B:
`RawError`), so `ex.Error` and the accessors on it are reachable directly. Do **not** dig the body out via
reflection (`ex.GetType().GetProperty("Error")`, then discovering and `Invoke`-ing the `TryGet*` methods):
it compiles, but it is brittle glue that reinvents what a per-operation typed `catch` gives you for free —
the concrete type is already known, so no runtime discovery is needed. Catch the concrete
`ApiException<{Operation}Error>` (or `ApiException<RawError>`) and read `ex.Error` straight off it.

### Which `TError` does an endpoint throw?

Answer this from the contract sheet (grounded from the SDK map/source): the
operation's row names the error case (typed `{Operation}Error` vs `RawError`) and, for Case A, lists the
exact `TryGet…` accessors with the HTTP status each maps to — no need to grep a clone or open the error
class at all.

In the source itself the same fact lives in the method's XML doc `<exception>` line — on hover / in
IntelliSense, and visible when you open the file. Where a doc block is present it always carries exactly one
such line, but **not every generated operation has a doc block at all**, so its absence tells you nothing
about the error case; fall back to the contract sheet:

```csharp
/// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
```

`ApiException{TError}` is boilerplate (identical on every method — `{TError}` is the doc-comment's generic
placeholder, **not** the type you catch). The type named after **`of <see cref="…"/>`** is the actual
`TError`:

- `… of <see cref="{Operation}Error"/> …` → catch `ApiException<{Operation}Error>` (Case A).
- `… of <see cref="RawError"/> …` → catch `ApiException<RawError>` (Case B).

Equivalently, when grounding from the SDK source (the SDK source the getting-started skill locates): a
`{Operation}Error` type exists under `Errors/` **only** for Case-A operations; if there is no
`{Operation}Error`, the operation throws `ApiException<RawError>`. Guessing wrong is only *sometimes* a compile-time error, and the direction that looks safe is the
dangerous one. `ApiException<ListWidgetsError>` fails to compile when no such type exists — that guess the
compiler does catch. But every `{Operation}Error` in the SDK *is* a real type, so naming the **wrong one**
— a neighbouring operation's error type — compiles cleanly and then **never matches at runtime**, because
`ApiException<A>` and `ApiException<B>` are unrelated closed generics. The exception sails past your
typed `catch` — and lands in a `catch (ApiException ex)` if you have one, where `ex.StatusCode` is still
readable but the typed body is not. Take the case from the contract sheet; the compiler is not a check on
this, and the non-generic base is a safety net, not a substitute.

### Case A — operation has a typed `{Operation}Error` model

Handling a Case-A error is a **two-step, source-driven** process — you cannot write the `catch` block from
memory:

1. **List *every* `TryGet...` accessor the operation's `{Operation}Error` declares.** The operation's map
   row already lists them (with the HTTP status each maps to); take them from the contract sheet.
   They are the `public bool TryGet...([NotNullWhen(true)] out ...? value)` methods, a bare `out` for a
   value-type body such as `long`, on the `{Operation}Error` type (grounded
   from the SDK map/source). These accessors are generated per operation — one per distinct error body the operation maps —
   and their names embed the body type. Expect a mix of:
   - **typed-body accessors** named after a model or scalar — `TryGetValidationErrors`, `TryGetProblemDetails`,
     `TryGetString`, `TryGetLong`, …;
   - **status-specific `RawError` accessors** — e.g. `TryGetNoContent([NotNullWhen(true)] out RawError? value)` — the names on your operation come from its map row;
   - the inherited **`TryGetRawError([NotNullWhen(true)] out RawError? error)`**, which every `{Operation}Error` exposes.
2. **Dispatch through `ex.Error.Match(...)`, passing every arm by name.** `Match` has one `on{Arm}`
   parameter per `TryGet{Arm}` accessor (same stem, same value) plus a required `otherwise` that receives
   the `RawError` of a status the operation does not declare — the compiler refuses a call that leaves an
   arm out, so no response is silently dropped. Pass the arms by name: they are positional, in the
   ordinal order of their names, and a regenerated SDK whose operation gains or loses an error body
   changes the signature (a source and binary break for a positional call site). Reach for a single
   `TryGet{Arm}` only when one body is all you need, and for `TryGetRawError` only as the accessor
   behind `otherwise`: it is **not** a catch-all — a status with a typed or status-specific accessor
   (a `422` validation payload, `TryGetNoContent`) leaves it **false**.

```csharp
using {RootNamespace}.Core.Exceptions;     // ApiException<TError>
using {RootNamespace}.Core.ErrorResponse;  // ApiError, RawError
using {RootNamespace}.Errors;              // {Operation}Error types, e.g. CreateWidgetError

try
{
    var response = await client.{ApiGroup}.{Operation}(request, cancellationToken: ct);
    // use response
}
catch (ApiException<{Operation}Error> ex)
{
    // ex.StatusCode / ex.Headers are always here; the body is behind the arms below.
    // ONE named arm per public TryGet* declared on {Operation}Error — copy the exact names from the class
    // under Errors/ (on{Body} pairs with TryGet{Body}). The on{...} names below are PLACEHOLDERS; yours are
    // named after this operation's responses (a typed body may be a model OR a scalar such as onString/onLong).
    ex.Error.Match(
        on{TypedBody1}: body1 => { /* inspect body1 — e.g. onValidationErrors */ },
        on{TypedBody2}: body2 => { /* inspect body2 — e.g. onProblemDetails */ },
        on{Status}: statusRaw => Console.Error.WriteLine($"HTTP {(int)statusRaw.StatusCode}"),   // e.g. onNoContent
        // ... one named arm for EVERY remaining TryGet* the class declares — the compiler enforces it ...
        otherwise: raw => Console.Error.WriteLine($"HTTP {(int)raw.StatusCode}: {raw.ReadAsString()}"));   // undeclared status
}
```

**Don't factor error-reading into a shared helper typed as `ApiError`.** The typed `TryGet*` accessors live
on the concrete `{Operation}Error`, *not* on the `ApiError` base — which exposes only `TryGetRawError`. A
helper like `string Describe(ApiError e)` can therefore reach **only** `TryGetRawError`, so for any status
that has a typed body it finds nothing and falls back to `e.ToString()` — a bare type name
(`{RootNamespace}.Errors.{Operation}Error`), not the actual message. Read the typed accessors **inside the
per-operation `catch` block**, where the concrete `{Operation}Error` type is known; reserve shared code for
the `RawError`/transport fallback only.

### Case B — operation throws `ApiException<RawError>`

For operations with no `{Operation}Error` type (none under `Errors/`), `ex.Error` **is** a `RawError` —
there are no `TryGet*` accessors and no `TryGetRawError`; read the status and body straight off it:

```csharp
using {RootNamespace}.Core.Exceptions;     // ApiException<TError>
using {RootNamespace}.Core.ErrorResponse;  // RawError

try
{
    var response = await client.{ApiGroup}.{Operation}(request, cancellationToken: ct);
    // use response
}
catch (ApiException<RawError> ex)
{
    RawError raw = ex.Error;                          // the error model IS RawError here
    Console.Error.WriteLine($"HTTP {(int)ex.StatusCode}");   // same value as raw.StatusCode
    Console.Error.WriteLine(raw.ReadAsString());      // or raw.ReadAsJson<MyDto>()
}
```

Case B needs no `.Errors` using. `RawError`'s public members are `StatusCode`,
`ReadAsBytes`/`ReadAsString`/`ReadAsJson<T>`; note
`ReadAsJson<T>()` **throws `JsonException`** when the body isn't valid JSON — and a `RawError` body may not be
(a gateway or proxy can answer with HTML or plain text), so prefer `ReadAsString()` unless you know it's JSON.

## Result-style alternative — `ApiResult<TResponse, TError>` (no throwing)

An operation may have a **sibling method** named `{Operation}Result` (next to the throwing `{Operation}`),
returning `Task<ApiResult<TResponse, {TError}>>`; it **does not throw** on a non-success status — the error
is carried in the returned value instead. (`{TError}` is the same two-case shape as above: a typed
`{Operation}Error`, or `RawError`.) `ApiResult<TResponse, TError>` is a public `readonly struct` under
`{RootNamespace}.Core.Models`. If the controller has no `{Operation}Result`, use the throwing method with
`try/catch`.

Unlike the throwing path, `ApiResult` exposes the HTTP **`StatusCode`** and **`Headers`** on *both* success
and failure — so this is the variant to use when you need a 2xx's status code, rate-limit headers, or
pagination `Link` headers. The other way to read them on the success path is an `SdkHook.OnResponse` hook
(see **dotnet-configuration-resilience** § Hooks); on the error path every `ApiException` already carries
`StatusCode` and `Headers`.

```csharp
using {RootNamespace}.Core.Models;        // ApiResult<TResponse, TError>
using {RootNamespace}.Core.ErrorResponse; // RawError
using {RootNamespace}.Errors;             // {Operation}Error (Case A only)

// No try/catch — the *Result variant returns the outcome instead of throwing.
ApiResult<{ReturnType}, {Operation}Error> result =
    await client.{ApiGroup}.{Operation}Result(request, cancellationToken: ct);

if (result.TryGetResponse(out var response))        // success
{
    Console.WriteLine($"OK {(int)result.StatusCode}");   // status + result.Headers available here
    // use response
}
else if (result.TryGetError(out var error))         // failure
{
    // 'error' is the same TError as the throwing path:
    //   Case A → typed {Operation}Error (dispatch with error.Match(on{Arm}: …, otherwise: …), or read one arm with TryGet*)
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

// Bridge back to the throwing behavior (returns the response or throws ApiException<{TError}>):
{ReturnType} value = result.GetResponseOrThrow();
```

## Connection failures, and guarding every call

The `ApiException<TError>` catches above cover API errors only. No usable response — host unreachable, DNS
failure, dropped connection, timeout — throws **`SdkConnectionException`** or its leaf **`SdkTimeoutException`**
(`Timeout` says which window), with the raw cause in `InnerException`. A `catch (ApiException<...>)` does
not match them; if it is your only guard, a connection failure escapes and takes down whatever was running
the call.

**A file download is the exception:** a drop while you read the returned `BinaryContent` throws a raw
`IOException` from your read, not `SdkConnectionException`.

**Convert connection failures to your own error type in one place.** If you wrap the SDK behind
your own abstraction (a client interface, a service, a repository), catch connection failures at
that boundary and rethrow the same error type you already use for API errors — so the rest of the
code has a single failure type to handle instead of two unrelated ones. Order the ladder as the
hierarchy reads — leaves first, `SdkException` last:

```csharp
// Keep the arms the operations you call actually need — each operation's map row names its case.
catch (ApiException<{Operation}Error> ex)        // a Case A operation — typed error; ex.StatusCode is on it
{
    // Carry the body's identity fields (the provider's own error code or name, any correlation
    // id) — the typed body is the only thing that carries them, and it does not outlive this
    // catch. Dispatch through Match so every declared body is handled and an undeclared status lands
    // in otherwise; carry ex.StatusCode alongside whichever arm fires.
    throw ex.Error.Match(
        on{Body}: e => new {ProviderException}(e.{MessageField} /* + identity fields — names from the model's map row */, ex.StatusCode, ex),
        otherwise: raw => new {ProviderException}($"HTTP {(int)ex.StatusCode}", ex.StatusCode, ex));
}
catch (ApiException<RawError> ex)                // a Case B operation — no typed body, just the status
{
    // Carry the status. The boundary ladder below is the only place it can be read back, and a
    // status dropped here cannot be recovered anywhere downstream.
    throw new {ProviderException}("...", ex.StatusCode, ex);
}
catch (ResponseDeserializationException ex)      // the server answered, the body did not match — see below
{
    throw new {ProviderException}("The provider returned a response that could not be processed.", ex.StatusCode, ex);
}
// On a WRITE, the two catches below mean the outcome is unknown: the write may still have landed. Settle it
// at the write's call site, where its reference is in scope — see "A write whose outcome is unknown" in
// dotnet-configuration-resilience.
catch (SdkTimeoutException ex)                   // an attempt, the transport, or a stream went silent
{
    throw new {ProviderException}($"provider did not answer within {ex.Timeout}", ex);   // no status
}
catch (SdkConnectionException ex)                // could not send / could not read the body (not a file you read later)
{
    throw new {ProviderException}("provider unreachable", ex);   // no status — nothing usable answered
}
catch (AuthSchemeException ex)                   // OUR credential is missing, its provider returned nothing, or it could not be applied — see Notes
{
    throw new {ProviderException}("provider credentials missing or rejected", ex);
}
// Do NOT add `catch (OperationCanceledException)`: the caller's own cancellation is not a provider
// failure and the SDK never wraps it — let it propagate.
```

**Guard every call site, not just the ones that change data.** It is easy to wrap the calls that
create or modify something and overlook the calls that only read — especially reads that run
automatically on a routine path (loading a screen, a scheduled job, a startup or health check). A
connection failure during a read fails just as hard as one during a write. Wherever the SDK (or
your wrapper) is called, the caller must catch the failure and degrade in a way that fits — a
fallback, a retry, a clear message — rather than letting it escape. A call left unguarded next to
one that is guarded is the one that breaks.

## Presenting failures at your boundary — coherent, distinct, leak-free

The catches above decide what you catch; this decides what the caller (an HTTP response, a UI
layer, another service) sees. Get this wrong and every failure looks the same, or an internal
type name ends up on the wire. Three rules, applied at the one boundary where you convert SDK
failures into your own error type:

**Handle each failure kind the same way everywhere.** Pick one mapping from failure kind →
outcome and apply the identical catch ladder at every call site — same order, same conversion.
When the same kind of failure (a validation rejection, say) becomes a different result on a
different operation, callers can't reason about it. One shared ladder, not per-call improvisation.

**Keep distinct failures distinct.** Your error type needs to carry something that separates "you sent
something invalid" from "the provider is down":

- **Every `ApiException` carries `StatusCode`** — Case A, Case B and `ResponseDeserializationException`
  alike — so a provider **4xx** the caller can act on can surface as that same **4xx**, and transport
  failures and unknowns as **5xx**.
- **A Case A body usually discriminates better** — its **identity fields**: the provider's error code or
  name, fine-grained issue codes, a correlation id (whether each is `required` is on the model's map row).
  One accessor can cover several documented statuses, so carry both the body fields and `ex.StatusCode`.
  Accessor names embed the body type, so a guessed one fails to compile (`CS1061`) — take each from the
  operation's map row.

Never collapse every failure into one blanket status (e.g. 502 for everything).

One ladder, in the single place where your error type becomes a caller-facing status. This is where
the discriminator you carried gets read back — a ladder with **no branch reading it** is
incomplete, and is the most common way this rule is lost. The status-keyed form (Case B):

```csharp
static (int Status, string Message) Map(Exception ex) => ex switch
{
    // OUR credentials or OUR quota — the caller did nothing wrong and cannot fix it.
    {ProviderException} p when (int?)p.StatusCode is 401 or 403 => (502, "Provider unavailable."),
    {ProviderException} p when (int?)p.StatusCode is 429        => (503, "Temporarily unavailable."),

    // The provider rejected THE CALLER'S request — hand back the same status so they can act on it.
    {ProviderException} p when (int?)p.StatusCode is >= 400 and < 500 => ((int)p.StatusCode!, p.Message),

    // Transport, timeout, provider 5xx — no meaningful caller status.
    {ProviderException} p => (502, p.Message),

    _ => (500, "Unexpected error."),
};
```

When the discriminator is a body field rather than a status, the **same ladder keys on that
field** — the same your-fault / caller's-fault / unknown arms, different `when` clauses (illustrative — your provider's codes may be strings or
ints; use the ones it documents):

```csharp
    // OUR credentials or OUR quota — the caller did nothing wrong and cannot fix it.
    {ProviderException} p when p.Code is "AUTH_FAILURE" or "RATE_LIMITED" => (502, "Provider unavailable."),
    // The provider rejected THE CALLER'S request — they can act on it.
    {ProviderException} p when p.Code is "INVALID_REQUEST"                => (400, p.Message),
    {ProviderException} p when p.Code is "NOT_FOUND"                      => (404, p.Message),
    // A code you have not mapped yet — an unknown, not a caller error.
    {ProviderException} p                                                 => (502, p.Message),
```

**Not every provider failure is the caller's fault.** An authentication or authorization failure
(`401`/`403`, or the equivalent body code) means *your* credentials are wrong, and a rate-limit
failure (`429`, or its code) means *your* quota is spent — passing either straight through tells
the caller they are unauthenticated or throttled when they are neither. Those belong in the 5xx
bucket; validation, conflict and not-found are the caller's to fix. And keep the default arm at
5xx: a status or code you have not mapped is an unknown, not a caller error — the provider can add
one without warning you.

**A body that does not match the model is a third failure kind — catch it and sanitize.** The SDK
throws **`ResponseDeserializationException`** — an `ApiException` (so `StatusCode`, `Headers` and
`ContentType` are on it) that names the `TargetType` it was building, with the `JsonException` as
`InnerException`. It is **not** an `ApiException<TError>`, so a ladder with only typed catches lets it
through, and a generic handler that writes `exception.Message` leaks the SDK type name and the call URL.
It fires on a success body (a `OneOf` or `AnyOf` response type is the exception: its Unknown slot takes a
body no variant accepts, see `dotnet-models`), and on an error body that doesn't fit the operation's
`{Operation}Error` —
then your typed `catch` never fires, and there is no fallback to `RawError`. Catch it at the same boundary
with a caller-safe message, and **read `ex.StatusCode` to tell the two cases apart**: an unreadable
**success** body is genuinely unknown (5xx); an unreadable **error** body means the provider rejected the
request and only the *detail* was lost — keep that status, or a retrying caller keeps retrying something
that can never succeed:

    catch (ResponseDeserializationException ex)
    {
        // 2xx  → the outcome is unknown: the call may have succeeded and we cannot read the result.
        // else → the provider rejected the request; only the error DETAIL was lost. Keep the status.
        throw new {ProviderException}("The provider returned a response that could not be processed.", ex.StatusCode, ex);
    }

**Never map a parse failure onto a domain *absence*.** "I could not read the answer" is not "the
provider said no." It is tempting on a lookup — an unreadable body and a genuine miss both leave you
without a record — but they are different facts and only one of them is a *fact*. Where a lookup
gates a create, that conversion turns a corrupt response into a spurious create; more generally it
produces a confident wrong answer, which is worse than an error. If the operation's miss really is
signalled by an empty body, match on *empty*, not on *unparseable*.

Whatever converts SDK failures into your own type carries only a caller-safe message — never an SDK or
framework exception's `ToString()` or `Message` on the wire.

**A successful reply can still hand you `null`.** An omitted optional member reads `null`,
and so does a JSON `null` on a required string, list, model or enum. An absent required member, or `null` on a
number, `bool` or `Guid`, throws `ResponseDeserializationException`. Check the members you depend on after the
call, and every object you reach them through (`x.Y` before `x.Y.Z`).

## Notes

- A call can also throw `AuthSchemeException` (under `{RootNamespace}.Core.Exceptions`) — a required
  credential is not *configured*, or a credential provider *returned nothing*, so the call fails before
  anything is sent, naming the scheme and carrying an empty `SchemeFailures`; or a credential could not be
  *applied*. None of these is an API error. It is an
  `SdkException` (so it names the API call you made) but **not** an `ApiException`, so the typed catches
  above won't match it — give it its own arm, as the ladder does. It carries
  `IReadOnlyList<Exception> SchemeFailures`: with a **single** failing scheme,
  that failure is also the `InnerException` directly and the list's only entry; with **several** (an SDK
  whose API composes schemes with OR and none succeeded), `InnerException` is an `AggregateException` of
  them. The classic cause is an OAuth2 token endpoint refusing the client credentials: the token endpoint's
  own `ApiException<RawError>` (pointing at the token URL, with its status) is the **cause** inside the
  `AuthSchemeException`, not what your `catch` sees — so log `InnerException` to learn *why* auth failed.
  An `AuthSchemeException` is never wrapped in another.
- Retries run before anything is thrown; a call that sends a file is never retried, and with the defaults
  neither is a `POST`/`PATCH`/`DELETE` — except that an OAuth2 `401` is re-sent once on any verb, a file
  upload excepted. A transport failure on a write leaves its outcome *unknown* — tell the
  caller that, not "it failed". See **dotnet-configuration-resilience**.
