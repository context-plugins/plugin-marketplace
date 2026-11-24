<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profiles — operations

Accessor: `client.profiles` · Source: `src/resources/profiles.ts` · 5 operations · Request and error types: namespace `Profiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProfileProfilesPost

- **Signature**: `createProfileProfilesPost(request?: Profiles.CreateProfileProfilesPostRequest, options?: RequestOptions): ApiPromise<ProfileView, Profiles.CreateProfileProfilesPostError>`
- **Wire**: `POST /profiles`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Profiles.CreateProfileProfilesPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"insufficientCreditsError"` [402] `InsufficientCreditsError` · `"validationError"` [422] `ValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Profiles.CreateProfileProfilesPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileCreateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileCreateRequest` | `profileCreateRequestSchema` | `src/models/profile-create-request.ts` |
| `ProfileView` | `profileViewSchema` | `src/models/profile-view.ts` |
| `InsufficientCreditsError` | `insufficientCreditsErrorSchema` | `src/models/insufficient-credits-error.ts` |
| `ValidationError` | `validationErrorSchema` | `src/models/validation-error.ts` |

### deleteBrowserProfileProfilesProfileIdDelete

- **Signature**: `deleteBrowserProfileProfilesProfileIdDelete(request: Profiles.DeleteBrowserProfileProfilesProfileIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError>`
- **Wire**: `DELETE /profiles/{profile_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Profiles.DeleteBrowserProfileProfilesProfileIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | `profile_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getProfileProfilesProfileIdGet

- **Signature**: `getProfileProfilesProfileIdGet(request: Profiles.GetProfileProfilesProfileIdGetRequest, options?: RequestOptions): ApiPromise<ProfileView, Profiles.GetProfileProfilesProfileIdGetError>`
- **Wire**: `GET /profiles/{profile_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfileView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Profiles.GetProfileProfilesProfileIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"profileNotFoundError"` [404] `ProfileNotFoundError` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Profiles.GetProfileProfilesProfileIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | `profile_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileView` | `profileViewSchema` | `src/models/profile-view.ts` |
| `ProfileNotFoundError` | `profileNotFoundErrorSchema` | `src/models/profile-not-found-error.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listProfilesProfilesGet

- **Signature**: `listProfilesProfilesGet(request?: Profiles.ListProfilesProfilesGetRequest, options?: RequestOptions): ApiPromise<ProfileListResponse, Profiles.ListProfilesProfilesGetError>`
- **Wire**: `GET /profiles`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProfileListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Profiles.ListProfilesProfilesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Profiles.ListProfilesProfilesGetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no | `10` |
| `pageNumber` | `query` | `number` | no | `1` |
| `query` | `query` | `Query` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Query` | `querySchema` | `src/models/unions/query.ts` |
| `ProfileListResponse` | `profileListResponseSchema` | `src/models/profile-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateProfileProfilesProfileIdPatch

- **Signature**: `updateProfileProfilesProfileIdPatch(request: Profiles.UpdateProfileProfilesProfileIdPatchRequest, options?: RequestOptions): ApiPromise<ProfileView, Profiles.UpdateProfileProfilesProfileIdPatchError>`
- **Wire**: `PATCH /profiles/{profile_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Profiles.UpdateProfileProfilesProfileIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"profileNotFoundError"` [404] `ProfileNotFoundError` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Profiles.UpdateProfileProfilesProfileIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `profileId` | `path` | `profile_id` | `string` | yes |
| `body` | `body` | — | `ProfileUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileUpdateRequest` | `profileUpdateRequestSchema` | `src/models/profile-update-request.ts` |
| `ProfileView` | `profileViewSchema` | `src/models/profile-view.ts` |
| `ProfileNotFoundError` | `profileNotFoundErrorSchema` | `src/models/profile-not-found-error.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

