<!-- Generated file — do not edit; regenerated with the SDK. -->

# YearMakeModel — operations

Accessor: `client.yearMakeModel` · Source: `src/resources/year-make-model.ts` · 3 operations · Request and error types: namespace `YearMakeModel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### decodeObdCode

- **Signature**: `decodeObdCode(request: YearMakeModel.DecodeObdCodeRequest, options?: RequestOptions): ApiPromise<ObdcodesdecoderResponse, YearMakeModel.DecodeObdCodeError>`
- **Wire**: `GET /obdcodesdecoder`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObdcodesdecoderResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `YearMakeModel.DecodeObdCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `YearMakeModel.DecodeObdCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObdcodesdecoderResponse` | `obdcodesdecoderResponseSchema` | `src/models/obdcodesdecoder-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### getYearMakeModel

- **Signature**: `getYearMakeModel(request: YearMakeModel.GetYearMakeModelRequest, options?: RequestOptions): ApiPromise<V1YmmResponse, YearMakeModel.GetYearMakeModelError>`
- **Wire**: `GET /v1/ymm`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1YmmResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `YearMakeModel.GetYearMakeModelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `YearMakeModel.GetYearMakeModelRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `year` | `query` | `string` | yes |
| `make` | `query` | `string` | yes |
| `model` | `query` | `string` | yes |
| `trim` | `query` | `string` | no |
| `allTrimOptions` | `query` | `AllTrimOptions` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllTrimOptions` | `allTrimOptionsSchema` | `src/models/all-trim-options.ts` |
| `V1YmmResponse` | `v1YmmResponseSchema` | `src/models/v1-ymm-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### getYearMakeModelOptions

- **Signature**: `getYearMakeModelOptions(request?: YearMakeModel.GetYearMakeModelOptionsRequest, options?: RequestOptions): ApiPromise<V1YmmOptionsResponse, YearMakeModel.GetYearMakeModelOptionsError>`
- **Wire**: `GET /v1/ymm-options`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1YmmOptionsResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `YearMakeModel.GetYearMakeModelOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `YearMakeModel.GetYearMakeModelOptionsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dimension` | `query` | `Dimension` | no |
| `year` | `query` | `string` | no |
| `make` | `query` | `string` | no |
| `model` | `query` | `string` | no |
| `trim` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Dimension` | `dimensionSchema` | `src/models/dimension.ts` |
| `V1YmmOptionsResponse` | `v1YmmOptionsResponseSchema` | `src/models/v1-ymm-options-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

