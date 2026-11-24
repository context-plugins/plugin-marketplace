<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `google_analytics/apis/accounts.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.accounts.analyticsadmin_accounts_delete

- **Route**: `DELETE /v1beta/accounts/{accountsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_delete(accounts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `accounts_id`
- **Params**: `accounts_id` — path `accountsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AnalyticsadminAccountsDeleteErrorBody]`
- **Error**: `AnalyticsadminAccountsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsadminAccountsDeleteErrorBody` | `google_analytics/errors/analyticsadmin_accounts_delete_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.accounts.analyticsadmin_accounts_get

- **Route**: `GET /v1beta/accounts/{accountsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_get(accounts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `accounts_id`
- **Params**: `accounts_id` — path `accountsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaAccount`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsGetErrorBody]`
- **Error**: `AnalyticsadminAccountsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaAccount` | `google_analytics/models/google_analytics_admin_v1_beta_account.py` |
| `AnalyticsadminAccountsGetErrorBody` | `google_analytics/errors/analyticsadmin_accounts_get_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.accounts.analyticsadmin_accounts_get_data_sharing_settings

- **Route**: `GET /v1beta/accounts/{accountsId}/dataSharingSettings`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_get_data_sharing_settings(accounts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `accounts_id`
- **Params**: `accounts_id` — path `accountsId`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaDataSharingSettings`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaDataSharingSettings, AnalyticsadminAccountsGetDataSharingSettingsErrorBody]`
- **Error**: `AnalyticsadminAccountsGetDataSharingSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaDataSharingSettings` | `google_analytics/models/google_analytics_admin_v1_beta_data_sharing_settings.py` |
| `AnalyticsadminAccountsGetDataSharingSettingsErrorBody` | `google_analytics/errors/analyticsadmin_accounts_get_data_sharing_settings_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.accounts.analyticsadmin_accounts_list

- **Route**: `GET /v1beta/accounts`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_list(*, page_size: int | None = None, page_token: str | None = None, show_deleted: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_size` — query `pageSize` · `page_token` — query `pageToken` · `show_deleted` — query `showDeleted`
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaListAccountsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaListAccountsResponse, AnalyticsadminAccountsListErrorBody]`
- **Error**: `AnalyticsadminAccountsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaListAccountsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_list_accounts_response.py` |
| `AnalyticsadminAccountsListErrorBody` | `google_analytics/errors/analyticsadmin_accounts_list_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.accounts.analyticsadmin_accounts_patch

- **Route**: `PATCH /v1beta/accounts/{accountsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_patch(accounts_id: str, body: GoogleAnalyticsAdminV1BetaAccount | GoogleAnalyticsAdminV1BetaAccountDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `accounts_id`, `body`
- **Params**: `accounts_id` — path `accountsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaAccount`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaAccount, AnalyticsadminAccountsPatchErrorBody]`
- **Error**: `AnalyticsadminAccountsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaAccount` | `google_analytics/models/google_analytics_admin_v1_beta_account.py` |
| `GoogleAnalyticsAdminV1BetaAccountDict` | `google_analytics/models/google_analytics_admin_v1_beta_account.py` |
| `AnalyticsadminAccountsPatchErrorBody` | `google_analytics/errors/analyticsadmin_accounts_patch_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.accounts.analyticsadmin_accounts_provision_account_ticket

- **Route**: `POST /v1beta/accounts:provisionAccountTicket`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_provision_account_ticket(body: GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest | GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse, AnalyticsadminAccountsProvisionAccountTicketErrorBody]`
- **Error**: `AnalyticsadminAccountsProvisionAccountTicketErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest` | `google_analytics/models/google_analytics_admin_v1_beta_provision_account_ticket_request.py` |
| `GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict` | `google_analytics/models/google_analytics_admin_v1_beta_provision_account_ticket_request.py` |
| `GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse` | `google_analytics/models/google_analytics_admin_v1_beta_provision_account_ticket_response.py` |
| `AnalyticsadminAccountsProvisionAccountTicketErrorBody` | `google_analytics/errors/analyticsadmin_accounts_provision_account_ticket_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.accounts.analyticsadmin_accounts_run_access_report

- **Route**: `POST /v1beta/accounts/{accountsId}:runAccessReport`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_run_access_report(accounts_id: str, body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest | GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `accounts_id`, `body`
- **Params**: `accounts_id` — path `accountsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaRunAccessReportResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaRunAccessReportResponse, AnalyticsadminAccountsRunAccessReportErrorBody]`
- **Error**: `AnalyticsadminAccountsRunAccessReportErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequest` | `google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict` | `google_analytics/models/google_analytics_admin_v1_beta_run_access_report_request.py` |
| `GoogleAnalyticsAdminV1BetaRunAccessReportResponse` | `google_analytics/models/google_analytics_admin_v1_beta_run_access_report_response.py` |
| `AnalyticsadminAccountsRunAccessReportErrorBody` | `google_analytics/errors/analyticsadmin_accounts_run_access_report_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

### client.accounts.analyticsadmin_accounts_search_change_history_events

- **Route**: `POST /v1beta/accounts/{accountsId}:searchChangeHistoryEvents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def analyticsadmin_accounts_search_change_history_events(accounts_id: str, body: GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest | GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `accounts_id`, `body`
- **Params**: `accounts_id` — path `accountsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse`
- **Returns (raw)**: `ApiResult[GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse, AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody]`
- **Error**: `AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest` | `google_analytics/models/google_analytics_admin_v1_beta_search_change_history_events_request.py` |
| `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict` | `google_analytics/models/google_analytics_admin_v1_beta_search_change_history_events_request.py` |
| `GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse` | `google_analytics/models/google_analytics_admin_v1_beta_search_change_history_events_response.py` |
| `AnalyticsadminAccountsSearchChangeHistoryEventsErrorBody` | `google_analytics/errors/analyticsadmin_accounts_search_change_history_events_error.py` |
| `GoogleRpcError` | `google_analytics/models/google_rpc_error.py` |

