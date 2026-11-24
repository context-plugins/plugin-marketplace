<!-- Generated file — do not edit; regenerated with the SDK. -->

# MemberApi — operations

Accessor: `client.member_api` · Source: `shortcut/apis/member_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.member_api.get_current_member_info

- **Route**: `GET /api/v3/member`
- **Auth**: `api_token`
- **Signature**: `def get_current_member_info(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `MemberInfo`
- **Returns (raw)**: `ApiResult[MemberInfo, GetCurrentMemberInfoErrorBody]`
- **Error**: `GetCurrentMemberInfoErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `MemberInfo` | `shortcut/models/member_info.py` |
| `GetCurrentMemberInfoErrorBody` | `shortcut/errors/get_current_member_info_error.py` |

