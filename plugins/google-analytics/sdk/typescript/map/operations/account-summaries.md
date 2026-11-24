<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountSummaries — operations

Accessor: `client.accountSummaries` · Source: `src/resources/account-summaries.ts` · 1 operation · Request and error types: namespace `AccountSummaries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-analytics`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### analyticsadminAccountSummariesList

- **Signature**: `analyticsadminAccountSummariesList(request?: AccountSummaries.AnalyticsadminAccountSummariesListRequest, options?: RequestOptions): ApiPromise<GoogleAnalyticsAdminV1BetaListAccountSummariesResponse, AccountSummaries.AnalyticsadminAccountSummariesListError>`
- **Wire**: `GET /v1beta/accountSummaries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleAnalyticsAdminV1BetaListAccountSummariesResponse`
- **Error**: `GoogleAnalyticsError` with `kind: "api"`, an instance of `AccountSummaries.AnalyticsadminAccountSummariesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountSummaries.AnalyticsadminAccountSummariesListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleAnalyticsAdminV1BetaListAccountSummariesResponse` | `googleAnalyticsAdminV1BetaListAccountSummariesResponseSchema` | `src/models/google-analytics-admin-v1-beta-list-account-summaries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

