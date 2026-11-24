<!-- Generated file — do not edit; regenerated with the SDK. -->

# Features — operations

Accessor: `client.features` · Source: `src/resources/features.ts` · 3 operations · Request and error types: namespace `Features`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### activateFeature

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `activateFeature(request: Features.ActivateFeatureRequest, options?: RequestOptions): ApiPromise<undefined, Features.ActivateFeatureError>`
- **Wire**: `POST /companies({company_id})/features({feature_id})/Microsoft.NAV.activate`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Features.ActivateFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Features.ActivateFeatureRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `featureId` | `path` | `feature_id` | `string` | yes |
| `body` | `body` | — | `CompaniesApiFeaturesApiMicrosoftNavActivateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiFeaturesApiMicrosoftNavActivateRequest` | `companiesApiFeaturesApiMicrosoftNavActivateRequestSchema` | `src/models/companies-api-features-api-microsoft-nav-activate-request.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deactivateFeature

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deactivateFeature(request: Features.DeactivateFeatureRequest, options?: RequestOptions): ApiPromise<undefined, Features.DeactivateFeatureError>`
- **Wire**: `POST /companies({company_id})/features({feature_id})/Microsoft.NAV.deactivate`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Features.DeactivateFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Features.DeactivateFeatureRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `featureId` | `path` | `feature_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listFeatures

- **Server**: `defaultBusinessCentralAutomationApiV20CompaniesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFeatures(request: Features.ListFeaturesRequest, options?: RequestOptions): ApiPromise<CompaniesApiFeaturesResponse, Features.ListFeaturesError>`
- **Wire**: `GET /companies({company_id})/features`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiFeaturesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Features.ListFeaturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Features.ListFeaturesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiFeaturesResponse` | `companiesApiFeaturesResponseSchema` | `src/models/companies-api-features-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

