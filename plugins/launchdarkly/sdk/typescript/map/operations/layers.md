<!-- Generated file — do not edit; regenerated with the SDK. -->

# Layers — operations

Accessor: `client.layers` · Source: `src/resources/layers.ts` · 3 operations · Request and error types: namespace `Layers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLayer

- **Signature**: `createLayer(request: Layers.CreateLayerRequest, options?: RequestOptions): ApiPromise<LayerRep, Layers.CreateLayerError>`
- **Wire**: `POST /api/v2/projects/{projectKey}/layers`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LayerRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Layers.CreateLayerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Layers.CreateLayerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `body` | `body` | `LayerPost` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LayerPost` | `layerPostSchema` | `src/models/layer-post.ts` |
| `LayerRep` | `layerRepSchema` | `src/models/layer-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getLayers

- **Signature**: `getLayers(request: Layers.GetLayersRequest, options?: RequestOptions): ApiPromise<LayerCollectionRep, Layers.GetLayersError>`
- **Wire**: `GET /api/v2/projects/{projectKey}/layers`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LayerCollectionRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Layers.GetLayersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Layers.GetLayersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LayerCollectionRep` | `layerCollectionRepSchema` | `src/models/layer-collection-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### updateLayer

- **Signature**: `updateLayer(request: Layers.UpdateLayerRequest, options?: RequestOptions): ApiPromise<LayerRep, Layers.UpdateLayerError>`
- **Wire**: `PATCH /api/v2/projects/{projectKey}/layers/{layerKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LayerRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `Layers.UpdateLayerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Layers.UpdateLayerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectKey` | `path` | `string` | yes |
| `layerKey` | `path` | `string` | yes |
| `body` | `body` | `LayerPatchInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LayerPatchInput` | `layerPatchInputSchema` | `src/models/layer-patch-input.ts` |
| `LayerRep` | `layerRepSchema` | `src/models/layer-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

