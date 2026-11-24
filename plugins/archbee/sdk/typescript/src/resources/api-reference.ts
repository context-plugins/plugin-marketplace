import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  infoApiReferenceResponseSchema,
  type InfoApiReferenceResponse,
} from "../models/info-api-reference-response.js";
import {
  infoApiReference400Error1Schema,
  type InfoApiReference400Error1,
} from "../models/info-api-reference400-error1.js";
import { openApiTryItSchema, type OpenApiTryIt } from "../models/open-api-try-it.js";
import { openApiUseOwnBackendSchema, type OpenApiUseOwnBackend } from "../models/open-api-use-own-backend.js";
import { shouldCreateIntroSchema, type ShouldCreateIntro } from "../models/should-create-intro.js";
import {
  shouldCreateSchemaCategorySchema,
  type ShouldCreateSchemaCategory,
} from "../models/should-create-schema-category.js";
import {
  showDownloadOpenApiFileSchema,
  type ShowDownloadOpenApiFile,
} from "../models/show-download-open-api-file.js";
import {
  syncApiReferenceResponseSchema,
  type SyncApiReferenceResponse,
} from "../models/sync-api-reference-response.js";
import {
  syncApiReference400Error1Schema,
  type SyncApiReference400Error1,
} from "../models/sync-api-reference400-error1.js";
import { Type, typeSchema } from "../models/type.js";
import type { Servers } from "../servers.js";

/**
 * Sync and inspect an imported OpenAPI reference
 */
export class ApiReference {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Info Open Api document
   *
   * @remarks
   * Get info of an existing Open Api tree
   *
   * @returns Status
   *
   * @throws {@link ApiReference.InfoOpenApiDocumentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  infoOpenApiDocument(
    options?: RequestOptions,
  ): ApiPromise<InfoApiReferenceResponse, ApiReference.InfoOpenApiDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/info-api-reference"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: infoApiReferenceResponseSchema },
        errorFactory: ApiReference.InfoOpenApiDocumentError,
      },
      options,
    );
  }

  /**
   * Sync Open Api document
   *
   * @remarks
   * Sync Open Api document with a new or existing Open Api tree
   *
   * @returns Import OK status
   *
   * @throws {@link ApiReference.SyncOpenApiDocumentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  syncOpenApiDocument(
    request: ApiReference.SyncOpenApiDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncApiReferenceResponse, ApiReference.SyncOpenApiDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sync-api-reference"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "docTreeId",
              value: request.docTreeId,
              schema: s.defaulted(s.string(), "21-character__string0"),
            },
            {
              kind: "text",
              name: "type",
              value: request.type,
              schema: s.defaulted(typeSchema, Type.Openapi),
            },
            {
              kind: "text",
              name: "openApiTryIt",
              value: request.openApiTryIt,
              schema: s.optional(s.lazy(() => openApiTryItSchema)),
            },
            {
              kind: "text",
              name: "openApiUseOwnBackend",
              value: request.openApiUseOwnBackend,
              schema: s.optional(s.lazy(() => openApiUseOwnBackendSchema)),
            },
            {
              kind: "text",
              name: "showDownloadOpenApiFile",
              value: request.showDownloadOpenApiFile,
              schema: s.optional(s.lazy(() => showDownloadOpenApiFileSchema)),
            },
            {
              kind: "text",
              name: "shouldCreateSchemaCategory",
              value: request.shouldCreateSchemaCategory,
              schema: s.optional(s.lazy(() => shouldCreateSchemaCategorySchema)),
            },
            {
              kind: "text",
              name: "shouldCreateIntro",
              value: request.shouldCreateIntro,
              schema: s.optional(s.lazy(() => shouldCreateIntroSchema)),
            },
            {
              kind: "text",
              name: "openApiLanguageExamples",
              value: request.openApiLanguageExamples,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: syncApiReferenceResponseSchema },
        errorFactory: ApiReference.SyncOpenApiDocumentError,
      },
      options,
    );
  }
}

export namespace ApiReference {
  export class InfoOpenApiDocumentError extends ApiError {
    declare readonly payload: Declared<"infoApiReference400Error1", InfoApiReference400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<InfoOpenApiDocumentError> = [
      {
        on: 400,
        kind: "infoApiReference400Error1",
        decode: { kind: "json", schema: infoApiReference400Error1Schema },
      },
    ];
  }

  export type SyncOpenApiDocumentRequest = {
    /** Open api file, .json or .yml or .yaml or .zip */
    file: FileInput;
    /**
     * OPTIONAL, main category id where open api was imported; if undefined, a new docTree is
     * created and its id is returned
     *
     * @default "21-character__string0"
     */
    docTreeId?: string;
    /** Type of import file. Default openapi @default Type.Openapi */
    type?: Type;
    /**
     * OPTIONAL. You can now test your API's directly in the editor or on your published docs with
     * the new API Try It!
     */
    openApiTryIt?: OpenApiTryIt;
    /**
     * OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the URL
     * defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on
     * your backend.
     */
    openApiUseOwnBackend?: OpenApiUseOwnBackend;
    /**
     * OPTIONAL. You can show/hide the download link of the imported Open API file in the Open API
     * tree.
     */
    showDownloadOpenApiFile?: ShowDownloadOpenApiFile;
    /** OPTIONAL. You can create models category to display all your models. */
    shouldCreateSchemaCategory?: ShouldCreateSchemaCategory;
    /** OPTIONAL. You can create an additional document to display open api intro. */
    shouldCreateIntro?: ShouldCreateIntro;
    /**
     * OPTIONAL. Add your custom language examples. Maximum 5 programming language examples are
     * allowed!
     */
    openApiLanguageExamples?: string;
  };

  export class SyncOpenApiDocumentError extends ApiError {
    declare readonly payload: Declared<"syncApiReference400Error1", SyncApiReference400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<SyncOpenApiDocumentError> = [
      {
        on: 400,
        kind: "syncApiReference400Error1",
        decode: { kind: "json", schema: syncApiReference400Error1Schema },
      },
    ];
  }
}
