<!-- Generated file — do not edit; regenerated with the SDK. -->

# TokenEndpoint — operations

Accessor: `client.tokenEndpoint` · Source: `src/resources/token-endpoint.ts` · 4 operations · Request and error types: namespace `TokenEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authTokenApi

- **Signature**: `authTokenApi(request: TokenEndpoint.AuthTokenApiRequest, options?: RequestOptions): ApiPromise<TokenResponse, TokenEndpoint.AuthTokenApiError>`
- **Wire**: `POST /api/{serviceId}/auth/token`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenEndpoint.AuthTokenApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenEndpoint.AuthTokenApiRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `parameters` | `form` | `string` | yes |
| `clientId` | `form` | `string` | no |
| `clientSecret` | `form` | `string` | no |
| `clientCertificate` | `form` | `string` | no |
| `clientCertificatePath` | `form` | `string[]` | no |
| `properties` | `form` | `Property[]` | no |
| `dpop` | `form` | `string` | no |
| `htm` | `form` | `string` | no |
| `htu` | `form` | `string` | no |
| `accessToken` | `form` | `string` | no |
| `jwtAtClaims` | `form` | `string` | no |
| `oauthClientAttestation` | `form` | `string` | no |
| `oauthClientAttestationPop` | `form` | `string` | no |
| `accessTokenDuration` | `form` | `number` | no |
| `refreshTokenDuration` | `form` | `number` | no |
| `dpopNonceRequired` | `form` | `boolean` | no |
| `cimdOptions` | `form` | `CimdOptions` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `CimdOptions` | `cimdOptionsSchema` | `src/models/cimd-options.ts` |
| `TokenResponse` | `tokenResponseSchema` | `src/models/token-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authTokenFailApi

- **Signature**: `authTokenFailApi(request: TokenEndpoint.AuthTokenFailApiRequest, options?: RequestOptions): ApiPromise<TokenFailResponse, TokenEndpoint.AuthTokenFailApiError>`
- **Wire**: `POST /api/{serviceId}/auth/token/fail`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenFailResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenEndpoint.AuthTokenFailApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenEndpoint.AuthTokenFailApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |
| `reason` | `form` | `Reason1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Reason1` | `reason1Schema` | `src/models/reason1.ts` |
| `TokenFailResponse` | `tokenFailResponseSchema` | `src/models/token-fail-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authTokenIssueApi

- **Signature**: `authTokenIssueApi(request: TokenEndpoint.AuthTokenIssueApiRequest, options?: RequestOptions): ApiPromise<TokenIssueResponse, TokenEndpoint.AuthTokenIssueApiError>`
- **Wire**: `POST /api/{serviceId}/auth/token/issue`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TokenIssueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenEndpoint.AuthTokenIssueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenEndpoint.AuthTokenIssueApiRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |
| `subject` | `form` | `string` | yes |
| `properties` | `form` | `Property[]` | no |
| `jwtAtClaims` | `form` | `string` | no |
| `accessToken` | `form` | `string` | no |
| `accessTokenDuration` | `form` | `number` | no |
| `refreshTokenDuration` | `form` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `TokenIssueResponse` | `tokenIssueResponseSchema` | `src/models/token-issue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### idtokenReissueApi

- **Signature**: `idtokenReissueApi(request: TokenEndpoint.IdtokenReissueApiRequest, options?: RequestOptions): ApiPromise<IdtokenReissueResponse, TokenEndpoint.IdtokenReissueApiError>`
- **Wire**: `POST /api/{serviceId}/idtoken/reissue`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdtokenReissueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `TokenEndpoint.IdtokenReissueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TokenEndpoint.IdtokenReissueApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `IdtokenReissueRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdtokenReissueRequest` | `idtokenReissueRequestSchema` | `src/models/idtoken-reissue-request.ts` |
| `IdtokenReissueResponse` | `idtokenReissueResponseSchema` | `src/models/idtoken-reissue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

