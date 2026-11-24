<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.CustomFields` · Source: `src/Asana/Api/CustomFields.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomField

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateCustomField(CreateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `CustomFieldsResponse`
- **Error**: `ApiException<CreateCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomFieldRequest` | `src/Asana/Requests/CustomFields/CreateCustomFieldRequest.cs` |
| `CustomFieldsRequest` | `src/Asana/Models/CustomFieldsRequest.cs` |
| `CustomFieldsResponse` | `src/Asana/Models/CustomFieldsResponse.cs` |
| `CreateCustomFieldError` | `src/Asana/Errors/CreateCustomFieldError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateEnumOptionForCustomField

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateEnumOptionForCustomField(CreateEnumOptionForCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `CustomFieldsEnumOptionsResponse`
- **Error**: `ApiException<CreateEnumOptionForCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEnumOptionForCustomFieldRequest` | `src/Asana/Requests/CustomFields/CreateEnumOptionForCustomFieldRequest.cs` |
| `CustomFieldsEnumOptionsRequest` | `src/Asana/Models/CustomFieldsEnumOptionsRequest.cs` |
| `CustomFieldsEnumOptionsResponse` | `src/Asana/Models/CustomFieldsEnumOptionsResponse.cs` |
| `CreateEnumOptionForCustomFieldError` | `src/Asana/Errors/CreateEnumOptionForCustomFieldError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteCustomField

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteCustomField(DeleteCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `CustomFieldsResponse3`
- **Error**: `ApiException<DeleteCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomFieldRequest` | `src/Asana/Requests/CustomFields/DeleteCustomFieldRequest.cs` |
| `CustomFieldsResponse3` | `src/Asana/Models/CustomFieldsResponse3.cs` |
| `DeleteCustomFieldError` | `src/Asana/Errors/DeleteCustomFieldError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetCustomField

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetCustomField(GetCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `CustomFieldsResponse`
- **Error**: `ApiException<GetCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomFieldRequest` | `src/Asana/Requests/CustomFields/GetCustomFieldRequest.cs` |
| `CustomFieldsResponse` | `src/Asana/Models/CustomFieldsResponse.cs` |
| `GetCustomFieldError` | `src/Asana/Errors/GetCustomFieldError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetCustomFieldsForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetCustomFieldsForWorkspace(GetCustomFieldsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `WorkspacesCustomFieldsResponse`
- **Error**: `ApiException<GetCustomFieldsForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomFieldsForWorkspaceRequest` | `src/Asana/Requests/CustomFields/GetCustomFieldsForWorkspaceRequest.cs` |
| `WorkspacesCustomFieldsResponse` | `src/Asana/Models/WorkspacesCustomFieldsResponse.cs` |
| `GetCustomFieldsForWorkspaceError` | `src/Asana/Errors/GetCustomFieldsForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### InsertEnumOptionForCustomField

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `InsertEnumOptionForCustomField(InsertEnumOptionForCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `CustomFieldsEnumOptionsInsertResponse`
- **Error**: `ApiException<InsertEnumOptionForCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InsertEnumOptionForCustomFieldRequest` | `src/Asana/Requests/CustomFields/InsertEnumOptionForCustomFieldRequest.cs` |
| `CustomFieldsEnumOptionsInsertRequest` | `src/Asana/Models/CustomFieldsEnumOptionsInsertRequest.cs` |
| `CustomFieldsEnumOptionsInsertResponse` | `src/Asana/Models/CustomFieldsEnumOptionsInsertResponse.cs` |
| `InsertEnumOptionForCustomFieldError` | `src/Asana/Errors/InsertEnumOptionForCustomFieldError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateCustomField

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateCustomField(UpdateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `CustomFieldsResponse`
- **Error**: `ApiException<UpdateCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomFieldRequest` | `src/Asana/Requests/CustomFields/UpdateCustomFieldRequest.cs` |
| `CustomFieldsRequest` | `src/Asana/Models/CustomFieldsRequest.cs` |
| `CustomFieldsResponse` | `src/Asana/Models/CustomFieldsResponse.cs` |
| `UpdateCustomFieldError` | `src/Asana/Errors/UpdateCustomFieldError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateEnumOption

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateEnumOption(UpdateEnumOptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `EnumOptionGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `EnumOptionsResponse`
- **Error**: `ApiException<UpdateEnumOptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEnumOptionRequest` | `src/Asana/Requests/CustomFields/UpdateEnumOptionRequest.cs` |
| `EnumOptionsRequest` | `src/Asana/Models/EnumOptionsRequest.cs` |
| `EnumOptionsResponse` | `src/Asana/Models/EnumOptionsResponse.cs` |
| `UpdateEnumOptionError` | `src/Asana/Errors/UpdateEnumOptionError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

