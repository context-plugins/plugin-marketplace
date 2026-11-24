<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agent — operations

Accessor: `client.agent` · Source: `dynamic_feed/apis/agent.py` · 61 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.agent.post_v1_explain

- **Route**: `POST /v1/explain`
- **Signature**: `def post_v1_explain(*, subject: str | None = "", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subject` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, PostV1ExplainErrorBody]`
- **Error**: `PostV1ExplainErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PostV1ExplainErrorBody` | `dynamic_feed/errors/post_v1_explain_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.schemas_index_schemas_index_json_get

- **Route**: `GET /schemas/index.json`
- **Signature**: `def schemas_index_schemas_index_json_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_agent_receipt_v1_agent_receipt_post

- **Route**: `POST /v1/agent/receipt`
- **Signature**: `def v1_agent_receipt_v1_agent_receipt_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_asof_v1_asof_get

- **Route**: `GET /v1/asof`
- **Signature**: `def v1_asof_v1_asof_get(tool: str, t: str, *, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `tool`, `t`
- **Params**: `tool` — query · `t` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1AsofV1AsofGetErrorBody]`
- **Error**: `V1AsofV1AsofGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1AsofV1AsofGetErrorBody` | `dynamic_feed/errors/v1_asof_v1_asof_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_attest_v1_attest_get

- **Route**: `GET /v1/attest`
- **Signature**: `def v1_attest_v1_attest_get(metric: str, threshold: float, *, op: str | None = "gte", lat: float | None = None, lon: float | None = None, city: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `metric`, `threshold`
- **Params**: `metric` — query · `threshold` — query · `op` — query · `lat` — query · `lon` — query · `city` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1AttestV1AttestGetErrorBody]`
- **Error**: `V1AttestV1AttestGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1AttestV1AttestGetErrorBody` | `dynamic_feed/errors/v1_attest_v1_attest_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_batch_v1_batch_post

- **Route**: `POST /v1/batch`
- **Signature**: `def v1_batch_v1_batch_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_benchmark_history_v1_benchmark_history_get

- **Route**: `GET /v1/benchmark/history`
- **Signature**: `def v1_benchmark_history_v1_benchmark_history_get(*, days: int | None = 90, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `days` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody]`
- **Error**: `V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1BenchmarkHistoryV1BenchmarkHistoryGetErrorBody` | `dynamic_feed/errors/v1_benchmark_history_v1_benchmark_history_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_benchmark_v1_benchmark_get

- **Route**: `GET /v1/benchmark`
- **Signature**: `def v1_benchmark_v1_benchmark_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_bundle_v1_bundles_bundle_id_get

- **Route**: `GET /v1/bundles/{bundle_id}`
- **Signature**: `def v1_bundle_v1_bundles_bundle_id_get(bundle_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bundle_id`
- **Params**: `bundle_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1BundleV1BundlesBundleIdGetErrorBody]`
- **Error**: `V1BundleV1BundlesBundleIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1BundleV1BundlesBundleIdGetErrorBody` | `dynamic_feed/errors/v1_bundle_v1_bundles_bundle_id_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_bundles_v1_bundles_get

