<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recommendations — operations

Accessor: `client.recommendations` · Source: `src/resources/recommendations.ts` · 2 operations · Request and error types: namespace `Recommendations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `surfe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchRecommendations

- **Signature**: `fetchRecommendations(request: Recommendations.FetchRecommendationsRequest, options?: RequestOptions): ApiPromise<RecommendationsFetchResponse, Recommendations.FetchRecommendationsError>`
- **Wire**: `POST /recommendations/fetch`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecommendationsFetchResponse`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `Recommendations.FetchRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recommendations.FetchRecommendationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RecommendationsFetchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecommendationsFetchRequest` | `recommendationsFetchRequestSchema` | `src/models/recommendations-fetch-request.ts` |
| `RecommendationsFetchResponse` | `recommendationsFetchResponseSchema` | `src/models/recommendations-fetch-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### upsertIcp

- **Signature**: `upsertIcp(request: Recommendations.UpsertIcpRequest, options?: RequestOptions): ApiPromise<IcpDefinition, Recommendations.UpsertIcpError>`
- **Wire**: `POST /recommendations/icp`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IcpDefinition`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `Recommendations.UpsertIcpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recommendations.UpsertIcpRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IcpDefinition` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IcpDefinition` | `icpDefinitionSchema` | `src/models/icp-definition.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

