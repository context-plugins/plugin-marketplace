<!-- Generated file — do not edit; regenerated with the SDK. -->

# Speech — operations

Accessor: `client.speech` · Source: `google_cloud_speech_to_text/apis/speech.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.speech.speech_speech_longrunningrecognize

- **Route**: `POST /v1/speech:longrunningrecognize`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_speech_longrunningrecognize(body: LongRunningRecognizeRequest | LongRunningRecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, SpeechSpeechLongrunningrecognizeErrorBody]`
- **Error**: `SpeechSpeechLongrunningrecognizeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LongRunningRecognizeRequest` | `google_cloud_speech_to_text/models/long_running_recognize_request.py` |
| `LongRunningRecognizeRequestDict` | `google_cloud_speech_to_text/models/long_running_recognize_request.py` |
| `Operation` | `google_cloud_speech_to_text/models/operation.py` |
| `SpeechSpeechLongrunningrecognizeErrorBody` | `google_cloud_speech_to_text/errors/speech_speech_longrunningrecognize_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

### client.speech.speech_speech_recognize

- **Route**: `POST /v1/speech:recognize`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def speech_speech_recognize(body: RecognizeRequest | RecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RecognizeResponse`
- **Returns (raw)**: `ApiResult[RecognizeResponse, SpeechSpeechRecognizeErrorBody]`
- **Error**: `SpeechSpeechRecognizeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RecognizeRequest` | `google_cloud_speech_to_text/models/recognize_request.py` |
| `RecognizeRequestDict` | `google_cloud_speech_to_text/models/recognize_request.py` |
| `RecognizeResponse` | `google_cloud_speech_to_text/models/recognize_response.py` |
| `SpeechSpeechRecognizeErrorBody` | `google_cloud_speech_to_text/errors/speech_speech_recognize_error.py` |
| `GoogleRpcError` | `google_cloud_speech_to_text/models/google_rpc_error.py` |

