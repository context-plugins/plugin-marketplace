<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeedbackApi — operations

Accessor: `client.feedback_api` · Source: `amazon_dev_ops_guru/apis/feedback_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.feedback_api.describe_feedback

- **Route**: `POST /feedback`
- **Auth**: `sigv4`
- **Signature**: `def describe_feedback(*, body: FeedbackRequest | FeedbackRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DescribeFeedbackResponse`
- **Returns (raw)**: `ApiResult[DescribeFeedbackResponse, DescribeFeedbackErrorBody]`
- **Error**: `DescribeFeedbackErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FeedbackRequest` | `amazon_dev_ops_guru/models/feedback_request.py` |
| `FeedbackRequestDict` | `amazon_dev_ops_guru/models/feedback_request.py` |
| `DescribeFeedbackResponse` | `amazon_dev_ops_guru/models/describe_feedback_response.py` |
| `DescribeFeedbackErrorBody` | `amazon_dev_ops_guru/errors/describe_feedback_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.feedback_api.put_feedback

- **Route**: `PUT /feedback`
- **Auth**: `sigv4`
- **Signature**: `def put_feedback(*, body: DescribeFeedbackResponse | DescribeFeedbackResponseDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, PutFeedbackErrorBody]`
- **Error**: `PutFeedbackErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeFeedbackResponse` | `amazon_dev_ops_guru/models/describe_feedback_response.py` |
| `DescribeFeedbackResponseDict` | `amazon_dev_ops_guru/models/describe_feedback_response.py` |
| `PutFeedbackErrorBody` | `amazon_dev_ops_guru/errors/put_feedback_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_dev_ops_guru/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

