---
name: dotnet-calling-endpoints
description: Call API operations on an APIMatic-generated C#/.NET SDK — method signature and parameter-order conventions, building request-model records, string-enums, passing path/query/body params + a CancellationToken, reading the varied response shapes, and the optional non-throwing result-style call. Use whenever invoking an endpoint, building a request body, working out parameter order or named arguments, or consuming a response from any APIMatic .NET SDK — load it even after reading the method signature in the source, since the signature doesn't warn you that list/search ops mis-bind positionally and need named arguments.
---

# Calling endpoints on an APIMatic .NET SDK

Operations are **async methods** on the client. Most are **grouped under a controller property** and called
`client.{ApiGroup}.{Operation}(...)`; an operation that belongs to no group sits **directly on the
client**, called `client.{Operation}(...)`. Open the client class in the SDK source to see its controller
properties (and any direct operations), then open the relevant controller (or the client) for the
operation's exact signature. Operation names follow no fixed verb/resource pattern — take the real name from
the source.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{ApiGroup}`,
> `{Operation}`, `{Resource}`, `{EnumType}`) — replace it with the concrete identifier from the source.

## Method signature convention

Every endpoint method is `async` (returns a `Task`) and lays its parameters out in a fixed order:

```csharp
public Task<{ReturnType}> {Operation}(
    {non-defaulted params},            // no C# default value — listed first
    {defaulted params} = {default},    // have a C# default (e.g. = null, = 1d) — may be skipped
    CancellationToken ct = default);   // always last
```

- **Parameter order is fixed:** parameters **without a default value come first**, then parameters **with a
  default value**, then `CancellationToken ct = default` last (C# requires defaulted parameters to follow
  non-defaulted ones).
- **An optional parameter may still have no C# default.** Many nullable query params are generated without a
  `= null` default (e.g. `string? startDate`), so they sit in the leading group and must be passed
  explicitly (as `null`) in a positional call — which is why named arguments matter (see below).
- **The signature is the source of truth.** Whether a parameter is nullable, required, or defaulted — and
  whether the operation takes a body — varies per operation. Path params are typically
  non-nullable primitives listed first; query and body params may be required or optional. Read the actual
  signature in the SDK source (`public Task<...> {Operation}(...)`) for each operation.
- **Return type** varies by operation — see [Reading the response](#making-the-call-and-reading-the-response).
- Methods are **async-only** (no sync overloads) and **throw `SdkException<TError>`** on API errors — see
  `dotnet-error-handling`.

## Use named arguments for list/search endpoints

List/search operations can have **many** optional parameters in a **fixed positional order**, and many of
the leading nullable ones have **no default value** — so you cannot skip them positionally.

Call these methods with named arguments. A positional call reconstructed from memory or an incomplete view
of the signature mis-binds arguments (wrong order, or a missing non-defaulted arg before the first defaulted
one), so it either fails to compile or sends the wrong request; named arguments are order-independent and
avoid this. When copying:

- Copy parameter names and order from the C# method signature (`public Task<...> {Operation}(...)`), not
  from the internal `new Param("...", ...)` builder list inside the method body — that list is ordered
  differently and uses snake_case wire names.
- Copy each name verbatim from the signature; they are easy to misremember (singular vs plural, etc.).

```csharp
// Named args: order-independent; omitted optionals fall through to null / their defaults.
var response = await client.{ApiGroup}.{Operation}(
    status: {EnumType}.SomeConstant,
    someFilterId: 12345d,
    someFlag: true,
    page: 1d,
    perPage: 100d,
    ct: ct);
