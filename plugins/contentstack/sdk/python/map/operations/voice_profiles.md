<!-- Generated file — do not edit; regenerated with the SDK. -->

# VoiceProfiles — operations

Accessor: `client.voice_profiles` · Source: `contentstack/apis/voice_profiles.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.voice_profiles.create_voice_profile

- **Route**: `POST /v1/brand-kits/{brand_kit_uid}/voice-profiles`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def create_voice_profile(brand_kit_uid: str, organization_uid: str, body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `organization_uid`, `body`
- **Params**: `brand_kit_uid` — path · `organization_uid` — header · `body` — JSON body
- **Returns (parsed)**: `VoiceProfile`
- **Returns (raw)**: `ApiResult[VoiceProfile, CreateVoiceProfileErrorBody]`
- **Error**: `CreateVoiceProfileErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateVoiceProfileRequest` | `contentstack/models/create_voice_profile_request.py` |
| `CreateVoiceProfileRequestDict` | `contentstack/models/create_voice_profile_request.py` |
| `VoiceProfile` | `contentstack/models/voice_profile.py` |
| `CreateVoiceProfileErrorBody` | `contentstack/errors/create_voice_profile_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.voice_profiles.delete_voice_profile

- **Route**: `DELETE /v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def delete_voice_profile(brand_kit_uid: str, profile_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `profile_uid`, `organization_uid`
- **Params**: `brand_kit_uid` — path · `profile_uid` — path · `organization_uid` — header
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVoiceProfileErrorBody]`
- **Error**: `DeleteVoiceProfileErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteVoiceProfileErrorBody` | `contentstack/errors/delete_voice_profile_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.voice_profiles.get_all_voice_profiles

- **Route**: `GET /v1/brand-kits/{brand_kit_uid}/voice-profiles`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def get_all_voice_profiles(brand_kit_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `organization_uid`
- **Params**: `brand_kit_uid` — path · `organization_uid` — header
- **Returns (parsed)**: `VoiceProfileList`
- **Returns (raw)**: `ApiResult[VoiceProfileList, GetAllVoiceProfilesErrorBody]`
- **Error**: `GetAllVoiceProfilesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VoiceProfileList` | `contentstack/models/voice_profile_list.py` |
| `GetAllVoiceProfilesErrorBody` | `contentstack/errors/get_all_voice_profiles_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.voice_profiles.get_voice_profile

- **Route**: `GET /v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def get_voice_profile(brand_kit_uid: str, profile_uid: str, organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `profile_uid`, `organization_uid`
- **Params**: `brand_kit_uid` — path · `profile_uid` — path · `organization_uid` — header
- **Returns (parsed)**: `VoiceProfile`
- **Returns (raw)**: `ApiResult[VoiceProfile, GetVoiceProfileErrorBody]`
- **Error**: `GetVoiceProfileErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VoiceProfile` | `contentstack/models/voice_profile.py` |
| `GetVoiceProfileErrorBody` | `contentstack/errors/get_voice_profile_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.voice_profiles.update_voice_profile

- **Route**: `PUT /v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_brand_kit_management_brand_kits_api`
- **Signature**: `def update_voice_profile(brand_kit_uid: str, profile_uid: str, organization_uid: str, body: CreateVoiceProfileRequest | CreateVoiceProfileRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `brand_kit_uid`, `profile_uid`, `organization_uid`, `body`
- **Params**: `brand_kit_uid` — path · `profile_uid` — path · `organization_uid` — header · `body` — JSON body
- **Returns (parsed)**: `VoiceProfile`
- **Returns (raw)**: `ApiResult[VoiceProfile, UpdateVoiceProfileErrorBody]`
- **Error**: `UpdateVoiceProfileErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateVoiceProfileRequest` | `contentstack/models/create_voice_profile_request.py` |
| `CreateVoiceProfileRequestDict` | `contentstack/models/create_voice_profile_request.py` |
| `VoiceProfile` | `contentstack/models/voice_profile.py` |
| `UpdateVoiceProfileErrorBody` | `contentstack/errors/update_voice_profile_error.py` |
| `Error` | `contentstack/models/error.py` |

