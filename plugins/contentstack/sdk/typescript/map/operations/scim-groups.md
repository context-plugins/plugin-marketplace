<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScimGroups — operations

Accessor: `client.scimGroups` · Source: `src/resources/scim-groups.ts` · 6 operations · Request and error types: namespace `ScimGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createScimGroup

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createScimGroup(request: ScimGroups.CreateScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, ScimGroups.CreateScimGroupError>`
- **Wire**: `POST /scim/v2.0/organizations/{organization_uid}/Groups`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimGroup`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimGroups.CreateScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [400] `ScimError` · `"scimError2"` [401] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimGroups.CreateScimGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `ScimGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### deleteScimGroup

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteScimGroup(request: ScimGroups.DeleteScimGroupRequest, options?: RequestOptions): ApiPromise<undefined, ScimGroups.DeleteScimGroupError>`
- **Wire**: `DELETE /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimGroups.DeleteScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [404] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimGroups.DeleteScimGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### getScimGroup

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScimGroup(request: ScimGroups.GetScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, ScimGroups.GetScimGroupError>`
- **Wire**: `GET /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimGroup`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimGroups.GetScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [404] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimGroups.GetScimGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### listScimGroups

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listScimGroups(request: ScimGroups.ListScimGroupsRequest, options?: RequestOptions): ApiPromise<ScimListResponse, ScimGroups.ListScimGroupsError>`
- **Wire**: `GET /scim/v2.0/organizations/{organization_uid}/Groups`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScimListResponse`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimGroups.ListScimGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimGroups.ListScimGroupsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `filter` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimListResponse` | `scimListResponseSchema` | `src/models/scim-list-response.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### replaceScimGroup

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `replaceScimGroup(request: ScimGroups.ReplaceScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, ScimGroups.ReplaceScimGroupError>`
- **Wire**: `PUT /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimGroup`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimGroups.ReplaceScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [404] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimGroups.ReplaceScimGroupRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |
| `body` | `body` | — | `ScimGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

### updateScimGroup

- **Server**: `defaultContentstackScimScimGroupsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateScimGroup(request: ScimGroups.UpdateScimGroupRequest, options?: RequestOptions): ApiPromise<ScimGroup, ScimGroups.UpdateScimGroupError>`
- **Wire**: `PATCH /scim/v2.0/organizations/{organization_uid}/Groups/{group_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScimGroup`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `ScimGroups.UpdateScimGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"scimError"` [401] `ScimError` · `"scimError2"` [404] `ScimError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScimGroups.UpdateScimGroupRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |
| `body` | `body` | — | `ScimPatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScimPatchRequest` | `scimPatchRequestSchema` | `src/models/scim-patch-request.ts` |
| `ScimGroup` | `scimGroupSchema` | `src/models/scim-group.ts` |
| `ScimError` | `scimErrorSchema` | `src/models/scim-error.ts` |

