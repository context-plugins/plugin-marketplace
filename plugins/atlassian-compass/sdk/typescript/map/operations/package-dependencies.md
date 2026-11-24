<!-- Generated file — do not edit; regenerated with the SDK. -->

# PackageDependencies — operations

Accessor: `client.packageDependencies` · Source: `src/resources/package-dependencies.ts` · 2 operations · Request and error types: namespace `PackageDependencies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `atlassian-compass`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteLockFile

- **Signature**: `deleteLockFile(request: PackageDependencies.DeleteLockFileRequest, options?: RequestOptions): ApiPromise<undefined, PackageDependencies.DeleteLockFileError>`
- **Wire**: `DELETE /compass/v1/package_dependencies/lock_file/{componentId}/{sourceId}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `PackageDependencies.DeleteLockFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PackageDependencies.DeleteLockFileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `componentId` | `path` | `string` | yes |
| `sourceId` | `path` | `string` | yes |

### uploadLockFile

- **Signature**: `uploadLockFile(request: PackageDependencies.UploadLockFileRequest, options?: RequestOptions): ApiPromise<undefined, PackageDependencies.UploadLockFileError>`
- **Wire**: `PUT /compass/v1/package_dependencies/lock_file`
- **Auth**: `basicAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `PackageDependencies.UploadLockFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PackageDependencies.UploadLockFileRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sourceId` | `query` | `string` | yes |
| `baseSourceUrl` | `query` | `string` | yes |
| `componentId` | `query` | `string` | yes |
| `file` | `form` | `FileInput` | yes |

