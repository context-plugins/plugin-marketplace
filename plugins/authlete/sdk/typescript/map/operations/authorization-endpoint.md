<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthorizationEndpoint — operations

Accessor: `client.authorizationEndpoint` · Source: `src/resources/authorization-endpoint.ts` · 5 operations · Request and error types: namespace `AuthorizationEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authAuthorizationApi

- **Signature**: `authAuthorizationApi(request: AuthorizationEndpoint.AuthAuthorizationApiRequest, options?: RequestOptions): ApiPromise<AuthorizationResponse, AuthorizationEndpoint.AuthAuthorizationApiError>`
- **Wire**: `POST /api/{serviceId}/auth/authorization`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `AuthorizationEndpoint.AuthAuthorizationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizationEndpoint.AuthAuthorizationApiRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `parameters` | `form` | `string` | yes |
| `context` | `form` | `string` | no |
| `cimdOptions` | `form` | `CimdOptions` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CimdOptions` | `cimdOptionsSchema` | `src/models/cimd-options.ts` |
| `AuthorizationResponse` | `authorizationResponseSchema` | `src/models/authorization-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authAuthorizationFailApi

- **Signature**: `authAuthorizationFailApi(request: AuthorizationEndpoint.AuthAuthorizationFailApiRequest, options?: RequestOptions): ApiPromise<AuthorizationFailResponse, AuthorizationEndpoint.AuthAuthorizationFailApiError>`
- **Wire**: `POST /api/{serviceId}/auth/authorization/fail`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizationFailResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `AuthorizationEndpoint.AuthAuthorizationFailApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizationEndpoint.AuthAuthorizationFailApiRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |
| `reason` | `form` | `Reason` | yes |
| `description` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Reason` | `reasonSchema` | `src/models/reason.ts` |
| `AuthorizationFailResponse` | `authorizationFailResponseSchema` | `src/models/authorization-fail-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### authAuthorizationIssueApi

- **Signature**: `authAuthorizationIssueApi(request: AuthorizationEndpoint.AuthAuthorizationIssueApiRequest, options?: RequestOptions): ApiPromise<AuthorizationIssueResponse, AuthorizationEndpoint.AuthAuthorizationIssueApiError>`
- **Wire**: `POST /api/{serviceId}/auth/authorization/issue`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizationIssueResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `AuthorizationEndpoint.AuthAuthorizationIssueApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizationEndpoint.AuthAuthorizationIssueApiRequest` (19):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |
| `subject` | `form` | `string` | yes |
| `authTime` | `form` | `number` | no |
| `acr` | `form` | `string` | no |
| `claims` | `form` | `string` | no |
| `properties` | `form` | `Property[]` | no |
| `scopes` | `form` | `string[]` | no |
| `sub` | `form` | `string` | no |
| `idtHeaderParams` | `form` | `string` | no |
| `claimsForTx` | `form` | `string` | no |
| `consentedClaims` | `form` | `string[]` | no |
| `authorizationDetails` | `form` | `AuthzDetails` | no |
| `jwtAtClaims` | `form` | `string` | no |
| `accessToken` | `form` | `string` | no |
| `accessTokenDuration` | `form` | `number` | no |
| `sessionId` | `form` | `string` | no |
| `idTokenAudType` | `form` | `string` | no |
| `verifiedClaimsForTx` | `form` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Property` | `propertySchema` | `src/models/property.ts` |
| `AuthzDetails` | `authzDetailsSchema` | `src/models/authz-details.ts` |
| `AuthorizationIssueResponse` | `authorizationIssueResponseSchema` | `src/models/authorization-issue-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### getAuthorizationTicketInfo

- **Signature**: `getAuthorizationTicketInfo(request: AuthorizationEndpoint.GetAuthorizationTicketInfoRequest, options?: RequestOptions): ApiPromise<AuthorizationTicketInfoResponse, AuthorizationEndpoint.GetAuthorizationTicketInfoError>`
- **Wire**: `POST /api/{serviceId}/auth/authorization/ticket/info`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizationTicketInfoResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `AuthorizationEndpoint.GetAuthorizationTicketInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizationEndpoint.GetAuthorizationTicketInfoRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationTicketInfoResponse` | `authorizationTicketInfoResponseSchema` | `src/models/authorization-ticket-info-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### updateAuthorizationTicket

- **Signature**: `updateAuthorizationTicket(request: AuthorizationEndpoint.UpdateAuthorizationTicketRequest, options?: RequestOptions): ApiPromise<AuthorizationTicketUpdateResponse, AuthorizationEndpoint.UpdateAuthorizationTicketError>`
- **Wire**: `POST /api/{serviceId}/auth/authorization/ticket/update`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthorizationTicketUpdateResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `AuthorizationEndpoint.UpdateAuthorizationTicketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizationEndpoint.UpdateAuthorizationTicketRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `ticket` | `form` | `string` | yes |
| `info` | `form` | `AuthorizationTicketInfo` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationTicketInfo` | `authorizationTicketInfoSchema` | `src/models/authorization-ticket-info.ts` |
| `AuthorizationTicketUpdateResponse` | `authorizationTicketUpdateResponseSchema` | `src/models/authorization-ticket-update-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

