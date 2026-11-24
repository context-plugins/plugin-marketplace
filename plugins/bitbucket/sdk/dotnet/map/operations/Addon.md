<!-- Generated file — do not edit; regenerated with the SDK. -->

# Addon — operations

Accessor: `client.Addon` · Source: `src/Bitbucket/Api/Addon.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteAddon

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteAddon(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAddonError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAddonError` | `src/Bitbucket/Errors/DeleteAddonError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteAddonLinkersByLinkerKeyValues

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteAddonLinkersByLinkerKeyValues(DeleteAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkerKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAddonLinkersByLinkerKeyValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAddonLinkersByLinkerKeyValuesRequest` | `src/Bitbucket/Requests/Addon/DeleteAddonLinkersByLinkerKeyValuesRequest.cs` |
| `DeleteAddonLinkersByLinkerKeyValuesError` | `src/Bitbucket/Errors/DeleteAddonLinkersByLinkerKeyValuesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteAddonLinkersByLinkerKeyValuesByValueId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteAddonLinkersByLinkerKeyValuesByValueId(DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkerKey`, `ValueId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAddonLinkersByLinkerKeyValuesByValueIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest` | `src/Bitbucket/Requests/Addon/DeleteAddonLinkersByLinkerKeyValuesByValueIdRequest.cs` |
| `DeleteAddonLinkersByLinkerKeyValuesByValueIdError` | `src/Bitbucket/Errors/DeleteAddonLinkersByLinkerKeyValuesByValueIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetAddonLinkers

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAddonLinkers(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetAddonLinkersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAddonLinkersError` | `src/Bitbucket/Errors/GetAddonLinkersError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetAddonLinkersByLinkerKey

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAddonLinkersByLinkerKey(GetAddonLinkersByLinkerKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkerKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetAddonLinkersByLinkerKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAddonLinkersByLinkerKeyRequest` | `src/Bitbucket/Requests/Addon/GetAddonLinkersByLinkerKeyRequest.cs` |
| `GetAddonLinkersByLinkerKeyError` | `src/Bitbucket/Errors/GetAddonLinkersByLinkerKeyError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetAddonLinkersByLinkerKeyValues

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAddonLinkersByLinkerKeyValues(GetAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkerKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetAddonLinkersByLinkerKeyValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAddonLinkersByLinkerKeyValuesRequest` | `src/Bitbucket/Requests/Addon/GetAddonLinkersByLinkerKeyValuesRequest.cs` |
| `GetAddonLinkersByLinkerKeyValuesError` | `src/Bitbucket/Errors/GetAddonLinkersByLinkerKeyValuesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetAddonLinkersByLinkerKeyValuesByValueId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetAddonLinkersByLinkerKeyValuesByValueId(GetAddonLinkersByLinkerKeyValuesByValueIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkerKey`, `ValueId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetAddonLinkersByLinkerKeyValuesByValueIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAddonLinkersByLinkerKeyValuesByValueIdRequest` | `src/Bitbucket/Requests/Addon/GetAddonLinkersByLinkerKeyValuesByValueIdRequest.cs` |
| `GetAddonLinkersByLinkerKeyValuesByValueIdError` | `src/Bitbucket/Errors/GetAddonLinkersByLinkerKeyValuesByValueIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostAddonLinkersByLinkerKeyValues

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostAddonLinkersByLinkerKeyValues(PostAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkerKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostAddonLinkersByLinkerKeyValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostAddonLinkersByLinkerKeyValuesRequest` | `src/Bitbucket/Requests/Addon/PostAddonLinkersByLinkerKeyValuesRequest.cs` |
| `PostAddonLinkersByLinkerKeyValuesError` | `src/Bitbucket/Errors/PostAddonLinkersByLinkerKeyValuesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutAddon

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutAddon(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutAddonError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutAddonError` | `src/Bitbucket/Errors/PutAddonError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutAddonLinkersByLinkerKeyValues

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutAddonLinkersByLinkerKeyValues(PutAddonLinkersByLinkerKeyValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LinkerKey`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutAddonLinkersByLinkerKeyValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutAddonLinkersByLinkerKeyValuesRequest` | `src/Bitbucket/Requests/Addon/PutAddonLinkersByLinkerKeyValuesRequest.cs` |
| `PutAddonLinkersByLinkerKeyValuesError` | `src/Bitbucket/Errors/PutAddonLinkersByLinkerKeyValuesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

