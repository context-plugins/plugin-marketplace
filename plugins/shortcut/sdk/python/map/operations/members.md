<!-- Generated file — do not edit; regenerated with the SDK. -->

# Members — operations

Accessor: `client.members` · Source: `shortcut/apis/members.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.members.get_member

- **Route**: `GET /api/v3/members/{member-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_member(member_public_id: UUID, *, org_public_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `member_public_id`
- **Params**: `member_public_id` — path `member-public-id` · `org_public_id` — query `org-public-id`
- **Returns (parsed)**: `Member`
- **Returns (raw)**: `ApiResult[Member, GetMemberErrorBody]`
- **Error**: `GetMemberErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Member` | `shortcut/models/member.py` |
| `GetMemberErrorBody` | `shortcut/errors/get_member_error.py` |

### client.members.list_members

- **Route**: `GET /api/v3/members`
- **Auth**: `api_token`
- **Signature**: `def list_members(*, org_public_id: UUID | None = None, disabled: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `org_public_id` — query `org-public-id` · `disabled` — query
- **Returns (parsed)**: `list[Member]`
- **Returns (raw)**: `ApiResult[list[Member], ListMembersErrorBody]`
- **Error**: `ListMembersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Member` | `shortcut/models/member.py` |
| `ListMembersErrorBody` | `shortcut/errors/list_members_error.py` |