```

## Building request models

Request bodies are immutable `record`s built with object-initializer syntax (no builders). `required`
members must be set; optional ones are nullable and are omitted from the JSON when left null. The request
type is the type of the operation's `body` parameter — take its exact name from the method signature in the
SDK source:

```csharp
var body = new {RequestType}
{
    RequiredProp = value,   // 'required' members must be provided
    OptionalProp = value    // nullable; leave unset to omit from the request
};
```

A request body's **shape varies**: some are **flat** (scalar members directly on the record), others **nest
an inner resource record** (whose type you likewise read from the source). Open
the request model (under `Models/`) to see its real `required`/optional members. A nested body looks like:

```csharp
var body = new {RequestType}
{
    {Member} = new {InnerType}
    {
        RequiredProp = value,
        OptionalProp = value
    }
};
```

## Enums

Enums are type-safe string-enums (`StringEnum<T>`): use the static constants, or `FromValue(...)` for a
value not known at compile time. They convert implicitly to `string`.

```csharp
SomeProp = {EnumType}.SomeConstant;
SomeProp = {EnumType}.FromValue("server_provided_value");
```

## Union types, collections, and dates

Some properties are not plain scalars: polymorphic `OneOf`/`AnyOf` unions (built with **factory methods**,
not object-initializers, and read via `TryGet…`), `IReadOnlyList`/`IReadOnlyDictionary` collections, and
`DateTimeOffset` dates. If a request property or response field is one of these, see **dotnet-models** for
how to construct and read it.

## Making the call and reading the response

```csharp
var response = await client.{ApiGroup}.{Operation}(pathArg, queryArg: null, body: body, ct: ct);
```

> **Wrap the call in error handling — a non-2xx response *throws*, it is not signalled by the return value.**
> The bare `await` above shows only the happy path; on an API error the call throws `SdkException<TError>`.
> Before writing a real call, **load `dotnet-error-handling`** for how to wrap it — the `try/catch` shape and
> which `TError` to catch per operation — or use the non-throwing `{Operation}Result` variant (below).

**Each operation's return type varies** — the shape, and even the type's name, differ by operation. Read the
method's return type in the SDK source and handle it accordingly. The cases you'll meet:

- **An object that nests the resource** under a property (a record whose member holds the inner resource).
  Unwrap that member:
  ```csharp
  var resource = response.{Resource};      // the property holding the inner resource
  Console.WriteLine(resource?.SomeField);
  ```
- **The resource directly** — `Task<{Resource}>`: use it as-is, nothing to unwrap.
  ```csharp
  var resource = await client.{ApiGroup}.{Operation}(...);
  ```
- **An array** — `Task<IReadOnlyList<{ItemType}>>`: iterate it, unwrapping each item too if the items are
  themselves nesting objects.
- **An object that nests an array** — a record whose single member is an `IReadOnlyList<...>`. Read that
  member first, then iterate.
- **Nothing** — non-generic `Task`: no body; just `await` it.

Endpoints in the same family can differ — one nests the resource, another returns it directly — so let each
method's return type guide how you read it.

An operation may also expose an optional **`{Operation}Result`** sibling that returns
`ApiResult<TResponse, TError>` — the outcome (the response, or a typed/`RawError` error) instead of
throwing, with the HTTP status and headers available on both. It's optionally generated, so it may not
exist. See **dotnet-error-handling**.

## A response field is null even though you set it on the request

Don't assume a `null` field on the response means your own request was wrong or that the SDK dropped it —
some operations accept a request header (commonly under a name like `Prefer` or `return`) that tells the API
to send back a **reduced** representation regardless of what you sent, and a value can be defaulted to that
reduced form without you setting anything. Whether an operation has such a header, what it's called, and
what its default is are **per-operation, per-API** facts — check the operation's request builder in the SDK
source (and the API's own documentation) for a header like this before concluding a field is broken, and look
for a parameter or overload that asks for the full representation instead.

## Cancellation

Pass a `CancellationToken` to bound an individual call (independent of the client-wide retry timeout):

```csharp
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));
var response = await client.{ApiGroup}.{Operation}(/* ... */, ct: cts.Token);
```

## Worked example — a list/GET call

```csharp
// Signature (illustrative):
//   Task<IReadOnlyList<{ItemType}>> {Operation}(
//       {EnumType}? filter, string? startDate, string? q,
//       double? page = 1d, double? perPage = 20d, CancellationToken ct = default);

var results = await client.{ApiGroup}.{Operation}(
    filter: {EnumType}.SomeConstant,
    startDate: null,
    q: "search text",
    page: 1d,
    perPage: 20d,
    ct: ct);

foreach (var item in results)
{
    var resource = item.{Resource};
    Console.WriteLine(resource?.Id);
}
```

> This operation returns an **array** directly, so you iterate and unwrap each item. Other operations nest
> the array inside an object (a record with one list member) — there you read that member first
> (`foreach (var item in response.{Items})`), then iterate. Check the method's return type.

## Finding the right method in the SDK source

Read these from the SDK **source** files (clone the SDK's source repo to a temp dir first if you haven't,
and delete it when done), not by decompiling or reflecting over the installed package — the source has the
XML-doc comments and the internal `new Param(...)` builder list a compiled assembly drops, and reading a
`.cs` file is faster than running reflection.

- Most operations are grouped on **controller properties** of the client (each defined in
  `Api/{ApiGroup}.cs`); an operation in no group is defined **directly on the client class**. Find an
  operation by searching the controller files (e.g. for `public Task` across `Api/`) and the client class.
- Each method's XML-doc comment documents its parameters and the endpoint path; read it to confirm which
  params are required and what the body/return types are.
- Request/response/enum types live under `Models/` (and `Models/Enums/`, with unions under `Models/AnyOf/`
  and `Models/OneOf/`); error types under `Errors/`.

## Next

- Errors and status codes → **dotnet-error-handling**
- Pagination, retries, timeouts → **dotnet-configuration-resilience**
- Union types, collections, dates, enums → **dotnet-models**
