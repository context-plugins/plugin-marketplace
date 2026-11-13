<!-- Generated file — do not edit; regenerated with the SDK. -->

# Backups — operations

Accessor: `client.backups` · Source: `src/resources/backups.ts` · 2 operations · Request and error types: namespace `Backups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### downloadBackupApiV1BackupsDownloadGet

- **Signature**: `downloadBackupApiV1BackupsDownloadGet(request: Backups.DownloadBackupApiV1BackupsDownloadGetRequest, options?: RequestOptions): ApiPromise<BinaryContent, Backups.DownloadBackupApiV1BackupsDownloadGetError>`
- **Wire**: `GET /api/v1/backups/download`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Backups.DownloadBackupApiV1BackupsDownloadGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Backups.DownloadBackupApiV1BackupsDownloadGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getBackupsApiV1BackupsGet

- **Signature**: `getBackupsApiV1BackupsGet(request?: Backups.GetBackupsApiV1BackupsGetRequest, options?: RequestOptions): ApiPromise<BackupResponse[], Backups.GetBackupsApiV1BackupsGetError>`
- **Wire**: `GET /api/v1/backups`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BackupResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Backups.GetBackupsApiV1BackupsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Backups.GetBackupsApiV1BackupsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mfaToken` | `query` | `mfa_token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BackupResponse` | `backupResponseSchema` | `src/models/backup-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

