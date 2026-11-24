<!-- Generated file — do not edit; regenerated with the SDK. -->

# Members — operations

Accessor: `client.members` · Source: `src/resources/members.ts` · 2 operations · Request and error types: namespace `Members`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMember

- **Signature**: `getMember(request: Members.GetMemberRequest, options?: RequestOptions): ApiPromise<Member, Members.GetMemberError>`
- **Wire**: `GET /api/v3/members/{member-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Member`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Members.GetMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.GetMemberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `memberPublicId` | `path` | `member-public-id` | `string` | yes |
| `orgPublicId` | `query` | `org-public-id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Member` | `memberSchema` | `src/models/member.ts` |

### listMembers

- **Signature**: `listMembers(request?: Members.ListMembersRequest, options?: RequestOptions): ApiPromise<Member[], Members.ListMembersError>`
- **Wire**: `GET /api/v3/members`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Member[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Members.ListMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.ListMembersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orgPublicId` | `query` | `org-public-id` | `string` | no |
| `disabled` | `query` | — | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Member` | `memberSchema` | `src/models/member.ts` |

