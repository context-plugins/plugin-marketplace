<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpGeolocation — operations

Accessor: `client.DatabasesIpGeolocation` · Source: `src/WhoisFreaks/Api/DatabasesIpGeolocation.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbIpCity

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpCity(DbIpCityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbIpCityError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbIpCityRequest` | `src/WhoisFreaks/Requests/DatabasesIpGeolocation/DbIpCityRequest.cs` |
| `DbIpCityError` | `src/WhoisFreaks/Errors/DbIpCityError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbIpCityStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpCityStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SnapshotStatus`
- **Error**: `ApiException<DbIpCityStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `src/WhoisFreaks/Models/SnapshotStatus.cs` |
| `DbIpCityStatusError` | `src/WhoisFreaks/Errors/DbIpCityStatusError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbIpCountry

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpCountry(DbIpCountryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbIpCountryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbIpCountryRequest` | `src/WhoisFreaks/Requests/DatabasesIpGeolocation/DbIpCountryRequest.cs` |
| `DbIpCountryError` | `src/WhoisFreaks/Errors/DbIpCountryError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbIpCountryStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpCountryStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SnapshotStatus`
- **Error**: `ApiException<DbIpCountryStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `src/WhoisFreaks/Models/SnapshotStatus.cs` |
| `DbIpCountryStatusError` | `src/WhoisFreaks/Errors/DbIpCountryStatusError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

