<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stacks — operations

Accessor: `client.Stacks` · Source: `src/Contentstack/Api/Stacks.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStack

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `CreateStack(CreateStackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `Body`
- **Returns**: `StackModel`
- **Error**: `ApiException<CreateStackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStackOperationRequest` | `src/Contentstack/Requests/Stacks/CreateStackOperationRequest.cs` |
| `CreateStackRequest` | `src/Contentstack/Models/CreateStackRequest.cs` |
| `StackModel` | `src/Contentstack/Models/StackModel.cs` |
| `CreateStackError` | `src/Contentstack/Errors/CreateStackError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### DeleteStack

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `DeleteStack(DeleteStackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteStackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteStackRequest` | `src/Contentstack/Requests/Stacks/DeleteStackRequest.cs` |
| `DeleteStackError` | `src/Contentstack/Errors/DeleteStackError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### GetAllStacks

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `GetAllStacks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StackList`
- **Error**: `ApiException<GetAllStacksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StackList` | `src/Contentstack/Models/StackList.cs` |
| `GetAllStacksError` | `src/Contentstack/Errors/GetAllStacksError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### GetStack

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `GetStack(GetStackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`
- **Returns**: `StackModel`
- **Error**: `ApiException<GetStackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStackRequest` | `src/Contentstack/Requests/Stacks/GetStackRequest.cs` |
| `StackModel` | `src/Contentstack/Models/StackModel.cs` |
| `GetStackError` | `src/Contentstack/Errors/GetStackError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### UpdateStack

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `UpdateStack(UpdateStackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApiKey`, `Body`
- **Returns**: `StackModel`
- **Error**: `ApiException<UpdateStackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStackOperationRequest` | `src/Contentstack/Requests/Stacks/UpdateStackOperationRequest.cs` |
| `UpdateStackRequest` | `src/Contentstack/Models/UpdateStackRequest.cs` |
| `StackModel` | `src/Contentstack/Models/StackModel.cs` |
| `UpdateStackError` | `src/Contentstack/Errors/UpdateStackError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

