<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.user_api` · Source: `amazon_rekognition/apis/user_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user_api.create_user

- **Route**: `POST /#CreateUser`
- **Auth**: `sigv4`
- **Signature**: `def create_user(x_amz_target: XAmzTargetAmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateUserErrorBody]`
- **Error**: `CreateUserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionUserApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_user_api.py` |
| `CreateUserErrorBody` | `amazon_rekognition/errors/create_user_error.py` |

### client.user_api.delete_user

- **Route**: `POST /#DeleteUser`
- **Auth**: `sigv4`
- **Signature**: `def delete_user(x_amz_target: XAmzTarget1AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteUserErrorBody]`
- **Error**: `DeleteUserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionUserApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_user_api.py` |
| `DeleteUserErrorBody` | `amazon_rekognition/errors/delete_user_error.py` |

### client.user_api.list_users

- **Route**: `POST /#ListUsers`
- **Auth**: `sigv4`
- **Signature**: `def list_users(x_amz_target: XAmzTarget2AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListUsersErrorBody]`
- **Error**: `ListUsersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionUserApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_user_api.py` |
| `ListUsersErrorBody` | `amazon_rekognition/errors/list_users_error.py` |

### client.user_api.search_users

- **Route**: `POST /#SearchUsers`
- **Auth**: `sigv4`
- **Signature**: `def search_users(x_amz_target: XAmzTarget3AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SearchUsersErrorBody]`
- **Error**: `SearchUsersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonRekognitionUserApiOrStr` | `amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_user_api.py` |
| `SearchUsersErrorBody` | `amazon_rekognition/errors/search_users_error.py` |

### client.user_api.search_users_by_image

- **Route**: `POST /#SearchUsersByImage`
- **Auth**: `sigv4`
- **Signature**: `def search_users_by_image(x_amz_target: XAmzTarget4AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SearchUsersByImageErrorBody]`
- **Error**: `SearchUsersByImageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonRekognitionUserApiOrStr` | `amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_user_api.py` |
| `SearchUsersByImageErrorBody` | `amazon_rekognition/errors/search_users_by_image_error.py` |

