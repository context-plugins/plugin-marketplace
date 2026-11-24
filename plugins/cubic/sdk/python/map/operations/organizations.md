<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `cubic/apis/organizations.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organizations.get_member

- **Route**: `GET /api/v1/organizations/{org}/members/{githubUserId}`
- **Auth**: `analytics_api_key`
- **Signature**: `def get_member(org: str, github_user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `github_user_id`
- **Params**: `org` — path · `github_user_id` — path `githubUserId`
- **Returns (parsed)**: `OrganizationMember`
- **Returns (raw)**: `ApiResult[OrganizationMember, GetMemberErrorBody]`
- **Error**: `GetMemberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationMember` | `cubic/models/organization_member.py` |
| `GetMemberErrorBody` | `cubic/errors/get_member_error.py` |
| `Error` | `cubic/models/error.py` |

### client.organizations.list_members

- **Route**: `GET /api/v1/organizations/{org}/members`
- **Auth**: `analytics_api_key`
- **Signature**: `def list_members(org: str, *, search: str | None = None, role: RoleOrStr | None = None, seat: SeatOrStr | None = None, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`
- **Params**: `org` — path · `search` — query · `role` — query · `seat` — query · `cursor` — query · `limit` — query
- **Returns (parsed)**: `MemberList`
- **Returns (raw)**: `ApiResult[MemberList, ListMembersErrorBody]`
- **Error**: `ListMembersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RoleOrStr` | `cubic/models/enums/role.py` |
| `SeatOrStr` | `cubic/models/enums/seat.py` |
| `MemberList` | `cubic/models/member_list.py` |
| `ListMembersErrorBody` | `cubic/errors/list_members_error.py` |
| `Error` | `cubic/models/error.py` |

### client.organizations.list_organizations

- **Route**: `GET /api/v1/organizations`
- **Auth**: `analytics_api_key`
- **Signature**: `def list_organizations(*, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cursor` — query · `limit` — query
- **Returns (parsed)**: `OrganizationList`
- **Returns (raw)**: `ApiResult[OrganizationList, ListOrganizationsErrorBody]`
- **Error**: `ListOrganizationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationList` | `cubic/models/organization_list.py` |
| `ListOrganizationsErrorBody` | `cubic/errors/list_organizations_error.py` |
| `Error` | `cubic/models/error.py` |

### client.organizations.update_member

- **Route**: `PATCH /api/v1/organizations/{org}/members/{githubUserId}`
- **Auth**: `analytics_api_key`
- **Signature**: `def update_member(org: str, github_user_id: str, body: MemberUpdate | MemberUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `github_user_id`, `body`
- **Params**: `org` — path · `github_user_id` — path `githubUserId` · `body` — JSON body
- **Returns (parsed)**: `MemberUpdateResult`
- **Returns (raw)**: `ApiResult[MemberUpdateResult, UpdateMemberErrorBody]`
- **Error**: `UpdateMemberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemberUpdate` | `cubic/models/member_update.py` |
| `MemberUpdateDict` | `cubic/models/member_update.py` |
| `MemberUpdateResult` | `cubic/models/member_update_result.py` |
| `UpdateMemberErrorBody` | `cubic/errors/update_member_error.py` |
| `Error` | `cubic/models/error.py` |

