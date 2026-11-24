<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.QrCodes` · Source: `src/Bitly/Api/QrCodes.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateQrCodePublic

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateQrCodePublic(CreateQrCodePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `QrCodeMinimal`
- **Error**: `ApiException<CreateQrCodePublicError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateQrCodePublicRequest` | `src/Bitly/Requests/QrCodes/CreateQrCodePublicRequest.cs` |
| `PublicCreateQrCodeRequest` | `src/Bitly/Models/PublicCreateQrCodeRequest.cs` |
| `QrCodeMinimal` | `src/Bitly/Models/QrCodeMinimal.cs` |
| `CreateQrCodePublicError` | `src/Bitly/Errors/CreateQrCodePublicError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### CreateStaticQrCodePublic

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateStaticQrCodePublic(CreateStaticQrCodePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `PublicStaticQrCodeResponse`
- **Error**: `ApiException<CreateStaticQrCodePublicError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 406, 422, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStaticQrCodePublicRequest` | `src/Bitly/Requests/QrCodes/CreateStaticQrCodePublicRequest.cs` |
| `Format` | `src/Bitly/Models/Enums/Format.cs` |
| `Accept` | `src/Bitly/Models/Enums/Accept.cs` |
| `PublicCreateStaticQrCodeRequest` | `src/Bitly/Models/PublicCreateStaticQrCodeRequest.cs` |
| `PublicStaticQrCodeResponse` | `src/Bitly/Models/PublicStaticQrCodeResponse.cs` |
| `CreateStaticQrCodePublicError` | `src/Bitly/Errors/CreateStaticQrCodePublicError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### DeleteQrCode

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteQrCode(DeleteQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Returns**: `PublicDeleteQrCodeResponse`
- **Error**: `ApiException<DeleteQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteQrCodeRequest` | `src/Bitly/Requests/QrCodes/DeleteQrCodeRequest.cs` |
| `PublicDeleteQrCodeResponse` | `src/Bitly/Models/PublicDeleteQrCodeResponse.cs` |
| `DeleteQrCodeError` | `src/Bitly/Errors/DeleteQrCodeError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetQrCodeByIdPublic

- **Auth**: `options.BearerAuth`
- **Signature**: `GetQrCodeByIdPublic(GetQrCodeByIdPublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Returns**: `QrCodeDetails`
- **Error**: `ApiException<GetQrCodeByIdPublicError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQrCodeByIdPublicRequest` | `src/Bitly/Requests/QrCodes/GetQrCodeByIdPublicRequest.cs` |
| `QrCodeDetails` | `src/Bitly/Models/QrCodeDetails.cs` |
| `GetQrCodeByIdPublicError` | `src/Bitly/Errors/GetQrCodeByIdPublicError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetQrCodeImagePublic

- **Auth**: `options.BearerAuth`
- **Signature**: `GetQrCodeImagePublic(GetQrCodeImagePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `PublicQrCodeImageResponse`
- **Error**: `ApiException<GetQrCodeImagePublicError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetQrCodeImagePublicRequest` | `src/Bitly/Requests/QrCodes/GetQrCodeImagePublicRequest.cs` |
| `Format` | `src/Bitly/Models/Enums/Format.cs` |
| `PublicQrCodeImageResponse` | `src/Bitly/Models/PublicQrCodeImageResponse.cs` |
| `GetQrCodeImagePublicError` | `src/Bitly/Errors/GetQrCodeImagePublicError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetScanMetricsForQrCode

- **Auth**: `options.BearerAuth`
- **Signature**: `GetScanMetricsForQrCode(GetScanMetricsForQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `BitlinkScans`
- **Error**: `ApiException<GetScanMetricsForQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScanMetricsForQrCodeRequest` | `src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `BitlinkScans` | `src/Bitly/Models/BitlinkScans.cs` |
| `GetScanMetricsForQrCodeError` | `src/Bitly/Errors/GetScanMetricsForQrCodeError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetScanMetricsForQrCodeByBrowser

- **Auth**: `options.BearerAuth`
- **Signature**: `GetScanMetricsForQrCodeByBrowser(GetScanMetricsForQrCodeByBrowserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ScanMetrics`
- **Error**: `ApiException<GetScanMetricsForQrCodeByBrowserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScanMetricsForQrCodeByBrowserRequest` | `src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByBrowserRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ScanMetrics` | `src/Bitly/Models/ScanMetrics.cs` |
| `GetScanMetricsForQrCodeByBrowserError` | `src/Bitly/Errors/GetScanMetricsForQrCodeByBrowserError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetScanMetricsForQrCodeByCities

- **Auth**: `options.BearerAuth`
- **Signature**: `GetScanMetricsForQrCodeByCities(GetScanMetricsForQrCodeByCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `CityScanMetrics`
- **Error**: `ApiException<GetScanMetricsForQrCodeByCitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScanMetricsForQrCodeByCitiesRequest` | `src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByCitiesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `CityScanMetrics` | `src/Bitly/Models/CityScanMetrics.cs` |
| `GetScanMetricsForQrCodeByCitiesError` | `src/Bitly/Errors/GetScanMetricsForQrCodeByCitiesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetScanMetricsForQrCodeByCountries

- **Auth**: `options.BearerAuth`
- **Signature**: `GetScanMetricsForQrCodeByCountries(GetScanMetricsForQrCodeByCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ScanMetrics`
- **Error**: `ApiException<GetScanMetricsForQrCodeByCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScanMetricsForQrCodeByCountriesRequest` | `src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByCountriesRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ScanMetrics` | `src/Bitly/Models/ScanMetrics.cs` |
| `GetScanMetricsForQrCodeByCountriesError` | `src/Bitly/Errors/GetScanMetricsForQrCodeByCountriesError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetScanMetricsForQrCodeByDevicesOs

- **Auth**: `options.BearerAuth`
- **Signature**: `GetScanMetricsForQrCodeByDevicesOs(GetScanMetricsForQrCodeByDevicesOsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `size` ← `Size`, `unit_reference` ← `UnitReference`
- **Returns**: `ScanMetrics`
- **Error**: `ApiException<GetScanMetricsForQrCodeByDevicesOsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScanMetricsForQrCodeByDevicesOsRequest` | `src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByDevicesOsRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ScanMetrics` | `src/Bitly/Models/ScanMetrics.cs` |
| `GetScanMetricsForQrCodeByDevicesOsError` | `src/Bitly/Errors/GetScanMetricsForQrCodeByDevicesOsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetScanMetricsSummaryForQrCode

- **Auth**: `options.BearerAuth`
- **Signature**: `GetScanMetricsSummaryForQrCode(GetScanMetricsSummaryForQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `BitlinkScansSummary`
- **Error**: `ApiException<GetScanMetricsSummaryForQrCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScanMetricsSummaryForQrCodeRequest` | `src/Bitly/Requests/QrCodes/GetScanMetricsSummaryForQrCodeRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `BitlinkScansSummary` | `src/Bitly/Models/BitlinkScansSummary.cs` |
| `GetScanMetricsSummaryForQrCodeError` | `src/Bitly/Errors/GetScanMetricsSummaryForQrCodeError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### ListQrMinimal

- **Auth**: `options.BearerAuth`
- **Signature**: `ListQrMinimal(ListQrMinimalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`
- **Query params (wire ← C#)**: `has_render_customizations` ← `HasRenderCustomizations`, `size` ← `Size`, `search_after` ← `SearchAfter`, `query` ← `Query`, `hostname_path_query` ← `HostnamePathQuery`, `created_before` ← `CreatedBefore`, `created_after` ← `CreatedAfter`, `archived` ← `Archived`, `creating_login` ← `CreatingLogin`, `qrc_type` ← `QrcType`, `is_gs1` ← `IsGs1`, `is_expired` ← `IsExpired`, `has_expiration` ← `HasExpiration`, `has_dynamic_routing` ← `HasDynamicRouting`, `tags` ← `Tags`
- **Returns**: `QrCodesMinimal`
- **Error**: `ApiException<ListQrMinimalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQrMinimalRequest` | `src/Bitly/Requests/QrCodes/ListQrMinimalRequest.cs` |
| `HasRenderCustomizations` | `src/Bitly/Models/Enums/HasRenderCustomizations.cs` |
| `Archived` | `src/Bitly/Models/Enums/Archived.cs` |
| `QrcType` | `src/Bitly/Models/Enums/QrcType.cs` |
| `IsGs1` | `src/Bitly/Models/Enums/IsGs1.cs` |
| `IsExpired` | `src/Bitly/Models/Enums/IsExpired.cs` |
| `HasExpiration` | `src/Bitly/Models/Enums/HasExpiration.cs` |
| `HasDynamicRouting` | `src/Bitly/Models/Enums/HasDynamicRouting.cs` |
| `QrCodesMinimal` | `src/Bitly/Models/QrCodesMinimal.cs` |
| `ListQrMinimalError` | `src/Bitly/Errors/ListQrMinimalError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### RedirectQrCodeDestination

- **Auth**: `options.BearerAuth`
- **Signature**: `RedirectQrCodeDestination(RedirectQrCodeDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`, `Body`
- **Returns**: `QrCodeMinimal`
- **Error**: `ApiException<RedirectQrCodeDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 422, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RedirectQrCodeDestinationRequest` | `src/Bitly/Requests/QrCodes/RedirectQrCodeDestinationRequest.cs` |
| `RedirectQrCodeRequest` | `src/Bitly/Models/RedirectQrCodeRequest.cs` |
| `QrCodeMinimal` | `src/Bitly/Models/QrCodeMinimal.cs` |
| `RedirectQrCodeDestinationError` | `src/Bitly/Errors/RedirectQrCodeDestinationError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### UpdateQrCodePublic

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateQrCodePublic(UpdateQrCodePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Returns**: `QrCodeMinimal`
- **Error**: `ApiException<UpdateQrCodePublicError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateQrCodePublicRequest` | `src/Bitly/Requests/QrCodes/UpdateQrCodePublicRequest.cs` |
| `PublicUpdateQrCodeRequest` | `src/Bitly/Models/PublicUpdateQrCodeRequest.cs` |
| `QrCodeMinimal` | `src/Bitly/Models/QrCodeMinimal.cs` |
| `UpdateQrCodePublicError` | `src/Bitly/Errors/UpdateQrCodePublicError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### UpdateQrCodesByGroup

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateQrCodesByGroup(UpdateQrCodesByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GroupGuid`, `Body`
- **Returns**: `QrcBulkUpdate`
- **Error**: `ApiException<UpdateQrCodesByGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 410, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateQrCodesByGroupRequest` | `src/Bitly/Requests/QrCodes/UpdateQrCodesByGroupRequest.cs` |
| `QrcBulkUpdateRequest` | `src/Bitly/Models/QrcBulkUpdateRequest.cs` |
| `QrcBulkUpdate` | `src/Bitly/Models/QrcBulkUpdate.cs` |
| `UpdateQrCodesByGroupError` | `src/Bitly/Errors/UpdateQrCodesByGroupError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### UpgradeQrCodeToBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `UpgradeQrCodeToBitlink(UpgradeQrCodeToBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `QrcodeId`
- **Returns**: `BitlinkBody`
- **Error**: `ApiException<UpgradeQrCodeToBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 500] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpgradeQrCodeToBitlinkRequest` | `src/Bitly/Requests/QrCodes/UpgradeQrCodeToBitlinkRequest.cs` |
| `BitlinkBody` | `src/Bitly/Models/BitlinkBody.cs` |
| `UpgradeQrCodeToBitlinkError` | `src/Bitly/Errors/UpgradeQrCodeToBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

