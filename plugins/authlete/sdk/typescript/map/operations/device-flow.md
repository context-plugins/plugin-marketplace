<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeviceFlow — operations

Accessor: `client.deviceFlow` · Source: `src/resources/device-flow.ts` · 3 operations · Request and error types: namespace `DeviceFlow`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deviceAuthorizationApi

- **Signature**: `deviceAuthorizationApi(request: DeviceFlow.DeviceAuthorizationApiRequest, options?: RequestOptions): ApiPromise<DeviceAuthorizationResponse, DeviceFlow.DeviceAuthorizationApiError>`
- **Wire**: `POST /api/{serviceId}/device/authorization`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeviceAuthorizationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `DeviceFlow.DeviceAuthorizationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceFlow.DeviceAuthorizationApiRequest` (9):

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
| `DeviceAuthorizationResponse` | `deviceAuthorizationResponseSchema` | `src/models/device-authorization-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### deviceCompleteApi

- **Signature**: `deviceCompleteApi(request: DeviceFlow.DeviceCompleteApiRequest, options?: RequestOptions): ApiPromise<DeviceCompleteResponse, DeviceFlow.DeviceCompleteApiError>`
- **Wire**: `POST /api/{serviceId}/device/complete`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeviceCompleteResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `DeviceFlow.DeviceCompleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceFlow.DeviceCompleteApiRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `userCode` | `form` | `string` | yes |
| `result` | `form` | `Result1` | yes |
| `subject` | `form` | `string` | yes |
| `sub` | `form` | `string` | no |
| `authTime` | `form` | `number` | no |
| `acr` | `form` | `string` | no |
| `claims` | `form` | `string` | no |
| `properties` | `form` | `Property[]` | no |
| `scopes` | `form` | `string[]` | no |
| `errorDescription` | `form` | `string` | no |
| `errorUri` | `form` | `string` | no |
| `idtHeaderParams` | `form` | `string` | no |
| `consentedClaims` | `form` | `string[]` | no |
| `jwtAtClaims` | `form` | `string` | no |
| `accessTokenDuration` | `form` | `number` | no |
| `refreshTokenDuration` | `form` | `number` | no |
| `idTokenAudType` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Result1` | `result1Schema` | `src/models/result1.ts` |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `DeviceCompleteResponse` | `deviceCompleteResponseSchema` | `src/models/device-complete-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### deviceVerificationApi

- **Signature**: `deviceVerificationApi(request: DeviceFlow.DeviceVerificationApiRequest, options?: RequestOptions): ApiPromise<DeviceVerificationResponse, DeviceFlow.DeviceVerificationApiError>`
- **Wire**: `POST /api/{serviceId}/device/verification`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeviceVerificationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `DeviceFlow.DeviceVerificationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeviceFlow.DeviceVerificationApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `userCode` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceVerificationResponse` | `deviceVerificationResponseSchema` | `src/models/device-verification-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

