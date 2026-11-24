export { AwsCertificateManagerClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AcmeAccountApi } from "./resources/acme-account-api.js";
export { AcmeDomainValidationApi } from "./resources/acme-domain-validation-api.js";
export { AcmeEndpointApi } from "./resources/acme-endpoint-api.js";
export { AcmeExternalAccountBindingApi } from "./resources/acme-external-account-binding-api.js";
export { Certificates } from "./resources/certificates.js";
export { Operations } from "./resources/operations.js";
export { TagApi } from "./resources/tag-api.js";

export { accessDeniedExceptionSchema, type AccessDeniedException } from "./models/access-denied-exception.js";
export {
  accessDeniedExceptionErrorSchema,
  type AccessDeniedExceptionError,
} from "./models/access-denied-exception-error.js";
export {
  acmCertificateMetadataSchema,
  type AcmCertificateMetadata,
} from "./models/acm-certificate-metadata.js";
export {
  acmCertificateMetadataFilterSchema,
  type AcmCertificateMetadataFilter,
} from "./models/acm-certificate-metadata-filter.js";
export { acmeAccountSchema, type AcmeAccount } from "./models/acme-account.js";
export { acmeAccountSummarySchema, type AcmeAccountSummary } from "./models/acme-account-summary.js";
export { acmeDomainValidationSchema, type AcmeDomainValidation } from "./models/acme-domain-validation.js";
export {
  acmeDomainValidationSummarySchema,
  type AcmeDomainValidationSummary,
} from "./models/acme-domain-validation-summary.js";
export { acmeEndpointSchema, type AcmeEndpoint } from "./models/acme-endpoint.js";
export { acmeEndpointSummarySchema, type AcmeEndpointSummary } from "./models/acme-endpoint-summary.js";
export {
  acmeExternalAccountBindingSchema,
  type AcmeExternalAccountBinding,
} from "./models/acme-external-account-binding.js";
export {
  acmeExternalAccountBindingSummarySchema,
  type AcmeExternalAccountBindingSummary,
} from "./models/acme-external-account-binding-summary.js";
export {
  addTagsToCertificateRequestSchema,
  type AddTagsToCertificateRequest,
} from "./models/add-tags-to-certificate-request.js";
export { AllowedKeyAlgorithm, allowedKeyAlgorithmSchema } from "./models/allowed-key-algorithm.js";
export { AuthorizationBehavior, authorizationBehaviorSchema } from "./models/authorization-behavior.js";
export { AuthorizationBehavior2, authorizationBehavior2Schema } from "./models/authorization-behavior2.js";
export { certificateAuthoritySchema, type CertificateAuthority } from "./models/certificate-authority.js";
export { certificateDetailSchema, type CertificateDetail } from "./models/certificate-detail.js";
export { certificateFilterSchema, type CertificateFilter } from "./models/certificate-filter.js";
export {
  certificateFilterStatementSchema,
  type CertificateFilterStatement,
} from "./models/certificate-filter-statement.js";
export {
  CertificateKeyPairOrigin,
  certificateKeyPairOriginSchema,
} from "./models/certificate-key-pair-origin.js";
export {
  CertificateKeyPairOrigin1,
  certificateKeyPairOrigin1Schema,
} from "./models/certificate-key-pair-origin1.js";
export {
  CertificateKeyPairOrigin4,
  certificateKeyPairOrigin4Schema,
} from "./models/certificate-key-pair-origin4.js";
export { certificateMetadataSchema, type CertificateMetadata } from "./models/certificate-metadata.js";
export { certificateOptionsSchema, type CertificateOptions } from "./models/certificate-options.js";
export {
  certificateOptionsAwsCertificateManagerOperationsApiSchema,
  type CertificateOptionsAwsCertificateManagerOperationsApi,
} from "./models/certificate-options-aws-certificate-manager-operations-api.js";
export {
  certificateSearchResultSchema,
  type CertificateSearchResult,
} from "./models/certificate-search-result.js";
export { CertificateStatus, certificateStatusSchema } from "./models/certificate-status.js";
export { certificateSummarySchema, type CertificateSummary } from "./models/certificate-summary.js";
export {
  CertificateTransparencyLoggingPreference,
  certificateTransparencyLoggingPreferenceSchema,
} from "./models/certificate-transparency-logging-preference.js";
export { commonNameFilterSchema, type CommonNameFilter } from "./models/common-name-filter.js";
export { ComparisonOperator, comparisonOperatorSchema } from "./models/comparison-operator.js";
export { conflictExceptionSchema, type ConflictException } from "./models/conflict-exception.js";
export {
  conflictExceptionErrorSchema,
  type ConflictExceptionError,
} from "./models/conflict-exception-error.js";
export { Contact, contactSchema } from "./models/contact.js";
export { Contact2, contact2Schema } from "./models/contact2.js";
export { Contact3, contact3Schema } from "./models/contact3.js";
export {
  createAcmeDomainValidationRequestSchema,
  type CreateAcmeDomainValidationRequest,
} from "./models/create-acme-domain-validation-request.js";
export {
  createAcmeDomainValidationResponseSchema,
  type CreateAcmeDomainValidationResponse,
} from "./models/create-acme-domain-validation-response.js";
export {
  createAcmeEndpointRequestSchema,
  type CreateAcmeEndpointRequest,
} from "./models/create-acme-endpoint-request.js";
export {
  createAcmeEndpointResponseSchema,
  type CreateAcmeEndpointResponse,
} from "./models/create-acme-endpoint-response.js";
export {
  createAcmeExternalAccountBindingRequestSchema,
  type CreateAcmeExternalAccountBindingRequest,
} from "./models/create-acme-external-account-binding-request.js";
export {
  createAcmeExternalAccountBindingResponseSchema,
  type CreateAcmeExternalAccountBindingResponse,
} from "./models/create-acme-external-account-binding-response.js";
export { customAttributeSchema, type CustomAttribute } from "./models/custom-attribute.js";
export {
  deleteAcmeDomainValidationRequestSchema,
  type DeleteAcmeDomainValidationRequest,
} from "./models/delete-acme-domain-validation-request.js";
export {
  deleteAcmeEndpointRequestSchema,
  type DeleteAcmeEndpointRequest,
} from "./models/delete-acme-endpoint-request.js";
export {
  deleteAcmeExternalAccountBindingRequestSchema,
  type DeleteAcmeExternalAccountBindingRequest,
} from "./models/delete-acme-external-account-binding-request.js";
export {
  deleteCertificateRequestSchema,
  type DeleteCertificateRequest,
} from "./models/delete-certificate-request.js";
export {
  describeAcmeAccountRequestSchema,
  type DescribeAcmeAccountRequest,
} from "./models/describe-acme-account-request.js";
export {
  describeAcmeAccountResponseSchema,
  type DescribeAcmeAccountResponse,
} from "./models/describe-acme-account-response.js";
export {
  describeAcmeDomainValidationRequestSchema,
  type DescribeAcmeDomainValidationRequest,
} from "./models/describe-acme-domain-validation-request.js";
export {
  describeAcmeDomainValidationResponseSchema,
  type DescribeAcmeDomainValidationResponse,
} from "./models/describe-acme-domain-validation-response.js";
export {
  describeAcmeEndpointRequestSchema,
  type DescribeAcmeEndpointRequest,
} from "./models/describe-acme-endpoint-request.js";
export {
  describeAcmeEndpointResponseSchema,
  type DescribeAcmeEndpointResponse,
} from "./models/describe-acme-endpoint-response.js";
export {
  describeAcmeExternalAccountBindingRequestSchema,
  type DescribeAcmeExternalAccountBindingRequest,
} from "./models/describe-acme-external-account-binding-request.js";
export {
  describeAcmeExternalAccountBindingResponseSchema,
  type DescribeAcmeExternalAccountBindingResponse,
} from "./models/describe-acme-external-account-binding-response.js";
export {
  describeCertificateRequestSchema,
  type DescribeCertificateRequest,
} from "./models/describe-certificate-request.js";
export {
  describeCertificateResponseSchema,
  type DescribeCertificateResponse,
} from "./models/describe-certificate-response.js";
export { distinguishedNameSchema, type DistinguishedName } from "./models/distinguished-name.js";
export { dnsNameFilterSchema, type DnsNameFilter } from "./models/dns-name-filter.js";
export {
  dnsPrevalidationDetailsSchema,
  type DnsPrevalidationDetails,
} from "./models/dns-prevalidation-details.js";
export {
  dnsPrevalidationOptionsSchema,
  type DnsPrevalidationOptions,
} from "./models/dns-prevalidation-options.js";
export {
  dnsValidationChallengeSchema,
  type DnsValidationChallenge,
} from "./models/dns-validation-challenge.js";
export { domainScopeSchema, type DomainScope } from "./models/domain-scope.js";
export { domainValidationSchema, type DomainValidation } from "./models/domain-validation.js";
export {
  domainValidationMethodUpdateSummarySchema,
  type DomainValidationMethodUpdateSummary,
} from "./models/domain-validation-method-update-summary.js";
export {
  domainValidationOptionSchema,
  type DomainValidationOption,
} from "./models/domain-validation-option.js";
export {
  domainValidationSummarySchema,
  type DomainValidationSummary,
} from "./models/domain-validation-summary.js";
export {
  emailValidationChallengeSchema,
  type EmailValidationChallenge,
} from "./models/email-validation-challenge.js";
export { ExactDomain, exactDomainSchema } from "./models/exact-domain.js";
export { expirationSchema, type Expiration } from "./models/expiration.js";
export {
  expiryEventsConfigurationSchema,
  type ExpiryEventsConfiguration,
} from "./models/expiry-events-configuration.js";
export { Export, exportSchema } from "./models/export.js";
export {
  exportCertificateRequestSchema,
  type ExportCertificateRequest,
} from "./models/export-certificate-request.js";
export {
  exportCertificateResponseSchema,
  type ExportCertificateResponse,
} from "./models/export-certificate-response.js";
export { ExportOption, exportOptionSchema } from "./models/export-option.js";
export { ExportOption1, exportOption1Schema } from "./models/export-option1.js";
export { ExportOption2, exportOption2Schema } from "./models/export-option2.js";
export { ExportOption3, exportOption3Schema } from "./models/export-option3.js";
export { extendedKeyUsageSchema, type ExtendedKeyUsage } from "./models/extended-key-usage.js";
export { ExtendedKeyUsage1, extendedKeyUsage1Schema } from "./models/extended-key-usage1.js";
export { ExtendedKeyUsage2, extendedKeyUsage2Schema } from "./models/extended-key-usage2.js";
export { failureDetailsSchema, type FailureDetails } from "./models/failure-details.js";
export { FailureReason, failureReasonSchema } from "./models/failure-reason.js";
export { filtersSchema, type Filters } from "./models/filters.js";
export { From, fromSchema } from "./models/from.js";
export { generalNameSchema, type GeneralName } from "./models/general-name.js";
export {
  getAccountConfigurationResponseSchema,
  type GetAccountConfigurationResponse,
} from "./models/get-account-configuration-response.js";
export {
  getAcmeExternalAccountBindingCredentialsRequestSchema,
  type GetAcmeExternalAccountBindingCredentialsRequest,
} from "./models/get-acme-external-account-binding-credentials-request.js";
export {
  getAcmeExternalAccountBindingCredentialsResponseSchema,
  type GetAcmeExternalAccountBindingCredentialsResponse,
} from "./models/get-acme-external-account-binding-credentials-response.js";
export { getCertificateRequestSchema, type GetCertificateRequest } from "./models/get-certificate-request.js";
export {
  getCertificateResponseSchema,
  type GetCertificateResponse,
} from "./models/get-certificate-response.js";
export { httpRedirectSchema, type HttpRedirect } from "./models/http-redirect.js";
export {
  importCertificateRequestSchema,
  type ImportCertificateRequest,
} from "./models/import-certificate-request.js";
export {
  importCertificateResponseSchema,
  type ImportCertificateResponse,
} from "./models/import-certificate-response.js";
export {
  internalServerExceptionSchema,
  type InternalServerException,
} from "./models/internal-server-exception.js";
export {
  internalServerExceptionErrorSchema,
  type InternalServerExceptionError,
} from "./models/internal-server-exception-error.js";
export { invalidArgsExceptionSchema, type InvalidArgsException } from "./models/invalid-args-exception.js";
export {
  invalidArgsExceptionErrorSchema,
  type InvalidArgsExceptionError,
} from "./models/invalid-args-exception-error.js";
export { invalidArnExceptionSchema, type InvalidArnException } from "./models/invalid-arn-exception.js";
export {
  invalidArnExceptionErrorSchema,
  type InvalidArnExceptionError,
} from "./models/invalid-arn-exception-error.js";
export { KeyAlgorithm, keyAlgorithmSchema } from "./models/key-algorithm.js";
export { KeyAlgorithm1, keyAlgorithm1Schema } from "./models/key-algorithm1.js";
export { KeyAlgorithm4, keyAlgorithm4Schema } from "./models/key-algorithm4.js";
export {
  KeyAlgorithmAwsCertificateManagerOperationsApi,
  keyAlgorithmAwsCertificateManagerOperationsApiSchema,
} from "./models/key-algorithm-aws-certificate-manager-operations-api.js";
export { KeyType, keyTypeSchema } from "./models/key-type.js";
export { keyUsageSchema, type KeyUsage } from "./models/key-usage.js";
export { KeyUsage1, keyUsage1Schema } from "./models/key-usage1.js";
export { KeyUsage2, keyUsage2Schema } from "./models/key-usage2.js";
export {
  listAcmeAccountsRequestSchema,
  type ListAcmeAccountsRequest,
} from "./models/list-acme-accounts-request.js";
export {
  listAcmeAccountsResponseSchema,
  type ListAcmeAccountsResponse,
} from "./models/list-acme-accounts-response.js";
export {
  listAcmeDomainValidationsRequestSchema,
  type ListAcmeDomainValidationsRequest,
} from "./models/list-acme-domain-validations-request.js";
export {
  listAcmeDomainValidationsResponseSchema,
  type ListAcmeDomainValidationsResponse,
} from "./models/list-acme-domain-validations-response.js";
export {
  listAcmeEndpointsRequestSchema,
  type ListAcmeEndpointsRequest,
} from "./models/list-acme-endpoints-request.js";
export {
  listAcmeEndpointsResponseSchema,
  type ListAcmeEndpointsResponse,
} from "./models/list-acme-endpoints-response.js";
export {
  listAcmeExternalAccountBindingsRequestSchema,
  type ListAcmeExternalAccountBindingsRequest,
} from "./models/list-acme-external-account-bindings-request.js";
export {
  listAcmeExternalAccountBindingsResponseSchema,
  type ListAcmeExternalAccountBindingsResponse,
} from "./models/list-acme-external-account-bindings-response.js";
export {
  listCertificateDomainValidationsRequestSchema,
  type ListCertificateDomainValidationsRequest,
} from "./models/list-certificate-domain-validations-request.js";
export {
  listCertificateDomainValidationsResponseSchema,
  type ListCertificateDomainValidationsResponse,
} from "./models/list-certificate-domain-validations-response.js";
export {
  listCertificatesRequestSchema,
  type ListCertificatesRequest,
} from "./models/list-certificates-request.js";
export {
  listCertificatesResponseSchema,
  type ListCertificatesResponse,
} from "./models/list-certificates-response.js";
export {
  listTagsForCertificateRequestSchema,
  type ListTagsForCertificateRequest,
} from "./models/list-tags-for-certificate-request.js";
export {
  listTagsForCertificateResponseSchema,
  type ListTagsForCertificateResponse,
} from "./models/list-tags-for-certificate-response.js";
export {
  listTagsForResourceRequestSchema,
  type ListTagsForResourceRequest,
} from "./models/list-tags-for-resource-request.js";
export {
  listTagsForResourceResponseSchema,
  type ListTagsForResourceResponse,
} from "./models/list-tags-for-resource-response.js";
export { ManagedBy, managedBySchema } from "./models/managed-by.js";
export { ManagedBy1, managedBy1Schema } from "./models/managed-by1.js";
export { Name, nameSchema } from "./models/name.js";
export { Name1, name1Schema } from "./models/name1.js";
export { otherNameSchema, type OtherName } from "./models/other-name.js";
export { prevalidationDetailsSchema, type PrevalidationDetails } from "./models/prevalidation-details.js";
export { prevalidationOptionsSchema, type PrevalidationOptions } from "./models/prevalidation-options.js";
export { PrevalidationType, prevalidationTypeSchema } from "./models/prevalidation-type.js";
export {
  publicCertificateAuthoritySchema,
  type PublicCertificateAuthority,
} from "./models/public-certificate-authority.js";
export {
  putAccountConfigurationRequestSchema,
  type PutAccountConfigurationRequest,
} from "./models/put-account-configuration-request.js";
export { Reason, reasonSchema } from "./models/reason.js";
export {
  removeTagsFromCertificateRequestSchema,
  type RemoveTagsFromCertificateRequest,
} from "./models/remove-tags-from-certificate-request.js";
export {
  renewCertificateRequestSchema,
  type RenewCertificateRequest,
} from "./models/renew-certificate-request.js";
export { RenewalEligibility, renewalEligibilitySchema } from "./models/renewal-eligibility.js";
export { RenewalStatus, renewalStatusSchema } from "./models/renewal-status.js";
export { RenewalStatus1, renewalStatus1Schema } from "./models/renewal-status1.js";
export { RenewalStatus2, renewalStatus2Schema } from "./models/renewal-status2.js";
export { RenewalStatusReason, renewalStatusReasonSchema } from "./models/renewal-status-reason.js";
export { renewalSummarySchema, type RenewalSummary } from "./models/renewal-summary.js";
export {
  requestCertificateRequestSchema,
  type RequestCertificateRequest,
} from "./models/request-certificate-request.js";
export {
  requestCertificateRequestAwsCertificateManagerOperationsApiSchema,
  type RequestCertificateRequestAwsCertificateManagerOperationsApi,
} from "./models/request-certificate-request-aws-certificate-manager-operations-api.js";
export {
  requestCertificateResponseSchema,
  type RequestCertificateResponse,
} from "./models/request-certificate-response.js";
export {
  resendValidationEmailRequestSchema,
  type ResendValidationEmailRequest,
} from "./models/resend-validation-email-request.js";
export {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "./models/resource-not-found-exception.js";
export {
  resourceNotFoundExceptionErrorSchema,
  type ResourceNotFoundExceptionError,
} from "./models/resource-not-found-exception-error.js";
export { resourceRecordSchema, type ResourceRecord } from "./models/resource-record.js";
export { RevocationReason, revocationReasonSchema } from "./models/revocation-reason.js";
export { RevocationReason1, revocationReason1Schema } from "./models/revocation-reason1.js";
export {
  revokeAcmeAccountRequestSchema,
  type RevokeAcmeAccountRequest,
} from "./models/revoke-acme-account-request.js";
export {
  revokeAcmeExternalAccountBindingRequestSchema,
  type RevokeAcmeExternalAccountBindingRequest,
} from "./models/revoke-acme-external-account-binding-request.js";
export {
  revokeCertificateRequestSchema,
  type RevokeCertificateRequest,
} from "./models/revoke-certificate-request.js";
export {
  revokeCertificateResponseSchema,
  type RevokeCertificateResponse,
} from "./models/revoke-certificate-response.js";
export {
  searchCertificatesRequestSchema,
  type SearchCertificatesRequest,
} from "./models/search-certificates-request.js";
export {
  searchCertificatesResponseSchema,
  type SearchCertificatesResponse,
} from "./models/search-certificates-response.js";
export { SortBy, sortBySchema } from "./models/sort-by.js";
export { SortBy1, sortBy1Schema } from "./models/sort-by1.js";
export { SortOrder, sortOrderSchema } from "./models/sort-order.js";
export { SortOrder1, sortOrder1Schema } from "./models/sort-order1.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { Status3, status3Schema } from "./models/status3.js";
export {
  StatusAwsCertificateManagerAcmeDomainValidationApi,
  statusAwsCertificateManagerAcmeDomainValidationApiSchema,
} from "./models/status-aws-certificate-manager-acme-domain-validation-api.js";
export {
  StatusAwsCertificateManagerAcmeEndpointApi,
  statusAwsCertificateManagerAcmeEndpointApiSchema,
} from "./models/status-aws-certificate-manager-acme-endpoint-api.js";
export {
  StatusAwsCertificateManagerCertificatesApi,
  statusAwsCertificateManagerCertificatesApiSchema,
} from "./models/status-aws-certificate-manager-certificates-api.js";
export { Subdomains, subdomainsSchema } from "./models/subdomains.js";
export {
  subjectAlternativeNameFilterSchema,
  type SubjectAlternativeNameFilter,
} from "./models/subject-alternative-name-filter.js";
export { subjectFilterSchema, type SubjectFilter } from "./models/subject-filter.js";
export { tagSchema, type Tag } from "./models/tag.js";
export { tagResourceRequestSchema, type TagResourceRequest } from "./models/tag-resource-request.js";
export { throttlingExceptionSchema, type ThrottlingException } from "./models/throttling-exception.js";
export {
  throttlingExceptionErrorSchema,
  type ThrottlingExceptionError,
} from "./models/throttling-exception-error.js";
export { throttlingReasonSchema, type ThrottlingReason } from "./models/throttling-reason.js";
export { timestampRangeSchema, type TimestampRange } from "./models/timestamp-range.js";
export { To, toSchema } from "./models/to.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { Type3, type3Schema } from "./models/type3.js";
export {
  TypeAwsCertificateManagerCertificatesApi,
  typeAwsCertificateManagerCertificatesApiSchema,
} from "./models/type-aws-certificate-manager-certificates-api.js";
export { untagResourceRequestSchema, type UntagResourceRequest } from "./models/untag-resource-request.js";
export {
  updateAcmeDomainValidationRequestSchema,
  type UpdateAcmeDomainValidationRequest,
} from "./models/update-acme-domain-validation-request.js";
export {
  updateAcmeEndpointRequestSchema,
  type UpdateAcmeEndpointRequest,
} from "./models/update-acme-endpoint-request.js";
export {
  updateCertificateOptionsRequestSchema,
  type UpdateCertificateOptionsRequest,
} from "./models/update-certificate-options-request.js";
export { updateSummarySchema, type UpdateSummary } from "./models/update-summary.js";
export { validationChallengeSchema, type ValidationChallenge } from "./models/validation-challenge.js";
export {
  validationConfigurationSchema,
  type ValidationConfiguration,
} from "./models/validation-configuration.js";
export { ValidationMethod, validationMethodSchema } from "./models/validation-method.js";
export { ValidationMethod1, validationMethod1Schema } from "./models/validation-method1.js";
export {
  ValidationMethod1AwsCertificateManagerOperationsApi,
  validationMethod1AwsCertificateManagerOperationsApiSchema,
} from "./models/validation-method1-aws-certificate-manager-operations-api.js";
export { ValidationMethod3, validationMethod3Schema } from "./models/validation-method3.js";
export { ValidationMethod4, validationMethod4Schema } from "./models/validation-method4.js";
export {
  ValidationMethodAwsCertificateManagerOperationsApi,
  validationMethodAwsCertificateManagerOperationsApiSchema,
} from "./models/validation-method-aws-certificate-manager-operations-api.js";
export { ValidationStatus, validationStatusSchema } from "./models/validation-status.js";
export {
  ValidationStatusAwsCertificateManagerOperationsApi,
  validationStatusAwsCertificateManagerOperationsApiSchema,
} from "./models/validation-status-aws-certificate-manager-operations-api.js";
export { Wildcards, wildcardsSchema } from "./models/wildcards.js";
export { XAmzTarget, xAmzTargetSchema } from "./models/xamz-target.js";
export { XAmzTarget1, xAmzTarget1Schema } from "./models/xamz-target1.js";
export {
  XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi,
  xAmzTarget1AwsCertificateManagerAcmeDomainValidationApiSchema,
} from "./models/xamz-target1-aws-certificate-manager-acme-domain-validation-api.js";
export {
  XAmzTarget1AwsCertificateManagerAcmeEndpointApi,
  xAmzTarget1AwsCertificateManagerAcmeEndpointApiSchema,
} from "./models/xamz-target1-aws-certificate-manager-acme-endpoint-api.js";
export {
  XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi,
  xAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
} from "./models/xamz-target1-aws-certificate-manager-acme-external-account-binding-api.js";
export {
  XAmzTarget1AwsCertificateManagerCertificatesApi,
  xAmzTarget1AwsCertificateManagerCertificatesApiSchema,
} from "./models/xamz-target1-aws-certificate-manager-certificates-api.js";
export {
  XAmzTarget1AwsCertificateManagerOperationsApi,
  xAmzTarget1AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target1-aws-certificate-manager-operations-api.js";
export {
  XAmzTarget1AwsCertificateManagerTagApi,
  xAmzTarget1AwsCertificateManagerTagApiSchema,
} from "./models/xamz-target1-aws-certificate-manager-tag-api.js";
export { XAmzTarget2, xAmzTarget2Schema } from "./models/xamz-target2.js";
export {
  XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi,
  xAmzTarget2AwsCertificateManagerAcmeDomainValidationApiSchema,
} from "./models/xamz-target2-aws-certificate-manager-acme-domain-validation-api.js";
export {
  XAmzTarget2AwsCertificateManagerAcmeEndpointApi,
  xAmzTarget2AwsCertificateManagerAcmeEndpointApiSchema,
} from "./models/xamz-target2-aws-certificate-manager-acme-endpoint-api.js";
export {
  XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi,
  xAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
} from "./models/xamz-target2-aws-certificate-manager-acme-external-account-binding-api.js";
export {
  XAmzTarget2AwsCertificateManagerCertificatesApi,
  xAmzTarget2AwsCertificateManagerCertificatesApiSchema,
} from "./models/xamz-target2-aws-certificate-manager-certificates-api.js";
export {
  XAmzTarget2AwsCertificateManagerOperationsApi,
  xAmzTarget2AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target2-aws-certificate-manager-operations-api.js";
export {
  XAmzTarget2AwsCertificateManagerTagApi,
  xAmzTarget2AwsCertificateManagerTagApiSchema,
} from "./models/xamz-target2-aws-certificate-manager-tag-api.js";
export { XAmzTarget3, xAmzTarget3Schema } from "./models/xamz-target3.js";
export {
  XAmzTarget3AwsCertificateManagerAcmeEndpointApi,
  xAmzTarget3AwsCertificateManagerAcmeEndpointApiSchema,
} from "./models/xamz-target3-aws-certificate-manager-acme-endpoint-api.js";
export {
  XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi,
  xAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
} from "./models/xamz-target3-aws-certificate-manager-acme-external-account-binding-api.js";
export {
  XAmzTarget3AwsCertificateManagerCertificatesApi,
  xAmzTarget3AwsCertificateManagerCertificatesApiSchema,
} from "./models/xamz-target3-aws-certificate-manager-certificates-api.js";
export {
  XAmzTarget3AwsCertificateManagerOperationsApi,
  xAmzTarget3AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target3-aws-certificate-manager-operations-api.js";
export {
  XAmzTarget3AwsCertificateManagerTagApi,
  xAmzTarget3AwsCertificateManagerTagApiSchema,
} from "./models/xamz-target3-aws-certificate-manager-tag-api.js";
export { XAmzTarget4, xAmzTarget4Schema } from "./models/xamz-target4.js";
export {
  XAmzTarget4AwsCertificateManagerAcmeEndpointApi,
  xAmzTarget4AwsCertificateManagerAcmeEndpointApiSchema,
} from "./models/xamz-target4-aws-certificate-manager-acme-endpoint-api.js";
export {
  XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi,
  xAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
} from "./models/xamz-target4-aws-certificate-manager-acme-external-account-binding-api.js";
export {
  XAmzTarget4AwsCertificateManagerCertificatesApi,
  xAmzTarget4AwsCertificateManagerCertificatesApiSchema,
} from "./models/xamz-target4-aws-certificate-manager-certificates-api.js";
export {
  XAmzTarget4AwsCertificateManagerOperationsApi,
  xAmzTarget4AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target4-aws-certificate-manager-operations-api.js";
export { XAmzTarget5, xAmzTarget5Schema } from "./models/xamz-target5.js";
export {
  XAmzTarget5AwsCertificateManagerOperationsApi,
  xAmzTarget5AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target5-aws-certificate-manager-operations-api.js";
export { XAmzTarget6, xAmzTarget6Schema } from "./models/xamz-target6.js";
export {
  XAmzTarget6AwsCertificateManagerOperationsApi,
  xAmzTarget6AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target6-aws-certificate-manager-operations-api.js";
export { XAmzTarget7, xAmzTarget7Schema } from "./models/xamz-target7.js";
export {
  XAmzTarget7AwsCertificateManagerOperationsApi,
  xAmzTarget7AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target7-aws-certificate-manager-operations-api.js";
export { XAmzTarget8, xAmzTarget8Schema } from "./models/xamz-target8.js";
export {
  XAmzTarget8AwsCertificateManagerOperationsApi,
  xAmzTarget8AwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target8-aws-certificate-manager-operations-api.js";
export { XAmzTarget9, xAmzTarget9Schema } from "./models/xamz-target9.js";
export {
  XAmzTargetAwsCertificateManagerAcmeDomainValidationApi,
  xAmzTargetAwsCertificateManagerAcmeDomainValidationApiSchema,
} from "./models/xamz-target-aws-certificate-manager-acme-domain-validation-api.js";
export {
  XAmzTargetAwsCertificateManagerAcmeEndpointApi,
  xAmzTargetAwsCertificateManagerAcmeEndpointApiSchema,
} from "./models/xamz-target-aws-certificate-manager-acme-endpoint-api.js";
export {
  XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi,
  xAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiSchema,
} from "./models/xamz-target-aws-certificate-manager-acme-external-account-binding-api.js";
export {
  XAmzTargetAwsCertificateManagerCertificatesApi,
  xAmzTargetAwsCertificateManagerCertificatesApiSchema,
} from "./models/xamz-target-aws-certificate-manager-certificates-api.js";
export {
  XAmzTargetAwsCertificateManagerOperationsApi,
  xAmzTargetAwsCertificateManagerOperationsApiSchema,
} from "./models/xamz-target-aws-certificate-manager-operations-api.js";
export {
  XAmzTargetAwsCertificateManagerTagApi,
  xAmzTargetAwsCertificateManagerTagApiSchema,
} from "./models/xamz-target-aws-certificate-manager-tag-api.js";
export { x509AttributeFilterSchema, type X509AttributeFilter } from "./models/x509-attribute-filter.js";
export { x509AttributesSchema, type X509Attributes } from "./models/x509-attributes.js";

export {
  CoreError as AwsCertificateManagerError,
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
