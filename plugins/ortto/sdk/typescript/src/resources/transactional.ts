import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  transactionalSendRequestInternalSchema,
  type TransactionalSendRequest,
} from "../models/transactional-send-request.js";
import {
  transactionalSendSmsRequestSchema,
  type TransactionalSendSmsRequest,
} from "../models/transactional-send-sms-request.js";
import type { Servers } from "../servers.js";

/**
 * Send transactional email and SMS.
 */
export class Transactional {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Send a transactional email
   *
   * @remarks
   * Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to
   * 5 base64-encoded attachments are supported. A successful request returns a 202 Accepted.
   *
   * @returns Request received and accepted for delivery.
   *
   * @throws {@link Transactional.SendTransactionalEmailError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendTransactionalEmail(
    request: Transactional.SendTransactionalEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Transactional.SendTransactionalEmailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactional/send"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionalSendRequestInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Transactional.SendTransactionalEmailError,
      },
      options,
    );
  }

  /**
   * Send a transactional SMS
   *
   * @returns Request received and accepted for delivery.
   *
   * @throws {@link Transactional.SendTransactionalSmsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendTransactionalSms(
    request: Transactional.SendTransactionalSmsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Transactional.SendTransactionalSmsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactional/send-sms"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionalSendSmsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Transactional.SendTransactionalSmsError,
      },
      options,
    );
  }
}

export namespace Transactional {
  export type SendTransactionalEmailRequest = {
    body: TransactionalSendRequest;
  };

  export class SendTransactionalEmailError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<SendTransactionalEmailError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendTransactionalSmsRequest = {
    body: TransactionalSendSmsRequest;
  };

  export class SendTransactionalSmsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<SendTransactionalSmsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
