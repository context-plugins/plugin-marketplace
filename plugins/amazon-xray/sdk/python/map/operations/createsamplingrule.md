<!-- Generated file — do not edit; regenerated with the SDK. -->

# Createsamplingrule — operations

Accessor: `client.createsamplingrule` · Source: `aws_x_ray/apis/createsamplingrule.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.createsamplingrule.create_sampling_rule

- **Route**: `POST /CreateSamplingRule`
- **Auth**: `sigv4`
- **Signature**: `def create_sampling_rule(*, body: CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateSamplingRuleResult`
- **Returns (raw)**: `ApiResult[CreateSamplingRuleResult, CreateSamplingRuleErrorBody]`
- **Error**: `CreateSamplingRuleErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSamplingRuleRequest` | `aws_x_ray/models/create_sampling_rule_request.py` |
| `CreateSamplingRuleRequestDict` | `aws_x_ray/models/create_sampling_rule_request.py` |
| `CreateSamplingRuleResult` | `aws_x_ray/models/create_sampling_rule_result.py` |
| `CreateSamplingRuleErrorBody` | `aws_x_ray/errors/create_sampling_rule_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

