<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `deliverd/apis/workspaces.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.workspaces.get_api_v1_workspaces

- **Route**: `GET /api/v1/workspaces`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_workspaces(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

