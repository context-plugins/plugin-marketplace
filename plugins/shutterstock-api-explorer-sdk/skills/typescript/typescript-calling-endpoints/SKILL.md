---
name: typescript-calling-endpoints
description: Call API operations on an APIMatic-generated TypeScript/Node.js SDK — method signature conventions, building request objects, string-enums, passing path/query/body params plus an AbortSignal, reading the varied response shapes, and the optional non-throwing result-style call. Use whenever invoking an endpoint, building a request body, working out parameter shapes, or consuming a response from any APIMatic TypeScript SDK — load it even after reading the method signature in the source, since the signature doesn't warn you about how optional params are structured or that named object params are required for list/search operations.
---

# Calling endpoints on an APIMatic TypeScript SDK

Operations are **async methods** on the client. Most are **grouped under a controller property** and called `client.{apiGroup}.{operation}(...)`; an operation that belongs to no group sits **directly on the client**, called `client.{operation}(...)`. Open the client class in the SDK source to see its controller properties (and any direct operations), then open the relevant controller for the operation's exact signature. Operation names follow no fixed verb/resource pattern — take the real name from the source.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{apiGroup}`, `{operation}`, `{resource}`, `{EnumType}`) — replace it with the concrete identifier from the source.

## Method signature convention

Every endpoint method is `async` (returns a `Promise`) and accepts a params object:

```typescript
async {operation}(
  params: {OperationParams},
  requestOptions?: RequestOptions
): Promise<{ReturnType}>
```

- **Params object**: path, query, and body parameters are typically passed as properties on a single params object — not as positional arguments. Take the exact property names from the `{OperationParams}` interface in the SDK source.
- **`requestOptions`**: optional per-request overrides (timeout, `AbortSignal`, headers) — see `typescript-configuration-resilience`.
- **Return type** varies by operation — see [Reading the response](#making-the-call-and-reading-the-response).
- Methods are **async-only** and **throw `ApiError`** on API errors — see `typescript-error-handling`.

## Use object params for list/search endpoints

List/search operations can have **many** optional parameters. Pass them as object properties:

```typescript
const response = await client.{apiGroup}.{operation}({
  status: {EnumType}.SomeConstant,
  someFilterId: 12345,
  someFlag: true,
  page: 1,
  perPage: 100,
});
```

Copy property names verbatim from the `{OperationParams}` interface in the SDK source; they are easy to misremember (singular vs plural, camelCase vs snake_case).

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
const response = await client.{apiGroup}.{operation}({
  pathArg,
  queryArg: undefined,
  body,
});
```

**Each operation's return type varies** — read the method's return type in the SDK source and handle it accordingly:

- **An object that nests the resource** under a property:
  ```typescript
  const resource = response.{resource};
  console.log(resource?.someField);
  ```
- **The resource directly** — `Promise<{Resource}>`: use it as-is.
  ```typescript
  const resource = await client.{apiGroup}.{operation}({ /* ... */ });
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

const response = await client.{apiGroup}.{operation}(
  { /* params */ },
  { signal: controller.signal }
);
```

## Worked example — a list/GET call

```typescript
// Signature (illustrative):
//   async {operation}(params: {
//     filter?: {EnumType};
//     startDate?: string;
//     q?: string;
//     page?: number;
//     perPage?: number;
//   }): Promise<{ItemType}[]>

const results = await client.{apiGroup}.{operation}({
  filter: {EnumType}.SomeConstant,
  startDate: undefined,
  q: 'search text',
  page: 1,
  perPage: 20,
});

for (const item of results) {
  const resource = item.{resource};
  console.log(resource?.id);
}
```

## Finding the right method in the SDK source

Read these from the SDK **source** files, not by inspecting the compiled `.d.ts` only — the source has JSDoc comments, the full params interface, and the request-builder internals.

- Most operations are grouped on **controller properties** of the client (each defined in `src/controllers/{apiGroup}Controller.ts`); an operation in no group is defined directly on the client class.
- Request/response/enum types live under `src/models/`; error types under `src/errors/`.

## Next

- Errors and status codes → **typescript-error-handling**
- Pagination, retries, timeouts → **typescript-configuration-resilience**
- Union types, collections, dates, enums → **typescript-models**
