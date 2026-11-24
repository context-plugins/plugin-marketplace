<!-- Generated file — do not edit; regenerated with the SDK. -->

# Variables — operations

Accessor: `client.Variables` · Source: `src/Contentstack/Api/Variables.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVariable

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateVariable(CreateVariableOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`, `Body`
- **Returns**: `Variable`
- **Error**: `ApiException<CreateVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVariableOperationRequest` | `src/Contentstack/Requests/Variables/CreateVariableOperationRequest.cs` |
| `CreateVariableRequest` | `src/Contentstack/Models/CreateVariableRequest.cs` |
| `Variable` | `src/Contentstack/Models/Variable.cs` |
| `CreateVariableError` | `src/Contentstack/Errors/CreateVariableError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetAllVariables

- **Server group**: `DefaultContentstackAutomateManagementAccountsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllVariables(GetAllVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`
- **Returns**: `VariableList`
- **Error**: `ApiException<GetAllVariablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllVariablesRequest` | `src/Contentstack/Requests/Variables/GetAllVariablesRequest.cs` |
| `VariableList` | `src/Contentstack/Models/VariableList.cs` |
| `GetAllVariablesError` | `src/Contentstack/Errors/GetAllVariablesError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

