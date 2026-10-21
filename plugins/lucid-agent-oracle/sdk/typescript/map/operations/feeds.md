<!-- Generated file — do not edit; regenerated with the SDK. -->

# Feeds — operations

Accessor: `client.feeds` · Source: `src/resources/feeds.ts` · 4 operations · Request and error types: namespace `Feeds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lucid-agent-oracle-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFeedDetail

- **Signature**: `getFeedDetail(request: Feeds.GetFeedDetailRequest, options?: RequestOptions): ApiPromise<FeedDetailResponse, Feeds.GetFeedDetailError>`
- **Wire**: `GET /v1/oracle/feeds/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeedDetailResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `Feeds.GetFeedDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.GetFeedDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedDetailResponse` | `feedDetailResponseSchema` | `src/models/feed-detail-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### getFeedHistory

- **Signature**: `getFeedHistory(request: Feeds.GetFeedHistoryRequest, options?: RequestOptions): ApiPromise<V1OracleFeedsHistoryResponse, Feeds.GetFeedHistoryError>`
- **Wire**: `GET /v1/oracle/feeds/{id}/history`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OracleFeedsHistoryResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `Feeds.GetFeedHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [403] `ProblemDetail` · `"problemDetail2"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.GetFeedHistoryRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `period` | `query` | `Period31` | no |
| `interval` | `query` | `Interval3` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period31` | `period31Schema` | `src/models/unions/period31.ts` |
| `Interval3` | `interval3Schema` | `src/models/unions/interval3.ts` |
| `V1OracleFeedsHistoryResponse` | `v1OracleFeedsHistoryResponseSchema` | `src/models/v1-oracle-feeds-history-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### getFeedMethodology

- **Signature**: `getFeedMethodology(request: Feeds.GetFeedMethodologyRequest, options?: RequestOptions): ApiPromise<FeedMethodologyResponse, Feeds.GetFeedMethodologyError>`
- **Wire**: `GET /v1/oracle/feeds/{id}/methodology`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeedMethodologyResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `Feeds.GetFeedMethodologyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [404] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Feeds.GetFeedMethodologyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedMethodologyResponse` | `feedMethodologyResponseSchema` | `src/models/feed-methodology-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

### listAllFeeds

- **Signature**: `listAllFeeds(options?: RequestOptions): ApiPromise<FeedListResponse, ApiError>`
- **Wire**: `GET /v1/oracle/feeds`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeedListResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedListResponse` | `feedListResponseSchema` | `src/models/feed-list-response.ts` |

