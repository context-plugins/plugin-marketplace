<!-- Generated file — do not edit; regenerated with the SDK. -->

# Clusters — operations

Accessor: `client.clusters` · Source: `buildkite/apis/clusters.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.clusters.list_clusters

- **Route**: `GET /organizations/{org}/clusters`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_clusters(org: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`
- **Params**: `org` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

