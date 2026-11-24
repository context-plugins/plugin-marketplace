<!-- Generated file — do not edit; regenerated with the SDK. -->

# PlateDecoder — operations

Accessor: `client.plateDecoder` · Source: `src/resources/plate-decoder.ts` · 3 operations · Request and error types: namespace `PlateDecoder`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### decodePlate

- **Signature**: `decodePlate(request: PlateDecoder.DecodePlateRequest, options?: RequestOptions): ApiPromise<PlatedecoderResponse, PlateDecoder.DecodePlateError>`
- **Wire**: `GET /platedecoder`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatedecoderResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `PlateDecoder.DecodePlateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [502] `Error` · `"error5"` [504] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PlateDecoder.DecodePlateRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `plate` | `query` | `string` | yes | — |
| `state` | `query` | `string` | yes | — |
| `country` | `query` | `string` | no | — |
| `format` | `query` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlatedecoderResponse` | `platedecoderResponseSchema` | `src/models/platedecoder-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### decodePlateV2

- **Signature**: `decodePlateV2(request: PlateDecoder.DecodePlateV2Request, options?: RequestOptions): ApiPromise<V2PlatedecoderResponse, PlateDecoder.DecodePlateV2Error>`
- **Wire**: `GET /v2/platedecoder`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2PlatedecoderResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `PlateDecoder.DecodePlateV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PlateDecoder.DecodePlateV2Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `plate` | `query` | — | `string` | yes |
| `country` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `district` | `query` | — | `string` | no |
| `requireVin` | `query` | `require_vin` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2PlatedecoderResponse` | `v2PlatedecoderResponseSchema` | `src/models/v2-platedecoder-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### decodeUsPlate

- **Signature**: `decodeUsPlate(request: PlateDecoder.DecodeUsPlateRequest, options?: RequestOptions): ApiPromise<V1UsPlatedecoderResponse, PlateDecoder.DecodeUsPlateError>`
- **Wire**: `GET /v1/us-platedecoder`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UsPlatedecoderResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `PlateDecoder.DecodeUsPlateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PlateDecoder.DecodeUsPlateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `plate` | `query` | — | `string` | yes |
| `state` | `query` | — | `string` | yes |
| `decodeVin` | `query` | `decodeVIN` | `DecodeVin` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecodeVin` | `decodeVinSchema` | `src/models/decode-vin.ts` |
| `V1UsPlatedecoderResponse` | `v1UsPlatedecoderResponseSchema` | `src/models/v1-us-platedecoder-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

