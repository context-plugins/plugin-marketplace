<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.Apps` · Source: `src/Justtrack/Api/Apps.cs` · 2 operations

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
| `PostManagementV1AppRequest` | `src/Justtrack/Requests/Apps/PostManagementV1AppRequest.cs` |
| `CreateAppRequest` | `src/Justtrack/Models/CreateAppRequest.cs` |
| `AppOutput` | `src/Justtrack/Models/AppOutput.cs` |
| `PostManagementV1AppError` | `src/Justtrack/Errors/PostManagementV1AppError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

### PostManagementV1Apps

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1Apps(PostManagementV1AppsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListAppsResponse`
- **Error**: `ApiException<PostManagementV1AppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1AppsRequest` | `src/Justtrack/Requests/Apps/PostManagementV1AppsRequest.cs` |
| `ListAppsRequest` | `src/Justtrack/Models/ListAppsRequest.cs` |
| `ListAppsResponse` | `src/Justtrack/Models/ListAppsResponse.cs` |
| `PostManagementV1AppsError` | `src/Justtrack/Errors/PostManagementV1AppsError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

