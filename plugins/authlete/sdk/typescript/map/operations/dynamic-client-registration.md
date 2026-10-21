<!-- Generated file — do not edit; regenerated with the SDK. -->

# DynamicClientRegistration — operations

Accessor: `client.dynamicClientRegistration` · Source: `src/resources/dynamic-client-registration.ts` · 4 operations · Request and error types: namespace `DynamicClientRegistration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### clientRegistrationApi

- **Signature**: `clientRegistrationApi(request: DynamicClientRegistration.ClientRegistrationApiRequest, options?: RequestOptions): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationApiError>`
- **Wire**: `POST /api/{serviceId}/client/registration`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientRegistrationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `DynamicClientRegistration.ClientRegistrationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DynamicClientRegistration.ClientRegistrationApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `ApiClientRegistrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiClientRegistrationRequest` | `apiClientRegistrationRequestSchema` | `src/models/api-client-registration-request.ts` |
| `ClientRegistrationResponse` | `clientRegistrationResponseSchema` | `src/models/client-registration-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientRegistrationDeleteApi

- **Signature**: `clientRegistrationDeleteApi(request: DynamicClientRegistration.ClientRegistrationDeleteApiRequest, options?: RequestOptions): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationDeleteApiError>`
- **Wire**: `POST /api/{serviceId}/client/registration/delete`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientRegistrationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `DynamicClientRegistration.ClientRegistrationDeleteApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DynamicClientRegistration.ClientRegistrationDeleteApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `ApiClientRegistrationDeleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiClientRegistrationDeleteRequest` | `apiClientRegistrationDeleteRequestSchema` | `src/models/api-client-registration-delete-request.ts` |
| `ClientRegistrationResponse` | `clientRegistrationResponseSchema` | `src/models/client-registration-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientRegistrationGetApi

- **Signature**: `clientRegistrationGetApi(request: DynamicClientRegistration.ClientRegistrationGetApiRequest, options?: RequestOptions): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationGetApiError>`
- **Wire**: `POST /api/{serviceId}/client/registration/get`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientRegistrationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `DynamicClientRegistration.ClientRegistrationGetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DynamicClientRegistration.ClientRegistrationGetApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `ApiClientRegistrationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiClientRegistrationGetRequest` | `apiClientRegistrationGetRequestSchema` | `src/models/api-client-registration-get-request.ts` |
| `ClientRegistrationResponse` | `clientRegistrationResponseSchema` | `src/models/client-registration-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### clientRegistrationUpdateApi

- **Signature**: `clientRegistrationUpdateApi(request: DynamicClientRegistration.ClientRegistrationUpdateApiRequest, options?: RequestOptions): ApiPromise<ClientRegistrationResponse, DynamicClientRegistration.ClientRegistrationUpdateApiError>`
- **Wire**: `POST /api/{serviceId}/client/registration/update`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClientRegistrationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `DynamicClientRegistration.ClientRegistrationUpdateApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DynamicClientRegistration.ClientRegistrationUpdateApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `ApiClientRegistrationUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiClientRegistrationUpdateRequest` | `apiClientRegistrationUpdateRequestSchema` | `src/models/api-client-registration-update-request.ts` |
| `ClientRegistrationResponse` | `clientRegistrationResponseSchema` | `src/models/client-registration-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

