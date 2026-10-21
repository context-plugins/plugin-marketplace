import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { kbaRequestSchema, type KbaRequest } from "../models/kba-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Knowledge-Based Authentication
 */
export class Kba {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve KBA Questions
   *
   * @remarks
   * Returns the KBA questions for a specific KBA session. The questions are used to verify the
   * customer's identity during the KBA process.
   *
   * @returns successful operation
   *
   * @throws {@link Kba.GetKbaQuestionsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKbaQuestions(
    request: Kba.GetKbaQuestionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Kba.GetKbaQuestionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/kba/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Kba.GetKbaQuestionsError,
      },
      options,
    );
  }

  /**
   * Initiate a KBA session
   *
   * @remarks
   * Creates a new KBA (Knowledge-Based Authentication) session for a personal Verified Customer.
   * Returns a KBA identifier that represents the session and is used to retrieve authentication
   * questions for customer verification.
   *
   * @returns created
   *
   * @throws {@link Kba.InitiateKbaForCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initiateKbaForCustomer(
    request: Kba.InitiateKbaForCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Kba.InitiateKbaForCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/kba"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Kba.InitiateKbaForCustomerError,
      },
      options,
    );
  }

  /**
   * Verify KBA Questions
   *
   * @remarks
   * Submits customer answers to KBA questions for identity verification. Requires four
   * question-answer pairs with questionId and answerId values. Returns verification status
   * indicating whether the customer passed or failed the KBA authentication.
   *
   * @returns created
   *
   * @throws {@link Kba.VerifyKbaQuestionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyKbaQuestions(
    request: Kba.VerifyKbaQuestionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Kba.VerifyKbaQuestionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/kba/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: kbaRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Kba.VerifyKbaQuestionsError,
      },
      options,
    );
  }
}

export namespace Kba {
  export type GetKbaQuestionsRequest = {
    /** The ID of the KBA session to retrieve questions for */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetKbaQuestionsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetKbaQuestionsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type InitiateKbaForCustomerRequest = {
    /** The ID of the Customer for initiating a KBA session */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class InitiateKbaForCustomerError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<InitiateKbaForCustomerError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type VerifyKbaQuestionsRequest = {
    /** The id of the KBA session to verify questions for. */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters for verifying KBA questions */
    body: KbaRequest;
  };

  export class VerifyKbaQuestionsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<VerifyKbaQuestionsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
