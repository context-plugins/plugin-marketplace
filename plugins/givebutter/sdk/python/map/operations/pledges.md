<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pledges — operations

Accessor: `client.pledges` · Source: `givebutter/apis/pledges.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pledges.pledges_index

- **Route**: `GET /v1/pledges`
- **Auth**: `http`
- **Signature**: `def pledges_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1PledgesResponse`
- **Returns (raw)**: `ApiResult[V1PledgesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1PledgesResponse` | `givebutter/models/v1_pledges_response.py` |

### client.pledges.pledges_show

- **Route**: `GET /v1/pledges/{pledge}`
- **Auth**: `http`
- **Signature**: `def pledges_show(pledge: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pledge`
- **Params**: `pledge` — path
- **Returns (parsed)**: `PledgeResource`
- **Returns (raw)**: `ApiResult[PledgeResource, PledgesShowErrorBody]`
- **Error**: `PledgesShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PledgeResource` | `givebutter/models/pledge_resource.py` |
| `PledgesShowErrorBody` | `givebutter/errors/pledges_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

