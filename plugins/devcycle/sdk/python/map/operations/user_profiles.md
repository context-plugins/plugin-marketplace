<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserProfiles — operations

Accessor: `client.user_profiles` · Source: `dev_cycle/apis/user_profiles.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user_profiles.user_profiles_controller_create_or_update

- **Route**: `PATCH /v1/projects/{project}/userProfile/current`
- **Server**: `default`
- **Signature**: `def user_profiles_controller_create_or_update(project: str, body: UpdateUserProfileDto | UpdateUserProfileDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `ProjectUserProfile`
- **Returns (raw)**: `ApiResult[ProjectUserProfile, UserProfilesControllerCreateOrUpdateErrorBody]`
- **Error**: `UserProfilesControllerCreateOrUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateUserProfileDto` | `dev_cycle/models/update_user_profile_dto.py` |
| `UpdateUserProfileDtoDict` | `dev_cycle/models/update_user_profile_dto.py` |
| `ProjectUserProfile` | `dev_cycle/models/project_user_profile.py` |
| `UserProfilesControllerCreateOrUpdateErrorBody` | `dev_cycle/errors/user_profiles_controller_create_or_update_error.py` |

### client.user_profiles.user_profiles_controller_find_all

- **Route**: `GET /v1/projects/{project}/userProfile/current`
- **Server**: `default`
- **Signature**: `def user_profiles_controller_find_all(project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path
- **Returns (parsed)**: `ProjectUserProfile`
- **Returns (raw)**: `ApiResult[ProjectUserProfile, UserProfilesControllerFindAllErrorBody]`
- **Error**: `UserProfilesControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectUserProfile` | `dev_cycle/models/project_user_profile.py` |
| `UserProfilesControllerFindAllErrorBody` | `dev_cycle/errors/user_profiles_controller_find_all_error.py` |

