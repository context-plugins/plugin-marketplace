<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountSummaries — operations

Accessor: `client.account_summaries` · Source: `google_analytics/apis/account_summaries.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account_summaries.analyticsadmin_account_summaries_list

- **Route**: `GET /v1beta/accountSummaries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_account_summaries_list(*, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListAccountSummariesResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListAccountSummariesResponse, AnalyticsadminAccountSummariesListErrorBody]`
- **Error**: `AnalyticsadminAccountSummariesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListAccountSummariesResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_account_summaries_response.py` |
| `AnalyticsadminAccountSummariesListErrorBody` | `google_analytics/errors/analyticsadmin_account_summaries_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

