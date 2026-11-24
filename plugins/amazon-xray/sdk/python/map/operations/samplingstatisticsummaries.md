<!-- Generated file — do not edit; regenerated with the SDK. -->

# Samplingstatisticsummaries — operations

Accessor: `client.samplingstatisticsummaries` · Source: `aws_x_ray/apis/samplingstatisticsummaries.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.samplingstatisticsummaries.get_sampling_statistic_summaries

- **Route**: `POST /SamplingStatisticSummaries`
- **Auth**: `sigv4`
- **Signature**: `def get_sampling_statistic_summaries(*, body: SamplingStatisticSummariesRequest | SamplingStatisticSummariesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetSamplingStatisticSummariesResult`
- **Returns (raw)**: `ApiResult[GetSamplingStatisticSummariesResult, GetSamplingStatisticSummariesErrorBody]`
- **Error**: `GetSamplingStatisticSummariesErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SamplingStatisticSummariesRequest` | `aws_x_ray/models/sampling_statistic_summaries_request.py` |
| `SamplingStatisticSummariesRequestDict` | `aws_x_ray/models/sampling_statistic_summaries_request.py` |
| `GetSamplingStatisticSummariesResult` | `aws_x_ray/models/get_sampling_statistic_summaries_result.py` |
| `GetSamplingStatisticSummariesErrorBody` | `aws_x_ray/errors/get_sampling_statistic_summaries_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

