<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 1 operation · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### insights

- **Signature**: `insights(request: Insights.InsightsRequestParams, options?: RequestOptions): ApiPromise<InsightsResponse, Insights.InsightsError>`
- **Wire**: `POST /rest/api/v1/insights`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Insights.InsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.InsightsRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `InsightsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsRequest` | `insightsRequestSchema` | `src/models/insights-request.ts` |
| `InsightsResponse` | `insightsResponseSchema` | `src/models/insights-response.ts` |

