<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profiles — operations

Accessor: `client.profiles` · Source: `browser_use/apis/profiles.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.profiles.create_profile_profiles_post

- **Route**: `POST /profiles`
- **Auth**: `api_key_header`
- **Signature**: `def create_profile_profiles_post(*, body: ProfileCreateRequest | ProfileCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ProfileView`
- **Returns (raw)**: `ApiResult[ProfileView, CreateProfileProfilesPostErrorBody]`
- **Error**: `CreateProfileProfilesPostErrorBody` — **Case A (typed)**
- **Error arms**: `InsufficientCreditsError` [402] · `ValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProfileCreateRequest` | `browser_use/models/profile_create_request.py` |
| `ProfileCreateRequestDict` | `browser_use/models/profile_create_request.py` |
| `ProfileView` | `browser_use/models/profile_view.py` |
| `CreateProfileProfilesPostErrorBody` | `browser_use/errors/create_profile_profiles_post_error.py` |
| `InsufficientCreditsError` | `browser_use/models/insufficient_credits_error.py` |
| `ValidationError` | `browser_use/models/validation_error.py` |

### client.profiles.delete_browser_profile_profiles_profile_id_delete

- **Route**: `DELETE /profiles/{profile_id}`
- **Auth**: `api_key_header`
- **Signature**: `def delete_browser_profile_profiles_profile_id_delete(profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `profile_id`
- **Params**: `profile_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteBrowserProfileProfilesProfileIdDeleteErrorBody]`
- **Error**: `DeleteBrowserProfileProfilesProfileIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBrowserProfileProfilesProfileIdDeleteErrorBody` | `browser_use/errors/delete_browser_profile_profiles_profile_id_delete_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.profiles.get_profile_profiles_profile_id_get

- **Route**: `GET /profiles/{profile_id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_profile_profiles_profile_id_get(profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `profile_id`
- **Params**: `profile_id` — path
- **Returns (parsed)**: `ProfileView`
- **Returns (raw)**: `ApiResult[ProfileView, GetProfileProfilesProfileIdGetErrorBody]`
- **Error**: `GetProfileProfilesProfileIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ProfileNotFoundError` [404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProfileView` | `browser_use/models/profile_view.py` |
| `GetProfileProfilesProfileIdGetErrorBody` | `browser_use/errors/get_profile_profiles_profile_id_get_error.py` |
| `ProfileNotFoundError` | `browser_use/models/profile_not_found_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.profiles.list_profiles_profiles_get

- **Route**: `GET /profiles`
- **Auth**: `api_key_header`
- **Signature**: `def list_profiles_profiles_get(*, page_size: int | None = 10, page_number: int | None = 1, query: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_size` — query `pageSize` · `page_number` — query `pageNumber` · `query` — query
- **Returns (parsed)**: `ProfileListResponse`
- **Returns (raw)**: `ApiResult[ProfileListResponse, ListProfilesProfilesGetErrorBody]`
- **Error**: `ListProfilesProfilesGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProfileListResponse` | `browser_use/models/profile_list_response.py` |
| `ListProfilesProfilesGetErrorBody` | `browser_use/errors/list_profiles_profiles_get_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

### client.profiles.update_profile_profiles_profile_id_patch

- **Route**: `PATCH /profiles/{profile_id}`
- **Auth**: `api_key_header`
- **Signature**: `def update_profile_profiles_profile_id_patch(profile_id: UUID, body: ProfileUpdateRequest | ProfileUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `profile_id`, `body`
- **Params**: `profile_id` — path · `body` — JSON body
- **Returns (parsed)**: `ProfileView`
- **Returns (raw)**: `ApiResult[ProfileView, UpdateProfileProfilesProfileIdPatchErrorBody]`
- **Error**: `UpdateProfileProfilesProfileIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ProfileNotFoundError` [404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProfileUpdateRequest` | `browser_use/models/profile_update_request.py` |
| `ProfileUpdateRequestDict` | `browser_use/models/profile_update_request.py` |
| `ProfileView` | `browser_use/models/profile_view.py` |
| `UpdateProfileProfilesProfileIdPatchErrorBody` | `browser_use/errors/update_profile_profiles_profile_id_patch_error.py` |
| `ProfileNotFoundError` | `browser_use/models/profile_not_found_error.py` |
| `HttpValidationError` | `browser_use/models/http_validation_error.py` |

