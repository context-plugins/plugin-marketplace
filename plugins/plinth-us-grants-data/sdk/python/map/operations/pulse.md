<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pulse — operations

Accessor: `client.pulse` · Source: `plinth_us_grants_data/apis/pulse.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pulse.create_pulse

- **Route**: `POST /api/v1/pulse`
- **Auth**: `api_key_auth`
- **Signature**: `def create_pulse(body: PulseCreate | PulseCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CreatePulseErrorBody]`
- **Error**: `CreatePulseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PulseCreate` | `plinth_us_grants_data/models/pulse_create.py` |
| `PulseCreateDict` | `plinth_us_grants_data/models/pulse_create.py` |
| `CreatePulseErrorBody` | `plinth_us_grants_data/errors/create_pulse_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.pulse.delete_pulse

- **Route**: `DELETE /api/v1/pulse/{sub_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_pulse(sub_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`
- **Params**: `sub_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeletePulseErrorBody]`
- **Error**: `DeletePulseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeletePulseErrorBody` | `plinth_us_grants_data/errors/delete_pulse_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.pulse.get_pulse

- **Route**: `GET /api/v1/pulse/{sub_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_pulse(sub_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`
- **Params**: `sub_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetPulseErrorBody]`
- **Error**: `GetPulseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPulseErrorBody` | `plinth_us_grants_data/errors/get_pulse_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.pulse.get_pulse_latest

- **Route**: `GET /api/v1/pulse/{sub_id}/latest`
- **Auth**: `api_key_auth`
- **Signature**: `def get_pulse_latest(sub_id: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`
- **Params**: `sub_id` — path · `format_` — query `format`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetPulseLatestErrorBody]`
- **Error**: `GetPulseLatestErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `GetPulseLatestErrorBody` | `plinth_us_grants_data/errors/get_pulse_latest_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.pulse.get_pulse_run

- **Route**: `GET /api/v1/pulse/{sub_id}/runs/{run_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_pulse_run(sub_id: str, run_id: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`, `run_id`
- **Params**: `sub_id` — path · `run_id` — path · `format_` — query `format`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetPulseRunErrorBody]`
- **Error**: `GetPulseRunErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `GetPulseRunErrorBody` | `plinth_us_grants_data/errors/get_pulse_run_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.pulse.list_pulse

- **Route**: `GET /api/v1/pulse`
- **Auth**: `api_key_auth`
- **Signature**: `def list_pulse(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ListPulseErrorBody]`
- **Error**: `ListPulseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListPulseErrorBody` | `plinth_us_grants_data/errors/list_pulse_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |

### client.pulse.list_pulse_runs

- **Route**: `GET /api/v1/pulse/{sub_id}/runs`
- **Auth**: `api_key_auth`
- **Signature**: `def list_pulse_runs(sub_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`
- **Params**: `sub_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ListPulseRunsErrorBody]`
- **Error**: `ListPulseRunsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListPulseRunsErrorBody` | `plinth_us_grants_data/errors/list_pulse_runs_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.pulse.run_pulse

- **Route**: `POST /api/v1/pulse/{sub_id}/run`
- **Auth**: `api_key_auth`
- **Signature**: `def run_pulse(sub_id: str, *, checks: str | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`
- **Params**: `sub_id` — path · `checks` — query · `format_` — query `format`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RunPulseErrorBody]`
- **Error**: `RunPulseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `plinth_us_grants_data/models/enums/format.py` |
| `RunPulseErrorBody` | `plinth_us_grants_data/errors/run_pulse_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

### client.pulse.update_pulse

- **Route**: `PATCH /api/v1/pulse/{sub_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_pulse(sub_id: str, body: PulsePatch | PulsePatchDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`, `body`
- **Params**: `sub_id` — path · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UpdatePulseErrorBody]`
- **Error**: `UpdatePulseErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PulsePatch` | `plinth_us_grants_data/models/pulse_patch.py` |
| `PulsePatchDict` | `plinth_us_grants_data/models/pulse_patch.py` |
| `UpdatePulseErrorBody` | `plinth_us_grants_data/errors/update_pulse_error.py` |
| `ApiErrorModel` | `plinth_us_grants_data/models/api_error_model.py` |
| `HttpValidationError` | `plinth_us_grants_data/models/http_validation_error.py` |

