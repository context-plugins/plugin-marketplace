import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { formatInfosResponseSchema, type FormatInfosResponse } from "../models/format-infos-response.js";
import {
  problemSkribbleAdditionalInformationApiInternalSchema,
  type ProblemSkribbleAdditionalInformationApi,
} from "../models/problem-skribble-additional-information-api.js";
import { signerSchema, type Signer } from "../models/signer.js";
import {
  validationInfosResponseSchema,
  type ValidationInfosResponse,
} from "../models/validation-infos-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints providing extra metadata or supplementary details for documents.
 */
export class AdditionalInformation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get additional information about the document format
   *
   * @returns Success
   *
   * @throws {@link AdditionalInformation.GetInfosFormatError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInfosFormat(
    request: AdditionalInformation.GetInfosFormatRequest,
    options?: RequestOptions,
  ): ApiPromise<FormatInfosResponse, AdditionalInformation.GetInfosFormatError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/infos/{id}/format"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: formatInfosResponseSchema },
        errorFactory: AdditionalInformation.GetInfosFormatError,
      },
      options,
    );
  }

  /**
   * Get additional information about the signers of a validation
   *
   * @remarks
   * Additional information about the people who signed the document. The query parameter is the id
   * from the validation endpoint.
   *
   * @returns Success
   *
   * @throws {@link AdditionalInformation.GetInfosSignersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInfosSigners(
    request: AdditionalInformation.GetInfosSignersRequest,
    options?: RequestOptions,
  ): ApiPromise<Signer[], AdditionalInformation.GetInfosSignersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/infos/{id}/signers"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => signerSchema)) },
        errorFactory: AdditionalInformation.GetInfosSignersError,
      },
      options,
    );
  }

  /**
   * Get additional information about the validation itself.
   *
   * @returns Success
   *
   * @throws {@link AdditionalInformation.GetInfosValidationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInfosValidation(
    request: AdditionalInformation.GetInfosValidationRequest,
    options?: RequestOptions,
  ): ApiPromise<ValidationInfosResponse, AdditionalInformation.GetInfosValidationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/infos/{id}/validation"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: validationInfosResponseSchema },
        errorFactory: AdditionalInformation.GetInfosValidationError,
      },
      options,
    );
  }
}

export namespace AdditionalInformation {
  export type GetInfosFormatRequest = {
    /** The 'id' provided by the validate operation */
    id: string;
  };

  export class GetInfosFormatError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInfosFormatError> = [
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

  export type GetInfosSignersRequest = {
    /** The 'id' provided by the validate operation */
    id: string;
  };

  export class GetInfosSignersError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInfosSignersError> = [
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

  export type GetInfosValidationRequest = {
    /** The 'id' provided by the validate operation */
    id: string;
  };

  export class GetInfosValidationError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInfosValidationError> = [
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
}
