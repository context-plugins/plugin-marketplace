<!-- Generated file — do not edit; regenerated with the SDK. -->

# Getsamplingrules — operations

Accessor: `client.getsamplingrules` · Source: `aws_x_ray/apis/getsamplingrules.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.getsamplingrules.get_sampling_rules

- **Route**: `POST /GetSamplingRules`
- **Auth**: `sigv4`
- **Signature**: `def get_sampling_rules(*, body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetSamplingRulesResult`
- **Returns (raw)**: `ApiResult[GetSamplingRulesResult, GetSamplingRulesErrorBody]`
- **Error**: `GetSamplingRulesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSamplingRulesRequest` | `aws_x_ray/models/get_sampling_rules_request.py` |
| `GetSamplingRulesRequestDict` | `aws_x_ray/models/get_sampling_rules_request.py` |
| `GetSamplingRulesResult` | `aws_x_ray/models/get_sampling_rules_result.py` |
| `GetSamplingRulesErrorBody` | `aws_x_ray/errors/get_sampling_rules_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

