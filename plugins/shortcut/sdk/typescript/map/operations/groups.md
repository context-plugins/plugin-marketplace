<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `src/resources/groups.ts` · 5 operations · Request and error types: namespace `Groups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGroup

- **Signature**: `createGroup(request: Groups.CreateGroupRequest, options?: RequestOptions): ApiPromise<Group, Groups.CreateGroupError>`
- **Wire**: `POST /api/v3/groups`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Group`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Groups.CreateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.CreateGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGroup` | `createGroupSchema` | `src/models/create-group.ts` |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

### getGroup

- **Signature**: `getGroup(request: Groups.GetGroupRequest, options?: RequestOptions): ApiPromise<Group, Groups.GetGroupError>`
- **Wire**: `GET /api/v3/groups/{group-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Group`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Groups.GetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.GetGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupPublicId` | `path` | `group-public-id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Group` | `groupSchema` | `src/models/group.ts` |

### listGroupStories

- **Signature**: `listGroupStories(request: Groups.ListGroupStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Groups.ListGroupStoriesError>`
- **Wire**: `GET /api/v3/groups/{group-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Groups.ListGroupStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.ListGroupStoriesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupPublicId` | `path` | `group-public-id` | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### listGroups

- **Signature**: `listGroups(request?: Groups.ListGroupsRequest, options?: RequestOptions): ApiPromise<Group[], Groups.ListGroupsError>`
- **Wire**: `GET /api/v3/groups`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Group[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Groups.ListGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.ListGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `archived` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Group` | `groupSchema` | `src/models/group.ts` |

### updateGroup

- **Signature**: `updateGroup(request: Groups.UpdateGroupRequest, options?: RequestOptions): ApiPromise<Group, Groups.UpdateGroupError>`
- **Wire**: `PUT /api/v3/groups/{group-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Group`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Groups.UpdateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.UpdateGroupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupPublicId` | `path` | `group-public-id` | `string` | yes |
| `body` | `body` | — | `UpdateGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateGroup` | `updateGroupSchema` | `src/models/update-group.ts` |
| `Group` | `groupSchema` | `src/models/group.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

