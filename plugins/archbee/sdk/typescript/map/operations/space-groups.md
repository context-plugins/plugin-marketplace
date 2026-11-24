<!-- Generated file — do not edit; regenerated with the SDK. -->

# SpaceGroups — operations

Accessor: `client.spaceGroups` · Source: `src/resources/space-groups.ts` · 2 operations · Request and error types: namespace `SpaceGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `archbee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSpaceGroup

- **Signature**: `createSpaceGroup(request: SpaceGroups.CreateSpaceGroupRequest, options?: RequestOptions): ApiPromise<SpaceGroupCreateResponse, SpaceGroups.CreateSpaceGroupError>`
- **Wire**: `POST /space-group/create`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpaceGroupCreateResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `SpaceGroups.CreateSpaceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"spaceGroupCreate400Error1"` [400] `SpaceGroupCreate400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpaceGroups.CreateSpaceGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SpaceGroupCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SpaceGroupCreateRequest` | `spaceGroupCreateRequestSchema` | `src/models/space-group-create-request.ts` |
| `SpaceGroupCreateResponse` | `spaceGroupCreateResponseSchema` | `src/models/space-group-create-response.ts` |
| `SpaceGroupCreate400Error1` | `spaceGroupCreate400Error1Schema` | `src/models/space-group-create400-error1.ts` |

### deleteSpaceGroup

- **Signature**: `deleteSpaceGroup(request: SpaceGroups.DeleteSpaceGroupRequest, options?: RequestOptions): ApiPromise<SpaceGroupDeleteResponse, SpaceGroups.DeleteSpaceGroupError>`
- **Wire**: `DELETE /space-group/delete`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SpaceGroupDeleteResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `SpaceGroups.DeleteSpaceGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"spaceGroupDelete400Error1"` [400] `SpaceGroupDelete400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SpaceGroups.DeleteSpaceGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SpaceGroupDeleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SpaceGroupDeleteRequest` | `spaceGroupDeleteRequestSchema` | `src/models/space-group-delete-request.ts` |
| `SpaceGroupDeleteResponse` | `spaceGroupDeleteResponseSchema` | `src/models/space-group-delete-response.ts` |
| `SpaceGroupDelete400Error1` | `spaceGroupDelete400Error1Schema` | `src/models/space-group-delete400-error1.ts` |