- **Route**: `GET /v1/bundles`
- **Signature**: `def v1_bundles_v1_bundles_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_bushfire_v1_bushfire_get

- **Route**: `GET /v1/bushfire`
- **Signature**: `def v1_bushfire_v1_bushfire_get(*, lat: float | None = None, lon: float | None = None, radius_km: float | None = 150.0, state: str | None = "", limit: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `lat` — query · `lon` — query · `radius_km` — query · `state` — query · `limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1BushfireV1BushfireGetErrorBody]`
- **Error**: `V1BushfireV1BushfireGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1BushfireV1BushfireGetErrorBody` | `dynamic_feed/errors/v1_bushfire_v1_bushfire_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_checkpoint_proof_v1_checkpoints_day_proof_get

- **Route**: `GET /v1/checkpoints/{day}/proof`
- **Signature**: `def v1_checkpoint_proof_v1_checkpoints_day_proof_get(day: str, *, kind: str | None = "ots", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `day`
- **Params**: `day` — path · `kind` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1CheckpointProofV1CheckpointsDayProofGetErrorBody]`
- **Error**: `V1CheckpointProofV1CheckpointsDayProofGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1CheckpointProofV1CheckpointsDayProofGetErrorBody` | `dynamic_feed/errors/v1_checkpoint_proof_v1_checkpoints_day_proof_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_checkpoints_v1_checkpoints_get

- **Route**: `GET /v1/checkpoints`
- **Signature**: `def v1_checkpoints_v1_checkpoints_get(*, limit: int | None = 30, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1CheckpointsV1CheckpointsGetErrorBody]`
- **Error**: `V1CheckpointsV1CheckpointsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1CheckpointsV1CheckpointsGetErrorBody` | `dynamic_feed/errors/v1_checkpoints_v1_checkpoints_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_discover_get_v1_discover_get

- **Route**: `GET /v1/discover`
- **Signature**: `def v1_discover_get_v1_discover_get(*, need: str | None = "", limit: int | None = 8, external: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `need` — query · `limit` — query · `external` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1DiscoverGetV1DiscoverGetErrorBody]`
- **Error**: `V1DiscoverGetV1DiscoverGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1DiscoverGetV1DiscoverGetErrorBody` | `dynamic_feed/errors/v1_discover_get_v1_discover_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_discover_post_v1_discover_post

- **Route**: `POST /v1/discover`
- **Signature**: `def v1_discover_post_v1_discover_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_drift_v1_drift_post

- **Route**: `POST /v1/drift`
- **Signature**: `def v1_drift_v1_drift_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_eval_receipt_sample_v1_eval_receipt_sample_get

- **Route**: `GET /v1/eval-receipt/sample`
- **Signature**: `def v1_eval_receipt_sample_v1_eval_receipt_sample_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_eval_receipt_v1_eval_receipt_post

- **Route**: `POST /v1/eval-receipt`
- **Signature**: `def v1_eval_receipt_v1_eval_receipt_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1EvalReceiptV1EvalReceiptPostErrorBody]`
- **Error**: `V1EvalReceiptV1EvalReceiptPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1EvalReceiptV1EvalReceiptPostErrorBody` | `dynamic_feed/errors/v1_eval_receipt_v1_eval_receipt_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_evidence_wildfire_v1_evidence_wildfire_get

- **Route**: `GET /v1/evidence/wildfire`
- **Signature**: `def v1_evidence_wildfire_v1_evidence_wildfire_get(lat: float, lon: float, *, detected_at: str | None = None, detector: str | None = "the detector", place: str | None = None, confidence: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query · `detected_at` — query · `detector` — query · `place` — query · `confidence` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1EvidenceWildfireV1EvidenceWildfireGetErrorBody]`
- **Error**: `V1EvidenceWildfireV1EvidenceWildfireGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1EvidenceWildfireV1EvidenceWildfireGetErrorBody` | `dynamic_feed/errors/v1_evidence_wildfire_v1_evidence_wildfire_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_explain_v1_explain_get

- **Route**: `GET /v1/explain`
- **Signature**: `def v1_explain_v1_explain_get(*, subject: str | None = "", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subject` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1ExplainV1ExplainGetErrorBody]`
- **Error**: `V1ExplainV1ExplainGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ExplainV1ExplainGetErrorBody` | `dynamic_feed/errors/v1_explain_v1_explain_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_exposure_report_v1_exposure_report_get

- **Route**: `GET /v1/exposure-report`
- **Signature**: `def v1_exposure_report_v1_exposure_report_get(*, perils: str | None = "wind,flood,wildfire", lat: float | None = -33.8688, lon: float | None = 151.2093, place: str | None = None, organisation: str | None = None, use_case: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `perils` — query · `lat` — query · `lon` — query · `place` — query · `organisation` — query · `use_case` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1ExposureReportV1ExposureReportGetErrorBody]`
- **Error**: `V1ExposureReportV1ExposureReportGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ExposureReportV1ExposureReportGetErrorBody` | `dynamic_feed/errors/v1_exposure_report_v1_exposure_report_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_guard_v1_guard_post

- **Route**: `POST /v1/guard`
- **Signature**: `def v1_guard_v1_guard_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_index_v1_get

- **Route**: `GET /v1`
- **Signature**: `def v1_index_v1_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_inference_receipt_sample_v1_inference_receipt_sample_get

- **Route**: `GET /v1/inference-receipt/sample`
- **Signature**: `def v1_inference_receipt_sample_v1_inference_receipt_sample_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_inference_receipt_v1_inference_receipt_post

- **Route**: `POST /v1/inference-receipt`
- **Signature**: `def v1_inference_receipt_v1_inference_receipt_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1InferenceReceiptV1InferenceReceiptPostErrorBody]`
- **Error**: `V1InferenceReceiptV1InferenceReceiptPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1InferenceReceiptV1InferenceReceiptPostErrorBody` | `dynamic_feed/errors/v1_inference_receipt_v1_inference_receipt_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_intensity_v1_intensity_get

