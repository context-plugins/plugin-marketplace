---
name: dotnet-calling-endpoints
description: Calling operations on an APIMatic-generated .NET SDK in C# — finding the controller that owns an operation, required vs optional parameters, request and response envelope shapes, async usage, and cancellation. Load before writing the first call to an SDK operation, or when an operation's shape or return type is unclear.
---

# Calling endpoints on an APIMatic .NET SDK

Operations are **async methods** on the client. Most are **grouped under a controller property** and called
`client.{ApiGroup}.{Operation}(...)`; an operation that belongs to no group sits **directly on the
client**, called `client.{Operation}(...)`. The controller property, the exact operation name, and its
signature come from the contract sheet (grounded from the SDK map/source) — operation
names follow no fixed verb/resource pattern, so take the real name from the sheet, never from memory.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{ApiGroup}`,
> `{Operation}`, `{Resource}`, `{EnumType}`) — replace it with the concrete identifier from the source.

## Method signature convention

Every endpoint method is `async` (returns a `Task`) and lays its parameters out in a fixed order:

```csharp
public Task<{ReturnType}> {Operation}(
    {non-defaulted params},                  // no C# default value — listed first
    {defaulted params} = {default},          // have a C# default (e.g. = null, = 1d) — may be skipped
    RequestOptions? requestOptions = null,   // on EVERY operation — see below
    CancellationToken ct = default);         // always last
```

- **Parameter order is fixed:** parameters **without a default value come first**, then parameters **with a
  default value**, then `RequestOptions? requestOptions = null`, then `CancellationToken ct = default` last
  (C# requires defaulted parameters to follow non-defaulted ones).
- **`requestOptions` is on every generated operation**, between the last defaulted parameter and `ct`. It
  is a `{RootNamespace}.Core.RequestOptions` with two properties — `LogLevel?`, a per-call logging
  override, and `Hooks`, a per-call `SdkHook` list appended after the client-wide `options.Hooks`
  (both in **dotnet-configuration-resilience**). You will rarely set it, but you must **count** it: a
  positional call written from a signature that leaves it out puts your `CancellationToken` where a
  `RequestOptions?` is expected, and the call fails to compile with
  `CS1503: Argument N: cannot convert from 'System.Threading.CancellationToken' to
  '{RootNamespace}.Core.RequestOptions?'`. Pass `ct:` by name and the problem cannot arise.
- **An optional parameter may still have no C# default.** Many nullable query params are generated without a
  `= null` default (e.g. `string? startDate`), so they sit in the leading group and must be passed
  explicitly (as `null`) in a positional call — which is why named arguments matter (see below).
- **The contract sheet is the source of truth for the signature.** Whether a parameter is nullable,
  required, or defaulted — and whether the operation takes a body — varies per operation. Path params are
  typically non-nullable primitives listed first; query and body params may be required or optional. Take
  each operation's exact signature from the contract sheet (grounded from the SDK map/source), not from memory.
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
    page: 1,          // int? or double? per API — take the type from the contract sheet
    perPage: 100,
    ct: ct);
```

## Building request models

**Only a JSON-bodied operation has a `body` parameter.** Where the API declares a
`application/x-www-form-urlencoded` request, the generator emits the fields as *individual method
parameters* and assembles the form itself — there is no request record to construct and no `body` argument
to pass. In an API built that way this is the majority shape, not an exception. The contract sheet says
which you are looking at; the signature settles it.

For the JSON case: request bodies are immutable `record`s built with object-initializer syntax (no
builders). `required` members must be set; optional ones are nullable and are omitted from the JSON when
left null. The request type is the type of the operation's `body` parameter — take its exact name from the
contract sheet (grounded from the SDK map/source):

```csharp
var body = new {RequestType}
{
    RequiredProp = value,   // 'required' members must be provided
    OptionalProp = value    // nullable; leave unset to omit from the request
};
```

A request body's **shape varies**: some are **flat** (scalar members directly on the record), others **nest
an inner resource record** (whose type the sheet's request-model column likewise names). The contract sheet
lists each model's real `required`/optional members with their wire names. A nested body looks like:

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

Enums are type-safe string- **or int-**enums (`StringEnum<T>` / `IntEnum<T>`), not C# enums — use the
static constants, or `FromValue(...)` for a value not known at compile time — where the enum exposes it;
some do not, and `dotnet-models` says which to check. See **dotnet-models** for
read-back semantics (they convert to their underlying value; `==` compares by value; guard unknowns).

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

**Each operation's return type varies** — the shape, and even the type's name, differ by operation. The
contract sheet's response-envelope column names the return type and the inner fields to read (grounded from the SDK map/source); handle it accordingly. The cases you'll meet:

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

## Cancellation

Every operation takes a `CancellationToken` as its last argument, passed as `ct:`, with
`RequestOptions? requestOptions = null` immediately before it — so `ct` is last, never second-to-last. To bound an individual call with a
timeout, use the per-request cancellation pattern in **dotnet-configuration-resilience** (it owns
timeouts).

## Worked example — a list/GET call

```csharp
// Signature (illustrative):
//   Task<IReadOnlyList<{ItemType}>> {Operation}(
//       {EnumType}? filter, string? startDate, string? q,
//       {Num}? page = {p}, {Num}? perPage = {n},        // {Num} is int? or double? PER API — check the sheet
//       RequestOptions? requestOptions = null, CancellationToken ct = default);

var results = await client.{ApiGroup}.{Operation}(
    filter: {EnumType}.SomeConstant,
    startDate: null,
    q: "search text",
    page: 1,           // literal must match the parameter's type — a `1d` against an `int?` is CS1503
    perPage: 20,
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

## Next

- Errors and status codes → **dotnet-error-handling**
- Pagination, retries, timeouts → **dotnet-configuration-resilience**
- Union types, collections, dates, enums → **dotnet-models**
