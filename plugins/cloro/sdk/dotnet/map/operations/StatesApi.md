<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatesApi — operations

Accessor: `client.StatesApi` · Source: `src/Cloro/Api/StatesApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetStates

- **Auth**: `options.BearerAuth`
- **Signature**: `GetStates(GetStatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`
- **Returns**: `IReadOnlyList<V1StatesResponse>`
- **Error**: `ApiException<GetStatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevCountriesApi([NotNullWhen(true)] out ValidationErrorCloroDevCountriesApi? value)` [400] · `TryGetAuthenticationErrorCloroDevCountriesApi([NotNullWhen(true)] out AuthenticationErrorCloroDevCountriesApi? value)` [401] · `TryGetRateLimitErrorCloroDevStatesApi([NotNullWhen(true)] out RateLimitErrorCloroDevStatesApi? value)` [429] · `TryGetInternalErrorCloroDevCountriesApi([NotNullWhen(true)] out InternalErrorCloroDevCountriesApi? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStatesRequest` | `src/Cloro/Requests/StatesApi/GetStatesRequest.cs` |
| `V1StatesResponse` | `src/Cloro/Models/V1StatesResponse.cs` |
| `GetStatesError` | `src/Cloro/Errors/GetStatesError.cs` |
| `ValidationErrorCloroDevCountriesApi` | `src/Cloro/Models/ValidationErrorCloroDevCountriesApi.cs` |
| `AuthenticationErrorCloroDevCountriesApi` | `src/Cloro/Models/AuthenticationErrorCloroDevCountriesApi.cs` |
| `RateLimitErrorCloroDevStatesApi` | `src/Cloro/Models/RateLimitErrorCloroDevStatesApi.cs` |
| `InternalErrorCloroDevCountriesApi` | `src/Cloro/Models/InternalErrorCloroDevCountriesApi.cs` |

