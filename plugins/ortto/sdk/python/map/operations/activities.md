<!-- Generated file — do not edit; regenerated with the SDK. -->

# Activities — operations

Accessor: `client.activities` · Source: `ortto/apis/activities.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.activities.create_activities

- **Route**: `POST /activities/create`
- **Auth**: `api_key_auth`
- **Signature**: `def create_activities(body: ActivitiesCreateRequest | ActivitiesCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateActivitiesErrorBody]`
- **Error**: `CreateActivitiesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ActivitiesCreateRequest` | `ortto/models/activities_create_request.py` |
| `ActivitiesCreateRequestDict` | `ortto/models/activities_create_request.py` |
| `CreateActivitiesErrorBody` | `ortto/errors/create_activities_error.py` |
| `Error` | `ortto/models/error.py` |

