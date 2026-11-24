<!-- Generated file — do not edit; regenerated with the SDK. -->

# FiltersApi — operations

Accessor: `client.FiltersApi` · Source: `src/Lusha/Api/FiltersApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompanyFilterTypes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanyFilterTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `FilterTypesDiscoveryResponse`
- **Error**: `ApiException<GetCompanyFilterTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FilterTypesDiscoveryResponse` | `src/Lusha/Models/FilterTypesDiscoveryResponse.cs` |
| `GetCompanyFilterTypesError` | `src/Lusha/Errors/GetCompanyFilterTypesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanyFilterValues

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanyFilterValues(GetCompanyFilterValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FilterType`
- **Query params (wire ← C#)**: `query` ← `Query`
- **Returns**: `FilterValuesResponse`
- **Error**: `ApiException<GetCompanyFilterValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanyFilterValuesRequest` | `src/Lusha/Requests/FiltersApi/GetCompanyFilterValuesRequest.cs` |
| `FilterType1` | `src/Lusha/Models/Enums/FilterType1.cs` |
| `FilterValuesResponse` | `src/Lusha/Models/FilterValuesResponse.cs` |
| `GetCompanyFilterValuesError` | `src/Lusha/Errors/GetCompanyFilterValuesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactFilterTypes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactFilterTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `FilterTypesDiscoveryResponse`
- **Error**: `ApiException<GetContactFilterTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FilterTypesDiscoveryResponse` | `src/Lusha/Models/FilterTypesDiscoveryResponse.cs` |
| `GetContactFilterTypesError` | `src/Lusha/Errors/GetContactFilterTypesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactFilterValues

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactFilterValues(GetContactFilterValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FilterType`
- **Query params (wire ← C#)**: `query` ← `Query`
- **Returns**: `FilterValuesResponse`
- **Error**: `ApiException<GetContactFilterValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactFilterValuesRequest` | `src/Lusha/Requests/FiltersApi/GetContactFilterValuesRequest.cs` |
| `FilterType` | `src/Lusha/Models/Enums/FilterType.cs` |
| `FilterValuesResponse` | `src/Lusha/Models/FilterValuesResponse.cs` |
| `GetContactFilterValuesError` | `src/Lusha/Errors/GetContactFilterValuesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

