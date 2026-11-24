<!-- Generated file — do not edit; regenerated with the SDK. -->

# OpenFeatureRemoteEvaluationApiOfrep — operations

Accessor: `client.open_feature_remote_evaluation_api_ofrep` · Source: `dev_cycle/apis/open_feature_remote_evaluation_api_ofrep.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.open_feature_remote_evaluation_api_ofrep.post_ofrep_v1_evaluate_flags

- **Route**: `POST /ofrep/v1/evaluate/flags`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def post_ofrep_v1_evaluate_flags(*, if_none_match: str | None = None, body: OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `if_none_match` — header `If-None-Match` · `body` — JSON body
- **Returns (parsed)**: `OfrepBulkEvaluationSuccess`
- **Returns (raw)**: `ApiResult[OfrepBulkEvaluationSuccess, PostOfrepV1EvaluateFlagsErrorBody]`
- **Error**: `PostOfrepV1EvaluateFlagsErrorBody` — **Case A (typed)**
- **Error arms**: `OfrepBulkEvaluationFailure` [400] · `OfrepGeneralErrorResponse` [500] · `RawError` [401, 403, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `OfrepBulkEvaluationRequest` | `dev_cycle/models/ofrep_bulk_evaluation_request.py` |
| `OfrepBulkEvaluationRequestDict` | `dev_cycle/models/ofrep_bulk_evaluation_request.py` |
| `OfrepBulkEvaluationSuccess` | `dev_cycle/models/ofrep_bulk_evaluation_success.py` |
| `PostOfrepV1EvaluateFlagsErrorBody` | `dev_cycle/errors/post_ofrep_v1_evaluate_flags_error.py` |
| `OfrepBulkEvaluationFailure` | `dev_cycle/models/ofrep_bulk_evaluation_failure.py` |
| `OfrepGeneralErrorResponse` | `dev_cycle/models/ofrep_general_error_response.py` |

### client.open_feature_remote_evaluation_api_ofrep.post_ofrep_v1_evaluate_flags_by_key

- **Route**: `POST /ofrep/v1/evaluate/flags/{key}`
- **Server**: `default_dev_cycle_bucketing_bucketing_api`
- **Signature**: `def post_ofrep_v1_evaluate_flags_by_key(key: str, *, body: OfrepEvaluationRequest | OfrepEvaluationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `OfrepEvaluationSuccess`
- **Returns (raw)**: `ApiResult[OfrepEvaluationSuccess, PostOfrepV1EvaluateFlagsByKeyErrorBody]`
- **Error**: `PostOfrepV1EvaluateFlagsByKeyErrorBody` — **Case A (typed)**
- **Error arms**: `OfrepEvaluationFailure` [400] · `OfrepFlagNotFound` [404] · `OfrepGeneralErrorResponse` [500] · `RawError` [401, 403, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `OfrepEvaluationRequest` | `dev_cycle/models/ofrep_evaluation_request.py` |
| `OfrepEvaluationRequestDict` | `dev_cycle/models/ofrep_evaluation_request.py` |
| `OfrepEvaluationSuccess` | `dev_cycle/models/ofrep_evaluation_success.py` |
| `PostOfrepV1EvaluateFlagsByKeyErrorBody` | `dev_cycle/errors/post_ofrep_v1_evaluate_flags_by_key_error.py` |
| `OfrepEvaluationFailure` | `dev_cycle/models/ofrep_evaluation_failure.py` |
| `OfrepFlagNotFound` | `dev_cycle/models/ofrep_flag_not_found.py` |
| `OfrepGeneralErrorResponse` | `dev_cycle/models/ofrep_general_error_response.py` |

