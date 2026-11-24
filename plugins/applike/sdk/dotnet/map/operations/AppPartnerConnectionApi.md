<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppPartnerConnectionApi — operations

Accessor: `client.AppPartnerConnectionApi` · Source: `src/Applike/Api/AppPartnerConnectionApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetManagementV1AppByAppIdConnectionByPartnerId

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetManagementV1AppByAppIdConnectionByPartnerId(GetManagementV1AppByAppIdConnectionByPartnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AppId`, `PartnerId`
- **Returns**: `AppPartnerConnection`
- **Error**: `ApiException<GetManagementV1AppByAppIdConnectionByPartnerIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetManagementV1AppByAppIdConnectionByPartnerIdRequest` | `src/Applike/Requests/AppPartnerConnectionApi/GetManagementV1AppByAppIdConnectionByPartnerIdRequest.cs` |
| `AppPartnerConnection` | `src/Applike/Models/AppPartnerConnection.cs` |
| `GetManagementV1AppByAppIdConnectionByPartnerIdError` | `src/Applike/Errors/GetManagementV1AppByAppIdConnectionByPartnerIdError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

### PutManagementV1AppByAppIdConnectionByPartnerId

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PutManagementV1AppByAppIdConnectionByPartnerId(PutManagementV1AppByAppIdConnectionByPartnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AppId`, `PartnerId`
- **Returns**: `AppPartnerConnection`
- **Error**: `ApiException<PutManagementV1AppByAppIdConnectionByPartnerIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutManagementV1AppByAppIdConnectionByPartnerIdRequest` | `src/Applike/Requests/AppPartnerConnectionApi/PutManagementV1AppByAppIdConnectionByPartnerIdRequest.cs` |
| `AppPartnerConnection` | `src/Applike/Models/AppPartnerConnection.cs` |
| `PutManagementV1AppByAppIdConnectionByPartnerIdError` | `src/Applike/Errors/PutManagementV1AppByAppIdConnectionByPartnerIdError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

