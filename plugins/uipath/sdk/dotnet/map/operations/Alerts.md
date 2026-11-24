<!-- Generated file — do not edit; regenerated with the SDK. -->

# Alerts — operations

Accessor: `client.Alerts` · Source: `src/UiPath/Api/Alerts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListAlerts

- **Auth**: `options.BearerAuth`
- **Signature**: `ListAlerts(ListAlertsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataAlertCollection`
- **Error**: `ApiException<ListAlertsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAlertsRequest` | `src/UiPath/Requests/Alerts/ListAlertsRequest.cs` |
| `ODataAlertCollection` | `src/UiPath/Models/ODataAlertCollection.cs` |
| `ListAlertsError` | `src/UiPath/Errors/ListAlertsError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

