<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `buildkite/apis/builds.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.builds.cancel_build

- **Route**: `PUT /organizations/{org}/pipelines/{pipeline}/builds/{number}/cancel`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def cancel_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`, `number`
- **Params**: `org` — path · `pipeline` — path · `number` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.builds.create_build

- **Route**: `POST /organizations/{org}/pipelines/{pipeline}/builds`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_build(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`
- **Params**: `org` — path · `pipeline` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.builds.get_build

- **Route**: `GET /organizations/{org}/pipelines/{pipeline}/builds/{number}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`, `number`
- **Params**: `org` — path · `pipeline` — path · `number` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.builds.list_builds

- **Route**: `GET /organizations/{org}/pipelines/{pipeline}/builds`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_builds(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`
- **Params**: `org` — path · `pipeline` — path
- **Returns (parsed)**: `list[Build]`
- **Returns (raw)**: `ApiResult[list[Build], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Build` | `buildkite/models/build.py` |

### client.builds.rebuild_build

- **Route**: `PUT /organizations/{org}/pipelines/{pipeline}/builds/{number}/rebuild`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def rebuild_build(org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`, `number`
- **Params**: `org` — path · `pipeline` — path · `number` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

