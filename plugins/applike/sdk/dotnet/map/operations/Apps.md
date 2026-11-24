<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.Apps` · Source: `src/Applike/Api/Apps.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostManagementV1App

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1App(PostManagementV1AppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AppOutput`
- **Error**: `ApiException<PostManagementV1AppError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1AppRequest` | `src/Applike/Requests/Apps/PostManagementV1AppRequest.cs` |
| `CreateAppRequest` | `src/Applike/Models/CreateAppRequest.cs` |
| `AppOutput` | `src/Applike/Models/AppOutput.cs` |
| `PostManagementV1AppError` | `src/Applike/Errors/PostManagementV1AppError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

### PostManagementV1Apps

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1Apps(PostManagementV1AppsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListAppsResponse`
- **Error**: `ApiException<PostManagementV1AppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1AppsRequest` | `src/Applike/Requests/Apps/PostManagementV1AppsRequest.cs` |
| `ListAppsRequest` | `src/Applike/Models/ListAppsRequest.cs` |
| `ListAppsResponse` | `src/Applike/Models/ListAppsResponse.cs` |
| `PostManagementV1AppsError` | `src/Applike/Errors/PostManagementV1AppsError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

