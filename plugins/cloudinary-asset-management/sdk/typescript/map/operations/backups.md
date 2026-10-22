<!-- Generated file — do not edit; regenerated with the SDK. -->

# Backups — operations

Accessor: `client.backups` · Source: `src/resources/backups.ts` · 1 operation · Request and error types: namespace `Backups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBackupVersions

- **Signature**: `deleteBackupVersions(request: Backups.DeleteBackupVersionsRequestParams, options?: RequestOptions): ApiPromise<DeleteBackupVersionsResponse, Backups.DeleteBackupVersionsError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/resources/backup/{asset_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBackupVersionsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Backups.DeleteBackupVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Backups.DeleteBackupVersionsRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `assetId` | `path` | `asset_id` | `string` | yes |
| `body` | `body` | — | `DeleteBackupVersionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBackupVersionsRequest` | `deleteBackupVersionsRequestSchema` | `src/models/delete-backup-versions-request.ts` |
| `DeleteBackupVersionsResponse` | `deleteBackupVersionsResponseSchema` | `src/models/delete-backup-versions-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

