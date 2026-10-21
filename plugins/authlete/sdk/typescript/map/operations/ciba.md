<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ciba — operations

Accessor: `client.ciba` · Source: `src/resources/ciba.ts` · 4 operations · Request and error types: namespace `Ciba`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### backchannelAuthenticationApi

- **Signature**: `backchannelAuthenticationApi(request: Ciba.BackchannelAuthenticationApiRequest, options?: RequestOptions): ApiPromise<BackchannelAuthenticationResponse, Ciba.BackchannelAuthenticationApiError>`
- **Wire**: `POST /api/{serviceId}/backchannel/authentication`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BackchannelAuthenticationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `Ciba.BackchannelAuthenticationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ciba.BackchannelAuthenticationApiRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `parameters` | `form` | `string` | yes |
| `clientId` | `form` | `string` | no |
| `clientSecret` | `form` | `string` | no |
| `clientCertificate` | `form` | `string` | no |
| `clientCertificatePath` | `form` | `string[]` | no |
| `oauthClientAttestation` | `form` | `string` | no |
| `oauthClientAttestationPop` | `form` | `string` | no |
| `cimdOptions` | `form` | `CimdOptions` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CimdOptions` | `cimdOptionsSchema` | `src/models/cimd-options.ts` |
| `BackchannelAuthenticationResponse` | `backchannelAuthenticationResponseSchema` | `src/models/backchannel-authentication-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### backchannelAuthenticationCompleteApi

- **Signature**: `backchannelAuthenticationCompleteApi(request: Ciba.BackchannelAuthenticationCompleteApiRequest, options?: RequestOptions): ApiPromise<BackchannelAuthenticationCompleteResponse, Ciba.BackchannelAuthenticationCompleteApiError>`
- **Wire**: `POST /api/{serviceId}/backchannel/authentication/complete`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BackchannelAuthenticationCompleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `Ciba.BackchannelAuthenticationCompleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ciba.BackchannelAuthenticationCompleteApiRequest` (19):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |
| `result` | `form` | `Result1` | yes |
| `subject` | `form` | `string` | yes |
| `sub` | `form` | `string` | no |
| `authTime` | `form` | `number` | no |
| `acr` | `form` | `string` | no |
| `claims` | `form` | `string` | no |
| `properties` | `form` | `Property[]` | no |
| `scopes` | `form` | `string[]` | no |
| `idtHeaderParams` | `form` | `string` | no |
| `errorDescription` | `form` | `string` | no |
| `errorUri` | `form` | `string` | no |
| `consentedClaims` | `form` | `string[]` | no |
| `jwtAtClaims` | `form` | `string` | no |
| `accessToken` | `form` | `string` | no |
| `accessTokenDuration` | `form` | `number` | no |
| `refreshTokenDuration` | `form` | `number` | no |
| `idTokenAudType` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result1` | `result1Schema` | `src/models/result1.ts` |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `BackchannelAuthenticationCompleteResponse` | `backchannelAuthenticationCompleteResponseSchema` | `src/models/backchannel-authentication-complete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### backchannelAuthenticationFailApi

- **Signature**: `backchannelAuthenticationFailApi(request: Ciba.BackchannelAuthenticationFailApiRequest, options?: RequestOptions): ApiPromise<BackchannelAuthenticationFailResponse, Ciba.BackchannelAuthenticationFailApiError>`
- **Wire**: `POST /api/{serviceId}/backchannel/authentication/fail`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BackchannelAuthenticationFailResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `Ciba.BackchannelAuthenticationFailApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ciba.BackchannelAuthenticationFailApiRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |
| `reason` | `form` | `Reason2` | yes |
| `errorDescription` | `form` | `string` | no |
| `errorUri` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Reason2` | `reason2Schema` | `src/models/reason2.ts` |
| `BackchannelAuthenticationFailResponse` | `backchannelAuthenticationFailResponseSchema` | `src/models/backchannel-authentication-fail-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### backchannelAuthenticationIssueApi

- **Signature**: `backchannelAuthenticationIssueApi(request: Ciba.BackchannelAuthenticationIssueApiRequest, options?: RequestOptions): ApiPromise<BackchannelAuthenticationIssueResponse, Ciba.BackchannelAuthenticationIssueApiError>`
- **Wire**: `POST /api/{serviceId}/backchannel/authentication/issue`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BackchannelAuthenticationIssueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `Ciba.BackchannelAuthenticationIssueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ciba.BackchannelAuthenticationIssueApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BackchannelAuthenticationIssueResponse` | `backchannelAuthenticationIssueResponseSchema` | `src/models/backchannel-authentication-issue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

