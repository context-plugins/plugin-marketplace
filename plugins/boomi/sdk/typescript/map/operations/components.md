<!-- Generated file — do not edit; regenerated with the SDK. -->

# Components — operations

Accessor: `client.components` · Source: `src/resources/components.ts` · 2 operations · Request and error types: namespace `Components`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPackagedComponent

- **Signature**: `createPackagedComponent(request: Components.CreatePackagedComponentRequest, options?: RequestOptions): ApiPromise<PackagedComponent, Components.CreatePackagedComponentError>`
- **Wire**: `POST /PackagedComponent`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PackagedComponent`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Components.CreatePackagedComponentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Components.CreatePackagedComponentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PackagedComponentInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PackagedComponentInput` | `packagedComponentInputSchema` | `src/models/packaged-component-input.ts` |
| `PackagedComponent` | `packagedComponentSchema` | `src/models/packaged-component.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPackagedComponent

- **Signature**: `getPackagedComponent(request: Components.GetPackagedComponentRequest, options?: RequestOptions): ApiPromise<PackagedComponent, Components.GetPackagedComponentError>`
- **Wire**: `GET /PackagedComponent/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PackagedComponent`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Components.GetPackagedComponentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Components.GetPackagedComponentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PackagedComponent` | `packagedComponentSchema` | `src/models/packaged-component.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

