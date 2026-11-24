<!-- Generated file — do not edit; regenerated with the SDK. -->

# BsDs — operations

Accessor: `client.bs_ds` · Source: `bitly/apis/bs_ds.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bs_ds.get_bsds

- **Route**: `GET /bsds`
- **Auth**: `bearer_auth`
- **Signature**: `def get_bsds(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `BsDsResponse`
- **Returns (raw)**: `ApiResult[BsDsResponse, GetBsDsErrorBody]`
- **Error**: `GetBsDsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BsDsResponse` | `bitly/models/bs_ds_response.py` |
| `GetBsDsErrorBody` | `bitly/errors/get_bs_ds_error.py` |
| `Error` | `bitly/models/error.py` |

