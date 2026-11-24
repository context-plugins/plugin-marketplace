<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureOptIn — operations

Accessor: `client.featureOptIn` · Source: `src/resources/feature-opt-in.ts` · 2 operations · Request and error types: namespace `FeatureOptIn`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getV1OptInConfig

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getV1OptInConfig(request: FeatureOptIn.GetV1OptInConfigRequest, options?: RequestOptions): ApiPromise<OptInConfigResponse, FeatureOptIn.GetV1OptInConfigError>`
- **Wire**: `GET /v1/optInConfig`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OptInConfigResponse`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureOptIn.GetV1OptInConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureOptIn.GetV1OptInConfigRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `query` | `user_id` | `string` | yes |
| `sdkKey` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OptInConfigResponse` | `optInConfigResponseSchema` | `src/models/opt-in-config-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### putV1OptInsByUserId

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putV1OptInsByUserId(request: FeatureOptIn.PutV1OptInsByUserIdRequest, options?: RequestOptions): ApiPromise<V1OptInsResponse, FeatureOptIn.PutV1OptInsByUserIdError>`
- **Wire**: `PUT /v1/optIns/{user_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1OptInsResponse`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `FeatureOptIn.PutV1OptInsByUserIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FeatureOptIn.PutV1OptInsByUserIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `sdkKey` | `query` | — | `string` | no |
| `body` | `body` | — | `Record<string, boolean>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OptInsResponse` | `v1OptInsResponseSchema` | `src/models/v1-opt-ins-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

