<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `src/resources/groups.ts` · 6 operations · Request and error types: namespace `Groups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `airtable`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createScimGroup

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createScimGroup(request: Groups.CreateScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, Groups.CreateScimGroupError>`
- **Wire**: `POST /Groups`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimGroup`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Groups.CreateScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [403] `ScimError` · `"scimError4"` [409] `ScimError` · `"scimError5"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.CreateScimGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ScimGroupCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimGroupCreateRequest` | `scimGroupCreateRequestSchema` | `src/models/scim-group-create-request.ts` |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### deleteScimGroup

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteScimGroup(request: Groups.DeleteScimGroupRequest, options?: RequestOptions): ApiPromise<undefined, Groups.DeleteScimGroupError>`
- **Wire**: `DELETE /Groups/{groupId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Groups.DeleteScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [403] `ScimError` · `"scimError3"` [404] `ScimError` · `"scimError4"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.DeleteScimGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### getScimGroup

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScimGroup(request: Groups.GetScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, Groups.GetScimGroupError>`
- **Wire**: `GET /Groups/{groupId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimGroup`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Groups.GetScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [403] `ScimError` · `"scimError3"` [404] `ScimError` · `"scimError4"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.GetScimGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### listScimGroups

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listScimGroups(request?: Groups.ListScimGroupsRequest, options?: RequestOptions): ApiPromise<ScimGroupListResponse, Groups.ListScimGroupsError>`
- **Wire**: `GET /Groups`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimGroupListResponse`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Groups.ListScimGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [403] `ScimError` · `"scimError3"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.ListScimGroupsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `string` | no | — |
| `startIndex` | `query` | `number` | no | `1` |
| `count` | `query` | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimGroupListResponse` | `scimGroupListResponseSchema` | `src/models/scim-group-list-response.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### replaceScimGroup

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `replaceScimGroup(request: Groups.ReplaceScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, Groups.ReplaceScimGroupError>`
- **Wire**: `PUT /Groups/{groupId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimGroup`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Groups.ReplaceScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [403] `ScimError` · `"scimError4"` [404] `ScimError` · `"scimError5"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.ReplaceScimGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `string` | yes |
| `body` | `body` | `ScimGroupCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimGroupCreateRequest` | `scimGroupCreateRequestSchema` | `src/models/scim-group-create-request.ts` |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### updateScimGroup

- **Server**: `defaultAirtableScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateScimGroup(request: Groups.UpdateScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, Groups.UpdateScimGroupError>`
- **Wire**: `PATCH /Groups/{groupId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimGroup`
- **Error**: `AirtableError` with `kind: "api"`, an instance of `Groups.UpdateScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"scimError3"` [403] `ScimError` · `"scimError4"` [404] `ScimError` · `"scimError5"` [429] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.UpdateScimGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `groupId` | `path` | `string` | yes |
| `body` | `body` | `ScimPatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimPatchRequest` | `scimPatchRequestSchema` | `src/models/scim-patch-request.ts` |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

