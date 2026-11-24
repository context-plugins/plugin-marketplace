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
  documentValidationResponseSchema,
  type DocumentValidationResponse,
} from "../models/document-validation-response.js";
import { infoSchema, type Info } from "../models/info.js";
import { legislationSchema, type Legislation } from "../models/legislation.js";
import {
  problemSkribbleAdditionalInformationApiInternalSchema,
  type ProblemSkribbleAdditionalInformationApi,
} from "../models/problem-skribble-additional-information-api.js";
import { qualitySchema, type Quality } from "../models/quality.js";
import {
  signatureValidationResponseSchema,
  type SignatureValidationResponse,
} from "../models/signature-validation-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints to validate documents, data formats, and signatures.
 */
export class Validation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Deletes the validation
   *
   * @remarks
   * Deletes the corresponding resource identified by {id}, universal for all validation resources.
   * Any resource that is not manually deleted will be automatically deleted after 10 minutes.
   *
   * @returns Success
   *
   * @throws {@link Validation.DeleteValidationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteValidation(
    request: Validation.DeleteValidationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Validation.DeleteValidationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/validate/{id}"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Validation.DeleteValidationError,
      },
      options,
    );
  }

  /**
   * Validate a digitally signed content
   *
   * @remarks
   * Validate signatures in digitally signed content, such as a PDF or XML file. A validation ID
   * {id} is returned that can be used to call additional endpoints. The content to be validated is
   * provided in the request body and is not retained within our service. The maximum request or
   * file size is 50MB. Request parameters can be used to set optional parameters to control the
   * validation
   *
   * @returns Success
   *
   * @throws {@link Validation.PostValidateDocumentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postValidateDocument(
    request: Validation.PostValidateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentValidationResponse, Validation.PostValidateDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/validate/document"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [
          { name: "quality", value: request.quality, schema: s.optional(s.lazy(() => qualitySchema)) },
          { name: "longTermValidation", value: request.longTermValidation, schema: s.optional(s.boolean()) },
          {
            name: "legislation",
            value: request.legislation,
            schema: s.optional(s.lazy(() => legislationSchema)),
          },
          { name: "infos", value: request.infos, schema: s.optional(s.array(s.lazy(() => infoSchema))) },
          {
            name: "rejectVisualDifferences",
            value: request.rejectVisualDifferences,
            schema: s.optional(s.boolean()),
          },
          {
            name: "rejectUndefinedChanges",
            value: request.rejectUndefinedChanges,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "content", value: request.content }] },
      },
      {
        success: { kind: "json", schema: documentValidationResponseSchema },
        errorFactory: Validation.PostValidateDocumentError,
      },
      options,
    );
  }

  /**
   * Validate a digital signature
   *
   * @remarks
   * Validate digital signatures such as CMS and CAdES without providing the associated signed
   * content. A validation ID {id} is returned that can be used to call additional endpoints. The
   * signature to be validated is provided in the request body. Query parameters can be used to set
   * optional parameters to control the validation.
   *
   * @returns Success
   *
   * @throws {@link Validation.PostValidateSignatureError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postValidateSignature(
    request: Validation.PostValidateSignatureRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureValidationResponse, Validation.PostValidateSignatureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/validate/signature"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [
          { name: "quality", value: request.quality, schema: s.optional(s.lazy(() => qualitySchema)) },
          { name: "longTermValidation", value: request.longTermValidation, schema: s.optional(s.boolean()) },
          {
            name: "legislation",
            value: request.legislation,
            schema: s.optional(s.lazy(() => legislationSchema)),
          },
          { name: "infos", value: request.infos, schema: s.optional(s.array(s.lazy(() => infoSchema))) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "content", value: request.content }] },
      },
      {
        success: { kind: "json", schema: signatureValidationResponseSchema },
        errorFactory: Validation.PostValidateSignatureError,
      },
      options,
    );
  }
}

export namespace Validation {
  export type DeleteValidationRequest = {
    /** The 'id' provided by the validate operation */
    id: string;
  };

  export class DeleteValidationError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteValidationError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 401,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 403,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 404,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi6",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi7",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }

  export type PostValidateDocumentRequest = {
    /** Optional flag specifying the minimum signature quality required (SES, AES, QES). */
    quality?: Quality;
    /** Optional flag indicating whether the signature must be long-term valid. */
    longTermValidation?: boolean;
    /**
     * Optional jurisdiction (legal framework) the signature must satisfy: `CH` = Swiss law
     * (ZertES), `EU` = EU law (eIDAS Regulation), `CH_EU` = both ZertES and eIDAS, `WORLD` = no
     * specific jurisdiction (international). When set, the validation reports whether the signature
     * meets the selected framework.
     */
    legislation?: Legislation;
    /**
     * Optional flag to request additional information, such as validation, format, or signer
     * details.
     */
    infos?: Info[];
    /**
     * Optional flag to specify if visual differences should be rejected. If 'true', validation will
     * fail due to visual differences; if 'false' or not provided, visual differences will not cause
     * validation to fail.
     */
    rejectVisualDifferences?: boolean;
    /**
     * Optional flag to specify if undefined changes should be rejected. If 'true', validation will
     * fail due to undefined changes; if 'false' or not provided, undefined changes will not cause
     * validation to fail.
     */
    rejectUndefinedChanges?: boolean;
    /** File content to validate (PDF or XML) */
    content: FileInput;
  };

  export class PostValidateDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi8", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostValidateDocumentError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 401,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 403,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 413,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 415,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi6",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi7",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi8",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }

  export type PostValidateSignatureRequest = {
    /** Optional flag specifying the minimum signature quality required (SES, AES, QES). */
    quality?: Quality;
    /** Optional flag indicating whether the signature must be long-term valid. */
    longTermValidation?: boolean;
    /**
     * Optional jurisdiction (legal framework) the signature must satisfy: `CH` = Swiss law
     * (ZertES), `EU` = EU law (eIDAS Regulation), `CH_EU` = both ZertES and eIDAS, `WORLD` = no
     * specific jurisdiction (international). When set, the validation reports whether the signature
     * meets the selected framework.
     */
    legislation?: Legislation;
    /**
     * Optional flag to request additional information, such as validation, format, or signer
     * details.
     */
    infos?: Info[];
    /** File content to validate (PDF or XML) */
    content: FileInput;
  };

  export class PostValidateSignatureError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostValidateSignatureError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 401,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 403,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 415,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi6",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi7",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }
}
