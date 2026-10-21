<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifiableCredentialIssuer — operations

Accessor: `client.verifiableCredentialIssuer` · Source: `src/resources/verifiable-credential-issuer.ts` · 11 operations · Request and error types: namespace `VerifiableCredentialIssuer`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### vciBatchIssueApi

- **Signature**: `vciBatchIssueApi(request: VerifiableCredentialIssuer.VciBatchIssueApiRequest, options?: RequestOptions): ApiPromise<VciBatchIssueResponse, VerifiableCredentialIssuer.VciBatchIssueApiError>`
- **Wire**: `POST /api/{serviceId}/vci/batch/issue`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciBatchIssueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciBatchIssueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciBatchIssueApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `VciBatchIssueRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciBatchIssueRequest` | `vciBatchIssueRequestSchema` | `src/models/vci-batch-issue-request.ts` |
| `VciBatchIssueResponse` | `vciBatchIssueResponseSchema` | `src/models/vci-batch-issue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciBatchParseApi

- **Signature**: `vciBatchParseApi(request: VerifiableCredentialIssuer.VciBatchParseApiRequest, options?: RequestOptions): ApiPromise<VciBatchParseResponse, VerifiableCredentialIssuer.VciBatchParseApiError>`
- **Wire**: `POST /api/{serviceId}/vci/batch/parse`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciBatchParseResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciBatchParseApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciBatchParseApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `accessToken` | `form` | `string` | no |
| `requestContent` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciBatchParseResponse` | `vciBatchParseResponseSchema` | `src/models/vci-batch-parse-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciDeferredIssueApi

- **Signature**: `vciDeferredIssueApi(request: VerifiableCredentialIssuer.VciDeferredIssueApiRequest, options?: RequestOptions): ApiPromise<VciDeferredIssueResponse, VerifiableCredentialIssuer.VciDeferredIssueApiError>`
- **Wire**: `POST /api/{serviceId}/vci/deferred/issue`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciDeferredIssueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciDeferredIssueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciDeferredIssueApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `VciDeferredIssueRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciDeferredIssueRequest` | `vciDeferredIssueRequestSchema` | `src/models/vci-deferred-issue-request.ts` |
| `VciDeferredIssueResponse` | `vciDeferredIssueResponseSchema` | `src/models/vci-deferred-issue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciDeferredParseApi

- **Signature**: `vciDeferredParseApi(request: VerifiableCredentialIssuer.VciDeferredParseApiRequest, options?: RequestOptions): ApiPromise<VciDeferredParseResponse, VerifiableCredentialIssuer.VciDeferredParseApiError>`
- **Wire**: `POST /api/{serviceId}/vci/deferred/parse`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciDeferredParseResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciDeferredParseApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciDeferredParseApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `accessToken` | `form` | `string` | no |
| `requestContent` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciDeferredParseResponse` | `vciDeferredParseResponseSchema` | `src/models/vci-deferred-parse-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciJwksApi

- **Signature**: `vciJwksApi(request: VerifiableCredentialIssuer.VciJwksApiRequest, options?: RequestOptions): ApiPromise<VciJwksResponse, VerifiableCredentialIssuer.VciJwksApiError>`
- **Wire**: `POST /api/{serviceId}/vci/jwks`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciJwksResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciJwksApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciJwksApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `pretty` | `form` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciJwksResponse` | `vciJwksResponseSchema` | `src/models/vci-jwks-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciJwtissuerApi

- **Signature**: `vciJwtissuerApi(request: VerifiableCredentialIssuer.VciJwtissuerApiRequest, options?: RequestOptions): ApiPromise<VciJwtissuerResponse, VerifiableCredentialIssuer.VciJwtissuerApiError>`
- **Wire**: `POST /api/{serviceId}/vci/jwtissuer`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciJwtissuerResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciJwtissuerApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciJwtissuerApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `pretty` | `form` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciJwtissuerResponse` | `vciJwtissuerResponseSchema` | `src/models/vci-jwtissuer-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciMetadataApi

- **Signature**: `vciMetadataApi(request: VerifiableCredentialIssuer.VciMetadataApiRequest, options?: RequestOptions): ApiPromise<VciMetadataResponse, VerifiableCredentialIssuer.VciMetadataApiError>`
- **Wire**: `POST /api/{serviceId}/vci/metadata`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciMetadataResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciMetadataApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciMetadataApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `pretty` | `form` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciMetadataResponse` | `vciMetadataResponseSchema` | `src/models/vci-metadata-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciOfferCreateApi

- **Signature**: `vciOfferCreateApi(request: VerifiableCredentialIssuer.VciOfferCreateApiRequest, options?: RequestOptions): ApiPromise<VciOfferCreateResponse, VerifiableCredentialIssuer.VciOfferCreateApiError>`
- **Wire**: `POST /api/{serviceId}/vci/offer/create`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciOfferCreateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciOfferCreateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciOfferCreateApiRequest` (15):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `authorizationCodeGrantIncluded` | `form` | `boolean` | no |
| `issuerStateIncluded` | `form` | `boolean` | no |
| `preAuthorizedCodeGrantIncluded` | `form` | `boolean` | no |
| `subject` | `form` | `string` | no |
| `duration` | `form` | `number` | no |
| `context` | `form` | `string` | no |
| `properties` | `form` | `Property[]` | no |
| `jwtAtClaims` | `form` | `string` | no |
| `authTime` | `form` | `number` | no |
| `acr` | `form` | `string` | no |
| `credentialConfigurationIds` | `form` | `string[]` | no |
| `txCode` | `form` | `string` | no |
| `txCodeInputMode` | `form` | `string` | no |
| `txCodeDescription` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `VciOfferCreateResponse` | `vciOfferCreateResponseSchema` | `src/models/vci-offer-create-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciOfferInfoApi

- **Signature**: `vciOfferInfoApi(request: VerifiableCredentialIssuer.VciOfferInfoApiRequest, options?: RequestOptions): ApiPromise<VciOfferInfoResponse, VerifiableCredentialIssuer.VciOfferInfoApiError>`
- **Wire**: `POST /api/{serviceId}/vci/offer/info`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciOfferInfoResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciOfferInfoApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciOfferInfoApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `identifier` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciOfferInfoResponse` | `vciOfferInfoResponseSchema` | `src/models/vci-offer-info-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciSingleIssueApi

- **Signature**: `vciSingleIssueApi(request: VerifiableCredentialIssuer.VciSingleIssueApiRequest, options?: RequestOptions): ApiPromise<VciSingleIssueResponse, VerifiableCredentialIssuer.VciSingleIssueApiError>`
- **Wire**: `POST /api/{serviceId}/vci/single/issue`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciSingleIssueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciSingleIssueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciSingleIssueApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `VciSingleIssueRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciSingleIssueRequest` | `vciSingleIssueRequestSchema` | `src/models/vci-single-issue-request.ts` |
| `VciSingleIssueResponse` | `vciSingleIssueResponseSchema` | `src/models/vci-single-issue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### vciSingleParseApi

- **Signature**: `vciSingleParseApi(request: VerifiableCredentialIssuer.VciSingleParseApiRequest, options?: RequestOptions): ApiPromise<VciSingleParseResponse, VerifiableCredentialIssuer.VciSingleParseApiError>`
- **Wire**: `POST /api/{serviceId}/vci/single/parse`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VciSingleParseResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `VerifiableCredentialIssuer.VciSingleParseApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifiableCredentialIssuer.VciSingleParseApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `accessToken` | `form` | `string` | no |
| `requestContent` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VciSingleParseResponse` | `vciSingleParseResponseSchema` | `src/models/vci-single-parse-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

