<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.Templates` · Source: `src/RelmCrm/Api/Templates.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTemplate

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateTemplate(CreateTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateTemplateRequest` | `src/RelmCrm/Requests/Templates/CreateTemplateRequest.cs` |
| `TemplatesRequest` | `src/RelmCrm/Models/TemplatesRequest.cs` |

### DeleteTemplate

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteTemplate(DeleteTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteTemplateRequest` | `src/RelmCrm/Requests/Templates/DeleteTemplateRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### GetTemplate

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetTemplate(GetTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetTemplateRequest` | `src/RelmCrm/Requests/Templates/GetTemplateRequest.cs` |

### ListTemplates

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### UpdateTemplate

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `UpdateTemplate(UpdateTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateTemplateRequest` | `src/RelmCrm/Requests/Templates/UpdateTemplateRequest.cs` |

