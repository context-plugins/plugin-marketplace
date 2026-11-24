export { DopeSecurityClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Authorization } from "./resources/authorization.js";
export { CustomCategoriesApi } from "./resources/custom-categories-api.js";
export { Endpoints } from "./resources/endpoints.js";
export { Policies } from "./resources/policies.js";

export { adminSetStateSchema, type AdminSetState } from "./models/admin-set-state.js";
export {
  applicationBypassUpdateBodySchema,
  type ApplicationBypassUpdateBody,
} from "./models/application-bypass-update-body.js";
export { assignedGroupSchema, type AssignedGroup } from "./models/assigned-group.js";
export { assignedUserSchema, type AssignedUser } from "./models/assigned-user.js";
export { baseInheritanceSchema, type BaseInheritance } from "./models/base-inheritance.js";
export { categoriesSchema, type Categories } from "./models/unions/categories.js";
export { categoryBlockSchema, type CategoryBlock } from "./models/category-block.js";
export { categoryExceptionSchema, type CategoryException } from "./models/category-exception.js";
export {
  categoryExceptionUpdateSchema,
  type CategoryExceptionUpdate,
} from "./models/category-exception-update.js";
export {
  categoryRestrictionUpdateSchema,
  type CategoryRestrictionUpdate,
} from "./models/category-restriction-update.js";
export { categorySettingsSchema, type CategorySettings } from "./models/category-settings.js";
export { customSchema, type Custom } from "./models/custom.js";
export {
  customCategoriesResponseSchema,
  type CustomCategoriesResponse,
} from "./models/custom-categories-response.js";
export {
  customCategoriesUrlsRequestSchema,
  type CustomCategoriesUrlsRequest,
} from "./models/custom-categories-urls-request.js";
export {
  customCategoriesUrlsResponseSchema,
  type CustomCategoriesUrlsResponse,
} from "./models/custom-categories-urls-response.js";
export { custom1Schema, type Custom1 } from "./models/custom1.js";
export { custom2Schema, type Custom2 } from "./models/custom2.js";
export { custom3Schema, type Custom3 } from "./models/custom3.js";
export { customBypassItemSchema, type CustomBypassItem } from "./models/custom-bypass-item.js";
export {
  customBypassRequestItemSchema,
  type CustomBypassRequestItem,
} from "./models/custom-bypass-request-item.js";
export { customCategoriesSchema, type CustomCategories } from "./models/unions/custom-categories.js";
export { customCategoryBlockSchema, type CustomCategoryBlock } from "./models/custom-category-block.js";
export {
  customCategoryRestrictionUpdateSchema,
  type CustomCategoryRestrictionUpdate,
} from "./models/custom-category-restriction-update.js";
export {
  customCategorySettingsSchema,
  type CustomCategorySettings,
} from "./models/custom-category-settings.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export { data10Schema, type Data10 } from "./models/data10.js";
export {
  data1FlightdeckDopeSecurityPublicApiSpecificationSchema,
  type Data1FlightdeckDopeSecurityPublicApiSpecification,
} from "./models/data1-flightdeck-dope-security-public-api-specification.js";
export { data2Schema, type Data2 } from "./models/data2.js";
export {
  data2FlightdeckDopeSecurityPublicApiSpecificationSchema,
  type Data2FlightdeckDopeSecurityPublicApiSpecification,
} from "./models/data2-flightdeck-dope-security-public-api-specification.js";
export { data3Schema, type Data3 } from "./models/data3.js";
export { data4Schema, type Data4 } from "./models/data4.js";
export { data5Schema, type Data5 } from "./models/data5.js";
export { data6Schema, type Data6 } from "./models/data6.js";
export { data61Schema, type Data61 } from "./models/unions/data61.js";
export { data7Schema, type Data7 } from "./models/data7.js";
export { data8Schema, type Data8 } from "./models/data8.js";
export { data81Schema, type Data81 } from "./models/unions/data81.js";
export { data9Schema, type Data9 } from "./models/data9.js";
export {
  dataFlightdeckDopeSecurityPublicApiSpecificationSchema,
  type DataFlightdeckDopeSecurityPublicApiSpecification,
} from "./models/data-flightdeck-dope-security-public-api-specification.js";
export {
  dataFlightdeckDopeSecurityPublicApiSpecificationWithCategoriesSchema,
  type DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories,
} from "./models/data-flightdeck-dope-security-public-api-specification-with-categories.js";
export { defaultSchema, type Default } from "./models/default.js";
export { default1Schema, type Default1 } from "./models/default1.js";
export { defaultBypassItemSchema, type DefaultBypassItem } from "./models/default-bypass-item.js";
export { endpointSchema, type Endpoint } from "./models/endpoint.js";
export {
  endpointsSearchResponseSchema,
  type EndpointsSearchResponse,
} from "./models/endpoints-search-response.js";
export { errorsSchema, type Errors } from "./models/errors.js";
export { errors1Schema, type Errors1 } from "./models/errors1.js";
export { errorsErrorSchema, type ErrorsError } from "./models/errors-error.js";
export { oAuthErrorSchema, type OAuthError } from "./models/oauth-error.js";
export { oAuthErrorErrorSchema, type OAuthErrorError } from "./models/oauth-error-error.js";
export { paginationResponseSchema, type PaginationResponse } from "./models/pagination-response.js";
export {
  partnerOauthTokenRequestSchema,
  type PartnerOauthTokenRequest,
} from "./models/partner-oauth-token-request.js";
export {
  partnerOauthTokenResponseSchema,
  type PartnerOauthTokenResponse,
} from "./models/partner-oauth-token-response.js";
export {
  policiesAssignmentsRequestSchema,
  type PoliciesAssignmentsRequest,
} from "./models/policies-assignments-request.js";
export {
  policiesAssignmentsResponseSchema,
  type PoliciesAssignmentsResponse,
} from "./models/policies-assignments-response.js";
export {
  policiesBypassApplicationsRequestSchema,
  type PoliciesBypassApplicationsRequest,
} from "./models/policies-bypass-applications-request.js";
export {
  policiesBypassApplicationsRequest1Schema,
  type PoliciesBypassApplicationsRequest1,
} from "./models/policies-bypass-applications-request1.js";
export {
  policiesBypassApplicationsResponseSchema,
  type PoliciesBypassApplicationsResponse,
} from "./models/policies-bypass-applications-response.js";
export {
  policiesBypassUrlsRequestSchema,
  type PoliciesBypassUrlsRequest,
} from "./models/policies-bypass-urls-request.js";
export {
  policiesBypassUrlsRequest1Schema,
  type PoliciesBypassUrlsRequest1,
} from "./models/policies-bypass-urls-request1.js";
export {
  policiesBypassUrlsResponseSchema,
  type PoliciesBypassUrlsResponse,
} from "./models/policies-bypass-urls-response.js";
export { policiesResponseSchema, type PoliciesResponse } from "./models/policies-response.js";
export {
  policiesSslInspectionRequestSchema,
  type PoliciesSslInspectionRequest,
} from "./models/policies-ssl-inspection-request.js";
export {
  policiesSslInspectionResponseSchema,
  type PoliciesSslInspectionResponse,
} from "./models/policies-ssl-inspection-response.js";
export { policySchema, type Policy } from "./models/policy.js";
export {
  policyContentExceptionsRequestSchema,
  type PolicyContentExceptionsRequest,
} from "./models/policy-content-exceptions-request.js";
export { policyContentResponseSchema, type PolicyContentResponse } from "./models/policy-content-response.js";
export {
  policyContentRestrictionsRequestSchema,
  type PolicyContentRestrictionsRequest,
} from "./models/policy-content-restrictions-request.js";
export { Restriction, restrictionSchema } from "./models/restriction.js";
export { Restriction1, restriction1Schema } from "./models/restriction1.js";
export { Restriction2, restriction2Schema } from "./models/restriction2.js";
export { Restriction3, restriction3Schema } from "./models/restriction3.js";
export { Restriction4, restriction4Schema } from "./models/restriction4.js";
export { Restriction5, restriction5Schema } from "./models/restriction5.js";
export { SslInspection, sslInspectionSchema } from "./models/ssl-inspection.js";
export { sslInspection1Schema, type SslInspection1 } from "./models/unions/ssl-inspection1.js";
export { sslInspectionResponseSchema, type SslInspectionResponse } from "./models/ssl-inspection-response.js";
export {
  sslInspectionStateBodySchema,
  type SslInspectionStateBody,
} from "./models/ssl-inspection-state-body.js";
export { State, stateSchema } from "./models/state.js";
export { State1, state1Schema } from "./models/state1.js";
export { successMessageSchema, type SuccessMessage } from "./models/success-message.js";
export { Type, typeSchema } from "./models/type.js";
export { urlBypassUpdateBodySchema, type UrlBypassUpdateBody } from "./models/url-bypass-update-body.js";
export { DebugState, debugStateSchema } from "./models/debug-state.js";
export { FallbackMode, fallbackModeSchema } from "./models/fallback-mode.js";
export { Order, orderSchema } from "./models/order.js";
export { Status, statusSchema } from "./models/status.js";

export {
  CoreError as DopeSecurityError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
