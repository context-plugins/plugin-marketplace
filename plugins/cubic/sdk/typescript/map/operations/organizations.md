<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 4 operations · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cubic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMember

- **Signature**: `getMember(request: Organizations.GetMemberRequest, options?: RequestOptions): ApiPromise<OrganizationMember, Organizations.GetMemberError>`
- **Wire**: `GET /api/v1/organizations/{org}/members/{githubUserId}`
- **Auth**: `analyticsApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationMember`
- **Error**: `CubicError` with `kind: "api"`, an instance of `Organizations.GetMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetMemberRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `githubUserId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationMember` | `organizationMemberSchema` | `src/models/organization-member.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listMembers

- **Signature**: `listMembers(request: Organizations.ListMembersRequest, options?: RequestOptions): ApiPromise<MemberList, Organizations.ListMembersError>`
- **Wire**: `GET /api/v1/organizations/{org}/members`
- **Auth**: `analyticsApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MemberList`
- **Error**: `CubicError` with `kind: "api"`, an instance of `Organizations.ListMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ListMembersRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `org` | `path` | `string` | yes | — |
| `search` | `query` | `string` | no | — |
| `role` | `query` | `Role` | no | — |
| `seat` | `query` | `Seat` | no | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Role` | `roleSchema` | `src/models/role.ts` |
| `Seat` | `seatSchema` | `src/models/seat.ts` |
| `MemberList` | `memberListSchema` | `src/models/member-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listOrganizations

- **Signature**: `listOrganizations(request?: Organizations.ListOrganizationsRequest, options?: RequestOptions): ApiPromise<OrganizationList, Organizations.ListOrganizationsError>`
- **Wire**: `GET /api/v1/organizations`
- **Auth**: `analyticsApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationList`
- **Error**: `CubicError` with `kind: "api"`, an instance of `Organizations.ListOrganizationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ListOrganizationsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationList` | `organizationListSchema` | `src/models/organization-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateMember

- **Signature**: `updateMember(request: Organizations.UpdateMemberRequest, options?: RequestOptions): ApiPromise<MemberUpdateResult, Organizations.UpdateMemberError>`
- **Wire**: `PATCH /api/v1/organizations/{org}/members/{githubUserId}`
- **Auth**: `analyticsApiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MemberUpdateResult`
- **Error**: `CubicError` with `kind: "api"`, an instance of `Organizations.UpdateMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [422] `Error` · `"error7"` [429] `Error` · `"error8"` [500] `Error` · `"error9"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.UpdateMemberRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `org` | `path` | `string` | yes |
| `githubUserId` | `path` | `string` | yes |
| `body` | `body` | `MemberUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MemberUpdate` | `memberUpdateSchema` | `src/models/member-update.ts` |
| `MemberUpdateResult` | `memberUpdateResultSchema` | `src/models/member-update-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

