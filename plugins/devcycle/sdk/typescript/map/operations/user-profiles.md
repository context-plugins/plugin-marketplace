<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserProfiles — operations

Accessor: `client.userProfiles` · Source: `src/resources/user-profiles.ts` · 2 operations · Request and error types: namespace `UserProfiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### userProfilesControllerCreateOrUpdate

- **Signature**: `userProfilesControllerCreateOrUpdate(request: UserProfiles.UserProfilesControllerCreateOrUpdateRequest, options?: RequestOptions): ApiPromise<ProjectUserProfile, UserProfiles.UserProfilesControllerCreateOrUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/userProfile/current`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectUserProfile`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `UserProfiles.UserProfilesControllerCreateOrUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserProfiles.UserProfilesControllerCreateOrUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateUserProfileDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateUserProfileDto` | `updateUserProfileDtoSchema` | `src/models/update-user-profile-dto.ts` |
| `ProjectUserProfile` | `projectUserProfileSchema` | `src/models/project-user-profile.ts` |

### userProfilesControllerFindAll

- **Signature**: `userProfilesControllerFindAll(request: UserProfiles.UserProfilesControllerFindAllRequest, options?: RequestOptions): ApiPromise<ProjectUserProfile, UserProfiles.UserProfilesControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/userProfile/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectUserProfile`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `UserProfiles.UserProfilesControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserProfiles.UserProfilesControllerFindAllRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectUserProfile` | `projectUserProfileSchema` | `src/models/project-user-profile.ts` |

