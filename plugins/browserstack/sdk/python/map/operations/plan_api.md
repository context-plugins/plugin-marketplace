<!-- Generated file — do not edit; regenerated with the SDK. -->

# PlanApi — operations

Accessor: `client.plan_api` · Source: `browser_stack/apis/plan_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.plan_api.get_plan

- **Route**: `GET /automate/plan.json`
- **Auth**: `basic_auth`
- **Signature**: `def get_plan(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Plan`
- **Returns (raw)**: `ApiResult[Plan, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Plan` | `browser_stack/models/plan.py` |

