<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.qr_codes` · Source: `bitly/apis/qr_codes.py` · 16 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.qr_codes.create_qr_code_public

- **Route**: `POST /qr-codes`
- **Auth**: `bearer_auth`
- **Signature**: `def create_qr_code_public(body: PublicCreateQrCodeRequest | PublicCreateQrCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `QrCodeMinimal`
- **Returns (raw)**: `ApiResult[QrCodeMinimal, CreateQrCodePublicErrorBody]`
- **Error**: `CreateQrCodePublicErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicCreateQrCodeRequest` | `bitly/models/public_create_qr_code_request.py` |
| `PublicCreateQrCodeRequestDict` | `bitly/models/public_create_qr_code_request.py` |
| `QrCodeMinimal` | `bitly/models/qr_code_minimal.py` |
| `CreateQrCodePublicErrorBody` | `bitly/errors/create_qr_code_public_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.qr_codes.create_static_qr_code_public

- **Route**: `POST /qr-codes/static`
- **Auth**: `bearer_auth`
- **Signature**: `def create_static_qr_code_public(body: PublicCreateStaticQrCodeRequest | PublicCreateStaticQrCodeRequestDict, *, format_: FormatOrStr | None = Format.SVG, accept: AcceptOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `format_` — query `format` · `accept` — header `Accept` · `body` — JSON body
- **Returns (parsed)**: `PublicStaticQrCodeResponse`
- **Returns (raw)**: `ApiResult[PublicStaticQrCodeResponse, CreateStaticQrCodePublicErrorBody]`
- **Error**: `CreateStaticQrCodePublicErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 406, 422, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicCreateStaticQrCodeRequest` | `bitly/models/public_create_static_qr_code_request.py` |
| `PublicCreateStaticQrCodeRequestDict` | `bitly/models/public_create_static_qr_code_request.py` |
| `FormatOrStr` | `bitly/models/enums/format.py` |
| `AcceptOrStr` | `bitly/models/enums/accept.py` |
| `PublicStaticQrCodeResponse` | `bitly/models/public_static_qr_code_response.py` |
| `CreateStaticQrCodePublicErrorBody` | `bitly/errors/create_static_qr_code_public_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.qr_codes.delete_qr_code

- **Route**: `DELETE /qr-codes/{qrcode_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_qr_code(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path
- **Returns (parsed)**: `PublicDeleteQrCodeResponse`
- **Returns (raw)**: `ApiResult[PublicDeleteQrCodeResponse, DeleteQrCodeErrorBody]`
- **Error**: `DeleteQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicDeleteQrCodeResponse` | `bitly/models/public_delete_qr_code_response.py` |
| `DeleteQrCodeErrorBody` | `bitly/errors/delete_qr_code_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.qr_codes.get_qr_code_by_id_public

- **Route**: `GET /qr-codes/{qrcode_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_qr_code_by_id_public(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path
- **Returns (parsed)**: `QrCodeDetails`
- **Returns (raw)**: `ApiResult[QrCodeDetails, GetQrCodeByIdPublicErrorBody]`
- **Error**: `GetQrCodeByIdPublicErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrCodeDetails` | `bitly/models/qr_code_details.py` |
| `GetQrCodeByIdPublicErrorBody` | `bitly/errors/get_qr_code_by_id_public_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.get_qr_code_image_public

- **Route**: `GET /qr-codes/{qrcode_id}/image`
- **Auth**: `bearer_auth`
- **Signature**: `def get_qr_code_image_public(qrcode_id: str, *, format_: FormatOrStr | None = Format.SVG, accept: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `format_` — query `format` · `accept` — header `Accept`
- **Returns (parsed)**: `PublicQrCodeImageResponse`
- **Returns (raw)**: `ApiResult[PublicQrCodeImageResponse, GetQrCodeImagePublicErrorBody]`
- **Error**: `GetQrCodeImagePublicErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `bitly/models/enums/format.py` |
| `PublicQrCodeImageResponse` | `bitly/models/public_qr_code_image_response.py` |
| `GetQrCodeImagePublicErrorBody` | `bitly/errors/get_qr_code_image_public_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.get_scan_metrics_for_qr_code

- **Route**: `GET /qr-codes/{qrcode_id}/scans`
- **Auth**: `bearer_auth`
- **Signature**: `def get_scan_metrics_for_qr_code(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `BitlinkScans`
- **Returns (raw)**: `ApiResult[BitlinkScans, GetScanMetricsForQrCodeErrorBody]`
- **Error**: `GetScanMetricsForQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `BitlinkScans` | `bitly/models/bitlink_scans.py` |
| `GetScanMetricsForQrCodeErrorBody` | `bitly/errors/get_scan_metrics_for_qr_code_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.get_scan_metrics_for_qr_code_by_browser

- **Route**: `GET /qr-codes/{qrcode_id}/scans/browsers`
- **Auth**: `bearer_auth`
- **Signature**: `def get_scan_metrics_for_qr_code_by_browser(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ScanMetrics`
- **Returns (raw)**: `ApiResult[ScanMetrics, GetScanMetricsForQrCodeByBrowserErrorBody]`
- **Error**: `GetScanMetricsForQrCodeByBrowserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ScanMetrics` | `bitly/models/scan_metrics.py` |
| `GetScanMetricsForQrCodeByBrowserErrorBody` | `bitly/errors/get_scan_metrics_for_qr_code_by_browser_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.get_scan_metrics_for_qr_code_by_cities

- **Route**: `GET /qr-codes/{qrcode_id}/scans/cities`
- **Auth**: `bearer_auth`
- **Signature**: `def get_scan_metrics_for_qr_code_by_cities(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `CityScanMetrics`
- **Returns (raw)**: `ApiResult[CityScanMetrics, GetScanMetricsForQrCodeByCitiesErrorBody]`
- **Error**: `GetScanMetricsForQrCodeByCitiesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `CityScanMetrics` | `bitly/models/city_scan_metrics.py` |
| `GetScanMetricsForQrCodeByCitiesErrorBody` | `bitly/errors/get_scan_metrics_for_qr_code_by_cities_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.get_scan_metrics_for_qr_code_by_countries

- **Route**: `GET /qr-codes/{qrcode_id}/scans/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def get_scan_metrics_for_qr_code_by_countries(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ScanMetrics`
- **Returns (raw)**: `ApiResult[ScanMetrics, GetScanMetricsForQrCodeByCountriesErrorBody]`
- **Error**: `GetScanMetricsForQrCodeByCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ScanMetrics` | `bitly/models/scan_metrics.py` |
| `GetScanMetricsForQrCodeByCountriesErrorBody` | `bitly/errors/get_scan_metrics_for_qr_code_by_countries_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.get_scan_metrics_for_qr_code_by_devices_os

- **Route**: `GET /qr-codes/{qrcode_id}/scans/device_os`
- **Auth**: `bearer_auth`
- **Signature**: `def get_scan_metrics_for_qr_code_by_devices_os(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, size: int | None = 50, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `unit` — query · `units` — query · `size` — query · `unit_reference` — query
- **Returns (parsed)**: `ScanMetrics`
- **Returns (raw)**: `ApiResult[ScanMetrics, GetScanMetricsForQrCodeByDevicesOsErrorBody]`
- **Error**: `GetScanMetricsForQrCodeByDevicesOsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `ScanMetrics` | `bitly/models/scan_metrics.py` |
| `GetScanMetricsForQrCodeByDevicesOsErrorBody` | `bitly/errors/get_scan_metrics_for_qr_code_by_devices_os_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.get_scan_metrics_summary_for_qr_code

- **Route**: `GET /qr-codes/{qrcode_id}/scans/summary`
- **Auth**: `bearer_auth`
- **Signature**: `def get_scan_metrics_summary_for_qr_code(qrcode_id: str, *, unit: TimeUnitOrStr = TimeUnit.DAY, units: int = -1, unit_reference: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `unit` — query · `units` — query · `unit_reference` — query
- **Returns (parsed)**: `BitlinkScansSummary`
- **Returns (raw)**: `ApiResult[BitlinkScansSummary, GetScanMetricsSummaryForQrCodeErrorBody]`
- **Error**: `GetScanMetricsSummaryForQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeUnitOrStr` | `bitly/models/enums/time_unit.py` |
| `BitlinkScansSummary` | `bitly/models/bitlink_scans_summary.py` |
| `GetScanMetricsSummaryForQrCodeErrorBody` | `bitly/errors/get_scan_metrics_summary_for_qr_code_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.list_qr_minimal

- **Route**: `GET /groups/{group_guid}/qr-codes`
- **Auth**: `bearer_auth`
- **Signature**: `def list_qr_minimal(group_guid: str, *, has_render_customizations: HasRenderCustomizationsOrStr | None = HasRenderCustomizations.BOTH, size: int | None = 50, search_after: str | None = None, query: str | None = None, hostname_path_query: str | None = None, created_before: int | None = None, created_after: int | None = None, archived: ArchivedOrStr | None = Archived.OFF, creating_login: list[str] | None = None, qrc_type: list[QrcTypeOrStr] | None = None, is_gs1: IsGs1OrStr | None = IsGs1.BOTH, is_expired: IsExpiredOrStr | None = IsExpired.BOTH, has_expiration: HasExpirationOrStr | None = HasExpiration.BOTH, has_dynamic_routing: HasDynamicRoutingOrStr | None = HasDynamicRouting.BOTH, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`
- **Params**: `group_guid` — path · `has_render_customizations` — query · `size` — query · `search_after` — query · `query` — query · `hostname_path_query` — query · `created_before` — query · `created_after` — query · `archived` — query · `creating_login` — query · `qrc_type` — query · `is_gs1` — query · `is_expired` — query · `has_expiration` — query · `has_dynamic_routing` — query · `tags` — query
- **Returns (parsed)**: `QrCodesMinimal`
- **Returns (raw)**: `ApiResult[QrCodesMinimal, ListQrMinimalErrorBody]`
- **Error**: `ListQrMinimalErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HasRenderCustomizationsOrStr` | `bitly/models/enums/has_render_customizations.py` |
| `ArchivedOrStr` | `bitly/models/enums/archived.py` |
| `QrcTypeOrStr` | `bitly/models/enums/qrc_type.py` |
| `IsGs1OrStr` | `bitly/models/enums/is_gs1.py` |
| `IsExpiredOrStr` | `bitly/models/enums/is_expired.py` |
| `HasExpirationOrStr` | `bitly/models/enums/has_expiration.py` |
| `HasDynamicRoutingOrStr` | `bitly/models/enums/has_dynamic_routing.py` |
| `QrCodesMinimal` | `bitly/models/qr_codes_minimal.py` |
| `ListQrMinimalErrorBody` | `bitly/errors/list_qr_minimal_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.qr_codes.redirect_qr_code_destination

- **Route**: `PATCH /qr-codes/{qrcode_id}/redirect`
- **Auth**: `bearer_auth`
- **Signature**: `def redirect_qr_code_destination(qrcode_id: str, body: RedirectQrCodeRequest | RedirectQrCodeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`, `body`
- **Params**: `qrcode_id` — path · `body` — JSON body
- **Returns (parsed)**: `QrCodeMinimal`
- **Returns (raw)**: `ApiResult[QrCodeMinimal, RedirectQrCodeDestinationErrorBody]`
- **Error**: `RedirectQrCodeDestinationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 410, 422, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RedirectQrCodeRequest` | `bitly/models/redirect_qr_code_request.py` |
| `RedirectQrCodeRequestDict` | `bitly/models/redirect_qr_code_request.py` |
| `QrCodeMinimal` | `bitly/models/qr_code_minimal.py` |
| `RedirectQrCodeDestinationErrorBody` | `bitly/errors/redirect_qr_code_destination_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.qr_codes.update_qr_code_public

- **Route**: `PATCH /qr-codes/{qrcode_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_qr_code_public(qrcode_id: str, *, body: PublicUpdateQrCodeRequest | PublicUpdateQrCodeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path · `body` — JSON body
- **Returns (parsed)**: `QrCodeMinimal`
- **Returns (raw)**: `ApiResult[QrCodeMinimal, UpdateQrCodePublicErrorBody]`
- **Error**: `UpdateQrCodePublicErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicUpdateQrCodeRequest` | `bitly/models/public_update_qr_code_request.py` |
| `PublicUpdateQrCodeRequestDict` | `bitly/models/public_update_qr_code_request.py` |
| `QrCodeMinimal` | `bitly/models/qr_code_minimal.py` |
| `UpdateQrCodePublicErrorBody` | `bitly/errors/update_qr_code_public_error.py` |
| `Error` | `bitly/models/error.py` |

### client.qr_codes.update_qr_codes_by_group

- **Route**: `PATCH /groups/{group_guid}/qr-codes`
- **Auth**: `bearer_auth`
- **Signature**: `def update_qr_codes_by_group(group_guid: str, body: QrcBulkUpdateRequest | QrcBulkUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `group_guid`, `body`
- **Params**: `group_guid` — path · `body` — JSON body
- **Returns (parsed)**: `QrcBulkUpdate`
- **Returns (raw)**: `ApiResult[QrcBulkUpdate, UpdateQrCodesByGroupErrorBody]`
- **Error**: `UpdateQrCodesByGroupErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 410, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrcBulkUpdateRequest` | `bitly/models/qrc_bulk_update_request.py` |
| `QrcBulkUpdateRequestDict` | `bitly/models/qrc_bulk_update_request.py` |
| `QrcBulkUpdate` | `bitly/models/qrc_bulk_update.py` |
| `UpdateQrCodesByGroupErrorBody` | `bitly/errors/update_qr_codes_by_group_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.qr_codes.upgrade_qr_code_to_bitlink

- **Route**: `PUT /qr-codes/{qrcode_id}/to-bitlink`
- **Auth**: `bearer_auth`
- **Signature**: `def upgrade_qr_code_to_bitlink(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `qrcode_id`
- **Params**: `qrcode_id` — path
- **Returns (parsed)**: `BitlinkBody`
- **Returns (raw)**: `ApiResult[BitlinkBody, UpgradeQrCodeToBitlinkErrorBody]`
- **Error**: `UpgradeQrCodeToBitlinkErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 500] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BitlinkBody` | `bitly/models/bitlink_body.py` |
| `UpgradeQrCodeToBitlinkErrorBody` | `bitly/errors/upgrade_qr_code_to_bitlink_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

