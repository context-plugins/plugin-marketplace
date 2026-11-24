<!-- Generated file — do not edit; regenerated with the SDK. -->

# Robot — operations

Accessor: `client.robot` · Source: `dynamic_feed/apis/robot.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.robot.v1_anchor_daily_v1_anchor_daily_get

- **Route**: `GET /v1/anchor/daily`
- **Signature**: `def v1_anchor_daily_v1_anchor_daily_get(*, date: str | None = "", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1AnchorDailyV1AnchorDailyGetErrorBody]`
- **Error**: `V1AnchorDailyV1AnchorDailyGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1AnchorDailyV1AnchorDailyGetErrorBody` | `dynamic_feed/errors/v1_anchor_daily_v1_anchor_daily_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.robot.v1_anchor_upgrade_v1_anchor_upgrade_post

- **Route**: `POST /v1/anchor/upgrade`
- **Signature**: `def v1_anchor_upgrade_v1_anchor_upgrade_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_anchor_v1_anchor_post

- **Route**: `POST /v1/anchor`
- **Signature**: `def v1_anchor_v1_anchor_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_awareness_v1_awareness_post

- **Route**: `POST /v1/awareness`
- **Signature**: `def v1_awareness_v1_awareness_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_humanoid_v1_humanoid_post

- **Route**: `POST /v1/humanoid`
- **Signature**: `def v1_humanoid_v1_humanoid_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_marine_v1_marine_post

- **Route**: `POST /v1/marine`
- **Signature**: `def v1_marine_v1_marine_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_preflight_v1_preflight_post

- **Route**: `POST /v1/preflight`
- **Signature**: `def v1_preflight_v1_preflight_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_road_v1_road_post

- **Route**: `POST /v1/road`
- **Signature**: `def v1_road_v1_road_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_robot_receipt_sample_v1_robot_receipt_sample_get

- **Route**: `GET /v1/robot-receipt/sample`
- **Signature**: `def v1_robot_receipt_sample_v1_robot_receipt_sample_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.robot.v1_robot_receipt_v1_robot_receipt_post

- **Route**: `POST /v1/robot-receipt`
- **Signature**: `def v1_robot_receipt_v1_robot_receipt_post(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1RobotReceiptV1RobotReceiptPostErrorBody]`
- **Error**: `V1RobotReceiptV1RobotReceiptPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1RobotReceiptV1RobotReceiptPostErrorBody` | `dynamic_feed/errors/v1_robot_receipt_v1_robot_receipt_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

