<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationAuthConfig — operations

Accessor: `client.organizationAuthConfig` · Source: `src/resources/organization-auth-config.ts` · 3 operations · Request and error types: namespace `OrganizationAuthConfig`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAuthMethods

- **Signature**: `getAuthMethods(options?: RequestOptions): ApiPromise<AuthConfig, OrganizationAuthConfig.GetAuthMethodsError>`
- **Wire**: `GET /orgAuthConfig/authMethods`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthConfig`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OrganizationAuthConfig.GetAuthMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthConfig` | `authConfigSchema` | `src/models/auth-config.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### setUpAuthConfig

- **Signature**: `setUpAuthConfig(request: OrganizationAuthConfig.SetUpAuthConfigRequest, options?: RequestOptions): ApiPromise<OrgAuthConfigSetupResponse, OrganizationAuthConfig.SetUpAuthConfigError>`
- **Wire**: `POST /orgAuthConfig`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgAuthConfigSetupResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OrganizationAuthConfig.SetUpAuthConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationAuthConfig.SetUpAuthConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrgAuthConfigCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgAuthConfigCreateRequest` | `orgAuthConfigCreateRequestSchema` | `src/models/org-auth-config-create-request.ts` |
| `OrgAuthConfigSetupResponse` | `orgAuthConfigSetupResponseSchema` | `src/models/org-auth-config-setup-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateAuthMethod

- **Signature**: `updateAuthMethod(request: OrganizationAuthConfig.UpdateAuthMethodRequest, options?: RequestOptions): ApiPromise<UpdateAuthMethodResponse, OrganizationAuthConfig.UpdateAuthMethodError>`
- **Wire**: `POST /orgAuthConfig/updateAuthMethod`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateAuthMethodResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `OrganizationAuthConfig.UpdateAuthMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationAuthConfig.UpdateAuthMethodRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OrgAuthConfigUpdateAuthMethodRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgAuthConfigUpdateAuthMethodRequest` | `orgAuthConfigUpdateAuthMethodRequestSchema` | `src/models/org-auth-config-update-auth-method-request.ts` |
| `UpdateAuthMethodResponse` | `updateAuthMethodResponseSchema` | `src/models/update-auth-method-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

