<!-- Generated file — do not edit; regenerated with the SDK. -->

# Countries — operations

Accessor: `client.Countries` · Source: `src/Cloro/Api/Countries.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCountries

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCountries(GetCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `model` ← `Model`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `ApiException<GetCountriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationErrorCloroDevCountriesApi([NotNullWhen(true)] out ValidationErrorCloroDevCountriesApi? value)` [400] · `TryGetAuthenticationErrorCloroDevCountriesApi([NotNullWhen(true)] out AuthenticationErrorCloroDevCountriesApi? value)` [401] · `TryGetNotFoundErrorCloroDevCountriesApi([NotNullWhen(true)] out NotFoundErrorCloroDevCountriesApi? value)` [404] · `TryGetRateLimitErrorCloroDevCountriesApi([NotNullWhen(true)] out RateLimitErrorCloroDevCountriesApi? value)` [429] · `TryGetInternalErrorCloroDevCountriesApi([NotNullWhen(true)] out InternalErrorCloroDevCountriesApi? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCountriesRequest` | `src/Cloro/Requests/Countries/GetCountriesRequest.cs` |
| `Model` | `src/Cloro/Models/Enums/Model.cs` |
| `GetCountriesError` | `src/Cloro/Errors/GetCountriesError.cs` |
| `ValidationErrorCloroDevCountriesApi` | `src/Cloro/Models/ValidationErrorCloroDevCountriesApi.cs` |
| `AuthenticationErrorCloroDevCountriesApi` | `src/Cloro/Models/AuthenticationErrorCloroDevCountriesApi.cs` |
| `NotFoundErrorCloroDevCountriesApi` | `src/Cloro/Models/NotFoundErrorCloroDevCountriesApi.cs` |
| `RateLimitErrorCloroDevCountriesApi` | `src/Cloro/Models/RateLimitErrorCloroDevCountriesApi.cs` |
| `InternalErrorCloroDevCountriesApi` | `src/Cloro/Models/InternalErrorCloroDevCountriesApi.cs` |

