<!-- Generated file — do not edit; regenerated with the SDK. -->

# StorageBuckets — operations

Accessor: `client.storageBuckets` · Source: `src/resources/storage-buckets.ts` · 1 operation · Request and error types: namespace `StorageBuckets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listStorageBuckets

- **Signature**: `listStorageBuckets(request?: StorageBuckets.ListStorageBucketsRequest, options?: RequestOptions): ApiPromise<ODataStorageBucketCollection, StorageBuckets.ListStorageBucketsError>`
- **Wire**: `GET /odata/StorageBuckets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataStorageBucketCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `StorageBuckets.ListStorageBucketsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StorageBuckets.ListStorageBucketsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `xUipathOrganizationUnitId` | `header` | `X-UIPATH-OrganizationUnitId` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataStorageBucketCollection` | `oDataStorageBucketCollectionSchema` | `src/models/odata-storage-bucket-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

