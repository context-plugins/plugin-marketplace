<!-- Generated file — do not edit; regenerated with the SDK. -->

# PortfolioMemberships — operations

Accessor: `client.PortfolioMemberships` · Source: `src/Asana/Api/PortfolioMemberships.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPortfolioMembership

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetPortfolioMembership(GetPortfolioMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioMembershipGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfolioMembershipsResponse1`
- **Error**: `ApiException<GetPortfolioMembershipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPortfolioMembershipRequest` | `src/Asana/Requests/PortfolioMemberships/GetPortfolioMembershipRequest.cs` |
| `PortfolioMembershipsResponse1` | `src/Asana/Models/PortfolioMembershipsResponse1.cs` |
| `GetPortfolioMembershipError` | `src/Asana/Errors/GetPortfolioMembershipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetPortfolioMemberships

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetPortfolioMemberships(GetPortfolioMembershipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `portfolio` ← `Portfolio`, `workspace` ← `Workspace`, `user` ← `User`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PortfolioMembershipsResponse`
- **Error**: `ApiException<GetPortfolioMembershipsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPortfolioMembershipsRequest` | `src/Asana/Requests/PortfolioMemberships/GetPortfolioMembershipsRequest.cs` |
| `PortfolioMembershipsResponse` | `src/Asana/Models/PortfolioMembershipsResponse.cs` |
| `GetPortfolioMembershipsError` | `src/Asana/Errors/GetPortfolioMembershipsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetPortfolioMembershipsForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetPortfolioMembershipsForPortfolio(GetPortfolioMembershipsForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`
- **Query params (wire ← C#)**: `user` ← `User`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PortfoliosPortfolioMembershipsResponse`
- **Error**: `ApiException<GetPortfolioMembershipsForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPortfolioMembershipsForPortfolioRequest` | `src/Asana/Requests/PortfolioMemberships/GetPortfolioMembershipsForPortfolioRequest.cs` |
| `PortfoliosPortfolioMembershipsResponse` | `src/Asana/Models/PortfoliosPortfolioMembershipsResponse.cs` |
| `GetPortfolioMembershipsForPortfolioError` | `src/Asana/Errors/GetPortfolioMembershipsForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

