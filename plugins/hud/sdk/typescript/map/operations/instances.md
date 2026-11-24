<!-- Generated file — do not edit; regenerated with the SDK. -->

# Instances — operations

Accessor: `client.instances` · Source: `src/resources/instances.ts` · 2 operations · Request and error types: namespace `Instances`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listInstancesV2InstanceGet

- **Signature**: `listInstancesV2InstanceGet(request: Instances.ListInstancesV2InstanceGetRequest, options?: RequestOptions): ApiPromise<ActiveInstancesResponse, Instances.ListInstancesV2InstanceGetError>`
- **Wire**: `GET /v2/instance`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActiveInstancesResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Instances.ListInstancesV2InstanceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Instances.ListInstancesV2InstanceGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `registryId` | `query` | `registry_id` | `string` | yes | — |
| `includeTerminated` | `query` | `include_terminated` | `boolean` | no | `false` |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActiveInstancesResponse` | `activeInstancesResponseSchema` | `src/models/active-instances-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### stopInstancesV2InstanceStopPost

- **Signature**: `stopInstancesV2InstanceStopPost(request: Instances.StopInstancesV2InstanceStopPostRequest, options?: RequestOptions): ApiPromise<StopInstancesResponse, Instances.StopInstancesV2InstanceStopPostError>`
- **Wire**: `POST /v2/instance/stop`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StopInstancesResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Instances.StopInstancesV2InstanceStopPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Instances.StopInstancesV2InstanceStopPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StopInstancesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StopInstancesRequest` | `stopInstancesRequestSchema` | `src/models/stop-instances-request.ts` |
| `StopInstancesResponse` | `stopInstancesResponseSchema` | `src/models/stop-instances-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