- **Route**: `GET /v1/intensity`
- **Signature**: `def v1_intensity_v1_intensity_get(lat: float, lon: float, *, peril: str | None = "flood", metric: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query · `peril` — query · `metric` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1IntensityV1IntensityGetErrorBody]`
- **Error**: `V1IntensityV1IntensityGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1IntensityV1IntensityGetErrorBody` | `dynamic_feed/errors/v1_intensity_v1_intensity_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_me_v1_me_get

- **Route**: `GET /v1/me`
- **Signature**: `def v1_me_v1_me_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1MeV1MeGetErrorBody]`
- **Error**: `V1MeV1MeGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1MeV1MeGetErrorBody` | `dynamic_feed/errors/v1_me_v1_me_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_nearby_v1_nearby_get

- **Route**: `GET /v1/nearby`
- **Signature**: `def v1_nearby_v1_nearby_get(lat: float, lon: float, *, radius_km: float | None = 500.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query · `radius_km` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1NearbyV1NearbyGetErrorBody]`
- **Error**: `V1NearbyV1NearbyGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1NearbyV1NearbyGetErrorBody` | `dynamic_feed/errors/v1_nearby_v1_nearby_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_notarize_v1_notarize_post

- **Route**: `POST /v1/notarize`
- **Signature**: `def v1_notarize_v1_notarize_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1NotarizeV1NotarizePostErrorBody]`
- **Error**: `V1NotarizeV1NotarizePostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1NotarizeV1NotarizePostErrorBody` | `dynamic_feed/errors/v1_notarize_v1_notarize_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_notary_entry_v1_notary_log_idx_get

- **Route**: `GET /v1/notary/log/{idx}`
- **Signature**: `def v1_notary_entry_v1_notary_log_idx_get(idx: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idx`
- **Params**: `idx` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1NotaryEntryV1NotaryLogIdxGetErrorBody]`
- **Error**: `V1NotaryEntryV1NotaryLogIdxGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1NotaryEntryV1NotaryLogIdxGetErrorBody` | `dynamic_feed/errors/v1_notary_entry_v1_notary_log_idx_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_notary_feed_register_v1_notary_feeds_post

