<!-- Generated file — do not edit; regenerated with the SDK. -->

# ObjectRevisions — operations

Accessor: `client.objectRevisions` · Source: `src/resources/object-revisions.ts` · 3 operations · Request and error types: namespace `ObjectRevisions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cosmic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createObjectRevision

- **Signature**: `createObjectRevision(request: ObjectRevisions.CreateObjectRevisionRequest, options?: RequestOptions): ApiPromise<RevisionResponse, ObjectRevisions.CreateObjectRevisionError>`
- **Wire**: `POST /buckets/{slug}/objects/{object_id}/revisions`
- **Auth**: `writeKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevisionResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectRevisions.CreateObjectRevisionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectRevisions.CreateObjectRevisionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes |
| `objectId` | `path` | `object_id` | `string` | yes |
| `body` | `body` | — | `RevisionCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevisionCreate` | `revisionCreateSchema` | `src/models/revision-create.ts` |
| `RevisionResponse` | `revisionResponseSchema` | `src/models/revision-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getObjectRevision

- **Signature**: `getObjectRevision(request: ObjectRevisions.GetObjectRevisionRequest, options?: RequestOptions): ApiPromise<RevisionResponse, ObjectRevisions.GetObjectRevisionError>`
- **Wire**: `GET /buckets/{slug}/objects/{object_id}/revisions/{revision_id}`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevisionResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectRevisions.GetObjectRevisionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectRevisions.GetObjectRevisionRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `objectId` | `path` | `object_id` | `string` | yes | — |
| `revisionId` | `path` | `revision_id` | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `previewToken` | `query` | `preview_token` | `string` | no | — |
| `props` | `query` | — | `string` | no | — |
| `useCache` | `query` | — | `boolean` | no | `true` |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevisionResponse` | `revisionResponseSchema` | `src/models/revision-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listObjectRevisions

- **Signature**: `listObjectRevisions(request: ObjectRevisions.ListObjectRevisionsRequest, options?: RequestOptions): ApiPromise<RevisionListResponse, ObjectRevisions.ListObjectRevisionsError>`
- **Wire**: `GET /buckets/{slug}/objects/{object_id}/revisions`
- **Auth**: `readKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RevisionListResponse`
- **Error**: `CosmicError` with `kind: "api"`, an instance of `ObjectRevisions.ListObjectRevisionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ObjectRevisions.ListObjectRevisionsRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slug` | `path` | — | `string` | yes | — |
| `objectId` | `path` | `object_id` | `string` | yes | — |
| `readKey` | `query` | `read_key` | `string` | no | — |
| `previewToken` | `query` | `preview_token` | `string` | no | — |
| `props` | `query` | — | `string` | no | — |
| `sort` | `query` | — | `SortCosmicRestApiV3ObjectRevisionsApi` | no | `SortCosmicRestApiV3ObjectRevisionsApi.CreatedAt2` |
| `limit` | `query` | — | `number` | no | `1000` |
| `skip` | `query` | — | `number` | no | `0` |
| `useCache` | `query` | — | `boolean` | no | `true` |
| `pretty` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortCosmicRestApiV3ObjectRevisionsApi` | `sortCosmicRestApiV3ObjectRevisionsApiSchema` | `src/models/sort-cosmic-rest-api-v3-object-revisions-api.ts` |
| `RevisionListResponse` | `revisionListResponseSchema` | `src/models/revision-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

