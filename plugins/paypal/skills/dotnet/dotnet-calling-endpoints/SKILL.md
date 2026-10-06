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

Every endpoint method is `async` (returns a `Task`) and takes at most three parameters, in a fixed order:

```csharp
public Task<{ReturnType}> {Operation}(
    {Operation}Request request,                        // every input — absent when the operation takes none
    RequestOptions? requestOptions = null,             // on EVERY operation — see below
    CancellationToken cancellationToken = default);    // always last
```

- **Every input travels on one request record.** Path, query and header parameters, the body, and the
  fields of a form all become properties of `{Operation}Request`. There are no flat arguments, so there is
  no parameter order to get wrong: you build the record with an object initializer and set members by name.
- **`request` has no default.** An operation that takes input always needs a record, even when every member
  is optional — pass `new {Operation}Request()`. An operation that takes **no** input has no `request`
  parameter at all.
- **The record lives in `Requests/`**, in the namespace `{RootNamespace}.Requests` for an operation on the
  client and `{RootNamespace}.Requests.{ApiGroup}` for one on a controller. An operation with several
  tags is filed under the first tag it declares, so its namespace can name a different controller from
  the one you call it through. Its name is normally `{Operation}Request`; where a model already owns that
  name it is `{Operation}OperationRequest`. Take the real name and file from the operation's
  **Type sources** table — never assume it.
- **`requestOptions` is on every generated operation**, between `request` and `cancellationToken`. It
  is a `{RootNamespace}.Core.RequestOptions` with two properties — `LogLevel?`, a per-call logging
  override, and `Hooks`, a per-call `SdkHook` list appended after the client-wide `options.Hooks`
  (both in **dotnet-configuration-resilience**). You will rarely set it, but you must **count** it: a
  positional call that skips it puts your `CancellationToken` where a `RequestOptions?` is expected, and the
  call fails to compile with `CS1503: Argument N: cannot convert from 'System.Threading.CancellationToken'
  to '{RootNamespace}.Core.RequestOptions?'`. Pass `cancellationToken:` by name and the problem cannot arise.
- **The contract sheet is the source of truth for the record.** Which members are `required`, which are
  nullable, which carry a default — and whether there is a `Body` — varies per operation. Take each
  operation's record from the contract sheet (grounded from the SDK map/source), not from memory.
- **Return type** varies by operation — see [Reading the response](#making-the-call-and-reading-the-response).
- Methods are **async-only** (no sync overloads) and **throw `ApiException<TError>`** on API errors — one leaf
  of the SDK's `SdkException` family, which also covers connection failures and timeouts — see
  `dotnet-error-handling`.

## Building the request record

The record's source file is the parameter list. Each property is one of four shapes, and the shape tells you
what you owe it:

| Property | Meaning | You |
|---|---|---|
| `public required T X { get; init; }` | required, no spec default | **must** set it — the compiler enforces this |
| `public T X { get; init; } = value;` | the spec declares a default | set it only to override; leaving it sends the default |
| `public T? X { get; init; }` | optional, no default | leave it unset to omit it from the request |
| `public T X { get; } = value;` | the spec fixes the value (`const`) | cannot set it — it is sent as declared |

```csharp
var response = await client.{ApiGroup}.{Operation}(
    new {Operation}Request
    {
        Status = {EnumType}.SomeConstant,
        SomeFilterId = 12345d,
        Page = 1,          // int or double per API — take the type from the record
        PerPage = 100
    },
    cancellationToken: ct);
```

- **Property names are PascalCase C# names, not wire names.** `per_page` on the wire is `PerPage` on the
  record. The wire keys appear only inside the generated method body, as `new Param("per_page", request.PerPage)`
  — read names off the record, never off that list.
- **The record is never serialized**, so it carries no `[JsonPropertyName]`. Its members may carry constraint
  attributes (`[Minimum(0)]`, `[MaxLength(256)]`); they document the API's limits and nothing in the SDK
  enforces them before the call.
- **A JSON, plain-text or binary body is always the member `Body`** (`Body_` in the rare API that also has a parameter
  literally named `body`). A `application/x-www-form-urlencoded` or multipart form has **no** `Body`: each
  form field is its own property on the record, and the generator assembles the form itself.

## Building request models

**A form-bodied operation has no `Body` member.** Where the API declares a
`application/x-www-form-urlencoded` or multipart request, the generator emits the fields as *individual
members of the request record* and assembles the form itself — there is no body model to construct and no
`Body` to set.
In an API built that way this is the majority shape, not an exception. The contract sheet says
which you are looking at; the record settles it.

For the JSON case: request bodies are immutable `record`s built with object-initializer syntax (no
builders). `required` members must be set; optional ones are nullable and are omitted from the JSON when
left null. The body model is the type of the request record's `Body` member — a different type from the
request record itself — so take its exact name from the contract sheet (grounded from the SDK map/source):

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

Enums are type-safe string- **or int-**enums (`OpenStringEnum<T>` / `OpenIntEnum<T>`), not C# enums — use
the static constants. There is no `FromValue`: a value the spec does not declare cannot be constructed, and
a raw value resolves through `{EnumType}.TryGetKnownValue(value, out var known)`. See **dotnet-models** for
read-back semantics (implicit conversion to the underlying value, `==` / `Is` against raw values, and the
generated `Match`).

```csharp
SomeProp = {EnumType}.SomeConstant;
SomeProp = {EnumType}.TryGetKnownValue(configured, out var known) ? known : {EnumType}.SomeConstant;
```

## Union types, collections, and dates

Some properties are not plain scalars: polymorphic `OneOf`/`AnyOf` unions (built with **factory methods**,
not object-initializers, and read via `TryGet…`), `IReadOnlyList`/`IReadOnlyDictionary` collections, and
`DateTimeOffset` dates. If a request property or response field is one of these, see **dotnet-models** for
how to construct and read it.

## Making the call and reading the response

```csharp
var response = await client.{ApiGroup}.{Operation}(
    new {Operation}Request { {PathMember} = pathValue, Body = body },
    cancellationToken: ct);
```

> **Wrap the call in error handling — a non-2xx response *throws*, it is not signalled by the return value.**
> The bare `await` above shows only the happy path; on an API error the call throws `ApiException<TError>`.
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
  var resource = await client.{ApiGroup}.{Operation}(request, cancellationToken: ct);
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

Every operation takes a `CancellationToken` as its last argument, passed as `cancellationToken:`, with
`RequestOptions? requestOptions = null` immediately before it — so the token is last, never second-to-last. To bound an individual call with a
timeout, use the per-request cancellation pattern in **dotnet-configuration-resilience** (it owns
timeouts).

## Worked example — a list/GET call

```csharp
// Record (illustrative) — Requests/{ApiGroup}/{Operation}Request.cs:
//   public sealed record {Operation}Request
//   {
//       public {EnumType}? Filter { get; init; }
//       public string? StartDate { get; init; }
//       public string? Q { get; init; }
//       public {Num} Page { get; init; } = {p};          // {Num} is int or double PER API — check the record
//       public {Num} PerPage { get; init; } = {n};
//   }

var results = await client.{ApiGroup}.{Operation}(
    new {Operation}Request
    {
        Filter = {EnumType}.SomeConstant,
        Q = "search text",
        PerPage = 20       // literal must match the member's type — a `20d` against an `int` is CS0266
    },                     // StartDate is left unset and omitted; Page keeps the spec default
    cancellationToken: ct);

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
