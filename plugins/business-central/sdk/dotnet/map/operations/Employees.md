<!-- Generated file — do not edit; regenerated with the SDK. -->

# Employees — operations

Accessor: `client.Employees` · Source: `src/Dynamics365BusinessCentral/Api/Employees.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListEmployees

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListEmployees(ListEmployeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`
- **Returns**: `CompaniesApiEmployeesResponse`
- **Error**: `ApiException<ListEmployeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEmployeesRequest` | `src/Dynamics365BusinessCentral/Requests/Employees/ListEmployeesRequest.cs` |
| `CompaniesApiEmployeesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiEmployeesResponse.cs` |
| `ListEmployeesError` | `src/Dynamics365BusinessCentral/Errors/ListEmployeesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

