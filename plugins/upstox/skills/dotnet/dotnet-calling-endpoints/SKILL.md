---
name: dotnet-calling-endpoints
description: Load before writing the first call to an operation on an APIMatic .NET SDK in C#, or when an operation's input or return type is unclear — finding the controller that owns an operation, the per-operation request record, the requestOptions and cancellationToken arguments, response shapes and cancellation.
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

Every endpoint method is `async` (returns a `Task`; there are no sync overloads) and takes at most three
parameters, in a fixed order:

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
- **Return type** varies by operation — see [Reading the response](#making-the-call-and-reading-the-response).

## Building the request record

The record's source file is the parameter list. Each property is one of four shapes, and the shape tells you
what you owe it:

| Property | Meaning | You |
|---|---|---|
| `public required T X { get; init; }` | required, no default | **must** set it — the compiler enforces this |
| `public T X { get; init; } = value;` | has a default | set it only to override; leaving it sends the default |
| `public T? X { get; init; }` | optional, no default | leave it unset to omit it from the request |
| `public T X { get; } = value;` | a fixed value (`const`) | cannot set it — it is always sent |

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
- **The record is never serialized**, so it carries no `[JsonPropertyName]`. Constraint attributes on its
  members (`[Minimum(0)]`, `[MaxLength(256)]`) are not enforced — see **dotnet-models**.
- **A JSON, plain-text or binary body is always the member `Body`** (`Body_` in the rare API that also has a parameter
  literally named `body`). A `application/x-www-form-urlencoded` or multipart form has **no** `Body`: each
  form field is its own property on the record, and the SDK assembles the form itself.

## Files

A file is a `BinaryContent`, built with an object initializer that sets all three: a `Stream`, a `FileName`
(may be `null`) and a `ContentType` (a `MediaTypeHeaderValue`). A `Stream` or `byte[]` also converts to one,
typed `application/octet-stream` whatever media type the operation documents, and named only for a
`FileStream` — so set `ContentType` whenever the API expects a specific type, and `FileName` when it needs a
name. The SDK never disposes or rewinds your stream, and never retries a call that sends a file.

## Building request models

A JSON request body is an immutable `record` built with object-initializer syntax (no builders).
`required` members must be set; optional ones are nullable and are omitted from the JSON when left null.
The body model is the type of the request record's `Body` member — a different type from the
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

Enums are `OpenStringEnum<T>` / `OpenIntEnum<T>` records, not C# enums: use the static constants
(`{EnumType}.SomeConstant`). There is no `FromValue`; resolve a raw value with
`{EnumType}.TryGetKnownValue(value, out var known)`. See **dotnet-models**.

## Union types, collections, and dates

Some properties are not plain scalars: polymorphic `OneOf`/`AnyOf` unions (built with **factory methods**,
not object-initializers, and read via `TryGet…` or `Match`), `IReadOnlyList`/`IReadOnlyDictionary` collections, and
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
- **A file** — `Task<BinaryContent>`: the call returns when the headers arrive, and the body is still on the
  open connection. Dispose it to free the connection, even if you never read it. `FileName` comes from the
  server's `Content-Disposition` and may be null, so sanitize it before you use it as a path. No SDK timeout
  bounds the read, and a drop while you read throws a raw `IOException` from your read, not
  `SdkConnectionException`.

A non-throwing **`{Operation}Result`** sibling may exist — see **dotnet-error-handling**.

## Cancellation

Pass the token as `cancellationToken:` (see the signature above). To bound a call with a timeout, see
**dotnet-configuration-resilience** § *Bounding a call*.

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
    },                     // StartDate is left unset and omitted; Page keeps its default
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
