<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.Templates` · Source: `src/DoiT/Api/Templates.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCloudflowTemplate2

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudflowTemplate2(GetCloudflowTemplate2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`
- **Returns**: `CloudflowTemplate`
- **Error**: `ApiException<GetCloudflowTemplate2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudflowTemplate2Request` | `src/DoiT/Requests/Templates/GetCloudflowTemplate2Request.cs` |
| `CloudflowTemplate` | `src/DoiT/Models/CloudflowTemplate.cs` |
| `GetCloudflowTemplate2Error` | `src/DoiT/Errors/GetCloudflowTemplate2Error.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudflowTemplates2

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudflowTemplates2(ListCloudflowTemplates2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `CloudflowTemplateListResponse`
- **Error**: `ApiException<ListCloudflowTemplates2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudflowTemplates2Request` | `src/DoiT/Requests/Templates/ListCloudflowTemplates2Request.cs` |
| `CloudflowTemplateListResponse` | `src/DoiT/Models/CloudflowTemplateListResponse.cs` |
| `ListCloudflowTemplates2Error` | `src/DoiT/Errors/ListCloudflowTemplates2Error.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

