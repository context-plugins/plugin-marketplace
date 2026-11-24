<!-- Generated file — do not edit; regenerated with the SDK. -->

# BrandKits — operations

Accessor: `client.BrandKits` · Source: `src/Contentstack/Api/BrandKits.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBrandKit

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateBrandKit(CreateBrandKitOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `Body`
- **Returns**: `BrandKit`
- **Error**: `ApiException<CreateBrandKitError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBrandKitOperationRequest` | `src/Contentstack/Requests/BrandKits/CreateBrandKitOperationRequest.cs` |
| `CreateBrandKitRequest` | `src/Contentstack/Models/CreateBrandKitRequest.cs` |
| `BrandKit` | `src/Contentstack/Models/BrandKit.cs` |
| `CreateBrandKitError` | `src/Contentstack/Errors/CreateBrandKitError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### DeleteBrandKit

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteBrandKit(DeleteBrandKitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `OrganizationUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBrandKitError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBrandKitRequest` | `src/Contentstack/Requests/BrandKits/DeleteBrandKitRequest.cs` |
| `DeleteBrandKitError` | `src/Contentstack/Errors/DeleteBrandKitError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetAllBrandKits

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllBrandKits(GetAllBrandKitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`
- **Query params (wire ← C#)**: `skip` ← `Skip`, `limit` ← `Limit`
- **Returns**: `BrandKitList`
- **Error**: `ApiException<GetAllBrandKitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllBrandKitsRequest` | `src/Contentstack/Requests/BrandKits/GetAllBrandKitsRequest.cs` |
| `BrandKitList` | `src/Contentstack/Models/BrandKitList.cs` |
| `GetAllBrandKitsError` | `src/Contentstack/Errors/GetAllBrandKitsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetBrandKit

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetBrandKit(GetBrandKitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `OrganizationUid`
- **Returns**: `BrandKit`
- **Error**: `ApiException<GetBrandKitError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBrandKitRequest` | `src/Contentstack/Requests/BrandKits/GetBrandKitRequest.cs` |
| `BrandKit` | `src/Contentstack/Models/BrandKit.cs` |
| `GetBrandKitError` | `src/Contentstack/Errors/GetBrandKitError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### UpdateBrandKit

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateBrandKit(UpdateBrandKitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `OrganizationUid`, `Body`
- **Returns**: `BrandKit`
- **Error**: `ApiException<UpdateBrandKitError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBrandKitRequest` | `src/Contentstack/Requests/BrandKits/UpdateBrandKitRequest.cs` |
| `CreateBrandKitRequest` | `src/Contentstack/Models/CreateBrandKitRequest.cs` |
| `BrandKit` | `src/Contentstack/Models/BrandKit.cs` |
| `UpdateBrandKitError` | `src/Contentstack/Errors/UpdateBrandKitError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

