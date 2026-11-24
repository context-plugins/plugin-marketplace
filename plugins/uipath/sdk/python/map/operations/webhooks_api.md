<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `ui_path/apis/webhooks_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_webhook

- **Route**: `POST /odata/Webhooks`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_webhook(body: Webhook | WebhookDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId` · `body` — JSON body
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, CreateWebhookErrorBody]`
- **Error**: `CreateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `ui_path/models/webhook.py` |
| `WebhookDict` | `ui_path/models/webhook.py` |
| `CreateWebhookErrorBody` | `ui_path/errors/create_webhook_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /odata/Webhooks({key})`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_webhook(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWebhookErrorBody` | `ui_path/errors/delete_webhook_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.webhooks_api.get_webhook_event_types

- **Route**: `GET /odata/Webhooks/UiPath.Server.Configuration.OData.GetEventTypes()`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_webhook_event_types(*, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse`
- **Returns (raw)**: `ApiResult[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse, GetWebhookEventTypesErrorBody]`
- **Error**: `GetWebhookEventTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse` | `ui_path/models/odata_webhooks_ui_path_server_configuration_o_data_get_event_types_response.py` |
| `GetWebhookEventTypesErrorBody` | `ui_path/errors/get_webhook_event_types_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.webhooks_api.list_webhooks

- **Route**: `GET /odata/Webhooks`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_webhooks(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `top` — query `$top` · `skip` — query `$skip` · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `ODataWebhookCollection`
- **Returns (raw)**: `ApiResult[ODataWebhookCollection, ListWebhooksErrorBody]`
- **Error**: `ListWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataWebhookCollection` | `ui_path/models/o_data_webhook_collection.py` |
| `ListWebhooksErrorBody` | `ui_path/errors/list_webhooks_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

