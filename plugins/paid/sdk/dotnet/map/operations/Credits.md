<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credits — operations

Accessor: `client.Credits` · Source: `src/Paid/Api/Credits.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCreditCurrency

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateCreditCurrency(CreateCreditCurrencyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `CreditCurrency`
- **Error**: `ApiException<CreateCreditCurrencyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCreditCurrencyOperationRequest` | `src/Paid/Requests/Credits/CreateCreditCurrencyOperationRequest.cs` |
| `CreateCreditCurrencyRequest` | `src/Paid/Models/CreateCreditCurrencyRequest.cs` |
| `CreditCurrency` | `src/Paid/Models/CreditCurrency.cs` |
| `CreateCreditCurrencyError` | `src/Paid/Errors/CreateCreditCurrencyError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListCreditCurrencies

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListCreditCurrencies(ListCreditCurrenciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `status` ← `Status`
- **Returns**: `CreditCurrencyListResponse`
- **Error**: `ApiException<ListCreditCurrenciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCreditCurrenciesRequest` | `src/Paid/Requests/Credits/ListCreditCurrenciesRequest.cs` |
| `CreditsCurrenciesGetParametersStatus` | `src/Paid/Models/Enums/CreditsCurrenciesGetParametersStatus.cs` |
| `CreditCurrencyListResponse` | `src/Paid/Models/CreditCurrencyListResponse.cs` |
| `ListCreditCurrenciesError` | `src/Paid/Errors/ListCreditCurrenciesError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateCreditCurrencyById

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateCreditCurrencyById(UpdateCreditCurrencyByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CreditCurrency`
- **Error**: `ApiException<UpdateCreditCurrencyByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCreditCurrencyByIdRequest` | `src/Paid/Requests/Credits/UpdateCreditCurrencyByIdRequest.cs` |
| `UpdateCreditCurrencyRequest` | `src/Paid/Models/UpdateCreditCurrencyRequest.cs` |
| `CreditCurrency` | `src/Paid/Models/CreditCurrency.cs` |
| `UpdateCreditCurrencyByIdError` | `src/Paid/Errors/UpdateCreditCurrencyByIdError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

