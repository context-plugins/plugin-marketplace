export { UnbounceClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type BasicAuthCredentials,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { Accounts } from "./resources/accounts.js";
export { Domains } from "./resources/domains.js";
export { Leads } from "./resources/leads.js";
export { Meta } from "./resources/meta.js";
export { PageGroups } from "./resources/page-groups.js";
export { Pages } from "./resources/pages.js";
export { Users } from "./resources/users.js";

export { accountSchema, type Account } from "./models/account.js";
export { accountCollectionSchema, type AccountCollection } from "./models/account-collection.js";
export {
  accountsSubAccountsResponseSchema,
  type AccountsSubAccountsResponse,
} from "./models/accounts-sub-accounts-response.js";
export { domainSchema, type Domain } from "./models/domain.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { formFieldSchema, type FormField } from "./models/form-field.js";
export { leadSchema, type Lead } from "./models/lead.js";
export { leadDeletionRequestSchema, type LeadDeletionRequest } from "./models/lead-deletion-request.js";
export { pageSchema, type Page } from "./models/page.js";
export { pageCollectionSchema, type PageCollection } from "./models/page-collection.js";
export { pageGroupSchema, type PageGroup } from "./models/page-group.js";
export {
  pagesFormFieldsResponseSchema,
  type PagesFormFieldsResponse,
} from "./models/pages-form-fields-response.js";
export {
  pagesLeadDeletionRequestResponseSchema,
  type PagesLeadDeletionRequestResponse,
} from "./models/pages-lead-deletion-request-response.js";
export { pagesLeadsResponseSchema, type PagesLeadsResponse } from "./models/pages-leads-response.js";
export { responseSchema, type Response } from "./models/response.js";
export {
  subAccountsDomainsResponseSchema,
  type SubAccountsDomainsResponse,
} from "./models/sub-accounts-domains-response.js";
export {
  subAccountsPageGroupsResponseSchema,
  type SubAccountsPageGroupsResponse,
} from "./models/sub-accounts-page-groups-response.js";
export { subAccountSchema, type SubAccount } from "./models/sub-account.js";
export { userSchema, type User } from "./models/user.js";
export { usersResponseSchema, type UsersResponse } from "./models/users-response.js";

export {
  CoreError as UnbounceError,
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
