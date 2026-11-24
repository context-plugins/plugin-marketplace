<!-- Generated file — do not edit; regenerated with the SDK. -->

# CelebrityRecognitionApi — operations

Accessor: `client.celebrity_recognition_api` · Source: `amazon_rekognition/apis/celebrity_recognition_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.celebrity_recognition_api.get_celebrity_recognition

- **Route**: `POST /#GetCelebrityRecognition`
- **Auth**: `sigv4`
- **Signature**: `def get_celebrity_recognition(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCelebrityRecognitionErrorBody]`
- **Error**: `GetCelebrityRecognitionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `amazon_rekognition/models/enums/x_amz_target.py` |
| `GetCelebrityRecognitionErrorBody` | `amazon_rekognition/errors/get_celebrity_recognition_error.py` |

### client.celebrity_recognition_api.recognize_celebrities

- **Route**: `POST /#RecognizeCelebrities`
- **Auth**: `sigv4`
- **Signature**: `def recognize_celebrities(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RecognizeCelebritiesErrorBody]`
- **Error**: `RecognizeCelebritiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_rekognition/models/enums/x_amz_target2.py` |
| `RecognizeCelebritiesErrorBody` | `amazon_rekognition/errors/recognize_celebrities_error.py` |

### client.celebrity_recognition_api.start_celebrity_recognition

- **Route**: `POST /#StartCelebrityRecognition`
- **Auth**: `sigv4`
- **Signature**: `def start_celebrity_recognition(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartCelebrityRecognitionErrorBody]`
- **Error**: `StartCelebrityRecognitionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `amazon_rekognition/models/enums/x_amz_target1.py` |
| `StartCelebrityRecognitionErrorBody` | `amazon_rekognition/errors/start_celebrity_recognition_error.py` |

