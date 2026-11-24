export { RocketReachClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Account } from "./resources/account.js";
export { CompanyDataApi } from "./resources/company-data-api.js";
export { PeopleDataApi } from "./resources/people-data-api.js";

export { apiBulkLookupQuerySchema, type ApiBulkLookupQuery } from "./models/api-bulk-lookup-query.js";
export { apiKeySchema, type ApiKey } from "./models/api-key.js";
export {
  apiPublicCompiledCompanySearchInputSchema,
  type ApiPublicCompiledCompanySearchInput,
} from "./models/api-public-compiled-company-search-input.js";
export { apiSearchInputSchema, type ApiSearchInput } from "./models/api-search-input.js";
export {
  apiUniversalCreditsPublicCompiledCompanySearchInputSchema,
  type ApiUniversalCreditsPublicCompiledCompanySearchInput,
} from "./models/api-universal-credits-public-compiled-company-search-input.js";
export {
  apiUniversalCreditsSearchInputSchema,
  type ApiUniversalCreditsSearchInput,
} from "./models/api-universal-credits-search-input.js";
export {
  companyQuarterlyGrowthSchema,
  type CompanyQuarterlyGrowth,
} from "./models/company-quarterly-growth.js";
export { companyQuerySchema, type CompanyQuery } from "./models/company-query.js";
export { companyQuery1Schema, type CompanyQuery1 } from "./models/company-query1.js";
export { compiledCompanyApiSchema, type CompiledCompanyApi } from "./models/compiled-company-api.js";
export { compiledCompanyApi2Schema, type CompiledCompanyApi2 } from "./models/compiled-company-api2.js";
export {
  compiledCompanyApiSerializerWithExtendedCompanyAttributesSchema,
  type CompiledCompanyApiSerializerWithExtendedCompanyAttributes,
} from "./models/compiled-company-api-serializer-with-extended-company-attributes.js";
export {
  compiledCompanyAddressSchema,
  type CompiledCompanyAddress,
} from "./models/compiled-company-address.js";
export {
  compiledCompanyAddress1Schema,
  type CompiledCompanyAddress1,
} from "./models/compiled-company-address1.js";
export {
  compiledCompanyPublicDetailsSchema,
  type CompiledCompanyPublicDetails,
} from "./models/compiled-company-public-details.js";
export { creditUsageSchema, type CreditUsage } from "./models/credit-usage.js";
export { educationApiSchema, type EducationApi } from "./models/education-api.js";
export {
  jobHistoryApiCompiledCompanySchema,
  type JobHistoryApiCompiledCompany,
} from "./models/job-history-api-compiled-company.js";
export { linksSchema, type Links } from "./models/links.js";
export { LookupTypeEnum, lookupTypeEnumSchema } from "./models/lookup-type-enum.js";
export { npiDataSchema, type NpiData } from "./models/npi-data.js";
export { npiData4Schema, type NpiData4 } from "./models/npi-data4.js";
export {
  npiDataRocketReachPeopleDataApiSchema,
  type NpiDataRocketReachPeopleDataApi,
} from "./models/npi-data-rocket-reach-people-data-api.js";
export { OrderByEnum, orderByEnumSchema } from "./models/order-by-enum.js";
export { personQuerySchema, type PersonQuery } from "./models/person-query.js";
export { personQuery1Schema, type PersonQuery1 } from "./models/person-query1.js";
export { phoneSchema, type Phone } from "./models/phone.js";
export { planSchema, type Plan } from "./models/plan.js";
export { plan2Schema, type Plan2 } from "./models/plan2.js";
export {
  profileApiCompiledCompanySchema,
  type ProfileApiCompiledCompany,
} from "./models/profile-api-compiled-company.js";
export {
  profileApiSerializerWithCompiledCompanySchema,
  type ProfileApiSerializerWithCompiledCompany,
} from "./models/profile-api-serializer-with-compiled-company.js";
export {
  profileApiWithMetadataCompiledCompanySchema,
  type ProfileApiWithMetadataCompiledCompany,
} from "./models/profile-api-with-metadata-compiled-company.js";
export { profileEmailApiSchema, type ProfileEmailApi } from "./models/profile-email-api.js";
export { profileListApiSchema, type ProfileListApi } from "./models/profile-list-api.js";
export { profileMatchSchema, type ProfileMatch } from "./models/profile-match.js";
export { profilePhoneApiSchema, type ProfilePhoneApi } from "./models/profile-phone-api.js";
export {
  profileSearchResultSerializerBaseSchema,
  type ProfileSearchResultSerializerBase,
} from "./models/profile-search-result-serializer-base.js";
export { rateLimitSchema, type RateLimit } from "./models/rate-limit.js";
export { StateEnum, stateEnumSchema } from "./models/state-enum.js";
export { StatusEnum, statusEnumSchema } from "./models/status-enum.js";
export { teaserSchema, type Teaser } from "./models/teaser.js";
export { teaser1Schema, type Teaser1 } from "./models/teaser1.js";
export { typedDictSchema, type TypedDict } from "./models/typed-dict.js";
export {
  universalCreditApiBulkLookupQuerySchema,
  type UniversalCreditApiBulkLookupQuery,
} from "./models/universal-credit-api-bulk-lookup-query.js";
export {
  universalCreditCompanySearchOutputSchema,
  type UniversalCreditCompanySearchOutput,
} from "./models/universal-credit-company-search-output.js";
export {
  universalCreditPersonLookupInputSchema,
  type UniversalCreditPersonLookupInput,
} from "./models/universal-credit-person-lookup-input.js";
export {
  universalCreditPersonLookupOutputSchema,
  type UniversalCreditPersonLookupOutput,
} from "./models/universal-credit-person-lookup-output.js";
export {
  universalCreditPersonLookupOutputWithMetadataSchema,
  type UniversalCreditPersonLookupOutputWithMetadata,
} from "./models/universal-credit-person-lookup-output-with-metadata.js";
export {
  universalCreditPersonSearchOutputSchema,
  type UniversalCreditPersonSearchOutput,
} from "./models/universal-credit-person-search-output.js";
export { universalCreditUsageSchema, type UniversalCreditUsage } from "./models/universal-credit-usage.js";
export {
  universalCreditUsageByActionSchema,
  type UniversalCreditUsageByAction,
} from "./models/universal-credit-usage-by-action.js";
export {
  universalCreditsUserModelWithExtraAttributesSchema,
  type UniversalCreditsUserModelWithExtraAttributes,
} from "./models/universal-credits-user-model-with-extra-attributes.js";
export { userModelSchema, type UserModel } from "./models/user-model.js";
export { LookupType, lookupTypeSchema } from "./models/lookup-type.js";

export {
  CoreError as RocketReachError,
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
