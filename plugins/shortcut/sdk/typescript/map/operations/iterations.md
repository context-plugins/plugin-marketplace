<!-- Generated file — do not edit; regenerated with the SDK. -->

# Iterations — operations

Accessor: `client.iterations` · Source: `src/resources/iterations.ts` · 8 operations · Request and error types: namespace `Iterations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createIteration

- **Signature**: `createIteration(request: Iterations.CreateIterationRequest, options?: RequestOptions): ApiPromise<Iteration, Iterations.CreateIterationError>`
- **Wire**: `POST /api/v3/iterations`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Iteration`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.CreateIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Iterations.CreateIterationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateIteration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateIteration` | `createIterationSchema` | `src/models/create-iteration.ts` |
| `Iteration` | `iterationSchema` | `src/models/iteration.ts` |

### deleteIteration

- **Signature**: `deleteIteration(request: Iterations.DeleteIterationRequest, options?: RequestOptions): ApiPromise<undefined, Iterations.DeleteIterationError>`
- **Wire**: `DELETE /api/v3/iterations/{iteration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.DeleteIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Iterations.DeleteIterationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |

### disableIterations

- **Signature**: `disableIterations(options?: RequestOptions): ApiPromise<undefined, Iterations.DisableIterationsError>`
- **Wire**: `PUT /api/v3/iterations/disable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.DisableIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### enableIterations

- **Signature**: `enableIterations(options?: RequestOptions): ApiPromise<undefined, Iterations.EnableIterationsError>`
- **Wire**: `PUT /api/v3/iterations/enable`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.EnableIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

### getIteration

- **Signature**: `getIteration(request: Iterations.GetIterationRequest, options?: RequestOptions): ApiPromise<Iteration, Iterations.GetIterationError>`
- **Wire**: `GET /api/v3/iterations/{iteration-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Iteration`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.GetIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Iterations.GetIterationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Iteration` | `iterationSchema` | `src/models/iteration.ts` |

### listIterationStories

- **Signature**: `listIterationStories(request: Iterations.ListIterationStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Iterations.ListIterationStoriesError>`
- **Wire**: `GET /api/v3/iterations/{iteration-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.ListIterationStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Iterations.ListIterationStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### listIterations

- **Signature**: `listIterations(options?: RequestOptions): ApiPromise<IterationSlim[], Iterations.ListIterationsError>`
- **Wire**: `GET /api/v3/iterations`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IterationSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.ListIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IterationSlim` | `iterationSlimSchema` | `src/models/iteration-slim.ts` |

### updateIteration

- **Signature**: `updateIteration(request: Iterations.UpdateIterationRequest, options?: RequestOptions): ApiPromise<Iteration, Iterations.UpdateIterationError>`
- **Wire**: `PUT /api/v3/iterations/{iteration-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Iteration`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Iterations.UpdateIterationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Iterations.UpdateIterationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `iterationPublicId` | `path` | `iteration-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateIteration` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateIteration` | `updateIterationSchema` | `src/models/update-iteration.ts` |
| `Iteration` | `iterationSchema` | `src/models/iteration.ts` |

