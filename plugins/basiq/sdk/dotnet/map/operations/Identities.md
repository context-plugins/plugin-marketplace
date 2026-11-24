<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identities — operations

Accessor: `client.Identities` · Source: `src/Basiq/Api/Identities.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUserIdentities

- **Auth**: `options.ServicesToken`
- **Signature**: `GetUserIdentities(GetUserIdentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `IdentitiesGetResponseResource`
- **Error**: `ApiException<GetUserIdentitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersIdentities400Error1([NotNullWhen(true)] out UsersIdentities400Error1? value)` [400] · `TryGetUsersIdentities403Error1([NotNullWhen(true)] out UsersIdentities403Error1? value)` [403] · `TryGetUsersIdentities500Error1([NotNullWhen(true)] out UsersIdentities500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserIdentitiesRequest` | `src/Basiq/Requests/Identities/GetUserIdentitiesRequest.cs` |
| `IdentitiesGetResponseResource` | `src/Basiq/Models/IdentitiesGetResponseResource.cs` |
| `GetUserIdentitiesError` | `src/Basiq/Errors/GetUserIdentitiesError.cs` |
| `UsersIdentities400Error1` | `src/Basiq/Models/UsersIdentities400Error1.cs` |
| `UsersIdentities403Error1` | `src/Basiq/Models/UsersIdentities403Error1.cs` |
| `UsersIdentities500Error1` | `src/Basiq/Models/UsersIdentities500Error1.cs` |

### GetUserIdentity

- **Auth**: `options.ServicesToken`
- **Signature**: `GetUserIdentity(GetUserIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `IdentityId`
- **Returns**: `UsersIdentitiesResponse`
- **Error**: `ApiException<GetUserIdentityError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersIdentities400Error1([NotNullWhen(true)] out UsersIdentities400Error1? value)` [400] · `TryGetUsersIdentities403Error1([NotNullWhen(true)] out UsersIdentities403Error1? value)` [403] · `TryGetUsersIdentities404Error1([NotNullWhen(true)] out UsersIdentities404Error1? value)` [404] · `TryGetUsersIdentities500Error1([NotNullWhen(true)] out UsersIdentities500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserIdentityRequest` | `src/Basiq/Requests/Identities/GetUserIdentityRequest.cs` |
| `UsersIdentitiesResponse` | `src/Basiq/Models/UsersIdentitiesResponse.cs` |
| `GetUserIdentityError` | `src/Basiq/Errors/GetUserIdentityError.cs` |
| `UsersIdentities400Error1` | `src/Basiq/Models/UsersIdentities400Error1.cs` |
| `UsersIdentities403Error1` | `src/Basiq/Models/UsersIdentities403Error1.cs` |
| `UsersIdentities404Error1` | `src/Basiq/Models/UsersIdentities404Error1.cs` |
| `UsersIdentities500Error1` | `src/Basiq/Models/UsersIdentities500Error1.cs` |

