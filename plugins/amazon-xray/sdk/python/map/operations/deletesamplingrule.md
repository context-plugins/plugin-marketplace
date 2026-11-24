<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deletesamplingrule — operations

Accessor: `client.deletesamplingrule` · Source: `aws_x_ray/apis/deletesamplingrule.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deletesamplingrule.delete_sampling_rule

- **Route**: `POST /DeleteSamplingRule`
- **Auth**: `sigv4`
- **Signature**: `def delete_sampling_rule(*, body: DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DeleteSamplingRuleResult`
- **Returns (raw)**: `ApiResult[DeleteSamplingRuleResult, DeleteSamplingRuleErrorBody]`
- **Error**: `DeleteSamplingRuleErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSamplingRuleRequest` | `aws_x_ray/models/delete_sampling_rule_request.py` |
| `DeleteSamplingRuleRequestDict` | `aws_x_ray/models/delete_sampling_rule_request.py` |
| `DeleteSamplingRuleResult` | `aws_x_ray/models/delete_sampling_rule_result.py` |
| `DeleteSamplingRuleErrorBody` | `aws_x_ray/errors/delete_sampling_rule_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

