<!-- Generated file — do not edit; regenerated with the SDK. -->

# VoiceProfiles — operations

Accessor: `client.voiceProfiles` · Source: `src/resources/voice-profiles.ts` · 5 operations · Request and error types: namespace `VoiceProfiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVoiceProfile

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createVoiceProfile(request: VoiceProfiles.CreateVoiceProfileRequestParams, options?: RequestOptions): ApiPromise<VoiceProfile, VoiceProfiles.CreateVoiceProfileError>`
- **Wire**: `POST /v1/brand-kits/{brand_kit_uid}/voice-profiles`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VoiceProfile`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `VoiceProfiles.CreateVoiceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceProfiles.CreateVoiceProfileRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `CreateVoiceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateVoiceProfileRequest` | `createVoiceProfileRequestSchema` | `src/models/create-voice-profile-request.ts` |
| `VoiceProfile` | `voiceProfileSchema` | `src/models/voice-profile.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteVoiceProfile

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteVoiceProfile(request: VoiceProfiles.DeleteVoiceProfileRequest, options?: RequestOptions): ApiPromise<undefined, VoiceProfiles.DeleteVoiceProfileError>`
- **Wire**: `DELETE /v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `VoiceProfiles.DeleteVoiceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceProfiles.DeleteVoiceProfileRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `profileUid` | `path` | `profile_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllVoiceProfiles

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllVoiceProfiles(request: VoiceProfiles.GetAllVoiceProfilesRequest, options?: RequestOptions): ApiPromise<VoiceProfileList, VoiceProfiles.GetAllVoiceProfilesError>`
- **Wire**: `GET /v1/brand-kits/{brand_kit_uid}/voice-profiles`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VoiceProfileList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `VoiceProfiles.GetAllVoiceProfilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceProfiles.GetAllVoiceProfilesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceProfileList` | `voiceProfileListSchema` | `src/models/voice-profile-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getVoiceProfile

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getVoiceProfile(request: VoiceProfiles.GetVoiceProfileRequest, options?: RequestOptions): ApiPromise<VoiceProfile, VoiceProfiles.GetVoiceProfileError>`
- **Wire**: `GET /v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VoiceProfile`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `VoiceProfiles.GetVoiceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceProfiles.GetVoiceProfileRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `profileUid` | `path` | `profile_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceProfile` | `voiceProfileSchema` | `src/models/voice-profile.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateVoiceProfile

- **Server**: `defaultContentstackBrandKitManagementBrandKitsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateVoiceProfile(request: VoiceProfiles.UpdateVoiceProfileRequest, options?: RequestOptions): ApiPromise<VoiceProfile, VoiceProfiles.UpdateVoiceProfileError>`
- **Wire**: `PUT /v1/brand-kits/{brand_kit_uid}/voice-profiles/{profile_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VoiceProfile`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `VoiceProfiles.UpdateVoiceProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VoiceProfiles.UpdateVoiceProfileRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandKitUid` | `path` | `brand_kit_uid` | `string` | yes |
| `profileUid` | `path` | `profile_uid` | `string` | yes |
| `organizationUid` | `header` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `CreateVoiceProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateVoiceProfileRequest` | `createVoiceProfileRequestSchema` | `src/models/create-voice-profile-request.ts` |
| `VoiceProfile` | `voiceProfileSchema` | `src/models/voice-profile.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

