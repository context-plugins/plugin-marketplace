<!-- Generated file — do not edit; regenerated with the SDK. -->

# CapabilityStatementApi — operations

Accessor: `client.capability_statement_api` · Source: `health_gorilla/apis/capability_statement_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.capability_statement_api.get_capability_statement

- **Route**: `GET /metadata`
- **Auth**: `bearer_auth`
- **Signature**: `def get_capability_statement(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `CapabilityStatement`
- **Returns (raw)**: `ApiResult[CapabilityStatement, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CapabilityStatement` | `health_gorilla/models/capability_statement.py` |

