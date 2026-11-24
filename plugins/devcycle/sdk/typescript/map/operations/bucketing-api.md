<!-- Generated file — do not edit; regenerated with the SDK. -->

# BucketingApi — operations

Accessor: `client.bucketingApi` · Source: `src/resources/bucketing-api.ts` · 4 operations · Request and error types: namespace `BucketingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFeatures

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getFeatures(request: BucketingApi.GetFeaturesRequest, options?: RequestOptions): ApiPromise<Record<string, Feature>, BucketingApi.GetFeaturesError>`
- **Wire**: `POST /v1/features`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, Feature>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `BucketingApi.GetFeaturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BucketingApi.GetFeaturesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserData` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserData` | `userDataSchema` | `src/models/user-data.ts` |
| `Feature` | `featureSchema` | `src/models/feature.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getVariableByKey

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getVariableByKey(request: BucketingApi.GetVariableByKeyRequest, options?: RequestOptions): ApiPromise<Variable, BucketingApi.GetVariableByKeyError>`
- **Wire**: `POST /v1/variables/{key}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Variable`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `BucketingApi.GetVariableByKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BucketingApi.GetVariableByKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UserData` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserData` | `userDataSchema` | `src/models/user-data.ts` |
| `Variable` | `variableSchema` | `src/models/variable.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getVariables

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getVariables(request: BucketingApi.GetVariablesRequest, options?: RequestOptions): ApiPromise<Record<string, Variable>, BucketingApi.GetVariablesError>`
- **Wire**: `POST /v1/variables`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, Variable>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `BucketingApi.GetVariablesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BucketingApi.GetVariablesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserData` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserData` | `userDataSchema` | `src/models/user-data.ts` |
| `Variable` | `variableSchema` | `src/models/variable.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postEvents

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postEvents(request: BucketingApi.PostEventsRequest, options?: RequestOptions): ApiPromise<V1TrackResponse, BucketingApi.PostEventsError>`
- **Wire**: `POST /v1/track`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1TrackResponse`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `BucketingApi.PostEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BucketingApi.PostEventsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserDataAndEventsBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserDataAndEventsBody` | `userDataAndEventsBodySchema` | `src/models/user-data-and-events-body.ts` |
| `V1TrackResponse` | `v1TrackResponseSchema` | `src/models/v1-track-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

