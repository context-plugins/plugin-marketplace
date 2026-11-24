<!-- Generated file — do not edit; regenerated with the SDK. -->

# Packages — operations

Accessor: `client.packages` · Source: `src/resources/packages.ts` · 1 operation · Request and error types: namespace `Packages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listPackages

- **Signature**: `listPackages(request?: Packages.ListPackagesRequest, options?: RequestOptions): ApiPromise<ODataPackageCollection, Packages.ListPackagesError>`
- **Wire**: `GET /odata/Packages`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataPackageCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Packages.ListPackagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Packages.ListPackagesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataPackageCollection` | `oDataPackageCollectionSchema` | `src/models/odata-package-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

