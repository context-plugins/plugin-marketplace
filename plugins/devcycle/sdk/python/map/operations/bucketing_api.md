<!-- Generated file — do not edit; regenerated with the SDK. -->

# BucketingApi — operations

Accessor: `client.bucketing_api` · Source: `dev_cycle/apis/bucketing_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bucketing_api.get_features

- **Route**: `POST /v1/features`
- **Auth**: `bearer_auth`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def get_features(body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Feature]`
- **Returns (raw)**: `ApiResult[dict[str, Feature], GetFeaturesErrorBody]`
- **Error**: `GetFeaturesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserData` | `dev_cycle/models/user_data.py` |
| `UserDataDict` | `dev_cycle/models/user_data.py` |
| `Feature` | `dev_cycle/models/feature.py` |
| `GetFeaturesErrorBody` | `dev_cycle/errors/get_features_error.py` |
| `ErrorResponse` | `dev_cycle/models/error_response.py` |

### client.bucketing_api.get_variable_by_key

- **Route**: `POST /v1/variables/{key}`
- **Auth**: `bearer_auth`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def get_variable_by_key(key: str, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `Variable`
- **Returns (raw)**: `ApiResult[Variable, GetVariableByKeyErrorBody]`
- **Error**: `GetVariableByKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserData` | `dev_cycle/models/user_data.py` |
| `UserDataDict` | `dev_cycle/models/user_data.py` |
| `Variable` | `dev_cycle/models/variable.py` |
| `GetVariableByKeyErrorBody` | `dev_cycle/errors/get_variable_by_key_error.py` |
| `ErrorResponse` | `dev_cycle/models/error_response.py` |

### client.bucketing_api.get_variables

- **Route**: `POST /v1/variables`
- **Auth**: `bearer_auth`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def get_variables(body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Variable]`
- **Returns (raw)**: `ApiResult[dict[str, Variable], GetVariablesErrorBody]`
- **Error**: `GetVariablesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserData` | `dev_cycle/models/user_data.py` |
| `UserDataDict` | `dev_cycle/models/user_data.py` |
| `Variable` | `dev_cycle/models/variable.py` |
| `GetVariablesErrorBody` | `dev_cycle/errors/get_variables_error.py` |
| `ErrorResponse` | `dev_cycle/models/error_response.py` |

### client.bucketing_api.post_events

- **Route**: `POST /v1/track`
- **Auth**: `bearer_auth`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def post_events(body: UserDataAndEventsBody | UserDataAndEventsBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1TrackResponse`
- **Returns (raw)**: `ApiResult[V1TrackResponse, PostEventsErrorBody]`
- **Error**: `PostEventsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserDataAndEventsBody` | `dev_cycle/models/user_data_and_events_body.py` |
| `UserDataAndEventsBodyDict` | `dev_cycle/models/user_data_and_events_body.py` |
| `V1TrackResponse` | `dev_cycle/models/v1_track_response.py` |
| `PostEventsErrorBody` | `dev_cycle/errors/post_events_error.py` |
| `ErrorResponse` | `dev_cycle/models/error_response.py` |

