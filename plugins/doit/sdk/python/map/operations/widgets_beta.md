<!-- Generated file — do not edit; regenerated with the SDK. -->

# WidgetsBeta — operations

Accessor: `client.widgets_beta` · Source: `doi_t/apis/widgets_beta.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.widgets_beta.get_widget

- **Route**: `GET /analytics/v1/widgets/{widgetId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_widget(widget_id: str, *, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `widget_id`
- **Params**: `widget_id` — path `widgetId` · `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `Widget`
- **Returns (raw)**: `ApiResult[Widget, GetWidgetErrorBody]`
- **Error**: `GetWidgetErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Widget` | `doi_t/models/widget.py` |
| `GetWidgetErrorBody` | `doi_t/errors/get_widget_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

### client.widgets_beta.list_widgets

- **Route**: `GET /analytics/v1/widgets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_widgets(*, x_tenant_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_tenant_id` — header `X-Tenant-Id`
- **Returns (parsed)**: `WidgetList`
- **Returns (raw)**: `ApiResult[WidgetList, ListWidgetsErrorBody]`
- **Error**: `ListWidgetsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WidgetList` | `doi_t/models/widget_list.py` |
| `ListWidgetsErrorBody` | `doi_t/errors/list_widgets_error.py` |
| `ProblemDetails` | `doi_t/models/problem_details.py` |

