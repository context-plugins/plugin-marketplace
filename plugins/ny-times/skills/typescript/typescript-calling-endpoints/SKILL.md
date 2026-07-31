---
name: typescript-calling-endpoints
description: Call API operations on an APIMatic-generated TypeScript/Node.js SDK — operations live on a controller class you instantiate yourself (not on the client), parameters are positional with optional ones skipped by passing undefined, plus building request models, string-enums, an AbortSignal per call, and reading the varied response shapes. Use whenever invoking an endpoint, building a request body, working out parameter order, or consuming a response from any APIMatic TypeScript SDK — load it even after reading the method signature in the source, since the signature won't warn you that the controller is constructed rather than accessed off the client, or that mis-ordered positional args still type-check when neighbouring params share a type.
---

# Calling endpoints on an APIMatic TypeScript SDK

Operations are **async methods on a controller class that you instantiate yourself** — they are *not*
properties on the client:

```typescript
import { Client, {Resource}Api } from 'ny-timeslib';

const client = new Client({ /* ... */ });
const api = new {Resource}Api(client);          // you construct this
const response = await api.{operation}(/* ... */);
```

There is no `client.{apiGroup}.{operation}(...)` accessor and no operation sitting directly on the
client. Controllers live in `src/controllers/`, one file per API group, each extending a shared base
class. **Read the exported class name from that file** — the suffix is a generator setting, so the class
may be `{Resource}Api` or `{Resource}Controller` depending on how the SDK was built. Operation names
follow no fixed verb/resource pattern — take the real name from the source.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{apiGroup}`, `{operation}`, `{resource}`, `{EnumType}`) — replace it with the concrete identifier from the source.

## Method signature convention

Every endpoint method is `async` (returns a `Promise`) and takes its parameters positionally, with
`requestOptions` last:

```typescript
async {operation}(
  {pathOrQueryParam}?: string,
  body?: {RequestType},
  requestOptions?: RequestOptions
): Promise<ApiResponse<{ReturnType}>>
```

- **Parameters are positional**, in the order the operation declares them — path and query parameters
  first, then the request body, then `requestOptions`. There is no single params object and no
  `{OperationParams}` interface. Optional parameters are typed `?`, so pass `undefined` to skip one and
  reach a later argument:
  ```typescript
  // async {operation}(idempotencyKey?: string, body?: {BodyType}, requestOptions?: RequestOptions)
  await api.{operation}(undefined, body);        // skip the first, supply the body
  ```
  **Copy the parameter order from the method signature in `src/controllers/`** — getting it wrong
  type-checks whenever two neighbouring parameters share a type (two optional strings, say), and then
  fails at runtime or silently sends the wrong field.
- **`requestOptions`**: optional per-request overrides (timeout, `AbortSignal`, headers) — see `typescript-configuration-resilience`.
- **Return type** varies by operation — see [Reading the response](#making-the-call-and-reading-the-response).
- Methods are **async-only** and **throw `ApiError`** on API errors — see `typescript-error-handling`.

## List/search endpoints — count the positions

List/search operations often declare **many** optional parameters, all positional. Supply `undefined`
for the ones you are skipping:

```typescript
// async {operation}(status?: {EnumType}, filterId?: number, flag?: boolean,
//                   page?: number, perPage?: number, requestOptions?: RequestOptions)
const response = await api.{operation}(
  {EnumType}.SomeConstant,
  undefined,        // filterId — skipped
  undefined,        // flag — skipped
  1,                // page
  100,              // perPage
);
```

This is the easiest thing to get wrong in the whole SDK, and TypeScript will not save you: a run of
same-typed optional parameters (three `number`s, say) accepts values in any order. **Open the method in
`src/controllers/` and count the positions**, and comment each argument as above so a later reader can
check it.

## Building request models

Request bodies are plain objects conforming to a TypeScript interface. Required properties must be set; optional ones are `undefined` by default and are omitted from the JSON when not provided:

```typescript
const body: {RequestType} = {
  requiredProp: value,   // required — must be provided
  optionalProp: value,   // optional — leave out to omit from the request
};
```

A request body's **shape varies**: some are **flat** (scalar members directly on the object), others **nest an inner resource object**. Open the request model interface (under `src/models/`) to see its real required/optional members:

```typescript
const body: {RequestType} = {
  {member}: {
    requiredProp: value,
    optionalProp: value,
  },
};
```

## Enums

Enums are string constants exported from the SDK. Use the exported constants, or pass the raw string value directly:

```typescript
someProp: {EnumType}.SomeConstant;
someProp: 'server_provided_value';  // raw string, type-safe via union
```

## Union types, collections, and dates

Some properties are not plain scalars: discriminated union types, `Array<T>` collections, and ISO-8601 date strings. If a request property or response field is one of these, see **typescript-models** for how to construct and read it.

## Making the call and reading the response

```typescript
const response = await api.{operation}(pathArg, undefined, body);
```

Operations that wrap the payload return `ApiResponse<T>` — the deserialized value is on `.result`, with
`.statusCode` and `.headers` alongside it:

```typescript
const response = await api.{operation}(pathArg, undefined, body);
console.log(response.statusCode);
const resource = response.result;
```

**Each operation's return type varies** — read the method's return type in the SDK source and handle it accordingly:

- **An object that nests the resource** under a property:
  ```typescript
  const resource = response.{resource};
  console.log(resource?.someField);
  ```
- **The resource directly** — `Promise<{Resource}>`: use it as-is.
  ```typescript
  const resource = await api.{operation}({ /* ... */ });
  ```
- **An array** — `Promise<{ItemType}[]>`: iterate it.
- **An object that nests an array** — read the list member first, then iterate.
- **Nothing** — `Promise<void>`: just `await` it.

Endpoints in the same family can differ — one nests the resource, another returns it directly — so let each method's return type guide how you read it.

## AbortSignal / cancellation

Pass an `AbortSignal` via `requestOptions` to cancel an individual call:

```typescript
const controller = new AbortController();
setTimeout(() => controller.abort(), 30_000);

const response = await api.{operation}(
  { /* params */ },
  { signal: controller.signal }
);
```

## Worked example — a list/GET call

```typescript
// Signature (illustrative):
//   async {operation}(
//     filter?: {EnumType},
//     startDate?: string,
//     q?: string,
//     page?: number,
//     perPage?: number,
//     requestOptions?: RequestOptions
//   ): Promise<ApiResponse<{ItemType}[]>>

const response = await api.{operation}(
  {EnumType}.SomeConstant,
  undefined,          // startDate
  'search text',      // q
  1,                  // page
  20,                 // perPage
);

for (const item of response.result) {
  const resource = item.{resource};
  console.log(resource?.id);
}
```

## Finding the right method in the SDK source

Read these from the SDK **source** files, not by inspecting the compiled `.d.ts` only — the source has JSDoc comments, the full params interface, and the request-builder internals.

- Every operation lives on a **controller class** in `src/controllers/`, one file per API group. `ls` that
  directory to find the group, then read the exported class name off its `export class` line — the
  suffix is a generator setting (`{Resource}Api` or `{Resource}Controller`), so do not assume it.
- Request/response/enum types live under `src/models/`; error types under `src/errors/`.

## Next

- Errors and status codes → **typescript-error-handling**
- Pagination, retries, timeouts → **typescript-configuration-resilience**
- Union types, collections, dates, enums → **typescript-models**
