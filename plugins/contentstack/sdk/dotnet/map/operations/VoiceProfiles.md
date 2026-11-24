<!-- Generated file — do not edit; regenerated with the SDK. -->

# VoiceProfiles — operations

Accessor: `client.VoiceProfiles` · Source: `src/Contentstack/Api/VoiceProfiles.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVoiceProfile

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateVoiceProfile(CreateVoiceProfileOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `OrganizationUid`, `Body`
- **Returns**: `VoiceProfile`
- **Error**: `ApiException<CreateVoiceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVoiceProfileOperationRequest` | `src/Contentstack/Requests/VoiceProfiles/CreateVoiceProfileOperationRequest.cs` |
| `CreateVoiceProfileRequest` | `src/Contentstack/Models/CreateVoiceProfileRequest.cs` |
| `VoiceProfile` | `src/Contentstack/Models/VoiceProfile.cs` |
| `CreateVoiceProfileError` | `src/Contentstack/Errors/CreateVoiceProfileError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### DeleteVoiceProfile

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteVoiceProfile(DeleteVoiceProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `ProfileUid`, `OrganizationUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVoiceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVoiceProfileRequest` | `src/Contentstack/Requests/VoiceProfiles/DeleteVoiceProfileRequest.cs` |
| `DeleteVoiceProfileError` | `src/Contentstack/Errors/DeleteVoiceProfileError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetAllVoiceProfiles

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllVoiceProfiles(GetAllVoiceProfilesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `OrganizationUid`
- **Returns**: `VoiceProfileList`
- **Error**: `ApiException<GetAllVoiceProfilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllVoiceProfilesRequest` | `src/Contentstack/Requests/VoiceProfiles/GetAllVoiceProfilesRequest.cs` |
| `VoiceProfileList` | `src/Contentstack/Models/VoiceProfileList.cs` |
| `GetAllVoiceProfilesError` | `src/Contentstack/Errors/GetAllVoiceProfilesError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetVoiceProfile

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetVoiceProfile(GetVoiceProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `ProfileUid`, `OrganizationUid`
- **Returns**: `VoiceProfile`
- **Error**: `ApiException<GetVoiceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVoiceProfileRequest` | `src/Contentstack/Requests/VoiceProfiles/GetVoiceProfileRequest.cs` |
| `VoiceProfile` | `src/Contentstack/Models/VoiceProfile.cs` |
| `GetVoiceProfileError` | `src/Contentstack/Errors/GetVoiceProfileError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### UpdateVoiceProfile

- **Server group**: `DefaultContentstackBrandKitManagementBrandKitsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateVoiceProfile(UpdateVoiceProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BrandKitUid`, `ProfileUid`, `OrganizationUid`, `Body`
- **Returns**: `VoiceProfile`
- **Error**: `ApiException<UpdateVoiceProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVoiceProfileRequest` | `src/Contentstack/Requests/VoiceProfiles/UpdateVoiceProfileRequest.cs` |
| `CreateVoiceProfileRequest` | `src/Contentstack/Models/CreateVoiceProfileRequest.cs` |
| `VoiceProfile` | `src/Contentstack/Models/VoiceProfile.cs` |
| `UpdateVoiceProfileError` | `src/Contentstack/Errors/UpdateVoiceProfileError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

