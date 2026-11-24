<!-- Generated file — do not edit; regenerated with the SDK. -->

# Alerts — operations

Accessor: `client.alerts` · Source: `doi_t/apis/alerts.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.alerts.create_alert

- **Route**: `POST /analytics/v1/alerts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_alert(body: AlertRequest | AlertRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Alert`
- **Returns (raw)**: `ApiResult[Alert, CreateAlertErrorBody]`
- **Error**: `CreateAlertErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AlertRequest` | `doi_t/models/alert_request.py` |
| `AlertRequestDict` | `doi_t/models/alert_request.py` |
| `Alert` | `doi_t/models/alert.py` |
| `CreateAlertErrorBody` | `doi_t/errors/create_alert_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.alerts.delete_alert

- **Route**: `DELETE /analytics/v1/alerts/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_alert(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAlertErrorBody]`
- **Error**: `DeleteAlertErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAlertErrorBody` | `doi_t/errors/delete_alert_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.alerts.get_alert

- **Route**: `GET /analytics/v1/alerts/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_alert(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Alert`
- **Returns (raw)**: `ApiResult[Alert, GetAlertErrorBody]`
- **Error**: `GetAlertErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Alert` | `doi_t/models/alert.py` |
| `GetAlertErrorBody` | `doi_t/errors/get_alert_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.alerts.list_alert_slack_channels

- **Route**: `GET /analytics/v1/alerts/slack-channels`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_alert_slack_channels(*, name_contains: str | None = None, max_results: int | None = 50, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name_contains` — query `nameContains` · `max_results` — query `maxResults` · `page_token` — query `pageToken`
- **Returns (parsed)**: `AlertSlackChannelList`
- **Returns (raw)**: `ApiResult[AlertSlackChannelList, ListAlertSlackChannelsErrorBody]`
- **Error**: `ListAlertSlackChannelsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [503, anything unmapped]

| Type | Source |
| --- | --- |
| `AlertSlackChannelList` | `doi_t/models/alert_slack_channel_list.py` |
| `ListAlertSlackChannelsErrorBody` | `doi_t/errors/list_alert_slack_channels_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.alerts.list_alerts

- **Route**: `GET /analytics/v1/alerts`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_alerts(*, sort_by: SortByOrStr | None = None, sort_order: SortOrderOrStr | None = None, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `name_contains` — query `nameContains`
- **Returns (parsed)**: `ExternalAlertList`
- **Returns (raw)**: `ApiResult[ExternalAlertList, ListAlertsErrorBody]`
- **Error**: `ListAlertsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `doi_t/models/enums/sort_by.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `ExternalAlertList` | `doi_t/models/external_alert_list.py` |
| `ListAlertsErrorBody` | `doi_t/errors/list_alerts_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.alerts.update_alert

- **Route**: `PATCH /analytics/v1/alerts/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_alert(id_: str, body: AlertUpdateRequest | AlertUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Alert`
- **Returns (raw)**: `ApiResult[Alert, UpdateAlertErrorBody]`
- **Error**: `UpdateAlertErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `AlertUpdateRequest` | `doi_t/models/alert_update_request.py` |
| `AlertUpdateRequestDict` | `doi_t/models/alert_update_request.py` |
| `Alert` | `doi_t/models/alert.py` |
| `UpdateAlertErrorBody` | `doi_t/errors/update_alert_error.py` |
| `Error` | `doi_t/models/error.py` |

