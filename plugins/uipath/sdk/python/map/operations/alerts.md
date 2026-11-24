<!-- Generated file — do not edit; regenerated with the SDK. -->

# Alerts — operations

Accessor: `client.alerts` · Source: `ui_path/apis/alerts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.alerts.list_alerts

- **Route**: `GET /odata/Alerts`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_alerts(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `orderby` — query `$orderby` · `top` — query `$top` · `skip` — query `$skip` · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `ODataAlertCollection`
- **Returns (raw)**: `ApiResult[ODataAlertCollection, ListAlertsErrorBody]`
- **Error**: `ListAlertsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataAlertCollection` | `ui_path/models/o_data_alert_collection.py` |
| `ListAlertsErrorBody` | `ui_path/errors/list_alerts_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

