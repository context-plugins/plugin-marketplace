<!-- Generated file — do not edit; regenerated with the SDK. -->

# CostEstimation — operations

Accessor: `client.cost_estimation` · Source: `amazon_dev_ops_guru/apis/cost_estimation.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cost_estimation.get_cost_estimation

- **Route**: `GET /cost-estimation`
- **Auth**: `sigv4`
- **Signature**: `def get_cost_estimation(*, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_token` — query `NextToken`
- **Returns (parsed)**: `GetCostEstimationResponse`
- **Returns (raw)**: `ApiResult[GetCostEstimationResponse, GetCostEstimationErrorBody]`
- **Error**: `GetCostEstimationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCostEstimationResponse` | `amazon_dev_ops_guru/models/get_cost_estimation_response.py` |
| `GetCostEstimationErrorBody` | `amazon_dev_ops_guru/errors/get_cost_estimation_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.cost_estimation.start_cost_estimation

- **Route**: `PUT /cost-estimation`
- **Auth**: `sigv4`
- **Signature**: `def start_cost_estimation(*, body: CostEstimationRequest | CostEstimationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, StartCostEstimationErrorBody]`
- **Error**: `StartCostEstimationErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CostEstimationRequest` | `amazon_dev_ops_guru/models/cost_estimation_request.py` |
| `CostEstimationRequestDict` | `amazon_dev_ops_guru/models/cost_estimation_request.py` |
| `StartCostEstimationErrorBody` | `amazon_dev_ops_guru/errors/start_cost_estimation_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_dev_ops_guru/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