- **Route**: `POST /v1/notary/feeds`
- **Signature**: `def v1_notary_feed_register_v1_notary_feeds_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody]`
- **Error**: `V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1NotaryFeedRegisterV1NotaryFeedsPostErrorBody` | `dynamic_feed/errors/v1_notary_feed_register_v1_notary_feeds_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_notary_feeds_list_v1_notary_feeds_get

- **Route**: `GET /v1/notary/feeds`
- **Signature**: `def v1_notary_feeds_list_v1_notary_feeds_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1NotaryFeedsListV1NotaryFeedsGetErrorBody]`
- **Error**: `V1NotaryFeedsListV1NotaryFeedsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1NotaryFeedsListV1NotaryFeedsGetErrorBody` | `dynamic_feed/errors/v1_notary_feeds_list_v1_notary_feeds_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_notary_head_v1_notary_log_head_get

- **Route**: `GET /v1/notary/log/head`
- **Signature**: `def v1_notary_head_v1_notary_log_head_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_notary_log_v1_notary_log_get

- **Route**: `GET /v1/notary/log`
- **Signature**: `def v1_notary_log_v1_notary_log_get(*, limit: int | None = 50, before: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `before` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1NotaryLogV1NotaryLogGetErrorBody]`
- **Error**: `V1NotaryLogV1NotaryLogGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1NotaryLogV1NotaryLogGetErrorBody` | `dynamic_feed/errors/v1_notary_log_v1_notary_log_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_notary_proof_v1_notary_log_idx_proof_get

- **Route**: `GET /v1/notary/log/{idx}/proof`
- **Signature**: `def v1_notary_proof_v1_notary_log_idx_proof_get(idx: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idx`
- **Params**: `idx` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1NotaryProofV1NotaryLogIdxProofGetErrorBody]`
- **Error**: `V1NotaryProofV1NotaryLogIdxProofGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1NotaryProofV1NotaryLogIdxProofGetErrorBody` | `dynamic_feed/errors/v1_notary_proof_v1_notary_log_idx_proof_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_pro_asof_v1_pro_asof_post

- **Route**: `POST /v1/pro/asof`
- **Signature**: `def v1_pro_asof_v1_pro_asof_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_pro_batch_v1_pro_batch_post

- **Route**: `POST /v1/pro/batch`
- **Signature**: `def v1_pro_batch_v1_pro_batch_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_pro_catalog_v1_pro_catalog_get

- **Route**: `GET /v1/pro/catalog`
- **Signature**: `def v1_pro_catalog_v1_pro_catalog_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_pro_tool_discover_v1_pro_tool_tool_get

- **Route**: `GET /v1/pro/tool/{tool}`
- **Signature**: `def v1_pro_tool_discover_v1_pro_tool_tool_get(tool: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `tool`
- **Params**: `tool` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1ProToolDiscoverV1ProToolToolGetErrorBody]`
- **Error**: `V1ProToolDiscoverV1ProToolToolGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ProToolDiscoverV1ProToolToolGetErrorBody` | `dynamic_feed/errors/v1_pro_tool_discover_v1_pro_tool_tool_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_pro_tool_v1_pro_tool_tool_post

- **Route**: `POST /v1/pro/tool/{tool}`
- **Signature**: `def v1_pro_tool_v1_pro_tool_tool_post(tool: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `tool`
- **Params**: `tool` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1ProToolV1ProToolToolPostErrorBody]`
- **Error**: `V1ProToolV1ProToolToolPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ProToolV1ProToolToolPostErrorBody` | `dynamic_feed/errors/v1_pro_tool_v1_pro_tool_tool_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_proxy_witness_v1_proxy_witness_post

- **Route**: `POST /v1/proxy-witness`
- **Signature**: `def v1_proxy_witness_v1_proxy_witness_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1ProxyWitnessV1ProxyWitnessPostErrorBody]`
- **Error**: `V1ProxyWitnessV1ProxyWitnessPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ProxyWitnessV1ProxyWitnessPostErrorBody` | `dynamic_feed/errors/v1_proxy_witness_v1_proxy_witness_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_receipt_v1_receipt_post

