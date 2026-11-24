<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkspaceApi — operations

Accessor: `client.workspaceApi` · Source: `src/resources/workspace-api.ts` · 9 operations · Request and error types: namespace `WorkspaceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### disableIdentityVerification

- **Signature**: `disableIdentityVerification(request: WorkspaceApi.DisableIdentityVerificationRequest, options?: RequestOptions): ApiPromise<ApiV1ManageProjectIdentityResponse2, WorkspaceApi.DisableIdentityVerificationError>`
- **Wire**: `DELETE /api/v1/manage/project/identity`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageProjectIdentityResponse2`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.DisableIdentityVerificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceApi.DisableIdentityVerificationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ConfirmTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTarget` | `confirmTargetSchema` | `src/models/confirm-target.ts` |
| `ApiV1ManageProjectIdentityResponse2` | `apiV1ManageProjectIdentityResponse2Schema` | `src/models/api-v1-manage-project-identity-response2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### enableIdentityVerification

- **Signature**: `enableIdentityVerification(request?: WorkspaceApi.EnableIdentityVerificationRequest, options?: RequestOptions): ApiPromise<ApiV1ManageProjectIdentityResponse1, WorkspaceApi.EnableIdentityVerificationError>`
- **Wire**: `POST /api/v1/manage/project/identity`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageProjectIdentityResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.EnableIdentityVerificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceApi.EnableIdentityVerificationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageProjectIdentityResponse1` | `apiV1ManageProjectIdentityResponse1Schema` | `src/models/api-v1-manage-project-identity-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCodeSyncPolicy

- **Signature**: `getCodeSyncPolicy(options?: RequestOptions): ApiPromise<ApiV1ManageProjectCodeSyncResponse, WorkspaceApi.GetCodeSyncPolicyError>`
- **Wire**: `GET /api/v1/manage/project/code-sync`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageProjectCodeSyncResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.GetCodeSyncPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageProjectCodeSyncResponse` | `apiV1ManageProjectCodeSyncResponseSchema` | `src/models/api-v1-manage-project-code-sync-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getIdentityVerification

- **Signature**: `getIdentityVerification(options?: RequestOptions): ApiPromise<ApiV1ManageProjectIdentityResponse, WorkspaceApi.GetIdentityVerificationError>`
- **Wire**: `GET /api/v1/manage/project/identity`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageProjectIdentityResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.GetIdentityVerificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageProjectIdentityResponse` | `apiV1ManageProjectIdentityResponseSchema` | `src/models/api-v1-manage-project-identity-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAllowedOrigins

- **Signature**: `listAllowedOrigins(options?: RequestOptions): ApiPromise<ApiV1ManageProjectOriginsResponse, WorkspaceApi.ListAllowedOriginsError>`
- **Wire**: `GET /api/v1/manage/project/origins`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ManageProjectOriginsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.ListAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageProjectOriginsResponse` | `apiV1ManageProjectOriginsResponseSchema` | `src/models/api-v1-manage-project-origins-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### renameProject

- **Signature**: `renameProject(request: WorkspaceApi.RenameProjectRequest, options?: RequestOptions): ApiPromise<ApiV1ManageProjectResponse, WorkspaceApi.RenameProjectError>`
- **Wire**: `PATCH /api/v1/manage/project`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageProjectResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.RenameProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceApi.RenameProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ManageProjectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageProjectRequest` | `apiV1ManageProjectRequestSchema` | `src/models/api-v1-manage-project-request.ts` |
| `ApiV1ManageProjectResponse` | `apiV1ManageProjectResponseSchema` | `src/models/api-v1-manage-project-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### renameWorkspace

- **Signature**: `renameWorkspace(request: WorkspaceApi.RenameWorkspaceRequest, options?: RequestOptions): ApiPromise<ApiV1ManageWorkspaceResponse, WorkspaceApi.RenameWorkspaceError>`
- **Wire**: `PATCH /api/v1/manage/workspace`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageWorkspaceResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.RenameWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceApi.RenameWorkspaceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ManageWorkspaceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageWorkspaceRequest` | `apiV1ManageWorkspaceRequestSchema` | `src/models/api-v1-manage-workspace-request.ts` |
| `ApiV1ManageWorkspaceResponse` | `apiV1ManageWorkspaceResponseSchema` | `src/models/api-v1-manage-workspace-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setAllowedOrigins

- **Signature**: `setAllowedOrigins(request: WorkspaceApi.SetAllowedOriginsRequest, options?: RequestOptions): ApiPromise<ApiV1ManageProjectOriginsResponse, WorkspaceApi.SetAllowedOriginsError>`
- **Wire**: `PUT /api/v1/manage/project/origins`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageProjectOriginsResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.SetAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceApi.SetAllowedOriginsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ManageProjectOriginsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageProjectOriginsRequest` | `apiV1ManageProjectOriginsRequestSchema` | `src/models/api-v1-manage-project-origins-request.ts` |
| `ApiV1ManageProjectOriginsResponse` | `apiV1ManageProjectOriginsResponseSchema` | `src/models/api-v1-manage-project-origins-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setCodeSyncPolicy

- **Signature**: `setCodeSyncPolicy(request: WorkspaceApi.SetCodeSyncPolicyRequest, options?: RequestOptions): ApiPromise<ApiV1ManageProjectCodeSyncResponse, WorkspaceApi.SetCodeSyncPolicyError>`
- **Wire**: `PATCH /api/v1/manage/project/code-sync`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageProjectCodeSyncResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `WorkspaceApi.SetCodeSyncPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceApi.SetCodeSyncPolicyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ManageProjectCodeSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageProjectCodeSyncRequest` | `apiV1ManageProjectCodeSyncRequestSchema` | `src/models/api-v1-manage-project-code-sync-request.ts` |
| `ApiV1ManageProjectCodeSyncResponse` | `apiV1ManageProjectCodeSyncResponseSchema` | `src/models/api-v1-manage-project-code-sync-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

