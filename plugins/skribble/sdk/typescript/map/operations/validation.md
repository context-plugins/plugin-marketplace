<!-- Generated file — do not edit; regenerated with the SDK. -->

# Validation — operations

Accessor: `client.validation` · Source: `src/resources/validation.ts` · 3 operations · Request and error types: namespace `Validation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteValidation

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteValidation(request: Validation.DeleteValidationRequest, options?: RequestOptions): ApiPromise<undefined, Validation.DeleteValidationError>`
- **Wire**: `DELETE /validate/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Validation.DeleteValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [404] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Validation.DeleteValidationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

### postValidateDocument

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postValidateDocument(request: Validation.PostValidateDocumentRequest, options?: RequestOptions): ApiPromise<DocumentValidationResponse, Validation.PostValidateDocumentError>`
- **Wire**: `POST /validate/document`
- **Auth**: `bearer`
- **Request body**: `multipart/form-data` — every field marked `form`. `content` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocumentValidationResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Validation.PostValidateDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [413] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [415] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi8"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Validation.PostValidateDocumentRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `quality` | `query` | `Quality` | no |
| `longTermValidation` | `query` | `boolean` | no |
| `legislation` | `query` | `Legislation` | no |
| `infos` | `query` | `Info[]` | no |
| `rejectVisualDifferences` | `query` | `boolean` | no |
| `rejectUndefinedChanges` | `query` | `boolean` | no |
| `content` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Quality` | `qualitySchema` | `src/models/quality.ts` |
| `Legislation` | `legislationSchema` | `src/models/legislation.ts` |
| `Info` | `infoSchema` | `src/models/info.ts` |
| `DocumentValidationResponse` | `documentValidationResponseSchema` | `src/models/document-validation-response.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

### postValidateSignature

- **Server**: `defaultSkribbleAdditionalInformationApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postValidateSignature(request: Validation.PostValidateSignatureRequest, options?: RequestOptions): ApiPromise<SignatureValidationResponse, Validation.PostValidateSignatureError>`
- **Wire**: `POST /validate/signature`
- **Auth**: `bearer`
- **Request body**: `multipart/form-data` — every field marked `form`. `content` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignatureValidationResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Validation.PostValidateSignatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemSkribbleAdditionalInformationApi"` [400] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi2"` [401] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi3"` [403] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi4"` [415] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi5"` [429] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi6"` [500] `ProblemSkribbleAdditionalInformationApi` · `"problemSkribbleAdditionalInformationApi7"` [503] `ProblemSkribbleAdditionalInformationApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Validation.PostValidateSignatureRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `quality` | `query` | `Quality` | no |
| `longTermValidation` | `query` | `boolean` | no |
| `legislation` | `query` | `Legislation` | no |
| `infos` | `query` | `Info[]` | no |
| `content` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Quality` | `qualitySchema` | `src/models/quality.ts` |
| `Legislation` | `legislationSchema` | `src/models/legislation.ts` |
| `Info` | `infoSchema` | `src/models/info.ts` |
| `SignatureValidationResponse` | `signatureValidationResponseSchema` | `src/models/signature-validation-response.ts` |
| `ProblemSkribbleAdditionalInformationApi` | `problemSkribbleAdditionalInformationApiSchema` | `src/models/problem-skribble-additional-information-api.ts` |

