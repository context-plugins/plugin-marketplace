<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerConfigurations — operations

Accessor: `client.partnerConfigurations` · Source: `src/resources/partner-configurations.ts` · 3 operations · Request and error types: namespace `PartnerConfigurations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `justtrack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postManagementV1PartnerConfigurationByFeature

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1PartnerConfigurationByFeature(request: PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureRequest, options?: RequestOptions): ApiPromise<ListPartnerConfigurationFeaturesResponse, PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError>`
- **Wire**: `POST /management/v1/partner-configuration/{feature}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListPartnerConfigurationFeaturesResponse`
- **Error**: `JusttrackError` with `kind: "api"`, an instance of `PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `body` | `body` | `ListPartnerConfigurationFeaturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPartnerConfigurationFeaturesRequest` | `listPartnerConfigurationFeaturesRequestSchema` | `src/models/list-partner-configuration-features-request.ts` |
| `ListPartnerConfigurationFeaturesResponse` | `listPartnerConfigurationFeaturesResponseSchema` | `src/models/list-partner-configuration-features-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postManagementV1PartnerConfigurations

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1PartnerConfigurations(request?: PartnerConfigurations.PostManagementV1PartnerConfigurationsRequest, options?: RequestOptions): ApiPromise<ListPartnerConfigurationsResponse, PartnerConfigurations.PostManagementV1PartnerConfigurationsError>`
- **Wire**: `POST /management/v1/partner-configurations`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListPartnerConfigurationsResponse`
- **Error**: `JusttrackError` with `kind: "api"`, an instance of `PartnerConfigurations.PostManagementV1PartnerConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerConfigurations.PostManagementV1PartnerConfigurationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListPartnerConfigurationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPartnerConfigurationsRequest` | `listPartnerConfigurationsRequestSchema` | `src/models/list-partner-configurations-request.ts` |
| `ListPartnerConfigurationsResponse` | `listPartnerConfigurationsResponseSchema` | `src/models/list-partner-configurations-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### putManagementV1PartnerConfigurationByFeature

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putManagementV1PartnerConfigurationByFeature(request: PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureRequest, options?: RequestOptions): ApiPromise<PartnerConfigurationFeatureOutput[], PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError>`
- **Wire**: `PUT /management/v1/partner-configuration/{feature}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerConfigurationFeatureOutput[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `JusttrackError` with `kind: "api"`, an instance of `PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `body` | `body` | `UpsertPartnerConfigurationFeaturesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertPartnerConfigurationFeaturesRequest` | `upsertPartnerConfigurationFeaturesRequestSchema` | `src/models/upsert-partner-configuration-features-request.ts` |
| `PartnerConfigurationFeatureOutput` | `partnerConfigurationFeatureOutputSchema` | `src/models/partner-configuration-feature-output.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