- **Route**: `POST /v1/receipt`
- **Signature**: `def v1_receipt_v1_receipt_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_snapshot_v1_snapshot_get

- **Route**: `GET /v1/snapshot`
- **Signature**: `def v1_snapshot_v1_snapshot_get(*, date: str | None = "", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1SnapshotV1SnapshotGetErrorBody]`
- **Error**: `V1SnapshotV1SnapshotGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1SnapshotV1SnapshotGetErrorBody` | `dynamic_feed/errors/v1_snapshot_v1_snapshot_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_sources_v1_sources_get

- **Route**: `GET /v1/sources`
- **Signature**: `def v1_sources_v1_sources_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_stamp_v1_stamp_post

- **Route**: `POST /v1/stamp`
- **Signature**: `def v1_stamp_v1_stamp_post(*, x_api_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1StampV1StampPostErrorBody]`
- **Error**: `V1StampV1StampPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StampV1StampPostErrorBody` | `dynamic_feed/errors/v1_stamp_v1_stamp_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_station_get_v1_station_station_id_get

- **Route**: `GET /v1/station/{station_id}`
- **Signature**: `def v1_station_get_v1_station_station_id_get(station_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `station_id`
- **Params**: `station_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1StationGetV1StationStationIdGetErrorBody]`
- **Error**: `V1StationGetV1StationStationIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StationGetV1StationStationIdGetErrorBody` | `dynamic_feed/errors/v1_station_get_v1_station_station_id_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_station_reading_v1_station_reading_post

- **Route**: `POST /v1/station/reading`
- **Signature**: `def v1_station_reading_v1_station_reading_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1StationReadingV1StationReadingPostErrorBody]`
- **Error**: `V1StationReadingV1StationReadingPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StationReadingV1StationReadingPostErrorBody` | `dynamic_feed/errors/v1_station_reading_v1_station_reading_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_station_register_v1_station_register_post

- **Route**: `POST /v1/station/register`
- **Signature**: `def v1_station_register_v1_station_register_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1StationRegisterV1StationRegisterPostErrorBody]`
- **Error**: `V1StationRegisterV1StationRegisterPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StationRegisterV1StationRegisterPostErrorBody` | `dynamic_feed/errors/v1_station_register_v1_station_register_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_stream_v1_stream_get

- **Route**: `GET /v1/stream`
- **Signature**: `def v1_stream_v1_stream_get(*, tool: str | None = "", args: str | None = "", interval: float | None = 15.0, count: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `tool` — query · `args` — query · `interval` — query · `count` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1StreamV1StreamGetErrorBody]`
- **Error**: `V1StreamV1StreamGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1StreamV1StreamGetErrorBody` | `dynamic_feed/errors/v1_stream_v1_stream_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_trigger_receipt_v1_trigger_receipt_get

- **Route**: `GET /v1/trigger-receipt`
- **Signature**: `def v1_trigger_receipt_v1_trigger_receipt_get(metric: str, threshold: float, *, op: str | None = "gte", lat: float | None = None, lon: float | None = None, city: str | None = None, peril: str | None = None, contract_ref: str | None = None, methodology: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `metric`, `threshold`
- **Params**: `metric` — query · `threshold` — query · `op` — query · `lat` — query · `lon` — query · `city` — query · `peril` — query · `contract_ref` — query · `methodology` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1TriggerReceiptV1TriggerReceiptGetErrorBody]`
- **Error**: `V1TriggerReceiptV1TriggerReceiptGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1TriggerReceiptV1TriggerReceiptGetErrorBody` | `dynamic_feed/errors/v1_trigger_receipt_v1_trigger_receipt_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_vc_v1_vc_post

- **Route**: `POST /v1/vc`
- **Signature**: `def v1_vc_v1_vc_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_watchlist_delete_v1_watchlist_delete

- **Route**: `DELETE /v1/watchlist`
- **Signature**: `def v1_watchlist_delete_v1_watchlist_delete(*, label: str | None = "", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `label` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WatchlistDeleteV1WatchlistDeleteErrorBody]`
- **Error**: `V1WatchlistDeleteV1WatchlistDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WatchlistDeleteV1WatchlistDeleteErrorBody` | `dynamic_feed/errors/v1_watchlist_delete_v1_watchlist_delete_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_watchlist_get_v1_watchlist_get

