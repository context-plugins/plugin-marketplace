<!-- Generated file — do not edit; regenerated with the SDK. -->

# Consents — operations

Accessor: `client.Consents` · Source: `src/Basiq/Api/Consents.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteConsent

- **Auth**: `options.ServicesToken`
- **Signature**: `DeleteConsent(DeleteConsentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `ConsentId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteConsentError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConsents400Error1([NotNullWhen(true)] out UsersConsents400Error1? value)` [400] · `TryGetUsersConsents401Error1([NotNullWhen(true)] out UsersConsents401Error1? value)` [401] · `TryGetUsersConsents403Error1([NotNullWhen(true)] out UsersConsents403Error1? value)` [403] · `TryGetUsersConsents404Error1([NotNullWhen(true)] out UsersConsents404Error1? value)` [404] · `TryGetUsersConsents500Error1([NotNullWhen(true)] out UsersConsents500Error1? value)` [500] · `TryGetUsersConsents503Error1([NotNullWhen(true)] out UsersConsents503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteConsentRequest` | `src/Basiq/Requests/Consents/DeleteConsentRequest.cs` |
| `DeleteConsentError` | `src/Basiq/Errors/DeleteConsentError.cs` |
| `UsersConsents400Error1` | `src/Basiq/Models/UsersConsents400Error1.cs` |
| `UsersConsents401Error1` | `src/Basiq/Models/UsersConsents401Error1.cs` |
| `UsersConsents403Error1` | `src/Basiq/Models/UsersConsents403Error1.cs` |
| `UsersConsents404Error1` | `src/Basiq/Models/UsersConsents404Error1.cs` |
| `UsersConsents500Error1` | `src/Basiq/Models/UsersConsents500Error1.cs` |
| `UsersConsents503Error1` | `src/Basiq/Models/UsersConsents503Error1.cs` |

### GetConsents

- **Auth**: `options.ServicesToken`
- **Signature**: `GetConsents(GetConsentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `UsersConsentsResponse`
- **Error**: `ApiException<GetConsentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersConsents400Error1([NotNullWhen(true)] out UsersConsents400Error1? value)` [400] · `TryGetUsersConsents401Error1([NotNullWhen(true)] out UsersConsents401Error1? value)` [401] · `TryGetUsersConsents403Error1([NotNullWhen(true)] out UsersConsents403Error1? value)` [403] · `TryGetUsersConsents404Error1([NotNullWhen(true)] out UsersConsents404Error1? value)` [404] · `TryGetUsersConsents500Error1([NotNullWhen(true)] out UsersConsents500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetConsentsRequest` | `src/Basiq/Requests/Consents/GetConsentsRequest.cs` |
| `UsersConsentsResponse` | `src/Basiq/Models/UsersConsentsResponse.cs` |
| `GetConsentsError` | `src/Basiq/Errors/GetConsentsError.cs` |
| `UsersConsents400Error1` | `src/Basiq/Models/UsersConsents400Error1.cs` |
| `UsersConsents401Error1` | `src/Basiq/Models/UsersConsents401Error1.cs` |
| `UsersConsents403Error1` | `src/Basiq/Models/UsersConsents403Error1.cs` |
| `UsersConsents404Error1` | `src/Basiq/Models/UsersConsents404Error1.cs` |
| `UsersConsents500Error1` | `src/Basiq/Models/UsersConsents500Error1.cs` |

