<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `src/resources/analytics.ts` · 1 operation · Request and error types: namespace `Analytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Analytics

- **Signature**: `getApiV1Analytics(request?: Analytics.GetApiV1AnalyticsRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsResponse, Analytics.GetApiV1AnalyticsError>`
- **Wire**: `GET /api/v1/analytics`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AnalyticsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Analytics.GetApiV1AnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.GetApiV1AnalyticsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `days` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AnalyticsResponse` | `apiV1AnalyticsResponseSchema` | `src/models/api-v1-analytics-response.ts` |

