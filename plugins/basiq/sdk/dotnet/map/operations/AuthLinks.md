<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthLinks — operations

Accessor: `client.AuthLinks` · Source: `src/Basiq/Api/AuthLinks.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteAuthLink

- **Auth**: `options.ServicesToken`
- **Signature**: `DeleteAuthLink(DeleteAuthLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAuthLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersAuthLink400Error1([NotNullWhen(true)] out UsersAuthLink400Error1? value)` [400] · `TryGetUsersAuthLink401Error1([NotNullWhen(true)] out UsersAuthLink401Error1? value)` [401] · `TryGetUsersAuthLink404Error1([NotNullWhen(true)] out UsersAuthLink404Error1? value)` [404] · `TryGetUsersAuthLink500Error1([NotNullWhen(true)] out UsersAuthLink500Error1? value)` [500] · `TryGetUsersAuthLink503Error1([NotNullWhen(true)] out UsersAuthLink503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAuthLinkRequest` | `src/Basiq/Requests/AuthLinks/DeleteAuthLinkRequest.cs` |
| `DeleteAuthLinkError` | `src/Basiq/Errors/DeleteAuthLinkError.cs` |
| `UsersAuthLink400Error1` | `src/Basiq/Models/UsersAuthLink400Error1.cs` |
| `UsersAuthLink401Error1` | `src/Basiq/Models/UsersAuthLink401Error1.cs` |
| `UsersAuthLink404Error1` | `src/Basiq/Models/UsersAuthLink404Error1.cs` |
| `UsersAuthLink500Error1` | `src/Basiq/Models/UsersAuthLink500Error1.cs` |
| `UsersAuthLink503Error1` | `src/Basiq/Models/UsersAuthLink503Error1.cs` |

### GetAuthLink

- **Auth**: `options.ServicesToken`
- **Signature**: `GetAuthLink(GetAuthLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `UsersAuthLinkResponse1`
- **Error**: `ApiException<GetAuthLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersAuthLink400Error1([NotNullWhen(true)] out UsersAuthLink400Error1? value)` [400] · `TryGetUsersAuthLink401Error1([NotNullWhen(true)] out UsersAuthLink401Error1? value)` [401] · `TryGetUsersAuthLink403Error1([NotNullWhen(true)] out UsersAuthLink403Error1? value)` [403] · `TryGetUsersAuthLink404Error1([NotNullWhen(true)] out UsersAuthLink404Error1? value)` [404] · `TryGetUsersAuthLink410Error1([NotNullWhen(true)] out UsersAuthLink410Error1? value)` [410] · `TryGetUsersAuthLink500Error1([NotNullWhen(true)] out UsersAuthLink500Error1? value)` [500] · `TryGetUsersAuthLink503Error1([NotNullWhen(true)] out UsersAuthLink503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAuthLinkRequest` | `src/Basiq/Requests/AuthLinks/GetAuthLinkRequest.cs` |
| `UsersAuthLinkResponse1` | `src/Basiq/Models/UsersAuthLinkResponse1.cs` |
| `GetAuthLinkError` | `src/Basiq/Errors/GetAuthLinkError.cs` |
| `UsersAuthLink400Error1` | `src/Basiq/Models/UsersAuthLink400Error1.cs` |
| `UsersAuthLink401Error1` | `src/Basiq/Models/UsersAuthLink401Error1.cs` |
| `UsersAuthLink403Error1` | `src/Basiq/Models/UsersAuthLink403Error1.cs` |
| `UsersAuthLink404Error1` | `src/Basiq/Models/UsersAuthLink404Error1.cs` |
| `UsersAuthLink410Error1` | `src/Basiq/Models/UsersAuthLink410Error1.cs` |
| `UsersAuthLink500Error1` | `src/Basiq/Models/UsersAuthLink500Error1.cs` |
| `UsersAuthLink503Error1` | `src/Basiq/Models/UsersAuthLink503Error1.cs` |

### PostAuthLink

- **Auth**: `options.ServicesToken`
- **Signature**: `PostAuthLink(PostAuthLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `UsersAuthLinkResponse`
- **Error**: `ApiException<PostAuthLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersAuthLink400Error1([NotNullWhen(true)] out UsersAuthLink400Error1? value)` [400] · `TryGetUsersAuthLink401Error1([NotNullWhen(true)] out UsersAuthLink401Error1? value)` [401] · `TryGetUsersAuthLink403Error1([NotNullWhen(true)] out UsersAuthLink403Error1? value)` [403] · `TryGetUsersAuthLink404Error1([NotNullWhen(true)] out UsersAuthLink404Error1? value)` [404] · `TryGetUsersAuthLink500Error1([NotNullWhen(true)] out UsersAuthLink500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostAuthLinkRequest` | `src/Basiq/Requests/AuthLinks/PostAuthLinkRequest.cs` |
| `UsersAuthLinkRequest` | `src/Basiq/Models/UsersAuthLinkRequest.cs` |
| `UsersAuthLinkResponse` | `src/Basiq/Models/UsersAuthLinkResponse.cs` |
| `PostAuthLinkError` | `src/Basiq/Errors/PostAuthLinkError.cs` |
| `UsersAuthLink400Error1` | `src/Basiq/Models/UsersAuthLink400Error1.cs` |
| `UsersAuthLink401Error1` | `src/Basiq/Models/UsersAuthLink401Error1.cs` |
| `UsersAuthLink403Error1` | `src/Basiq/Models/UsersAuthLink403Error1.cs` |
| `UsersAuthLink404Error1` | `src/Basiq/Models/UsersAuthLink404Error1.cs` |
| `UsersAuthLink500Error1` | `src/Basiq/Models/UsersAuthLink500Error1.cs` |

