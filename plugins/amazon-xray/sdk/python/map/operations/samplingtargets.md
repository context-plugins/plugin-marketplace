<!-- Generated file — do not edit; regenerated with the SDK. -->

# Samplingtargets — operations

Accessor: `client.samplingtargets` · Source: `aws_x_ray/apis/samplingtargets.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.samplingtargets.get_sampling_targets

- **Route**: `POST /SamplingTargets`
- **Auth**: `sigv4`
- **Signature**: `def get_sampling_targets(*, body: SamplingTargetsRequest | SamplingTargetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetSamplingTargetsResult`
- **Returns (raw)**: `ApiResult[GetSamplingTargetsResult, GetSamplingTargetsErrorBody]`
- **Error**: `GetSamplingTargetsErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SamplingTargetsRequest` | `aws_x_ray/models/sampling_targets_request.py` |
| `SamplingTargetsRequestDict` | `aws_x_ray/models/sampling_targets_request.py` |
| `GetSamplingTargetsResult` | `aws_x_ray/models/get_sampling_targets_result.py` |
| `GetSamplingTargetsErrorBody` | `aws_x_ray/errors/get_sampling_targets_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

