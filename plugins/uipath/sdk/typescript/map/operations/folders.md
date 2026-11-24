<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.folders` · Source: `src/resources/folders.ts` · 1 operation · Request and error types: namespace `Folders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listFolders

- **Signature**: `listFolders(request?: Folders.ListFoldersRequest, options?: RequestOptions): ApiPromise<ODataFolderCollection, Folders.ListFoldersError>`
- **Wire**: `GET /odata/Folders`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataFolderCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Folders.ListFoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.ListFoldersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataFolderCollection` | `oDataFolderCollectionSchema` | `src/models/odata-folder-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

