<!-- Generated file — do not edit; regenerated with the SDK. -->

# SecurityGroups — operations

Accessor: `client.SecurityGroups` · Source: `src/Dynamics365BusinessCentral/Api/SecurityGroups.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListSecurityGroups

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListSecurityGroups(ListSecurityGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiSecurityGroupsResponse`
- **Error**: `ApiException<ListSecurityGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSecurityGroupsRequest` | `src/Dynamics365BusinessCentral/Requests/SecurityGroups/ListSecurityGroupsRequest.cs` |
| `CompaniesApiSecurityGroupsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiSecurityGroupsResponse.cs` |
| `ListSecurityGroupsError` | `src/Dynamics365BusinessCentral/Errors/ListSecurityGroupsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

