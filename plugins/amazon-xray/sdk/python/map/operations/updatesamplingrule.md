<!-- Generated file — do not edit; regenerated with the SDK. -->

# Updatesamplingrule — operations

Accessor: `client.updatesamplingrule` · Source: `aws_x_ray/apis/updatesamplingrule.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.updatesamplingrule.update_sampling_rule

- **Route**: `POST /UpdateSamplingRule`
- **Auth**: `sigv4`
- **Signature**: `def update_sampling_rule(*, body: UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `UpdateSamplingRuleResult`
- **Returns (raw)**: `ApiResult[UpdateSamplingRuleResult, UpdateSamplingRuleErrorBody]`
- **Error**: `UpdateSamplingRuleErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSamplingRuleRequest` | `aws_x_ray/models/update_sampling_rule_request.py` |
| `UpdateSamplingRuleRequestDict` | `aws_x_ray/models/update_sampling_rule_request.py` |
| `UpdateSamplingRuleResult` | `aws_x_ray/models/update_sampling_rule_result.py` |
| `UpdateSamplingRuleErrorBody` | `aws_x_ray/errors/update_sampling_rule_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

