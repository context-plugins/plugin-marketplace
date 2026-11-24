<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recognition — operations

Accessor: `client.recognition` · Source: `cars_xe/apis/recognition.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recognition.recognize_plate

- **Route**: `POST /platerecognition`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def recognize_plate(body: PlaterecognitionRequest | PlaterecognitionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PlaterecognitionResponse`
- **Returns (raw)**: `ApiResult[PlaterecognitionResponse, RecognizePlateErrorBody]`
- **Error**: `RecognizePlateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlaterecognitionRequest` | `cars_xe/models/platerecognition_request.py` |
| `PlaterecognitionRequestDict` | `cars_xe/models/platerecognition_request.py` |
| `PlaterecognitionResponse` | `cars_xe/models/platerecognition_response.py` |
| `RecognizePlateErrorBody` | `cars_xe/errors/recognize_plate_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.recognition.vin_ocr

- **Route**: `POST /v1/vinocr`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def vin_ocr(body: V1VinocrRequest | V1VinocrRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1VinocrResponse`
- **Returns (raw)**: `ApiResult[V1VinocrResponse, VinOcrErrorBody]`
- **Error**: `VinOcrErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1VinocrRequest` | `cars_xe/models/v1_vinocr_request.py` |
| `V1VinocrRequestDict` | `cars_xe/models/v1_vinocr_request.py` |
| `V1VinocrResponse` | `cars_xe/models/v1_vinocr_response.py` |
| `VinOcrErrorBody` | `cars_xe/errors/vin_ocr_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

