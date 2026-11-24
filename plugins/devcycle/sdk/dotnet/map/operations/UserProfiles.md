<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserProfiles — operations

Accessor: `client.UserProfiles` · Source: `src/DevCycle/Api/UserProfiles.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UserProfilesControllerCreateOrUpdate

- **Signature**: `UserProfilesControllerCreateOrUpdate(UserProfilesControllerCreateOrUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `ProjectUserProfile`
- **Error**: `ApiException<UserProfilesControllerCreateOrUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UserProfilesControllerCreateOrUpdateRequest` | `src/DevCycle/Requests/UserProfiles/UserProfilesControllerCreateOrUpdateRequest.cs` |
| `UpdateUserProfileDto` | `src/DevCycle/Models/UpdateUserProfileDto.cs` |
| `ProjectUserProfile` | `src/DevCycle/Models/ProjectUserProfile.cs` |
| `UserProfilesControllerCreateOrUpdateError` | `src/DevCycle/Errors/UserProfilesControllerCreateOrUpdateError.cs` |

### UserProfilesControllerFindAll

- **Signature**: `UserProfilesControllerFindAll(UserProfilesControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Returns**: `ProjectUserProfile`
- **Error**: `ApiException<UserProfilesControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UserProfilesControllerFindAllRequest` | `src/DevCycle/Requests/UserProfiles/UserProfilesControllerFindAllRequest.cs` |
| `ProjectUserProfile` | `src/DevCycle/Models/ProjectUserProfile.cs` |
| `UserProfilesControllerFindAllError` | `src/DevCycle/Errors/UserProfilesControllerFindAllError.cs` |