- **Route**: `GET /v1/watchlist`
- **Signature**: `def v1_watchlist_get_v1_watchlist_get(*, pull: bool | None = False, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `pull` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WatchlistGetV1WatchlistGetErrorBody]`
- **Error**: `V1WatchlistGetV1WatchlistGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WatchlistGetV1WatchlistGetErrorBody` | `dynamic_feed/errors/v1_watchlist_get_v1_watchlist_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_watchlist_post_v1_watchlist_post

- **Route**: `POST /v1/watchlist`
- **Signature**: `def v1_watchlist_post_v1_watchlist_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WatchlistPostV1WatchlistPostErrorBody]`
- **Error**: `V1WatchlistPostV1WatchlistPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WatchlistPostV1WatchlistPostErrorBody` | `dynamic_feed/errors/v1_watchlist_post_v1_watchlist_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_webhooks_create_v1_webhooks_post

- **Route**: `POST /v1/webhooks`
- **Signature**: `def v1_webhooks_create_v1_webhooks_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WebhooksCreateV1WebhooksPostErrorBody]`
- **Error**: `V1WebhooksCreateV1WebhooksPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksCreateV1WebhooksPostErrorBody` | `dynamic_feed/errors/v1_webhooks_create_v1_webhooks_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_webhooks_delete_v1_webhooks_delete

- **Route**: `DELETE /v1/webhooks`
- **Signature**: `def v1_webhooks_delete_v1_webhooks_delete(*, id_: int | None = 0, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `id_` — query `id` · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WebhooksDeleteV1WebhooksDeleteErrorBody]`
- **Error**: `V1WebhooksDeleteV1WebhooksDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksDeleteV1WebhooksDeleteErrorBody` | `dynamic_feed/errors/v1_webhooks_delete_v1_webhooks_delete_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_webhooks_list_v1_webhooks_get

- **Route**: `GET /v1/webhooks`
- **Signature**: `def v1_webhooks_list_v1_webhooks_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WebhooksListV1WebhooksGetErrorBody]`
- **Error**: `V1WebhooksListV1WebhooksGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksListV1WebhooksGetErrorBody` | `dynamic_feed/errors/v1_webhooks_list_v1_webhooks_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_webhooks_test_v1_webhooks_test_post

- **Route**: `POST /v1/webhooks/test`
- **Signature**: `def v1_webhooks_test_v1_webhooks_test_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WebhooksTestV1WebhooksTestPostErrorBody]`
- **Error**: `V1WebhooksTestV1WebhooksTestPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksTestV1WebhooksTestPostErrorBody` | `dynamic_feed/errors/v1_webhooks_test_v1_webhooks_test_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_witness_inclusion_v1_witness_idx_inclusion_get

- **Route**: `GET /v1/witness/{idx}/inclusion`
- **Signature**: `def v1_witness_inclusion_v1_witness_idx_inclusion_get(idx: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idx`
- **Params**: `idx` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody]`
- **Error**: `V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WitnessInclusionV1WitnessIdxInclusionGetErrorBody` | `dynamic_feed/errors/v1_witness_inclusion_v1_witness_idx_inclusion_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.agent.v1_witness_sample_v1_witness_sample_get

- **Route**: `GET /v1/witness/sample`
- **Signature**: `def v1_witness_sample_v1_witness_sample_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.agent.v1_witness_v1_witness_post

- **Route**: `POST /v1/witness`
- **Signature**: `def v1_witness_v1_witness_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1WitnessV1WitnessPostErrorBody]`
- **Error**: `V1WitnessV1WitnessPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WitnessV1WitnessPostErrorBody` | `dynamic_feed/errors/v1_witness_v1_witness_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

