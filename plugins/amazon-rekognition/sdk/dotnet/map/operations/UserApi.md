<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.UserApi` · Source: `src/AmazonRekognition/Api/UserApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUser

- **Auth**: `options.Sigv4`
- **Signature**: `CreateUser(CreateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUserOperationRequest` | `src/AmazonRekognition/Requests/UserApi/CreateUserOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionUserApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionUserApi.cs` |
| `CreateUserError` | `src/AmazonRekognition/Errors/CreateUserError.cs` |

### DeleteUser

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteUser(DeleteUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUserOperationRequest` | `src/AmazonRekognition/Requests/UserApi/DeleteUserOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionUserApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionUserApi.cs` |
| `DeleteUserError` | `src/AmazonRekognition/Errors/DeleteUserError.cs` |

### ListUsers

- **Auth**: `options.Sigv4`
- **Signature**: `ListUsers(ListUsersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUsersOperationRequest` | `src/AmazonRekognition/Requests/UserApi/ListUsersOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionUserApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionUserApi.cs` |
| `ListUsersError` | `src/AmazonRekognition/Errors/ListUsersError.cs` |

### SearchUsers

- **Auth**: `options.Sigv4`
- **Signature**: `SearchUsers(SearchUsersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SearchUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchUsersOperationRequest` | `src/AmazonRekognition/Requests/UserApi/SearchUsersOperationRequest.cs` |
| `XAmzTarget3AmazonRekognitionUserApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget3AmazonRekognitionUserApi.cs` |
| `SearchUsersError` | `src/AmazonRekognition/Errors/SearchUsersError.cs` |

### SearchUsersByImage

- **Auth**: `options.Sigv4`
- **Signature**: `SearchUsersByImage(SearchUsersByImageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SearchUsersByImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchUsersByImageOperationRequest` | `src/AmazonRekognition/Requests/UserApi/SearchUsersByImageOperationRequest.cs` |
| `XAmzTarget4AmazonRekognitionUserApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget4AmazonRekognitionUserApi.cs` |
| `SearchUsersByImageError` | `src/AmazonRekognition/Errors/SearchUsersByImageError.cs` |

