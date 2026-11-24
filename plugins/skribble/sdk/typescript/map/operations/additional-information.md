<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdditionalInformation — operations

Accessor: `client.additionalInformation` · Source: `src/resources/additional-information.ts` · 3 operations · Request and error types: namespace `AdditionalInformation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getInfosFormat

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInfosFormat(request: AdditionalInformation.GetInfosFormatRequest, options?: RequestOptions): ApiPromise<FormatInfosResponse, AdditionalInformation.GetInfosFormatError>`
- **Wire**: `GET /infos/{id}/format`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FormatInfosResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `AdditionalInformation.GetInfosFormatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdditionalInformation.GetInfosFormatRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormatInfosResponse` | `formatInfosResponseSchema` | `src/models/format-infos-response.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

### getInfosSigners

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInfosSigners(request: AdditionalInformation.GetInfosSignersRequest, options?: RequestOptions): ApiPromise<Signer[], AdditionalInformation.GetInfosSignersError>`
- **Wire**: `GET /infos/{id}/signers`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Signer[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `AdditionalInformation.GetInfosSignersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdditionalInformation.GetInfosSignersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Signer` | `signerSchema` | `src/models/signer.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

### getInfosValidation

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getInfosValidation(request: AdditionalInformation.GetInfosValidationRequest, options?: RequestOptions): ApiPromise<ValidationInfosResponse, AdditionalInformation.GetInfosValidationError>`
- **Wire**: `GET /infos/{id}/validation`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ValidationInfosResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `AdditionalInformation.GetInfosValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdditionalInformation.GetInfosValidationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidationInfosResponse` | `validationInfosResponseSchema` | `src/models/validation-infos-response.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

