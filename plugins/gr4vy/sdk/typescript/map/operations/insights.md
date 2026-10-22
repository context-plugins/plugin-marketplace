<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 2 operations · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMetricsExplorerModule

- **Signature**: `getMetricsExplorerModule(request: Insights.GetMetricsExplorerModuleRequest, options?: RequestOptions): ApiPromise<ModuleResponse[], Insights.GetMetricsExplorerModuleError>`
- **Wire**: `GET /metrics-explorer/{source}/metrics/{metric}/modules/{module}`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ModuleResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Insights.GetMetricsExplorerModuleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetMetricsExplorerModuleRequest` (30):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `source` | `path` | — | `MetricsExplorerSource1` | yes |
| `metric` | `path` | — | `MetricsExplorerMetric3` | yes |
| `module` | `path` | — | `MetricsExplorerModule1` | yes |
| `datetimeRange` | `query` | `datetime_range` | `string` | yes |
| `authenticationOutcome` | `query` | `authentication_outcome` | `AuthenticationOutcome` | no |
| `authorized` | `query` | — | `Authorized` | no |
| `country` | `query` | — | `Country4` | no |
| `currency` | `query` | — | `Currency7` | no |
| `errorCode` | `query` | `error_code` | `ErrorCode1` | no |
| `instrumentType` | `query` | `instrument_type` | `InstrumentType1` | no |
| `isSubsequentPayment` | `query` | `is_subsequent_payment` | `IsSubsequentPayment1` | no |
| `liabilityShifted` | `query` | `liability_shifted` | `LiabilityShifted` | no |
| `merchantInitiated` | `query` | `merchant_initiated` | `MerchantInitiated1` | no |
| `metadata` | `query` | — | `Metadata3` | no |
| `method` | `query` | — | `Method121` | no |
| `paymentMethodBin` | `query` | `payment_method_bin` | `PaymentMethodBin` | no |
| `paymentMethodCardIssuerName` | `query` | `payment_method_card_issuer_name` | `PaymentMethodCardIssuerName` | no |
| `paymentMethodCardType` | `query` | `payment_method_card_type` | `PaymentMethodCardType` | no |
| `paymentMethodCountry` | `query` | `payment_method_country` | `PaymentMethodCountry` | no |
| `paymentMethodScheme` | `query` | `payment_method_scheme` | `PaymentMethodScheme` | no |
| `paymentServiceId` | `query` | `payment_service_id` | `PaymentServiceId2` | no |
| `paymentSource` | `query` | `payment_source` | `PaymentSource` | no |
| `rawResponseCode` | `query` | `raw_response_code` | `RawResponseCode1` | no |
| `ruleIdRouteTransaction` | `query` | `rule_id_route_transaction` | `RuleIdRouteTransaction` | no |
| `ruleIdSkip3Ds` | `query` | `rule_id_skip_3ds` | `RuleIdSkip3Ds` | no |
| `ruleVariantId` | `query` | `rule_variant_id` | `RuleVariantId` | no |
| `threeDSecureAuthResp` | `query` | `three_d_secure_auth_resp` | `ThreeDSecureAuthResp` | no |
| `threeDSecureEci` | `query` | `three_d_secure_eci` | `ThreeDSecureEci` | no |
| `threeDSecureMethod` | `query` | `three_d_secure_method` | `ThreeDSecureMethod` | no |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsExplorerSource1` | `metricsExplorerSource1Schema` | `src/models/metrics-explorer-source1.ts` |
| `MetricsExplorerMetric3` | `metricsExplorerMetric3Schema` | `src/models/metrics-explorer-metric3.ts` |
| `MetricsExplorerModule1` | `metricsExplorerModule1Schema` | `src/models/metrics-explorer-module1.ts` |
| `AuthenticationOutcome` | `authenticationOutcomeSchema` | `src/models/unions/authentication-outcome.ts` |
| `Authorized` | `authorizedSchema` | `src/models/unions/authorized.ts` |
| `Country4` | `country4Schema` | `src/models/unions/country4.ts` |
| `Currency7` | `currency7Schema` | `src/models/unions/currency7.ts` |
| `ErrorCode1` | `errorCode1Schema` | `src/models/unions/error-code1.ts` |
| `InstrumentType1` | `instrumentType1Schema` | `src/models/unions/instrument-type1.ts` |
| `IsSubsequentPayment1` | `isSubsequentPayment1Schema` | `src/models/unions/is-subsequent-payment1.ts` |
| `LiabilityShifted` | `liabilityShiftedSchema` | `src/models/unions/liability-shifted.ts` |
| `MerchantInitiated1` | `merchantInitiated1Schema` | `src/models/unions/merchant-initiated1.ts` |
| `Metadata3` | `metadata3Schema` | `src/models/unions/metadata3.ts` |
| `Method121` | `method121Schema` | `src/models/unions/method121.ts` |
| `PaymentMethodBin` | `paymentMethodBinSchema` | `src/models/unions/payment-method-bin.ts` |
| `PaymentMethodCardIssuerName` | `paymentMethodCardIssuerNameSchema` | `src/models/unions/payment-method-card-issuer-name.ts` |
| `PaymentMethodCardType` | `paymentMethodCardTypeSchema` | `src/models/unions/payment-method-card-type.ts` |
| `PaymentMethodCountry` | `paymentMethodCountrySchema` | `src/models/unions/payment-method-country.ts` |
| `PaymentMethodScheme` | `paymentMethodSchemeSchema` | `src/models/unions/payment-method-scheme.ts` |
| `PaymentServiceId2` | `paymentServiceId2Schema` | `src/models/unions/payment-service-id2.ts` |
| `PaymentSource` | `paymentSourceSchema` | `src/models/unions/payment-source.ts` |
| `RawResponseCode1` | `rawResponseCode1Schema` | `src/models/unions/raw-response-code1.ts` |
| `RuleIdRouteTransaction` | `ruleIdRouteTransactionSchema` | `src/models/unions/rule-id-route-transaction.ts` |
| `RuleIdSkip3Ds` | `ruleIdSkip3DsSchema` | `src/models/unions/rule-id-skip3-ds.ts` |
| `RuleVariantId` | `ruleVariantIdSchema` | `src/models/unions/rule-variant-id.ts` |
| `ThreeDSecureAuthResp` | `threeDSecureAuthRespSchema` | `src/models/unions/three-dsecure-auth-resp.ts` |
| `ThreeDSecureEci` | `threeDSecureEciSchema` | `src/models/unions/three-dsecure-eci.ts` |
| `ThreeDSecureMethod` | `threeDSecureMethodSchema` | `src/models/unions/three-dsecure-method.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `ModuleResponse` | `moduleResponseSchema` | `src/models/module-response.ts` |
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

### getMetricsExplorerTotals

- **Signature**: `getMetricsExplorerTotals(request: Insights.GetMetricsExplorerTotalsRequest, options?: RequestOptions): ApiPromise<MetricsExplorerTotalResponse, Insights.GetMetricsExplorerTotalsError>`
- **Wire**: `GET /metrics-explorer/{source}/metrics/{metric}/totals`
- **Auth**: `oAuth2PasswordBearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MetricsExplorerTotalResponse`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `Insights.GetMetricsExplorerTotalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetMetricsExplorerTotalsRequest` (30):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `source` | `path` | — | `MetricsExplorerSource1` | yes | — |
| `metric` | `path` | — | `MetricsExplorerMetric3` | yes | — |
| `datetimeRange` | `query` | `datetime_range` | `string` | yes | — |
| `authenticationOutcome` | `query` | `authentication_outcome` | `AuthenticationOutcome` | no | — |
| `authorized` | `query` | — | `Authorized` | no | — |
| `country` | `query` | — | `Country4` | no | — |
| `currency` | `query` | — | `Currency7` | no | — |
| `errorCode` | `query` | `error_code` | `ErrorCode1` | no | — |
| `instrumentType` | `query` | `instrument_type` | `InstrumentType1` | no | — |
| `isSubsequentPayment` | `query` | `is_subsequent_payment` | `IsSubsequentPayment1` | no | — |
| `liabilityShifted` | `query` | `liability_shifted` | `LiabilityShifted` | no | — |
| `merchantInitiated` | `query` | `merchant_initiated` | `MerchantInitiated1` | no | — |
| `metadata` | `query` | — | `Metadata3` | no | — |
| `method` | `query` | — | `Method121` | no | — |
| `paymentMethodBin` | `query` | `payment_method_bin` | `PaymentMethodBin` | no | — |
| `paymentMethodCardIssuerName` | `query` | `payment_method_card_issuer_name` | `PaymentMethodCardIssuerName` | no | — |
| `paymentMethodCardType` | `query` | `payment_method_card_type` | `PaymentMethodCardType` | no | — |
| `paymentMethodCountry` | `query` | `payment_method_country` | `PaymentMethodCountry` | no | — |
| `paymentMethodScheme` | `query` | `payment_method_scheme` | `PaymentMethodScheme` | no | — |
| `paymentServiceId` | `query` | `payment_service_id` | `PaymentServiceId2` | no | — |
| `paymentSource` | `query` | `payment_source` | `PaymentSource` | no | — |
| `rawResponseCode` | `query` | `raw_response_code` | `RawResponseCode1` | no | — |
| `ruleIdRouteTransaction` | `query` | `rule_id_route_transaction` | `RuleIdRouteTransaction` | no | — |
| `ruleIdSkip3Ds` | `query` | `rule_id_skip_3ds` | `RuleIdSkip3Ds` | no | — |
| `ruleVariantId` | `query` | `rule_variant_id` | `RuleVariantId` | no | — |
| `threeDSecureAuthResp` | `query` | `three_d_secure_auth_resp` | `ThreeDSecureAuthResp` | no | — |
| `threeDSecureEci` | `query` | `three_d_secure_eci` | `ThreeDSecureEci` | no | — |
| `threeDSecureMethod` | `query` | `three_d_secure_method` | `ThreeDSecureMethod` | no | — |
| `excludePrevious` | `query` | `exclude_previous` | `boolean` | no | `false` |
| `xGr4VyMerchantAccountId` | `header` | `x-gr4vy-merchant-account-id` | `XGr4VyMerchantAccountId` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricsExplorerSource1` | `metricsExplorerSource1Schema` | `src/models/metrics-explorer-source1.ts` |
| `MetricsExplorerMetric3` | `metricsExplorerMetric3Schema` | `src/models/metrics-explorer-metric3.ts` |
| `AuthenticationOutcome` | `authenticationOutcomeSchema` | `src/models/unions/authentication-outcome.ts` |
| `Authorized` | `authorizedSchema` | `src/models/unions/authorized.ts` |
| `Country4` | `country4Schema` | `src/models/unions/country4.ts` |
| `Currency7` | `currency7Schema` | `src/models/unions/currency7.ts` |
| `ErrorCode1` | `errorCode1Schema` | `src/models/unions/error-code1.ts` |
| `InstrumentType1` | `instrumentType1Schema` | `src/models/unions/instrument-type1.ts` |
| `IsSubsequentPayment1` | `isSubsequentPayment1Schema` | `src/models/unions/is-subsequent-payment1.ts` |
| `LiabilityShifted` | `liabilityShiftedSchema` | `src/models/unions/liability-shifted.ts` |
| `MerchantInitiated1` | `merchantInitiated1Schema` | `src/models/unions/merchant-initiated1.ts` |
| `Metadata3` | `metadata3Schema` | `src/models/unions/metadata3.ts` |
| `Method121` | `method121Schema` | `src/models/unions/method121.ts` |
| `PaymentMethodBin` | `paymentMethodBinSchema` | `src/models/unions/payment-method-bin.ts` |
| `PaymentMethodCardIssuerName` | `paymentMethodCardIssuerNameSchema` | `src/models/unions/payment-method-card-issuer-name.ts` |
| `PaymentMethodCardType` | `paymentMethodCardTypeSchema` | `src/models/unions/payment-method-card-type.ts` |
| `PaymentMethodCountry` | `paymentMethodCountrySchema` | `src/models/unions/payment-method-country.ts` |
| `PaymentMethodScheme` | `paymentMethodSchemeSchema` | `src/models/unions/payment-method-scheme.ts` |
| `PaymentServiceId2` | `paymentServiceId2Schema` | `src/models/unions/payment-service-id2.ts` |
| `PaymentSource` | `paymentSourceSchema` | `src/models/unions/payment-source.ts` |
| `RawResponseCode1` | `rawResponseCode1Schema` | `src/models/unions/raw-response-code1.ts` |
| `RuleIdRouteTransaction` | `ruleIdRouteTransactionSchema` | `src/models/unions/rule-id-route-transaction.ts` |
| `RuleIdSkip3Ds` | `ruleIdSkip3DsSchema` | `src/models/unions/rule-id-skip3-ds.ts` |
| `RuleVariantId` | `ruleVariantIdSchema` | `src/models/unions/rule-variant-id.ts` |
| `ThreeDSecureAuthResp` | `threeDSecureAuthRespSchema` | `src/models/unions/three-dsecure-auth-resp.ts` |
| `ThreeDSecureEci` | `threeDSecureEciSchema` | `src/models/unions/three-dsecure-eci.ts` |
| `ThreeDSecureMethod` | `threeDSecureMethodSchema` | `src/models/unions/three-dsecure-method.ts` |
| `XGr4VyMerchantAccountId` | `xGr4VyMerchantAccountIdSchema` | `src/models/unions/xgr4-vy-merchant-account-id.ts` |
| `MetricsExplorerTotalResponse` | `metricsExplorerTotalResponseSchema` | `src/models/metrics-explorer-total-response.ts` |
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

