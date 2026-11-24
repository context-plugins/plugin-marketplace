<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthWellness — operations

Accessor: `client.health_wellness` · Source: `api_verve/apis/health_wellness.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.health_wellness.bmicalculator

- **Route**: `GET /v1/bmicalculator`
- **Auth**: `api_key`
- **Signature**: `def bmicalculator(weight: float, height: float, unit: str, *, age: float | None = None, gender: str | None = None, activity_level: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `weight`, `height`, `unit`
- **Params**: `weight` — query · `height` — query · `unit` — query · `age` — query · `gender` — query · `activity_level` — query `activityLevel`
- **Returns (parsed)**: `V1BmicalculatorResponse`
- **Returns (raw)**: `ApiResult[V1BmicalculatorResponse, BmicalculatorErrorBody]`
- **Error**: `BmicalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BmicalculatorResponse` | `api_verve/models/v1_bmicalculator_response.py` |
| `BmicalculatorErrorBody` | `api_verve/errors/bmicalculator_error.py` |

### client.health_wellness.exercises

- **Route**: `GET /v1/exercises`
- **Auth**: `api_key`
- **Signature**: `def exercises(muscle: str, *, name: str | None = None, equipment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `muscle`
- **Params**: `muscle` — query · `name` — query · `equipment` — query
- **Returns (parsed)**: `V1ExercisesResponse`
- **Returns (raw)**: `ApiResult[V1ExercisesResponse, ExercisesErrorBody]`
- **Error**: `ExercisesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ExercisesResponse` | `api_verve/models/v1_exercises_response.py` |
| `ExercisesErrorBody` | `api_verve/errors/exercises_error.py` |

