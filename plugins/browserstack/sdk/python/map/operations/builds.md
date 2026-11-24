<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `browser_stack/apis/builds.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.builds.delete_build

- **Route**: `DELETE /automate/builds/{buildId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def delete_build(build_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path `buildId`
- **Returns (parsed)**: `StatusMessage`
- **Returns (raw)**: `ApiResult[StatusMessage, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusMessage` | `browser_stack/models/status_message.py` |

### client.builds.list_builds

- **Route**: `GET /automate/builds.json`
- **Auth**: `basic_auth`
- **Signature**: `def list_builds(*, limit: int | None = None, offset: int | None = None, status: StatusOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `status` — query
- **Returns (parsed)**: `list[Build]`
- **Returns (raw)**: `ApiResult[list[Build], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusOrStr` | `browser_stack/models/enums/status.py` |
| `Build` | `browser_stack/models/build.py` |

### client.builds.update_build

- **Route**: `PUT /automate/builds/{buildId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def update_build(build_id: str, body: AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`, `body`
- **Params**: `build_id` — path `buildId` · `body` — JSON body
- **Returns (parsed)**: `Build`
- **Returns (raw)**: `ApiResult[Build, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AutomateBuildsJsonRequest` | `browser_stack/models/automate_builds_json_request.py` |
| `AutomateBuildsJsonRequestDict` | `browser_stack/models/automate_builds_json_request.py` |
| `Build` | `browser_stack/models/build.py` |

