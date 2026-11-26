<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profiles — operations

Accessor: `client.Profiles` · Source: `src/Dynamics365BusinessCentral/Api/Profiles.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListProfiles

- **Server group**: `DefaultBusinessCentralAutomationApiV20CompaniesApi`
- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListProfiles(ListProfilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Returns**: `CompaniesApiProfilesResponse`
- **Error**: `ApiException<ListProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProfilesRequest` | `src/Dynamics365BusinessCentral/Requests/Profiles/ListProfilesRequest.cs` |
| `CompaniesApiProfilesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiProfilesResponse.cs` |
| `ListProfilesError` | `src/Dynamics365BusinessCentral/Errors/ListProfilesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

