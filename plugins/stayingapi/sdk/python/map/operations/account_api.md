<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountApi — operations

Accessor: `client.account_api` · Source: `staying_api/apis/account_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account_api.account

- **Route**: `GET /account`
- **Auth**: `bearer_auth`
- **Signature**: `def account(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AccountEnvelope`
- **Returns (raw)**: `ApiResult[AccountEnvelope, AccountErrorBody]`
- **Error**: `AccountErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountEnvelope` | `staying_api/models/account_envelope.py` |
| `AccountErrorBody` | `staying_api/errors/account_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

