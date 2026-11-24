<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuyingGroup — operations

Accessor: `client.buying_group` · Source: `lusha/apis/buying_group.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.buying_group.get_contacts_buying_group

- **Route**: `POST /v3/contacts/buying-group`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contacts_buying_group(body: V3BuyingGroupRequest | V3BuyingGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3BuyingGroupResponse`
- **Returns (raw)**: `ApiResult[V3BuyingGroupResponse, GetContactsBuyingGroupErrorBody]`
- **Error**: `GetContactsBuyingGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3BuyingGroupRequest` | `lusha/models/v3_buying_group_request.py` |
| `V3BuyingGroupRequestDict` | `lusha/models/v3_buying_group_request.py` |
| `V3BuyingGroupResponse` | `lusha/models/v3_buying_group_response.py` |
| `GetContactsBuyingGroupErrorBody` | `lusha/errors/get_contacts_buying_group_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

