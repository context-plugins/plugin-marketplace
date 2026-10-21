<!-- Generated file — do not edit; regenerated with the SDK. -->

# MerchantAccounts3DsConfiguration — operations

Accessor: `client.merchantAccounts3DsConfiguration` · Source: `src/resources/merchant-accounts3-ds-configuration.ts` · 4 operations · Request and error types: namespace `MerchantAccounts3DsConfiguration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createThreeDsConfiguration

- **Signature**: `createThreeDsConfiguration(request: MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationRequest, options?: RequestOptions): ApiPromise<MerchantAccountThreeDsConfiguration, MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError>`
- **Wire**: `POST /merchant-accounts/{merchant_account_id}/three-ds-configurations`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MerchantAccountThreeDsConfiguration`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantAccountId` | `path` | `merchant_account_id` | `string` | yes |
| `body` | `body` | — | `MerchantAccountThreeDsConfigurationCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantAccountThreeDsConfigurationCreate` | `merchantAccountThreeDsConfigurationCreateSchema` | `src/models/merchant-account-three-ds-configuration-create.ts` |
| `MerchantAccountThreeDsConfiguration` | `merchantAccountThreeDsConfigurationSchema` | `src/models/merchant-account-three-ds-configuration.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteThreeDsConfiguration

- **Signature**: `deleteThreeDsConfiguration(request: MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError>`
- **Wire**: `DELETE /merchant-accounts/{merchant_account_id}/three-ds-configurations/{three_ds_configuration_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantAccountId` | `path` | `merchant_account_id` | `string` | yes |
| `threeDsConfigurationId` | `path` | `three_ds_configuration_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### editThreeDsConfiguration

- **Signature**: `editThreeDsConfiguration(request: MerchantAccounts3DsConfiguration.EditThreeDsConfigurationRequest, options?: RequestOptions): ApiPromise<MerchantAccountThreeDsConfiguration, MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError>`
- **Wire**: `PUT /merchant-accounts/{merchant_account_id}/three-ds-configurations/{three_ds_configuration_id}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MerchantAccountThreeDsConfiguration`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccounts3DsConfiguration.EditThreeDsConfigurationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantAccountId` | `path` | `merchant_account_id` | `string` | yes |
| `threeDsConfigurationId` | `path` | `three_ds_configuration_id` | `string` | yes |
| `body` | `body` | — | `MerchantAccountThreeDsConfigurationUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantAccountThreeDsConfigurationUpdate` | `merchantAccountThreeDsConfigurationUpdateSchema` | `src/models/merchant-account-three-ds-configuration-update.ts` |
| `MerchantAccountThreeDsConfiguration` | `merchantAccountThreeDsConfigurationSchema` | `src/models/merchant-account-three-ds-configuration.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listThreeDsConfigurations

- **Signature**: `listThreeDsConfigurations(request: MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsRequest, options?: RequestOptions): ApiPromise<MerchantAccountThreeDsConfigurations, MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError>`
- **Wire**: `GET /merchant-accounts/{merchant_account_id}/three-ds-configurations`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantAccountThreeDsConfigurations`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantAccountId` | `path` | `merchant_account_id` | `string` | yes |
| `currency` | `query` | — | `Currency16` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Currency16` | `currency16Schema` | `src/models/unions/currency16.ts` |
| `MerchantAccountThreeDsConfigurations` | `merchantAccountThreeDsConfigurationsSchema` | `src/models/merchant-account-three-ds-configurations.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

