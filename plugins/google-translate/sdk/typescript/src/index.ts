export { GoogleTranslateClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type SecretProvider,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { adaptiveMtDatasetSchema, type AdaptiveMtDataset } from "./models/adaptive-mt-dataset.js";
export { adaptiveMtFileSchema, type AdaptiveMtFile } from "./models/adaptive-mt-file.js";
export { adaptiveMtFile2Schema, type AdaptiveMtFile2 } from "./models/adaptive-mt-file2.js";
export { adaptiveMtSentenceSchema, type AdaptiveMtSentence } from "./models/adaptive-mt-sentence.js";
export {
  adaptiveMtTranslateRequestSchema,
  type AdaptiveMtTranslateRequest,
} from "./models/adaptive-mt-translate-request.js";
export {
  adaptiveMtTranslateResponseSchema,
  type AdaptiveMtTranslateResponse,
} from "./models/adaptive-mt-translate-response.js";
export { adaptiveMtTranslationSchema, type AdaptiveMtTranslation } from "./models/adaptive-mt-translation.js";
export {
  batchDocumentInputConfigSchema,
  type BatchDocumentInputConfig,
} from "./models/batch-document-input-config.js";
export {
  batchDocumentOutputConfigSchema,
  type BatchDocumentOutputConfig,
} from "./models/batch-document-output-config.js";
export {
  batchDocumentOutputConfig1Schema,
  type BatchDocumentOutputConfig1,
} from "./models/batch-document-output-config1.js";
export {
  batchTranslateDocumentRequestSchema,
  type BatchTranslateDocumentRequest,
} from "./models/batch-translate-document-request.js";
export {
  batchTranslateTextRequestSchema,
  type BatchTranslateTextRequest,
} from "./models/batch-translate-text-request.js";
export { datasetSchema, type Dataset } from "./models/dataset.js";
export { datasetInputConfigSchema, type DatasetInputConfig } from "./models/dataset-input-config.js";
export { datasetInputConfig2Schema, type DatasetInputConfig2 } from "./models/dataset-input-config2.js";
export { datasetOutputConfigSchema, type DatasetOutputConfig } from "./models/dataset-output-config.js";
export { datasetOutputConfig1Schema, type DatasetOutputConfig1 } from "./models/dataset-output-config1.js";
export { detectLanguageRequestSchema, type DetectLanguageRequest } from "./models/detect-language-request.js";
export {
  detectLanguageResponseSchema,
  type DetectLanguageResponse,
} from "./models/detect-language-response.js";
export { detectedLanguageSchema, type DetectedLanguage } from "./models/detected-language.js";
export { documentInputConfigSchema, type DocumentInputConfig } from "./models/document-input-config.js";
export { documentInputConfig1Schema, type DocumentInputConfig1 } from "./models/document-input-config1.js";
export { documentInputConfig3Schema, type DocumentInputConfig3 } from "./models/document-input-config3.js";
export { documentOutputConfigSchema, type DocumentOutputConfig } from "./models/document-output-config.js";
export { documentOutputConfig1Schema, type DocumentOutputConfig1 } from "./models/document-output-config1.js";
export { documentTranslationSchema, type DocumentTranslation } from "./models/document-translation.js";
export { documentTranslation1Schema, type DocumentTranslation1 } from "./models/document-translation1.js";
export { documentTranslation3Schema, type DocumentTranslation3 } from "./models/document-translation3.js";
export { errorSchema, type Error } from "./models/error.js";
export { exampleSchema, type Example } from "./models/example.js";
export { exportDataRequestSchema, type ExportDataRequest } from "./models/export-data-request.js";
export { fileInputSourceSchema, type FileInputSource } from "./models/file-input-source.js";
export { fileInputSource2Schema, type FileInputSource2 } from "./models/file-input-source2.js";
export { gcsDestinationSchema, type GcsDestination } from "./models/gcs-destination.js";
export { gcsDestination1Schema, type GcsDestination1 } from "./models/gcs-destination1.js";
export { gcsDestination2Schema, type GcsDestination2 } from "./models/gcs-destination2.js";
export { gcsDestination4Schema, type GcsDestination4 } from "./models/gcs-destination4.js";
export { gcsInputSourceSchema, type GcsInputSource } from "./models/gcs-input-source.js";
export { gcsInputSource1Schema, type GcsInputSource1 } from "./models/gcs-input-source1.js";
export { gcsOutputDestinationSchema, type GcsOutputDestination } from "./models/gcs-output-destination.js";
export { gcsOutputDestination2Schema, type GcsOutputDestination2 } from "./models/gcs-output-destination2.js";
export { gcsSourceSchema, type GcsSource } from "./models/gcs-source.js";
export { gcsSource1Schema, type GcsSource1 } from "./models/gcs-source1.js";
export { gcsSource3Schema, type GcsSource3 } from "./models/gcs-source3.js";
export { gcsSource4Schema, type GcsSource4 } from "./models/gcs-source4.js";
export { gcsSource5Schema, type GcsSource5 } from "./models/gcs-source5.js";
export { glossarySchema, type Glossary } from "./models/glossary.js";
export { glossaryConfigSchema, type GlossaryConfig } from "./models/glossary-config.js";
export { glossaryConfig1Schema, type GlossaryConfig1 } from "./models/glossary-config1.js";
export { glossaryEntrySchema, type GlossaryEntry } from "./models/glossary-entry.js";
export { glossaryInputConfigSchema, type GlossaryInputConfig } from "./models/glossary-input-config.js";
export { glossaryInputConfig2Schema, type GlossaryInputConfig2 } from "./models/glossary-input-config2.js";
export { glossaryTermSchema, type GlossaryTerm } from "./models/glossary-term.js";
export { glossaryTerm1Schema, type GlossaryTerm1 } from "./models/glossary-term1.js";
export { glossaryTerm2Schema, type GlossaryTerm2 } from "./models/glossary-term2.js";
export { glossaryTermsPairSchema, type GlossaryTermsPair } from "./models/glossary-terms-pair.js";
export { glossaryTermsPair2Schema, type GlossaryTermsPair2 } from "./models/glossary-terms-pair2.js";
export { glossaryTermsSetSchema, type GlossaryTermsSet } from "./models/glossary-terms-set.js";
export { glossaryTermsSet2Schema, type GlossaryTermsSet2 } from "./models/glossary-terms-set2.js";
export { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
export { googleRpcErrorErrorSchema, type GoogleRpcErrorError } from "./models/google-rpc-error-error.js";
export {
  importAdaptiveMtFileRequestSchema,
  type ImportAdaptiveMtFileRequest,
} from "./models/import-adaptive-mt-file-request.js";
export {
  importAdaptiveMtFileResponseSchema,
  type ImportAdaptiveMtFileResponse,
} from "./models/import-adaptive-mt-file-response.js";
export { importDataRequestSchema, type ImportDataRequest } from "./models/import-data-request.js";
export { inputConfigSchema, type InputConfig } from "./models/input-config.js";
export { inputFileSchema, type InputFile } from "./models/input-file.js";
export { languageCodePairSchema, type LanguageCodePair } from "./models/language-code-pair.js";
export { languageCodesSetSchema, type LanguageCodesSet } from "./models/language-codes-set.js";
export {
  listAdaptiveMtDatasetsResponseSchema,
  type ListAdaptiveMtDatasetsResponse,
} from "./models/list-adaptive-mt-datasets-response.js";
export {
  listAdaptiveMtFilesResponseSchema,
  type ListAdaptiveMtFilesResponse,
} from "./models/list-adaptive-mt-files-response.js";
export {
  listAdaptiveMtSentencesResponseSchema,
  type ListAdaptiveMtSentencesResponse,
} from "./models/list-adaptive-mt-sentences-response.js";
export { listDatasetsResponseSchema, type ListDatasetsResponse } from "./models/list-datasets-response.js";
export { listExamplesResponseSchema, type ListExamplesResponse } from "./models/list-examples-response.js";
export {
  listGlossariesResponseSchema,
  type ListGlossariesResponse,
} from "./models/list-glossaries-response.js";
export {
  listGlossaryEntriesResponseSchema,
  type ListGlossaryEntriesResponse,
} from "./models/list-glossary-entries-response.js";
export { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
export { listModelsResponseSchema, type ListModelsResponse } from "./models/list-models-response.js";
export {
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "./models/list-operations-response.js";
export { locationSchema, type Location } from "./models/location.js";
export { modelSchema, type Model } from "./models/model.js";
export { operationSchema, type Operation } from "./models/operation.js";
export { outputConfigSchema, type OutputConfig } from "./models/output-config.js";
export { outputConfig2Schema, type OutputConfig2 } from "./models/output-config2.js";
export {
  referenceSentenceConfigSchema,
  type ReferenceSentenceConfig,
} from "./models/reference-sentence-config.js";
export {
  referenceSentenceConfig1Schema,
  type ReferenceSentenceConfig1,
} from "./models/reference-sentence-config1.js";
export { referenceSentencePairSchema, type ReferenceSentencePair } from "./models/reference-sentence-pair.js";
export {
  referenceSentencePairListSchema,
  type ReferenceSentencePairList,
} from "./models/reference-sentence-pair-list.js";
export { refineTextRequestSchema, type RefineTextRequest } from "./models/refine-text-request.js";
export { refineTextResponseSchema, type RefineTextResponse } from "./models/refine-text-response.js";
export { refinementEntrySchema, type RefinementEntry } from "./models/refinement-entry.js";
export { romanizationSchema, type Romanization } from "./models/romanization.js";
export { romanizeTextRequestSchema, type RomanizeTextRequest } from "./models/romanize-text-request.js";
export { romanizeTextResponseSchema, type RomanizeTextResponse } from "./models/romanize-text-response.js";
export { statusSchema, type Status } from "./models/status.js";
export { status2Schema, type Status2 } from "./models/status2.js";
export { supportedLanguageSchema, type SupportedLanguage } from "./models/supported-language.js";
export { supportedLanguagesSchema, type SupportedLanguages } from "./models/supported-languages.js";
export {
  translateDocumentRequestSchema,
  type TranslateDocumentRequest,
} from "./models/translate-document-request.js";
export {
  translateDocumentResponseSchema,
  type TranslateDocumentResponse,
} from "./models/translate-document-response.js";
export {
  translateTextGlossaryConfigSchema,
  type TranslateTextGlossaryConfig,
} from "./models/translate-text-glossary-config.js";
export {
  translateTextGlossaryConfig2Schema,
  type TranslateTextGlossaryConfig2,
} from "./models/translate-text-glossary-config2.js";
export {
  translateTextGlossaryConfig3Schema,
  type TranslateTextGlossaryConfig3,
} from "./models/translate-text-glossary-config3.js";
export { translateTextRequestSchema, type TranslateTextRequest } from "./models/translate-text-request.js";
export { translateTextResponseSchema, type TranslateTextResponse } from "./models/translate-text-response.js";
export { translationSchema, type Translation } from "./models/translation.js";
export { transliterationConfigSchema, type TransliterationConfig } from "./models/transliteration-config.js";
export {
  transliterationConfig2Schema,
  type TransliterationConfig2,
} from "./models/transliteration-config2.js";
export { waitOperationRequestSchema, type WaitOperationRequest } from "./models/wait-operation-request.js";

export {
  CoreError as GoogleTranslateError,
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
