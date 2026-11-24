<!-- Generated file — do not edit; regenerated with the SDK. -->

# Statements — operations

Accessor: `client.Statements` · Source: `src/Basiq/Api/Statements.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateStatement

- **Auth**: `options.ApiKey` OR `options.ServicesToken`
- **Signature**: `CreateStatement(CreateStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `InstitutionId`, `Statement`
- **Returns**: `UsersStatementsResponse`
- **Error**: `ApiException<CreateStatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersStatements400Error1([NotNullWhen(true)] out UsersStatements400Error1? value)` [400] · `TryGetUsersStatements403Error1([NotNullWhen(true)] out UsersStatements403Error1? value)` [403] · `TryGetUsersStatements404Error1([NotNullWhen(true)] out UsersStatements404Error1? value)` [404] · `TryGetUsersStatements500Error1([NotNullWhen(true)] out UsersStatements500Error1? value)` [500] · `TryGetUsersStatements503Error1([NotNullWhen(true)] out UsersStatements503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStatementRequest` | `src/Basiq/Requests/Statements/CreateStatementRequest.cs` |
| `UsersStatementsResponse` | `src/Basiq/Models/UsersStatementsResponse.cs` |
| `CreateStatementError` | `src/Basiq/Errors/CreateStatementError.cs` |
| `UsersStatements400Error1` | `src/Basiq/Models/UsersStatements400Error1.cs` |
| `UsersStatements403Error1` | `src/Basiq/Models/UsersStatements403Error1.cs` |
| `UsersStatements404Error1` | `src/Basiq/Models/UsersStatements404Error1.cs` |
| `UsersStatements500Error1` | `src/Basiq/Models/UsersStatements500Error1.cs` |
| `UsersStatements503Error1` | `src/Basiq/Models/UsersStatements503Error1.cs` |

