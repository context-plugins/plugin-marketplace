export { SkribbleClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ServerEnvironment } from "./servers.js";

export { Access } from "./resources/access.js";
export { AdditionalInformation } from "./resources/additional-information.js";
export { BillingAndCredits } from "./resources/billing-and-credits.js";
export { DocumentApi } from "./resources/document-api.js";
export { Identification } from "./resources/identification.js";
export { Monitoring } from "./resources/monitoring.js";
export { Report } from "./resources/report.js";
export { Reports } from "./resources/reports.js";
export { Seal } from "./resources/seal.js";
export { SendTo } from "./resources/send-to.js";
export { Signature } from "./resources/signature.js";
export { SignatureAttachmentApi } from "./resources/signature-attachment-api.js";
export { SignatureHandling } from "./resources/signature-handling.js";
export { SignatureObserverApi } from "./resources/signature-observer-api.js";
export { SignatureSigner } from "./resources/signature-signer.js";
export { User } from "./resources/user.js";
export { Validation } from "./resources/validation.js";

export {
  activitiesSignaturesUserSchema,
  type ActivitiesSignaturesUser,
} from "./models/activities-signatures-user.js";
export {
  activitiesSignaturesByBusinessEntrySchema,
  type ActivitiesSignaturesByBusinessEntry,
} from "./models/activities-signatures-by-business-entry.js";
export {
  activitiesSignaturesByBusinessResponseSchema,
  type ActivitiesSignaturesByBusinessResponse,
} from "./models/activities-signatures-by-business-response.js";
export { aesSchema, type Aes } from "./models/aes.js";
export { aesMinimalSchema, type AesMinimal } from "./models/aes-minimal.js";
export { AttachmentWhenSigned, attachmentWhenSignedSchema } from "./models/attachment-when-signed.js";
export { base64ContentSchema, type Base64Content } from "./models/base64-content.js";
export { billingCreditInfosSchema, type BillingCreditInfos } from "./models/billing-credit-infos.js";
export { billingCreditUsageSchema, type BillingCreditUsage } from "./models/billing-credit-usage.js";
export { CallbackState, callbackStateSchema } from "./models/callback-state.js";
export { CallbackType, callbackTypeSchema } from "./models/callback-type.js";
export { CallbackType1, callbackType1Schema } from "./models/callback-type1.js";
export { createSealRequestSchema, type CreateSealRequest } from "./models/create-seal-request.js";
export { createSealResponseSchema, type CreateSealResponse } from "./models/create-seal-response.js";
export { createSendToRequestSchema, type CreateSendToRequest } from "./models/create-send-to-request.js";
export { createSendToResponseSchema, type CreateSendToResponse } from "./models/create-send-to-response.js";
export {
  createSignatureAttachmentRequestSchema,
  type CreateSignatureAttachmentRequest,
} from "./models/create-signature-attachment-request.js";
export {
  createSignatureRequestSchema,
  type CreateSignatureRequest,
} from "./models/create-signature-request.js";
export {
  createSignatureRequest1Schema,
  type CreateSignatureRequest1,
} from "./models/unions/create-signature-request1.js";
export { creditInfoSchema, type CreditInfo } from "./models/credit-info.js";
export { creditUsageSchema, type CreditUsage } from "./models/credit-usage.js";
export { documentSchema, type Document } from "./models/document.js";
export {
  documentContentResponseSchema,
  type DocumentContentResponse,
} from "./models/document-content-response.js";
export { documentIdSchema, type DocumentId } from "./models/document-id.js";
export { documentResponseSchema, type DocumentResponse } from "./models/document-response.js";
export {
  documentValidationResponseSchema,
  type DocumentValidationResponse,
} from "./models/document-validation-response.js";
export { fileUrlSchema, type FileUrl } from "./models/file-url.js";
export { formFieldSchema, type FormField } from "./models/form-field.js";
export {
  formFieldSkribbleSignatureApiSchema,
  type FormFieldSkribbleSignatureApi,
} from "./models/form-field-skribble-signature-api.js";
export { formatInfosResponseSchema, type FormatInfosResponse } from "./models/format-infos-response.js";
export { formfieldPositionSchema, type FormfieldPosition } from "./models/formfield-position.js";
export { groupObserverSchema, type GroupObserver } from "./models/group-observer.js";
export { groupObserverResponseSchema, type GroupObserverResponse } from "./models/group-observer-response.js";
export { groupSignerSchema, type GroupSigner } from "./models/group-signer.js";
export { groupInfoSchema, type GroupInfo } from "./models/group-info.js";
export { headerSchema, type Header } from "./models/header.js";
export {
  identificationEvidenceStatusResponseSchema,
  type IdentificationEvidenceStatusResponse,
} from "./models/identification-evidence-status-response.js";
export { loginRequestSchema, type LoginRequest } from "./models/login-request.js";
export { loginRequest2Schema, type LoginRequest2 } from "./models/login-request2.js";
export { multiplePositionsSchema, type MultiplePositions } from "./models/multiple-positions.js";
export { optionalSignerInfosSchema, type OptionalSignerInfos } from "./models/optional-signer-infos.js";
export {
  optionalValidationInfosSchema,
  type OptionalValidationInfos,
} from "./models/optional-validation-infos.js";
export {
  optionalValidationInfos1Schema,
  type OptionalValidationInfos1,
} from "./models/optional-validation-infos1.js";
export { problemSchema, type Problem } from "./models/problem.js";
export { problem1Schema, type Problem1 } from "./models/problem1.js";
export { problemErrorSchema, type ProblemError } from "./models/problem-error.js";
export {
  problemErrorSkribbleAdditionalInformationApiSchema,
  type ProblemErrorSkribbleAdditionalInformationApi,
} from "./models/problem-error-skribble-additional-information-api.js";
export {
  problemSkribbleAdditionalInformationApiSchema,
  type ProblemSkribbleAdditionalInformationApi,
} from "./models/problem-skribble-additional-information-api.js";
export { qesSchema, type Qes } from "./models/qes.js";
export {
  sendtoDownloadResponseSchema,
  type SendtoDownloadResponse,
} from "./models/sendto-download-response.js";
export { sesSchema, type Ses } from "./models/ses.js";
export { signatureAttachmentSchema, type SignatureAttachment } from "./models/signature-attachment.js";
export {
  signatureCallbacksResponseSchema,
  type SignatureCallbacksResponse,
} from "./models/signature-callbacks-response.js";
export {
  signatureCallbacksResponse1Schema,
  type SignatureCallbacksResponse1,
} from "./models/signature-callbacks-response1.js";
export {
  signatureCallbacksResponseSkribbleSignatureAttachmentApiSchema,
  type SignatureCallbacksResponseSkribbleSignatureAttachmentApi,
} from "./models/signature-callbacks-response-skribble-signature-attachment-api.js";
export {
  signatureCallbacksInResponseSchema,
  type SignatureCallbacksInResponse,
} from "./models/signature-callbacks-in-response.js";
export {
  signatureCallbacksInResponse1Schema,
  type SignatureCallbacksInResponse1,
} from "./models/signature-callbacks-in-response1.js";
export { signatureDocumentSchema, type SignatureDocument } from "./models/signature-document.js";
export {
  signatureDocumentResponseSchema,
  type SignatureDocumentResponse,
} from "./models/signature-document-response.js";
export {
  signatureDocumentUploadSchema,
  type SignatureDocumentUpload,
} from "./models/signature-document-upload.js";
export { signatureFormfieldSchema, type SignatureFormfield } from "./models/signature-formfield.js";
export { SignatureLanguage, signatureLanguageSchema } from "./models/signature-language.js";
export { SignatureLegislation, signatureLegislationSchema } from "./models/signature-legislation.js";
export { SignatureLegislation2, signatureLegislation2Schema } from "./models/signature-legislation2.js";
export { signatureObserverSchema, type SignatureObserver } from "./models/unions/signature-observer.js";
export { SignatureQuality, signatureQualitySchema } from "./models/signature-quality.js";
export { SignatureQuality2, signatureQuality2Schema } from "./models/signature-quality2.js";
export { signatureRecipientSchema, type SignatureRecipient } from "./models/signature-recipient.js";
export { signatureReportSchema, type SignatureReport } from "./models/signature-report.js";
export {
  signatureRequestPropertiesSchema,
  type SignatureRequestProperties,
} from "./models/signature-request-properties.js";
export { SignatureStatusCode, signatureStatusCodeSchema } from "./models/signature-status-code.js";
export { SignatureStatusCode1, signatureStatusCode1Schema } from "./models/signature-status-code1.js";
export {
  SignatureStatusCodeSkribbleSignatureAttachmentApi,
  signatureStatusCodeSkribbleSignatureAttachmentApiSchema,
} from "./models/signature-status-code-skribble-signature-attachment-api.js";
export { SignatureStatusOverall, signatureStatusOverallSchema } from "./models/signature-status-overall.js";
export {
  SignatureStatusOverall1,
  signatureStatusOverall1Schema,
} from "./models/signature-status-overall1.js";
export {
  SignatureStatusOverallSkribbleSignatureAttachmentApi,
  signatureStatusOverallSkribbleSignatureAttachmentApiSchema,
} from "./models/signature-status-overall-skribble-signature-attachment-api.js";
export {
  signatureObserverResponseSchema,
  type SignatureObserverResponse,
} from "./models/unions/signature-observer-response.js";
export {
  signatureRecipientModelSchema,
  type SignatureRecipientModel,
} from "./models/unions/signature-recipient-model.js";
export { signatureResponseSchema, type SignatureResponse } from "./models/signature-response.js";
export {
  signatureResponseSkribbleSignatureAttachmentApiSchema,
  type SignatureResponseSkribbleSignatureAttachmentApi,
} from "./models/signature-response-skribble-signature-attachment-api.js";
export { signatureResponseV3Schema, type SignatureResponseV3 } from "./models/signature-response-v3.js";
export {
  signatureValidationResponseSchema,
  type SignatureValidationResponse,
} from "./models/signature-validation-response.js";
export { signerSchema, type Signer } from "./models/signer.js";
export { signerDocumentToSignSchema, type SignerDocumentToSign } from "./models/signer-document-to-sign.js";
export { signerIdentityDataSchema, type SignerIdentityData } from "./models/signer-identity-data.js";
export {
  signerIdentityDataInResponseSchema,
  type SignerIdentityDataInResponse,
} from "./models/signer-identity-data-in-response.js";
export { signerCertificateSchema, type SignerCertificate } from "./models/signer-certificate.js";
export { singlePositionSchema, type SinglePosition } from "./models/single-position.js";
export { Status, statusSchema } from "./models/status.js";
export {
  StatusSkribbleSendToApi,
  statusSkribbleSendToApiSchema,
} from "./models/status-skribble-send-to-api.js";
export { systemHealthResponseSchema, type SystemHealthResponse } from "./models/system-health-response.js";
export { textSchema, type Text } from "./models/text.js";
export {
  textSkribbleSignatureApiSchema,
  type TextSkribbleSignatureApi,
} from "./models/text-skribble-signature-api.js";
export { trackSendToResponseSchema, type TrackSendToResponse } from "./models/track-send-to-response.js";
export { Type, typeSchema } from "./models/type.js";
export {
  updateSignatureRequestSchema,
  type UpdateSignatureRequest,
} from "./models/update-signature-request.js";
export {
  updateSignatureRequest1Schema,
  type UpdateSignatureRequest1,
} from "./models/update-signature-request1.js";
export { uploadDocumentRequestSchema, type UploadDocumentRequest } from "./models/upload-document-request.js";
export { userObserverSchema, type UserObserver } from "./models/unions/user-observer.js";
export { userObserverResponseSchema, type UserObserverResponse } from "./models/user-observer-response.js";
export {
  userSignatureQualitiesResponseSchema,
  type UserSignatureQualitiesResponse,
} from "./models/user-signature-qualities-response.js";
export { userSignerSchema, type UserSigner } from "./models/user-signer.js";
export { userByEmailSchema, type UserByEmail } from "./models/user-by-email.js";
export { userByIdSchema, type UserById } from "./models/user-by-id.js";
export { userActionSchema, type UserAction } from "./models/user-action.js";
export { userInfoSchema, type UserInfo } from "./models/user-info.js";
export { userListSchema, type UserList } from "./models/user-list.js";
export {
  validationInfosResponseSchema,
  type ValidationInfosResponse,
} from "./models/validation-infos-response.js";
export { visualSignatureImageSchema, type VisualSignatureImage } from "./models/visual-signature-image.js";
export {
  visualSignaturePositionSchema,
  type VisualSignaturePosition,
} from "./models/visual-signature-position.js";
export {
  visualSignaturePosition1Schema,
  type VisualSignaturePosition1,
} from "./models/visual-signature-position1.js";
export {
  visualSignatureResponseSchema,
  type VisualSignatureResponse,
} from "./models/visual-signature-response.js";
export { visualSignatureSchema, type VisualSignature } from "./models/unions/visual-signature.js";
export { visualSignatureV3Schema, type VisualSignatureV3 } from "./models/unions/visual-signature-v3.js";
export {
  withdrawSignatureRequestSchema,
  type WithdrawSignatureRequest,
} from "./models/withdraw-signature-request.js";
export { Info, infoSchema } from "./models/info.js";
export { Lang, langSchema } from "./models/lang.js";
export { Legislation, legislationSchema } from "./models/legislation.js";
export { Quality, qualitySchema } from "./models/quality.js";
export { Sort, sortSchema } from "./models/sort.js";
export {
  TypeSkribbleSignatureHandlingApi,
  typeSkribbleSignatureHandlingApiSchema,
} from "./models/type-skribble-signature-handling-api.js";

export {
  CoreError as SkribbleError,
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
