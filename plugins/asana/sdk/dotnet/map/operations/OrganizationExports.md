<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationExports — operations

Accessor: `client.OrganizationExports` · Source: `src/Asana/Api/OrganizationExports.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateOrganizationExport

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateOrganizationExport(CreateOrganizationExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `OrganizationExportsResponse`
- **Error**: `ApiException<CreateOrganizationExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrganizationExportRequest` | `src/Asana/Requests/OrganizationExports/CreateOrganizationExportRequest.cs` |
| `OrganizationExportsRequest` | `src/Asana/Models/OrganizationExportsRequest.cs` |
| `OrganizationExportsResponse` | `src/Asana/Models/OrganizationExportsResponse.cs` |
| `CreateOrganizationExportError` | `src/Asana/Errors/CreateOrganizationExportError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetOrganizationExport

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetOrganizationExport(GetOrganizationExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationExportGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `OrganizationExportsResponse`
- **Error**: `ApiException<GetOrganizationExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOrganizationExportRequest` | `src/Asana/Requests/OrganizationExports/GetOrganizationExportRequest.cs` |
| `OrganizationExportsResponse` | `src/Asana/Models/OrganizationExportsResponse.cs` |
| `GetOrganizationExportError` | `src/Asana/Errors/GetOrganizationExportError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

