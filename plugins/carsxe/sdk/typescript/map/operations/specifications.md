<!-- Generated file — do not edit; regenerated with the SDK. -->

# Specifications — operations

Accessor: `client.specifications` · Source: `src/resources/specifications.ts` · 2 operations · Request and error types: namespace `Specifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInternationalVinDecoder

- **Signature**: `getInternationalVinDecoder(request: Specifications.GetInternationalVinDecoderRequest, options?: RequestOptions): ApiPromise<V1InternationalVinDecoderResponse, Specifications.GetInternationalVinDecoderError>`
- **Wire**: `GET /v1/international-vin-decoder`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1InternationalVinDecoderResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Specifications.GetInternationalVinDecoderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Specifications.GetInternationalVinDecoderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1InternationalVinDecoderResponse` | `v1InternationalVinDecoderResponseSchema` | `src/models/v1-international-vin-decoder-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### getVehicleSpecs

- **Signature**: `getVehicleSpecs(request: Specifications.GetVehicleSpecsRequest, options?: RequestOptions): ApiPromise<SpecsResponse, Specifications.GetVehicleSpecsError>`
- **Wire**: `GET /specs`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SpecsResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Specifications.GetVehicleSpecsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Specifications.GetVehicleSpecsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `vin` | `query` | — | `string` | yes | — |
| `format` | `query` | — | `Format` | no | `Format.Json` |
| `deepdata` | `query` | — | `Deepdata` | no | — |
| `disableIntVinDecoding` | `query` | `disableIntVINDecoding` | `DisableIntVinDecoding` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Deepdata` | `deepdataSchema` | `src/models/deepdata.ts` |
| `DisableIntVinDecoding` | `disableIntVinDecodingSchema` | `src/models/disable-int-vin-decoding.ts` |
| `SpecsResponse` | `specsResponseSchema` | `src/models/specs-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

