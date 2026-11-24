<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recognition — operations

Accessor: `client.recognition` · Source: `src/resources/recognition.ts` · 2 operations · Request and error types: namespace `Recognition`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### recognizePlate

- **Signature**: `recognizePlate(request: Recognition.RecognizePlateRequest, options?: RequestOptions): ApiPromise<PlaterecognitionResponse, Recognition.RecognizePlateError>`
- **Wire**: `POST /platerecognition`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlaterecognitionResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recognition.RecognizePlateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recognition.RecognizePlateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlaterecognitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlaterecognitionRequest` | `platerecognitionRequestSchema` | `src/models/platerecognition-request.ts` |
| `PlaterecognitionResponse` | `platerecognitionResponseSchema` | `src/models/platerecognition-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### vinOcr

- **Signature**: `vinOcr(request: Recognition.VinOcrRequest, options?: RequestOptions): ApiPromise<V1VinocrResponse, Recognition.VinOcrError>`
- **Wire**: `POST /v1/vinocr`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1VinocrResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recognition.VinOcrError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recognition.VinOcrRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1VinocrRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1VinocrRequest` | `v1VinocrRequestSchema` | `src/models/v1-vinocr-request.ts` |
| `V1VinocrResponse` | `v1VinocrResponseSchema` | `src/models/v1-vinocr-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

