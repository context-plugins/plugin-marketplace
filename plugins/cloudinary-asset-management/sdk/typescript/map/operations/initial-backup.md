<!-- Generated file — do not edit; regenerated with the SDK. -->

# InitialBackup — operations

Accessor: `client.initialBackup` · Source: `src/resources/initial-backup.ts` · 3 operations · Request and error types: namespace `InitialBackup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInitialBackup

- **Signature**: `createInitialBackup(request: InitialBackup.CreateInitialBackupRequest, options?: RequestOptions): ApiPromise<InitialBackupCreateResponse, InitialBackup.CreateInitialBackupError>`
- **Wire**: `POST /v1_1/{cloud_name}/operations/initial_backup`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InitialBackupCreateResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `InitialBackup.CreateInitialBackupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InitialBackup.CreateInitialBackupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `InitialBackupCreateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InitialBackupCreateRequest` | `initialBackupCreateRequestSchema` | `src/models/initial-backup-create-request.ts` |
| `InitialBackupCreateResponse` | `initialBackupCreateResponseSchema` | `src/models/initial-backup-create-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getInitialBackup

- **Signature**: `getInitialBackup(request: InitialBackup.GetInitialBackupRequest, options?: RequestOptions): ApiPromise<InitialBackupProgressResponse, InitialBackup.GetInitialBackupError>`
- **Wire**: `GET /v1_1/{cloud_name}/operations/initial_backup/{id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InitialBackupProgressResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `InitialBackup.GetInitialBackupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InitialBackup.GetInitialBackupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `id` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InitialBackupProgressResponse` | `initialBackupProgressResponseSchema` | `src/models/initial-backup-progress-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listInitialBackups

- **Signature**: `listInitialBackups(request: InitialBackup.ListInitialBackupsRequest, options?: RequestOptions): ApiPromise<InitialBackupListResponse, InitialBackup.ListInitialBackupsError>`
- **Wire**: `GET /v1_1/{cloud_name}/operations/initial_backup`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InitialBackupListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `InitialBackup.ListInitialBackupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InitialBackup.ListInitialBackupsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `maxResults` | `query` | `max_results` | `number` | no | `10` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `InitialBackupListResponse` | `initialBackupListResponseSchema` | `src/models/initial-backup-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

