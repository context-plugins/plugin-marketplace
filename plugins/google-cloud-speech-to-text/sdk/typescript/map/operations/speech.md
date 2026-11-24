<!-- Generated file — do not edit; regenerated with the SDK. -->

# Speech — operations

Accessor: `client.speech` · Source: `src/resources/speech.ts` · 2 operations · Request and error types: namespace `Speech`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-speech-to-text`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### speechSpeechLongrunningrecognize

- **Signature**: `speechSpeechLongrunningrecognize(request: Speech.SpeechSpeechLongrunningrecognizeRequest, options?: RequestOptions): ApiPromise<Operation, Speech.SpeechSpeechLongrunningrecognizeError>`
- **Wire**: `POST /v1/speech:longrunningrecognize`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Speech.SpeechSpeechLongrunningrecognizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Speech.SpeechSpeechLongrunningrecognizeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LongRunningRecognizeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LongRunningRecognizeRequest` | `longRunningRecognizeRequestSchema` | `src/models/long-running-recognize-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechSpeechRecognize

- **Signature**: `speechSpeechRecognize(request: Speech.SpeechSpeechRecognizeRequest, options?: RequestOptions): ApiPromise<RecognizeResponse, Speech.SpeechSpeechRecognizeError>`
- **Wire**: `POST /v1/speech:recognize`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecognizeResponse`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Speech.SpeechSpeechRecognizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Speech.SpeechSpeechRecognizeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RecognizeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecognizeRequest` | `recognizeRequestSchema` | `src/models/recognize-request.ts` |
| `RecognizeResponse` | `recognizeResponseSchema` | `src/models/recognize-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

