<!-- Generated file — do not edit; regenerated with the SDK. -->

# MemberSecrets — operations

Accessor: `client.memberSecrets` · Source: `src/resources/member-secrets.ts` · 4 operations · Request and error types: namespace `MemberSecrets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMemberSecretV2MemberSecretsPost

- **Signature**: `createMemberSecretV2MemberSecretsPost(request: MemberSecrets.CreateMemberSecretV2MemberSecretsPostRequest, options?: RequestOptions): ApiPromise<MemberSecretItem, MemberSecrets.CreateMemberSecretV2MemberSecretsPostError>`
- **Wire**: `POST /v2/member-secrets`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MemberSecretItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `MemberSecrets.CreateMemberSecretV2MemberSecretsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MemberSecrets.CreateMemberSecretV2MemberSecretsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MemberSecretCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberSecretCreateRequest` | `memberSecretCreateRequestSchema` | `src/models/member-secret-create-request.ts` |
| `MemberSecretItem` | `memberSecretItemSchema` | `src/models/member-secret-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteMemberSecretV2MemberSecretsSecretIdDelete

- **Signature**: `deleteMemberSecretV2MemberSecretsSecretIdDelete(request: MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError>`
- **Wire**: `DELETE /v2/member-secrets/{secret_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `secretId` | `path` | `secret_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listMemberSecretsV2MemberSecretsGet

- **Signature**: `listMemberSecretsV2MemberSecretsGet(options?: RequestOptions): ApiPromise<MemberSecretsListResponse, MemberSecrets.ListMemberSecretsV2MemberSecretsGetError>`
- **Wire**: `GET /v2/member-secrets`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MemberSecretsListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `MemberSecrets.ListMemberSecretsV2MemberSecretsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberSecretsListResponse` | `memberSecretsListResponseSchema` | `src/models/member-secrets-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateMemberSecretV2MemberSecretsSecretIdPatch

- **Signature**: `updateMemberSecretV2MemberSecretsSecretIdPatch(request: MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest, options?: RequestOptions): ApiPromise<MemberSecretItem, MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError>`
- **Wire**: `PATCH /v2/member-secrets/{secret_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MemberSecretItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `secretId` | `path` | `secret_id` | `string` | yes |
| `body` | `body` | — | `MemberSecretUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberSecretUpdateRequest` | `memberSecretUpdateRequestSchema` | `src/models/member-secret-update-request.ts` |
| `MemberSecretItem` | `memberSecretItemSchema` | `src/models/member-secret-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

