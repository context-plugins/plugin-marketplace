import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { anyAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { adaptiveMtDatasetSchema, type AdaptiveMtDataset } from "./models/adaptive-mt-dataset.js";
import { adaptiveMtFileSchema, type AdaptiveMtFile } from "./models/adaptive-mt-file.js";
import {
  adaptiveMtTranslateRequestSchema,
  type AdaptiveMtTranslateRequest,
} from "./models/adaptive-mt-translate-request.js";
import {
  adaptiveMtTranslateResponseSchema,
  type AdaptiveMtTranslateResponse,
} from "./models/adaptive-mt-translate-response.js";
import {
  batchTranslateDocumentRequestSchema,
  type BatchTranslateDocumentRequest,
} from "./models/batch-translate-document-request.js";
import {
  batchTranslateTextRequestSchema,
  type BatchTranslateTextRequest,
} from "./models/batch-translate-text-request.js";
import { datasetSchema, type Dataset } from "./models/dataset.js";
import { detectLanguageRequestSchema, type DetectLanguageRequest } from "./models/detect-language-request.js";
import {
  detectLanguageResponseSchema,
  type DetectLanguageResponse,
} from "./models/detect-language-response.js";
import { exportDataRequestSchema, type ExportDataRequest } from "./models/export-data-request.js";
import { glossaryEntrySchema, type GlossaryEntry } from "./models/glossary-entry.js";
import { glossarySchema, type Glossary } from "./models/glossary.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
import {
  importAdaptiveMtFileRequestSchema,
  type ImportAdaptiveMtFileRequest,
} from "./models/import-adaptive-mt-file-request.js";
import {
  importAdaptiveMtFileResponseSchema,
  type ImportAdaptiveMtFileResponse,
} from "./models/import-adaptive-mt-file-response.js";
import { importDataRequestSchema, type ImportDataRequest } from "./models/import-data-request.js";
import {
  listAdaptiveMtDatasetsResponseSchema,
  type ListAdaptiveMtDatasetsResponse,
} from "./models/list-adaptive-mt-datasets-response.js";
import {
  listAdaptiveMtFilesResponseSchema,
  type ListAdaptiveMtFilesResponse,
} from "./models/list-adaptive-mt-files-response.js";
import {
  listAdaptiveMtSentencesResponseSchema,
  type ListAdaptiveMtSentencesResponse,
} from "./models/list-adaptive-mt-sentences-response.js";
import { listDatasetsResponseSchema, type ListDatasetsResponse } from "./models/list-datasets-response.js";
import { listExamplesResponseSchema, type ListExamplesResponse } from "./models/list-examples-response.js";
import {
  listGlossariesResponseSchema,
  type ListGlossariesResponse,
} from "./models/list-glossaries-response.js";
import {
  listGlossaryEntriesResponseSchema,
  type ListGlossaryEntriesResponse,
} from "./models/list-glossary-entries-response.js";
import { listLocationsResponseSchema, type ListLocationsResponse } from "./models/list-locations-response.js";
import { listModelsResponseSchema, type ListModelsResponse } from "./models/list-models-response.js";
import {
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "./models/list-operations-response.js";
import { locationSchema, type Location } from "./models/location.js";
import { modelSchema, type Model } from "./models/model.js";
import { operationSchema, type Operation } from "./models/operation.js";
import { refineTextRequestSchema, type RefineTextRequest } from "./models/refine-text-request.js";
import { refineTextResponseSchema, type RefineTextResponse } from "./models/refine-text-response.js";
import { romanizeTextRequestSchema, type RomanizeTextRequest } from "./models/romanize-text-request.js";
import { romanizeTextResponseSchema, type RomanizeTextResponse } from "./models/romanize-text-response.js";
import { supportedLanguagesSchema, type SupportedLanguages } from "./models/supported-languages.js";
import {
  translateDocumentRequestSchema,
  type TranslateDocumentRequest,
} from "./models/translate-document-request.js";
import {
  translateDocumentResponseSchema,
  type TranslateDocumentResponse,
} from "./models/translate-document-response.js";
import { translateTextRequestSchema, type TranslateTextRequest } from "./models/translate-text-request.js";
import { translateTextResponseSchema, type TranslateTextResponse } from "./models/translate-text-response.js";
import { waitOperationRequestSchema, type WaitOperationRequest } from "./models/wait-operation-request.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Cloud Translation API (translate v3,
 * revision 20261106). 51 operation(s).
 */
export class GoogleTranslateClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_TRANSLATE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleTranslateClient/3.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Detect language projects
   *
   * @remarks
   * Detects the language of text within a request.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsDetectLanguageError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsDetectLanguage(
    request: GoogleTranslateClient.TranslateProjectsDetectLanguageRequest,
    options?: RequestOptions,
  ): ApiPromise<DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsDetectLanguageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}:detectLanguage"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: detectLanguageRequestSchema },
      },
      {
        success: { kind: "json", schema: detectLanguageResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsDetectLanguageError,
      },
      options,
    );
  }

  /**
   * Get supported languages projects
   *
   * @remarks
   * Returns a list of supported languages for translation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsGetSupportedLanguages(
    request: GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportedLanguages, GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/supportedLanguages"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [
          { name: "displayLanguageCode", value: request.displayLanguageCode, schema: s.optional(s.string()) },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportedLanguagesSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError,
      },
      options,
    );
  }

  /**
   * List adaptiveMtSentences
   *
   * @remarks
   * Lists all AdaptiveMtSentences under a given file/dataset.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListAdaptiveMtSentencesResponse,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}/adaptiveMtSentences",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
          { name: "adaptiveMtFilesId", value: request.adaptiveMtFilesId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAdaptiveMtSentencesResponseSchema },
        errorFactory:
          GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError,
      },
      options,
    );
  }

  /**
   * Delete adaptiveMtFiles
   *
   * @remarks
   * Deletes an AdaptiveMtFile along with its sentences.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
          { name: "adaptiveMtFilesId", value: request.adaptiveMtFilesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory:
          GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError,
      },
      options,
    );
  }

  /**
   * Get adaptiveMtFiles
   *
   * @remarks
   * Gets and AdaptiveMtFile
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdaptiveMtFile,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles/{adaptiveMtFilesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
          { name: "adaptiveMtFilesId", value: request.adaptiveMtFilesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adaptiveMtFileSchema },
        errorFactory:
          GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError,
      },
      options,
    );
  }

  /**
   * List adaptiveMtFiles
   *
   * @remarks
   * Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListAdaptiveMtFilesResponse,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtFiles",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAdaptiveMtFilesResponseSchema },
        errorFactory:
          GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError,
      },
      options,
    );
  }

  /**
   * List adaptiveMtSentences
   *
   * @remarks
   * Lists all AdaptiveMtSentences under a given file/dataset.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListAdaptiveMtSentencesResponse,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}/adaptiveMtSentences",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAdaptiveMtSentencesResponseSchema },
        errorFactory:
          GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError,
      },
      options,
    );
  }

  /**
   * Create adaptiveMtDatasets
   *
   * @remarks
   * Creates an Adaptive MT dataset.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsCreate(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdaptiveMtDataset,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adaptiveMtDatasetSchema },
      },
      {
        success: { kind: "json", schema: adaptiveMtDatasetSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError,
      },
      options,
    );
  }

  /**
   * Delete adaptiveMtDatasets
   *
   * @remarks
   * Deletes an Adaptive MT dataset, including all its entries and associated metadata.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsDelete(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError,
      },
      options,
    );
  }

  /**
   * Get adaptiveMtDatasets
   *
   * @remarks
   * Gets the Adaptive MT dataset.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdaptiveMtDataset,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adaptiveMtDatasetSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError,
      },
      options,
    );
  }

  /**
   * Import adaptive mt file adaptiveMtDatasets
   *
   * @remarks
   * Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImportAdaptiveMtFileResponse,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets/{adaptiveMtDatasetsId}:importAdaptiveMtFile",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "adaptiveMtDatasetsId", value: request.adaptiveMtDatasetsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: importAdaptiveMtFileRequestSchema },
      },
      {
        success: { kind: "json", schema: importAdaptiveMtFileResponseSchema },
        errorFactory:
          GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError,
      },
      options,
    );
  }

  /**
   * List adaptiveMtDatasets
   *
   * @remarks
   * Lists all Adaptive MT datasets for which the caller has read permission.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtDatasetsList(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListAdaptiveMtDatasetsResponse,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/adaptiveMtDatasets",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAdaptiveMtDatasetsResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError,
      },
      options,
    );
  }

  /**
   * Adaptive mt translate locations
   *
   * @remarks
   * Translate text using Adaptive MT.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsAdaptiveMtTranslate(
    request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AdaptiveMtTranslateResponse,
    GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}:adaptiveMtTranslate",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adaptiveMtTranslateRequestSchema },
      },
      {
        success: { kind: "json", schema: adaptiveMtTranslateResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError,
      },
      options,
    );
  }

  /**
   * Batch translate document locations
   *
   * @remarks
   * Translates a large volume of document in asynchronous batch mode. This function provides
   * real-time output as the inputs are being processed. If caller cancels a request, the partial
   * results (for an input file, it's all or nothing) may still be available on the specified output
   * location. This call returns immediately and you can use google.longrunning.Operation.name to
   * poll the status of the call.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsBatchTranslateDocument(
    request: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}:batchTranslateDocument",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchTranslateDocumentRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError,
      },
      options,
    );
  }

  /**
   * Batch translate text locations
   *
   * @remarks
   * Translates a large volume of text in asynchronous batch mode. This function provides real-time
   * output as the inputs are being processed. If caller cancels a request, the partial results (for
   * an input file, it's all or nothing) may still be available on the specified output location.
   * This call returns immediately and you can use google.longrunning.Operation.name to poll the
   * status of the call.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsBatchTranslateText(
    request: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}:batchTranslateText",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchTranslateTextRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError,
      },
      options,
    );
  }

  /**
   * Create datasets
   *
   * @remarks
   * Creates a Dataset.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDatasetsCreate(
    request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}/datasets"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: datasetSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError,
      },
      options,
    );
  }

  /**
   * Delete datasets
   *
   * @remarks
   * Deletes a dataset and all of its contents.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDatasetsDelete(
    request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "datasetsId", value: request.datasetsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError,
      },
      options,
    );
  }

  /**
   * List examples
   *
   * @remarks
   * Lists sentence pairs in the dataset.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDatasetsExamplesList(
    request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListExamplesResponse,
    GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}/examples",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "datasetsId", value: request.datasetsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExamplesResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError,
      },
      options,
    );
  }

  /**
   * Export data datasets
   *
   * @remarks
   * Exports dataset's data to the provided output location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDatasetsExportData(
    request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:exportData",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "datasetsId", value: request.datasetsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: exportDataRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError,
      },
      options,
    );
  }

  /**
   * Get datasets
   *
   * @remarks
   * Gets a Dataset.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDatasetsGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Dataset, GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "datasetsId", value: request.datasetsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datasetSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError,
      },
      options,
    );
  }

  /**
   * Import data datasets
   *
   * @remarks
   * Import sentence pairs into translation Dataset.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDatasetsImportData(
    request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/datasets/{datasetsId}:importData",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "datasetsId", value: request.datasetsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: importDataRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError,
      },
      options,
    );
  }

  /**
   * List datasets
   *
   * @remarks
   * Lists datasets.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDatasetsList(
    request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDatasetsResponse, GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}/datasets"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDatasetsResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError,
      },
      options,
    );
  }

  /**
   * Detect language locations
   *
   * @remarks
   * Detects the language of text within a request.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsDetectLanguage(
    request: GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageRequest,
    options?: RequestOptions,
  ): ApiPromise<DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}:detectLanguage",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: detectLanguageRequestSchema },
      },
      {
        success: { kind: "json", schema: detectLanguageResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError,
      },
      options,
    );
  }

  /**
   * Get locations
   *
   * @remarks
   * Gets information about a location.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Location, GoogleTranslateClient.TranslateProjectsLocationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGetError,
      },
      options,
    );
  }

  /**
   * Get supported languages locations
   *
   * @remarks
   * Returns a list of supported languages for translation.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGetSupportedLanguages(
    request: GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SupportedLanguages,
    GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/supportedLanguages",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "displayLanguageCode", value: request.displayLanguageCode, schema: s.optional(s.string()) },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportedLanguagesSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError,
      },
      options,
    );
  }

  /**
   * Create glossaries
   *
   * @remarks
   * Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project
   * doesn't exist.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesCreate(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: glossarySchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError,
      },
      options,
    );
  }

  /**
   * Delete glossaries
   *
   * @remarks
   * Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns
   * NOT_FOUND, if the glossary doesn't exist.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesDelete(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError,
      },
      options,
    );
  }

  /**
   * Get glossaries
   *
   * @remarks
   * Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Glossary, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: glossarySchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError,
      },
      options,
    );
  }

  /**
   * Create glossaryEntries
   *
   * @remarks
   * Creates a glossary entry.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesGlossaryEntriesCreate(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GlossaryEntry,
    GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: glossaryEntrySchema },
      },
      {
        success: { kind: "json", schema: glossaryEntrySchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError,
      },
      options,
    );
  }

  /**
   * Delete glossaryEntries
   *
   * @remarks
   * Deletes a single entry from the glossary
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesGlossaryEntriesDelete(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
          { name: "glossaryEntriesId", value: request.glossaryEntriesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError,
      },
      options,
    );
  }

  /**
   * Get glossaryEntries
   *
   * @remarks
   * Gets a single glossary entry by the given id.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesGlossaryEntriesGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GlossaryEntry,
    GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
          { name: "glossaryEntriesId", value: request.glossaryEntriesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: glossaryEntrySchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError,
      },
      options,
    );
  }

  /**
   * List glossaryEntries
   *
   * @remarks
   * List the entries for the glossary.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesGlossaryEntriesList(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListGlossaryEntriesResponse,
    GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGlossaryEntriesResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError,
      },
      options,
    );
  }

  /**
   * Patch glossaryEntries
   *
   * @remarks
   * Updates a glossary entry.
   *
   * @returns Successful response
   *
   * @throws {@link
   * GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesGlossaryEntriesPatch(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GlossaryEntry,
    GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}/glossaryEntries/{glossaryEntriesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
          { name: "glossaryEntriesId", value: request.glossaryEntriesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: glossaryEntrySchema },
      },
      {
        success: { kind: "json", schema: glossaryEntrySchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError,
      },
      options,
    );
  }

  /**
   * List glossaries
   *
   * @remarks
   * Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesList(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListGlossariesResponse, GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}/glossaries"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGlossariesResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError,
      },
      options,
    );
  }

  /**
   * Patch glossaries
   *
   * @remarks
   * Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is
   * updated.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsGlossariesPatch(
    request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/glossaries/{glossariesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "glossariesId", value: request.glossariesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: glossarySchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError,
      },
      options,
    );
  }

  /**
   * List locations
   *
   * @remarks
   * Lists information about the supported locations for this service. This method lists locations
   * based on the resource scope provided in the ListLocationsRequest.name field: * **Global
   * locations**: If `name` is empty, the method lists the public locations available to all
   * projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`,
   * the method lists locations visible to that specific project. This includes public, private, or
   * other project-specific locations enabled for the project. For gRPC and client library
   * implementations, the resource name is passed as the `name` field. For direct service calls, the
   * resource name is incorporated into the request path based on the specific service
   * implementation and version.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsList(
    request: GoogleTranslateClient.TranslateProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationsResponse, GoogleTranslateClient.TranslateProjectsLocationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [
          {
            name: "extraLocationTypes",
            value: request.extraLocationTypes,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLocationsResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsListError,
      },
      options,
    );
  }

  /**
   * Create models
   *
   * @remarks
   * Creates a Model.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsModelsCreate(
    request: GoogleTranslateClient.TranslateProjectsLocationsModelsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}/models"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modelSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError,
      },
      options,
    );
  }

  /**
   * Delete models
   *
   * @remarks
   * Deletes a model.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsModelsDelete(
    request: GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "modelsId", value: request.modelsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError,
      },
      options,
    );
  }

  /**
   * Get models
   *
   * @remarks
   * Gets a model.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsModelsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsModelsGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsModelsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Model, GoogleTranslateClient.TranslateProjectsLocationsModelsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/models/{modelsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "modelsId", value: request.modelsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsModelsGetError,
      },
      options,
    );
  }

  /**
   * List models
   *
   * @remarks
   * Lists models.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsModelsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsModelsList(
    request: GoogleTranslateClient.TranslateProjectsLocationsModelsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListModelsResponse, GoogleTranslateClient.TranslateProjectsLocationsModelsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}/models"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listModelsResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsModelsListError,
      },
      options,
    );
  }

  /**
   * Cancel operations
   *
   * @remarks
   * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to
   * cancel the operation, but success is not guaranteed. If the server doesn't support this method,
   * it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other
   * methods to check whether the cancellation succeeded or whether the operation completed despite
   * cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an
   * operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to
   * `Code.CANCELLED`.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsOperationsCancel(
    request: GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError,
      },
      options,
    );
  }

  /**
   * Delete operations
   *
   * @remarks
   * Deletes a long-running operation. This method indicates that the client is no longer interested
   * in the operation result. It does not cancel the operation. If the server doesn't support this
   * method, it returns `google.rpc.Code.UNIMPLEMENTED`.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsOperationsDelete(
    request: GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError,
      },
      options,
    );
  }

  /**
   * Get operations
   *
   * @remarks
   * Gets the latest state of a long-running operation. Clients can use this method to poll the
   * operation result at intervals as recommended by the API service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsOperationsGet(
    request: GoogleTranslateClient.TranslateProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError,
      },
      options,
    );
  }

  /**
   * List operations
   *
   * @remarks
   * Lists operations that match the specified filter in the request. If the server doesn't support
   * this method, it returns `UNIMPLEMENTED`.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsOperationsListError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsOperationsList(
    request: GoogleTranslateClient.TranslateProjectsLocationsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOperationsResponse, GoogleTranslateClient.TranslateProjectsLocationsOperationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}/operations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOperationsResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsOperationsListError,
      },
      options,
    );
  }

  /**
   * Wait operations
   *
   * @remarks
   * Waits until the specified long-running operation is done or reaches at most a specified
   * timeout, returning the latest state. If the operation is already done, the latest state is
   * immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout,
   * the HTTP/RPC timeout is used. If the server does not support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return
   * the latest state before the specified timeout (including immediately), meaning even an
   * immediate response is no guarantee that the operation is done.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsOperationsWait(
    request: GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:wait",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: waitOperationRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError,
      },
      options,
    );
  }

  /**
   * Refine text locations
   *
   * @remarks
   * Refines the input translated text to improve the quality.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsRefineTextError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsRefineText(
    request: GoogleTranslateClient.TranslateProjectsLocationsRefineTextRequest,
    options?: RequestOptions,
  ): ApiPromise<RefineTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRefineTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}:refineText"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: refineTextRequestSchema },
      },
      {
        success: { kind: "json", schema: refineTextResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsRefineTextError,
      },
      options,
    );
  }

  /**
   * Romanize text locations
   *
   * @remarks
   * Romanize input text written in non-Latin scripts to Latin text.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsRomanizeText(
    request: GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextRequest,
    options?: RequestOptions,
  ): ApiPromise<RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}:romanizeText"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: romanizeTextRequestSchema },
      },
      {
        success: { kind: "json", schema: romanizeTextResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError,
      },
      options,
    );
  }

  /**
   * Translate document locations
   *
   * @remarks
   * Translates documents in synchronous mode.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsTranslateDocument(
    request: GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TranslateDocumentResponse,
    GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v3/projects/{projectsId}/locations/{locationsId}:translateDocument",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: translateDocumentRequestSchema },
      },
      {
        success: { kind: "json", schema: translateDocumentResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError,
      },
      options,
    );
  }

  /**
   * Translate text locations
   *
   * @remarks
   * Translates input text and returns translated text.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsLocationsTranslateText(
    request: GoogleTranslateClient.TranslateProjectsLocationsTranslateTextRequest,
    options?: RequestOptions,
  ): ApiPromise<TranslateTextResponse, GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}/locations/{locationsId}:translateText"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: translateTextRequestSchema },
      },
      {
        success: { kind: "json", schema: translateTextResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError,
      },
      options,
    );
  }

  /**
   * Romanize text projects
   *
   * @remarks
   * Romanize input text written in non-Latin scripts to Latin text.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsRomanizeTextError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsRomanizeText(
    request: GoogleTranslateClient.TranslateProjectsRomanizeTextRequest,
    options?: RequestOptions,
  ): ApiPromise<RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsRomanizeTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}:romanizeText"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: romanizeTextRequestSchema },
      },
      {
        success: { kind: "json", schema: romanizeTextResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsRomanizeTextError,
      },
      options,
    );
  }

  /**
   * Translate text projects
   *
   * @remarks
   * Translates input text and returns translated text.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleTranslateClient.TranslateProjectsTranslateTextError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleTranslateError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  translateProjectsTranslateText(
    request: GoogleTranslateClient.TranslateProjectsTranslateTextRequest,
    options?: RequestOptions,
  ): ApiPromise<TranslateTextResponse, GoogleTranslateClient.TranslateProjectsTranslateTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/projects/{projectsId}:translateText"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: translateTextRequestSchema },
      },
      {
        success: { kind: "json", schema: translateTextResponseSchema },
        errorFactory: GoogleTranslateClient.TranslateProjectsTranslateTextError,
      },
      options,
    );
  }
}

export namespace GoogleTranslateClient {
  export type TranslateProjectsDetectLanguageRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    body: DetectLanguageRequest;
  };

  export class TranslateProjectsDetectLanguageError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsDetectLanguageError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsGetSupportedLanguagesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * Optional. The language to use to return localized, human readable names of supported
     * languages. If missing, then display names are not returned in a response.
     */
    displayLanguageCode?: string;
    /**
     * Optional. Get supported languages of this model. The format depends on model type: - AutoML
     * Translation models:
     * `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General
     * (built-in) models:
     * `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns
     * languages supported by the specified model. If missing, we get supported languages of Google
     * general NMT model.
     */
    model?: string;
  };

  export class TranslateProjectsGetSupportedLanguagesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsGetSupportedLanguagesError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
    /** Resource name segment (adaptiveMtFilesId). */
    adaptiveMtFilesId: string;
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value
     * of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to
     * `ListTranslationMemories` method. The first page is returned if `page_token` is empty or
     * missing.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
    /** Resource name segment (adaptiveMtFilesId). */
    adaptiveMtFilesId: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
    /** Resource name segment (adaptiveMtFilesId). */
    adaptiveMtFilesId: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
    /** Optional. */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return. Typically, this is
     * the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to
     * `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value
     * of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to
     * `ListTranslationMemories` method. The first page is returned if `page_token` is empty or
     * missing.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: AdaptiveMtDataset;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (adaptiveMtDatasetsId). */
    adaptiveMtDatasetsId: string;
    body: ImportAdaptiveMtFileRequest;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type TranslateProjectsLocationsAdaptiveMtDatasetsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression for filtering the results of the request. Filter is not supported
     * yet.
     */
    filter?: string;
    /**
     * Optional. Requested page size. The server may return fewer results than requested. If
     * unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return. Typically, this is
     * the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call
     * to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or
     * missing.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsAdaptiveMtDatasetsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtDatasetsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsAdaptiveMtTranslateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: AdaptiveMtTranslateRequest;
  };

  export class TranslateProjectsLocationsAdaptiveMtTranslateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsAdaptiveMtTranslateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsBatchTranslateDocumentRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: BatchTranslateDocumentRequest;
  };

  export class TranslateProjectsLocationsBatchTranslateDocumentError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsBatchTranslateDocumentError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsBatchTranslateTextRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: BatchTranslateTextRequest;
  };

  export class TranslateProjectsLocationsBatchTranslateTextError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsBatchTranslateTextError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDatasetsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: Dataset;
  };

  export class TranslateProjectsLocationsDatasetsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDatasetsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDatasetsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (datasetsId). */
    datasetsId: string;
  };

  export class TranslateProjectsLocationsDatasetsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDatasetsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDatasetsExamplesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (datasetsId). */
    datasetsId: string;
    /**
     * Optional. An expression for filtering the examples that will be returned. Example filter: *
     * `usage=TRAIN`
     */
    filter?: string;
    /** Optional. Requested page size. The server can return fewer results than requested. */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained
     * from next_page_token field in the response of a ListExamples call.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsDatasetsExamplesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDatasetsExamplesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDatasetsExportDataRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (datasetsId). */
    datasetsId: string;
    body: ExportDataRequest;
  };

  export class TranslateProjectsLocationsDatasetsExportDataError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDatasetsExportDataError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDatasetsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (datasetsId). */
    datasetsId: string;
  };

  export class TranslateProjectsLocationsDatasetsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDatasetsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDatasetsImportDataRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (datasetsId). */
    datasetsId: string;
    body: ImportDataRequest;
  };

  export class TranslateProjectsLocationsDatasetsImportDataError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDatasetsImportDataError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDatasetsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. Requested page size. The server can return fewer results than requested. */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained
     * from next_page_token field in the response of a ListDatasets call.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsDatasetsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDatasetsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsDetectLanguageRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: DetectLanguageRequest;
  };

  export class TranslateProjectsLocationsDetectLanguageError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsDetectLanguageError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class TranslateProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGetSupportedLanguagesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The language to use to return localized, human readable names of supported
     * languages. If missing, then display names are not returned in a response.
     */
    displayLanguageCode?: string;
    /**
     * Optional. Get supported languages of this model. The format depends on model type: - AutoML
     * Translation models:
     * `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General
     * (built-in) models:
     * `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns
     * languages supported by the specified model. If missing, we get supported languages of Google
     * general NMT model.
     */
    model?: string;
  };

  export class TranslateProjectsLocationsGetSupportedLanguagesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGetSupportedLanguagesError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: Glossary;
  };

  export class TranslateProjectsLocationsGlossariesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
  };

  export class TranslateProjectsLocationsGlossariesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
  };

  export class TranslateProjectsLocationsGlossariesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
    body: GlossaryEntry;
  };

  export class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
    /** Resource name segment (glossaryEntriesId). */
    glossaryEntriesId: string;
  };

  export class TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
    /** Resource name segment (glossaryEntriesId). */
    glossaryEntriesId: string;
  };

  export class TranslateProjectsLocationsGlossariesGlossaryEntriesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesGlossaryEntriesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
    /**
     * Optional. Requested page size. The server may return fewer glossary entries than requested.
     * If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return. Typically, this is
     * the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call.
     * The first page is returned if `page_token`is empty or missing.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsGlossariesGlossaryEntriesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesGlossaryEntriesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
    /** Resource name segment (glossaryEntriesId). */
    glossaryEntriesId: string;
    body: GlossaryEntry;
  };

  export class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. Filter specifying constraints of a list operation. Specify the constraint by the
     * format of "key=value", where key must be "src" or "tgt", and the value must be a valid
     * language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such
     * as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using
     * 'en-US' and 'en' can lead to different results, which depends on the language code you used
     * when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add
     * restrictions on the source and target language code separately. For the equivalent term set
     * glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US
     * AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source
     * language code as "en-US" and the target language code "zh-CN", but all equivalent term set
     * glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If
     * missing, no filtering is performed.
     */
    filter?: string;
    /**
     * Optional. Requested page size. The server may return fewer glossaries than requested. If
     * unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return. Typically, this is
     * the value of [ListGlossariesResponse.next_page_token] returned from the previous call to
     * `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsGlossariesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsGlossariesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (glossariesId). */
    glossariesId: string;
    /**
     * The list of fields to be updated. Currently, only `display_name` and `input_config` are
     * supported.
     */
    updateMask?: string;
    body: Glossary;
  };

  export class TranslateProjectsLocationsGlossariesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsGlossariesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * Optional. Do not use this field unless explicitly documented otherwise. This is primarily for
     * internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings
     * like `"displayName=tokyo"`, and is documented in more detail in
     * [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /** The maximum number of results to return. If not set, the service selects a default. */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token
     * to receive the subsequent page.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsModelsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: Model;
  };

  export class TranslateProjectsLocationsModelsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsModelsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsModelsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (modelsId). */
    modelsId: string;
  };

  export class TranslateProjectsLocationsModelsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsModelsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsModelsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (modelsId). */
    modelsId: string;
  };

  export class TranslateProjectsLocationsModelsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsModelsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsModelsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression for filtering the models that will be returned. Supported filter:
     * `dataset_id=${dataset_id}`
     */
    filter?: string;
    /** Optional. Requested page size. The server can return fewer results than requested. */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained
     * from next_page_token field in the response of a ListModels call.
     */
    pageToken?: string;
  };

  export class TranslateProjectsLocationsModelsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsModelsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: Record<string, unknown>;
  };

  export class TranslateProjectsLocationsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class TranslateProjectsLocationsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class TranslateProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsOperationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** The standard list filter. */
    filter?: string;
    /** The standard list page size. */
    pageSize?: number;
    /** The standard list page token. */
    pageToken?: string;
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are
     * unreachable are returned in the ListOperationsResponse.unreachable field. This can only be
     * `true` when reading across collections. For example, when `parent` is set to
     * `"projects/example/locations/-"`. This field is not supported by default and will result in
     * an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product
     * specific documentation.
     */
    returnPartialSuccess?: boolean;
  };

  export class TranslateProjectsLocationsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsOperationsWaitRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: WaitOperationRequest;
  };

  export class TranslateProjectsLocationsOperationsWaitError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsOperationsWaitError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsRefineTextRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: RefineTextRequest;
  };

  export class TranslateProjectsLocationsRefineTextError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsRefineTextError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsRomanizeTextRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: RomanizeTextRequest;
  };

  export class TranslateProjectsLocationsRomanizeTextError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsRomanizeTextError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsTranslateDocumentRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: TranslateDocumentRequest;
  };

  export class TranslateProjectsLocationsTranslateDocumentError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsTranslateDocumentError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsLocationsTranslateTextRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: TranslateTextRequest;
  };

  export class TranslateProjectsLocationsTranslateTextError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsLocationsTranslateTextError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsRomanizeTextRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    body: RomanizeTextRequest;
  };

  export class TranslateProjectsRomanizeTextError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsRomanizeTextError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type TranslateProjectsTranslateTextRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    body: TranslateTextRequest;
  };

  export class TranslateProjectsTranslateTextError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<TranslateProjectsTranslateTextError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
