<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignalsApi — operations

Accessor: `client.SignalsApi` · Source: `src/Lusha/Api/SignalsApi.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompanySignalFilterValues

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySignalFilterValues(GetCompanySignalFilterValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `FilterType`
- **Query params (wire ← C#)**: `query` ← `Query`
- **Returns**: `FilterValuesResponse`
- **Error**: `ApiException<GetCompanySignalFilterValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanySignalFilterValuesRequest` | `src/Lusha/Requests/SignalsApi/GetCompanySignalFilterValuesRequest.cs` |
| `FilterTypeLushaSignalsApi` | `src/Lusha/Models/Enums/FilterTypeLushaSignalsApi.cs` |
| `FilterValuesResponse` | `src/Lusha/Models/FilterValuesResponse.cs` |
| `GetCompanySignalFilterValuesError` | `src/Lusha/Errors/GetCompanySignalFilterValuesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanySignalFilters

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySignalFilters(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `FilterTypesDiscoveryResponse`
- **Error**: `ApiException<GetCompanySignalFiltersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FilterTypesDiscoveryResponse` | `src/Lusha/Models/FilterTypesDiscoveryResponse.cs` |
| `GetCompanySignalFiltersError` | `src/Lusha/Errors/GetCompanySignalFiltersError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanySignalScores

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySignalScores(GetCompanySignalScoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3SignalScoreCompaniesResponse`
- **Error**: `ApiException<GetCompanySignalScoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanySignalScoresRequest` | `src/Lusha/Requests/SignalsApi/GetCompanySignalScoresRequest.cs` |
| `V3SignalScoreCompaniesRequest` | `src/Lusha/Models/V3SignalScoreCompaniesRequest.cs` |
| `V3SignalScoreCompaniesResponse` | `src/Lusha/Models/V3SignalScoreCompaniesResponse.cs` |
| `GetCompanySignalScoresError` | `src/Lusha/Errors/GetCompanySignalScoresError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanySignalTypes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySignalTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CompanySignalTypesResponse`
- **Error**: `ApiException<GetCompanySignalTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompanySignalTypesResponse` | `src/Lusha/Models/CompanySignalTypesResponse.cs` |
| `GetCompanySignalTypesError` | `src/Lusha/Errors/GetCompanySignalTypesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanySignals

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySignals(GetCompanySignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3CompanySignalsResponse`
- **Error**: `ApiException<GetCompanySignalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanySignalsRequest` | `src/Lusha/Requests/SignalsApi/GetCompanySignalsRequest.cs` |
| `V3CompanySignalsRequest` | `src/Lusha/Models/V3CompanySignalsRequest.cs` |
| `V3CompanySignalsResponse` | `src/Lusha/Models/V3CompanySignalsResponse.cs` |
| `GetCompanySignalsError` | `src/Lusha/Errors/GetCompanySignalsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetCompanySignalsById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetCompanySignalsById(GetCompanySignalsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompanySignalsByIdResponse`
- **Error**: `ApiException<GetCompanySignalsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanySignalsByIdRequest` | `src/Lusha/Requests/SignalsApi/GetCompanySignalsByIdRequest.cs` |
| `CompanySignalsByIdRequest` | `src/Lusha/Models/CompanySignalsByIdRequest.cs` |
| `CompanySignalsByIdResponse` | `src/Lusha/Models/CompanySignalsByIdResponse.cs` |
| `GetCompanySignalsByIdError` | `src/Lusha/Errors/GetCompanySignalsByIdError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactSignalScores

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactSignalScores(GetContactSignalScoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3SignalScoreContactsResponse`
- **Error**: `ApiException<GetContactSignalScoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactSignalScoresRequest` | `src/Lusha/Requests/SignalsApi/GetContactSignalScoresRequest.cs` |
| `V3SignalScoreContactsRequest` | `src/Lusha/Models/V3SignalScoreContactsRequest.cs` |
| `V3SignalScoreContactsResponse` | `src/Lusha/Models/V3SignalScoreContactsResponse.cs` |
| `GetContactSignalScoresError` | `src/Lusha/Errors/GetContactSignalScoresError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactSignalTypes

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactSignalTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ContactSignalTypesResponse`
- **Error**: `ApiException<GetContactSignalTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactSignalTypesResponse` | `src/Lusha/Models/ContactSignalTypesResponse.cs` |
| `GetContactSignalTypesError` | `src/Lusha/Errors/GetContactSignalTypesError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactSignals

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactSignals(GetContactSignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V3ContactSignalsResponse`
- **Error**: `ApiException<GetContactSignalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactSignalsRequest` | `src/Lusha/Requests/SignalsApi/GetContactSignalsRequest.cs` |
| `V3ContactSignalsRequest` | `src/Lusha/Models/V3ContactSignalsRequest.cs` |
| `V3ContactSignalsResponse` | `src/Lusha/Models/V3ContactSignalsResponse.cs` |
| `GetContactSignalsError` | `src/Lusha/Errors/GetContactSignalsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetContactSignalsById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetContactSignalsById(GetContactSignalsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContactSignalsByIdResponse`
- **Error**: `ApiException<GetContactSignalsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContactSignalsByIdRequest` | `src/Lusha/Requests/SignalsApi/GetContactSignalsByIdRequest.cs` |
| `ContactSignalsByIdRequest` | `src/Lusha/Models/ContactSignalsByIdRequest.cs` |
| `ContactSignalsByIdResponse` | `src/Lusha/Models/ContactSignalsByIdResponse.cs` |
| `GetContactSignalsByIdError` | `src/Lusha/Errors/GetContactSignalsByIdError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### GetSignalOptions

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetSignalOptions(GetSignalOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ObjectType`
- **Returns**: `ApiSignalsFiltersResponse`
- **Error**: `ApiException<GetSignalOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSignalOptionsRequest` | `src/Lusha/Requests/SignalsApi/GetSignalOptionsRequest.cs` |
| `ObjectType` | `src/Lusha/Models/Enums/ObjectType.cs` |
| `ApiSignalsFiltersResponse` | `src/Lusha/Models/ApiSignalsFiltersResponse.cs` |
| `GetSignalOptionsError` | `src/Lusha/Errors/GetSignalOptionsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchCompanySignals

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchCompanySignals(SearchCompanySignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompanySignalsByIdResponse`
- **Error**: `ApiException<SearchCompanySignalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompanySignalsRequest` | `src/Lusha/Requests/SignalsApi/SearchCompanySignalsRequest.cs` |
| `CompanySignalsSearchRequest` | `src/Lusha/Models/CompanySignalsSearchRequest.cs` |
| `CompanySignalsByIdResponse` | `src/Lusha/Models/CompanySignalsByIdResponse.cs` |
| `SearchCompanySignalsError` | `src/Lusha/Errors/SearchCompanySignalsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

### SearchContactSignals

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchContactSignals(SearchContactSignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContactSignalsSearchResponse`
- **Error**: `ApiException<SearchContactSignalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchContactSignalsRequest` | `src/Lusha/Requests/SignalsApi/SearchContactSignalsRequest.cs` |
| `ContactSignalsSearchRequest` | `src/Lusha/Models/ContactSignalsSearchRequest.cs` |
| `ContactSignalsSearchResponse` | `src/Lusha/Models/ContactSignalsSearchResponse.cs` |
| `SearchContactSignalsError` | `src/Lusha/Errors/SearchContactSignalsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

