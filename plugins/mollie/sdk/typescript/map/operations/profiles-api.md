<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProfilesApi — operations

Accessor: `client.profilesApi` · Source: `src/resources/profiles-api.ts` · 6 operations · Request and error types: namespace `ProfilesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProfile

- **Signature**: `createProfile(request: ProfilesApi.CreateProfileRequest, options?: RequestOptions): ApiPromise<undefined, ProfilesApi.CreateProfileError>`
- **Wire**: `POST /v2/profiles`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ProfilesApi.CreateProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfilesApi.CreateProfileRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `ProfileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileRequest` | `profileRequestSchema` | `src/models/profile-request.ts` |

### deleteProfile

- **Signature**: `deleteProfile(request: ProfilesApi.DeleteProfileRequest, options?: RequestOptions): ApiPromise<undefined, ProfilesApi.DeleteProfileError>`
- **Wire**: `DELETE /v2/profiles/{profileId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ProfilesApi.DeleteProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error410"` [410] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfilesApi.DeleteProfileRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getCurrentProfile

- **Signature**: `getCurrentProfile(request: ProfilesApi.GetCurrentProfileRequest, options?: RequestOptions): ApiPromise<undefined, ProfilesApi.GetCurrentProfileError>`
- **Wire**: `GET /v2/profiles/me`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ProfilesApi.GetCurrentProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfilesApi.GetCurrentProfileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getProfile

- **Signature**: `getProfile(request: ProfilesApi.GetProfileRequest, options?: RequestOptions): ApiPromise<undefined, ProfilesApi.GetProfileError>`
- **Wire**: `GET /v2/profiles/{profileId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ProfilesApi.GetProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error410"` [410] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfilesApi.GetProfileRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listProfiles

- **Signature**: `listProfiles(request: ProfilesApi.ListProfilesRequest, options?: RequestOptions): ApiPromise<undefined, ProfilesApi.ListProfilesError>`
- **Wire**: `GET /v2/profiles`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ProfilesApi.ListProfilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfilesApi.ListProfilesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### updateProfile

- **Signature**: `updateProfile(request: ProfilesApi.UpdateProfileRequest, options?: RequestOptions): ApiPromise<undefined, ProfilesApi.UpdateProfileError>`
- **Wire**: `PATCH /v2/profiles/{profileId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `ProfilesApi.UpdateProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"error410"` [410] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProfilesApi.UpdateProfileRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2ProfilesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ProfilesRequest` | `v2ProfilesRequestSchema` | `src/models/v2-profiles-request.ts` |

