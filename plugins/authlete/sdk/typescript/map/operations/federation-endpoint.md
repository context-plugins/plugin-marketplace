<!-- Generated file — do not edit; regenerated with the SDK. -->

# FederationEndpoint — operations

Accessor: `client.federationEndpoint` · Source: `src/resources/federation-endpoint.ts` · 2 operations · Request and error types: namespace `FederationEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### federationConfigurationApi

- **Signature**: `federationConfigurationApi(request: FederationEndpoint.FederationConfigurationApiRequest, options?: RequestOptions): ApiPromise<FederationConfigurationResponse, FederationEndpoint.FederationConfigurationApiError>`
- **Wire**: `POST /api/{serviceId}/federation/configuration`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FederationConfigurationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `FederationEndpoint.FederationConfigurationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FederationEndpoint.FederationConfigurationApiRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `body` | `body` | `ApiFederationConfigurationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiFederationConfigurationRequest` | `apiFederationConfigurationRequestSchema` | `src/models/api-federation-configuration-request.ts` |
| `FederationConfigurationResponse` | `federationConfigurationResponseSchema` | `src/models/federation-configuration-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

### federationRegistrationApi

- **Signature**: `federationRegistrationApi(request: FederationEndpoint.FederationRegistrationApiRequest, options?: RequestOptions): ApiPromise<FederationRegistrationResponse, FederationEndpoint.FederationRegistrationApiError>`
- **Wire**: `POST /api/{serviceId}/federation/registration`
- **Auth**: `bearer`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FederationRegistrationResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `FederationEndpoint.FederationRegistrationApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FederationEndpoint.FederationRegistrationApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `entityConfiguration` | `form` | `string` | no |
| `trustChain` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FederationRegistrationResponse` | `federationRegistrationResponseSchema` | `src/models/federation-registration-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

