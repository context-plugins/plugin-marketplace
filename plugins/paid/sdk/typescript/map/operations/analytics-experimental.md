<!-- Generated file — do not edit; regenerated with the SDK. -->

# AnalyticsExperimental — operations

Accessor: `client.analyticsExperimental` · Source: `src/resources/analytics-experimental.ts` · 3 operations · Request and error types: namespace `AnalyticsExperimental`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### executeAnalyticsQuery

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `executeAnalyticsQuery(request: AnalyticsExperimental.ExecuteAnalyticsQueryRequest, options?: RequestOptions): ApiPromise<AnalyticsQueryResponse, AnalyticsExperimental.ExecuteAnalyticsQueryError>`
- **Wire**: `POST /experimental/analytics/query`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AnalyticsQueryResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `AnalyticsExperimental.ExecuteAnalyticsQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [408] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AnalyticsExperimental.ExecuteAnalyticsQueryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `AnalyticsQueryRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsQueryRequest` | `analyticsQueryRequestSchema` | `src/models/analytics-query-request.ts` |
| `AnalyticsQueryResponse` | `analyticsQueryResponseSchema` | `src/models/analytics-query-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAnalyticsSchema

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAnalyticsSchema(request: AnalyticsExperimental.GetAnalyticsSchemaRequest, options?: RequestOptions): ApiPromise<AnalyticsSchemaResponse, AnalyticsExperimental.GetAnalyticsSchemaError>`
- **Wire**: `GET /experimental/analytics/schema`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsSchemaResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `AnalyticsExperimental.GetAnalyticsSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AnalyticsExperimental.GetAnalyticsSchemaRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsSchemaResponse` | `analyticsSchemaResponseSchema` | `src/models/analytics-schema-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSignalsMetadata

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSignalsMetadata(request: AnalyticsExperimental.GetSignalsMetadataRequest, options?: RequestOptions): ApiPromise<SignalsMetadataResponse, AnalyticsExperimental.GetSignalsMetadataError>`
- **Wire**: `GET /experimental/analytics/signals/metadata`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SignalsMetadataResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `AnalyticsExperimental.GetSignalsMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AnalyticsExperimental.GetSignalsMetadataRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signalName` | `query` | — | `string` | no |
| `fromDate` | `query` | — | `Date` (date-time) | no |
| `toDate` | `query` | — | `Date` (date-time) | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalsMetadataResponse` | `signalsMetadataResponseSchema` | `src/models/signals-metadata-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

