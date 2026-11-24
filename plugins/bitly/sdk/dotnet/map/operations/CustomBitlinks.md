<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomBitlinks — operations

Accessor: `client.CustomBitlinks` · Source: `src/Bitly/Api/CustomBitlinks.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddCustomBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `AddCustomBitlink(AddCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Error**: `ApiException<AddCustomBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 409, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddCustomBitlinkRequest` | `src/Bitly/Requests/CustomBitlinks/AddCustomBitlinkRequest.cs` |
| `AddCustomBitlink` | `src/Bitly/Models/AddCustomBitlink.cs` |
| `CustomBitlinkBitlyCustomBitlinksApi` | `src/Bitly/Models/CustomBitlinkBitlyCustomBitlinksApi.cs` |
| `AddCustomBitlinkError` | `src/Bitly/Errors/AddCustomBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetClicksForCustomBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `GetClicksForCustomBitlink(GetClicksForCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomBitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `Clicks`
- **Error**: `ApiException<GetClicksForCustomBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClicksForCustomBitlinkRequest` | `src/Bitly/Requests/CustomBitlinks/GetClicksForCustomBitlinkRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `Clicks` | `src/Bitly/Models/Clicks.cs` |
| `GetClicksForCustomBitlinkError` | `src/Bitly/Errors/GetClicksForCustomBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetCustomBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCustomBitlink(GetCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomBitlink`
- **Returns**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetCustomBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomBitlinkRequest` | `src/Bitly/Requests/CustomBitlinks/GetCustomBitlinkRequest.cs` |
| `CustomBitlinkBitlyCustomBitlinksApi` | `src/Bitly/Models/CustomBitlinkBitlyCustomBitlinksApi.cs` |
| `GetCustomBitlinkError` | `src/Bitly/Errors/GetCustomBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetCustomBitlinkMetricsByDestination

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCustomBitlinkMetricsByDestination(GetCustomBitlinkMetricsByDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomBitlink`
- **Query params (wire ← C#)**: `unit` ← `Unit`, `units` ← `Units`, `unit_reference` ← `UnitReference`
- **Returns**: `ClickMetricsBitlyCustomBitlinksApi`
- **Error**: `ApiException<GetCustomBitlinkMetricsByDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 410, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomBitlinkMetricsByDestinationRequest` | `src/Bitly/Requests/CustomBitlinks/GetCustomBitlinkMetricsByDestinationRequest.cs` |
| `TimeUnit` | `src/Bitly/Models/Enums/TimeUnit.cs` |
| `ClickMetricsBitlyCustomBitlinksApi` | `src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs` |
| `GetCustomBitlinkMetricsByDestinationError` | `src/Bitly/Errors/GetCustomBitlinkMetricsByDestinationError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### UpdateCustomBitlink

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateCustomBitlink(UpdateCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomBitlink`, `Body`
- **Returns**: `CustomBitlinkBitlyCustomBitlinksApi`
- **Error**: `ApiException<UpdateCustomBitlinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomBitlinkRequest` | `src/Bitly/Requests/CustomBitlinks/UpdateCustomBitlinkRequest.cs` |
| `UpdateCustomBitlink` | `src/Bitly/Models/UpdateCustomBitlink.cs` |
| `CustomBitlinkBitlyCustomBitlinksApi` | `src/Bitly/Models/CustomBitlinkBitlyCustomBitlinksApi.cs` |
| `UpdateCustomBitlinkError` | `src/Bitly/Errors/UpdateCustomBitlinkError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

