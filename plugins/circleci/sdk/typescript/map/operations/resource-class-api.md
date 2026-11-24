<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResourceClassApi — operations

Accessor: `client.resourceClassApi` · Source: `src/resources/resource-class-api.ts` · 4 operations · Request and error types: namespace `ResourceClassApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createResourceClass

- **Signature**: `createResourceClass(request: ResourceClassApi.CreateResourceClassRequest, options?: RequestOptions): ApiPromise<ResourceClassCreation, ResourceClassApi.CreateResourceClassError>`
- **Wire**: `POST /runner/resource-class`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResourceClassCreation`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ResourceClassApi.CreateResourceClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResourceClassApi.CreateResourceClassRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RunnerResourceClassRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunnerResourceClassRequest` | `runnerResourceClassRequestSchema` | `src/models/runner-resource-class-request.ts` |
| `ResourceClassCreation` | `resourceClassCreationSchema` | `src/models/resource-class-creation.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteResourceClass

- **Signature**: `deleteResourceClass(request: ResourceClassApi.DeleteResourceClassRequest, options?: RequestOptions): ApiPromise<undefined, ResourceClassApi.DeleteResourceClassError>`
- **Wire**: `DELETE /runner/resource-class/{resource-class}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ResourceClassApi.DeleteResourceClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResourceClassApi.DeleteResourceClassRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceClass` | `path` | `resource-class` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getResourceClass

- **Signature**: `getResourceClass(request: ResourceClassApi.GetResourceClassRequest, options?: RequestOptions): ApiPromise<ResourceClass, ResourceClassApi.GetResourceClassError>`
- **Wire**: `GET /runner/resource-class/{resource-class}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResourceClass`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ResourceClassApi.GetResourceClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResourceClassApi.GetResourceClassRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceClass` | `path` | `resource-class` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceClass` | `resourceClassSchema` | `src/models/resource-class.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listResourceClasses

- **Signature**: `listResourceClasses(request: ResourceClassApi.ListResourceClassesRequest, options?: RequestOptions): ApiPromise<RunnerResourceClassResponse, ResourceClassApi.ListResourceClassesError>`
- **Wire**: `GET /runner/resource-class`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunnerResourceClassResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `ResourceClassApi.ListResourceClassesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ResourceClassApi.ListResourceClassesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `namespace` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunnerResourceClassResponse` | `runnerResourceClassResponseSchema` | `src/models/runner-resource-class-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

