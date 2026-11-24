<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFieldSettings — operations

Accessor: `client.CustomFieldSettings` · Source: `src/Asana/Api/CustomFieldSettings.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCustomFieldSettingsForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetCustomFieldSettingsForPortfolio(GetCustomFieldSettingsForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PortfoliosCustomFieldSettingsResponse`
- **Error**: `ApiException<GetCustomFieldSettingsForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomFieldSettingsForPortfolioRequest` | `src/Asana/Requests/CustomFieldSettings/GetCustomFieldSettingsForPortfolioRequest.cs` |
| `PortfoliosCustomFieldSettingsResponse` | `src/Asana/Models/PortfoliosCustomFieldSettingsResponse.cs` |
| `GetCustomFieldSettingsForPortfolioError` | `src/Asana/Errors/GetCustomFieldSettingsForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetCustomFieldSettingsForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetCustomFieldSettingsForProject(GetCustomFieldSettingsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ProjectsCustomFieldSettingsResponse`
- **Error**: `ApiException<GetCustomFieldSettingsForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomFieldSettingsForProjectRequest` | `src/Asana/Requests/CustomFieldSettings/GetCustomFieldSettingsForProjectRequest.cs` |
| `ProjectsCustomFieldSettingsResponse` | `src/Asana/Models/ProjectsCustomFieldSettingsResponse.cs` |
| `GetCustomFieldSettingsForProjectError` | `src/Asana/Errors/GetCustomFieldSettingsForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

