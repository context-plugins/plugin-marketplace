<!-- Generated file — do not edit; regenerated with the SDK. -->

# Profile — operations

Accessor: `client.profile` · Source: `src/resources/profile.ts` · 6 operations · Request types: namespace `Profile`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createApiKey

- **Signature**: `createApiKey(request?: Profile.CreateApiKeyRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `POST /profile/apikey`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Profile.CreateApiKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileApikeyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileApikeyRequest` | `profileApikeyRequestSchema` | `src/models/profile-apikey-request.ts` |

### deleteApiKey

- **Signature**: `deleteApiKey(options?: RequestOptions): ApiPromise<ProfileApikeyResponse, ApiError>`
- **Wire**: `DELETE /profile/apikey`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileApikeyResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileApikeyResponse` | `profileApikeyResponseSchema` | `src/models/unions/profile-apikey-response.ts` |

### getApiKey

- **Signature**: `getApiKey(options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /profile/apikey`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getProfile

- **Signature**: `getProfile(options?: RequestOptions): ApiPromise<User, ApiError>`
- **Wire**: `GET /profile/user`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |

### updateUserLocale

- **Signature**: `updateUserLocale(request?: Profile.UpdateUserLocaleRequest, options?: RequestOptions): ApiPromise<ProfileUserLocaleResponse, ApiError>`
- **Wire**: `POST /profile/user/locale`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileUserLocaleResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Profile.UpdateUserLocaleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileUserLocaleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileUserLocaleRequest` | `profileUserLocaleRequestSchema` | `src/models/profile-user-locale-request.ts` |
| `ProfileUserLocaleResponse` | `profileUserLocaleResponseSchema` | `src/models/unions/profile-user-locale-response.ts` |

### updateUserName

- **Signature**: `updateUserName(request?: Profile.UpdateUserNameRequest, options?: RequestOptions): ApiPromise<ProfileUserNameResponse, ApiError>`
- **Wire**: `POST /profile/user/name`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileUserNameResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Profile.UpdateUserNameRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileUserNameRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileUserNameRequest` | `profileUserNameRequestSchema` | `src/models/profile-user-name-request.ts` |
| `ProfileUserNameResponse` | `profileUserNameResponseSchema` | `src/models/unions/profile-user-name-response.ts` |

