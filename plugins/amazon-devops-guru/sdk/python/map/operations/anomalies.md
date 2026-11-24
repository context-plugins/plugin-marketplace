<!-- Generated file — do not edit; regenerated with the SDK. -->

# Anomalies — operations

Accessor: `client.anomalies` · Source: `amazon_dev_ops_guru/apis/anomalies.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.anomalies.describe_anomaly

- **Route**: `GET /anomalies/{Id}`
- **Auth**: `sigv4`
- **Signature**: `def describe_anomaly(id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `Id` · `account_id` — query `AccountId`
- **Returns (parsed)**: `DescribeAnomalyResponse`
- **Returns (raw)**: `ApiResult[DescribeAnomalyResponse, DescribeAnomalyErrorBody]`
- **Error**: `DescribeAnomalyErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeAnomalyResponse` | `amazon_dev_ops_guru/models/describe_anomaly_response.py` |
| `DescribeAnomalyErrorBody` | `amazon_dev_ops_guru/errors/describe_anomaly_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.anomalies.list_anomalies_for_insight

- **Route**: `POST /anomalies/insight/{InsightId}`
- **Auth**: `sigv4`
- **Signature**: `def list_anomalies_for_insight(insight_id: str, *, body: AnomaliesInsightRequest | AnomaliesInsightRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `insight_id`
- **Params**: `insight_id` — path `InsightId` · `body` — JSON body
- **Returns (parsed)**: `ListAnomaliesForInsightResponse`
- **Returns (raw)**: `ApiResult[ListAnomaliesForInsightResponse, ListAnomaliesForInsightErrorBody]`
- **Error**: `ListAnomaliesForInsightErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnomaliesInsightRequest` | `amazon_dev_ops_guru/models/anomalies_insight_request.py` |
| `AnomaliesInsightRequestDict` | `amazon_dev_ops_guru/models/anomalies_insight_request.py` |
| `ListAnomaliesForInsightResponse` | `amazon_dev_ops_guru/models/list_anomalies_for_insight_response.py` |
| `ListAnomaliesForInsightErrorBody` | `amazon_dev_ops_guru/errors/list_anomalies_for_insight_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

