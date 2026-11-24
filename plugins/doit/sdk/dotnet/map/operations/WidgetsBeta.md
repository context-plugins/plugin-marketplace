<!-- Generated file — do not edit; regenerated with the SDK. -->

# WidgetsBeta — operations

Accessor: `client.WidgetsBeta` · Source: `src/DoiT/Api/WidgetsBeta.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetWidget

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetWidget(GetWidgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WidgetId`
- **Returns**: `Widget`
- **Error**: `ApiException<GetWidgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWidgetRequest` | `src/DoiT/Requests/WidgetsBeta/GetWidgetRequest.cs` |
| `Widget` | `src/DoiT/Models/Widget.cs` |
| `GetWidgetError` | `src/DoiT/Errors/GetWidgetError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListWidgets

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListWidgets(ListWidgetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `WidgetList`
- **Error**: `ApiException<ListWidgetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWidgetsRequest` | `src/DoiT/Requests/WidgetsBeta/ListWidgetsRequest.cs` |
| `WidgetList` | `src/DoiT/Models/WidgetList.cs` |
| `ListWidgetsError` | `src/DoiT/Errors/ListWidgetsError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

