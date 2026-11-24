<!-- Generated file — do not edit; regenerated with the SDK. -->

# Searchanalytics — operations

Accessor: `client.searchanalytics` · Source: `src/resources/searchanalytics.ts` · 1 operation · Request and error types: namespace `Searchanalytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-search-console`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### webmastersSearchanalyticsQuery

- **Signature**: `webmastersSearchanalyticsQuery(request: Searchanalytics.WebmastersSearchanalyticsQueryRequest, options?: RequestOptions): ApiPromise<SearchAnalyticsQueryResponse, Searchanalytics.WebmastersSearchanalyticsQueryError>`
- **Wire**: `POST /webmasters/v3/sites/{siteUrl}/searchAnalytics/query`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchAnalyticsQueryResponse`
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Searchanalytics.WebmastersSearchanalyticsQueryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Searchanalytics.WebmastersSearchanalyticsQueryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |
| `body` | `body` | `SearchAnalyticsQueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchAnalyticsQueryRequest` | `searchAnalyticsQueryRequestSchema` | `src/models/search-analytics-query-request.ts` |
| `SearchAnalyticsQueryResponse` | `searchAnalyticsQueryResponseSchema` | `src/models/search-analytics-query-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

