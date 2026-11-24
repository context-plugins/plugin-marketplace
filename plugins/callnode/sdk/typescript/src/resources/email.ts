import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1EmailDomainsRequestSchema,
  type ApiV1EmailDomainsRequest,
} from "../models/api-v1-email-domains-request.js";
import {
  apiV1EmailDomainsResponseSchema,
  type ApiV1EmailDomainsResponse,
} from "../models/api-v1-email-domains-response.js";
import {
  apiV1EmailMessagesResponseInternalSchema,
  type ApiV1EmailMessagesResponse,
} from "../models/api-v1-email-messages-response.js";
import { emailDomainSchema, type EmailDomain } from "../models/email-domain.js";
import { emailMessageInternalSchema, type EmailMessage } from "../models/email-message.js";
import { errorSchema, type Error } from "../models/error.js";
import { sendEmailRequestInternalSchema, type SendEmailRequest } from "../models/send-email-request.js";
import { status3Schema, type Status3 } from "../models/status3.js";
import type { Servers } from "../servers.js";

/**
 * Programmable email: verify a sending domain you control, send transactional email from any
 * address on it, list messages, and receive delivery events (delivered, delayed, bounced,
 * complained, failed) signed to your webhook. Billed per recipient accepted for delivery; message
 * bodies are not stored.
 */
export class Email {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a sending domain
   *
   * @remarks
   * Registers a domain you control and answers 201 with the DNS records to publish (DKIM TXT, SPF
   * TXT, return-path CNAME). Adding a domain the account already holds replays it (200). Requires
   * business verification and the Email API priced on your plan.
   *
   * @returns Created, `pending`, with the records to publish.
   *
   * @throws {@link Email.CreateEmailDomainError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEmailDomain(
    request: Email.CreateEmailDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<EmailDomain, Email.CreateEmailDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/email/domains"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1EmailDomainsRequestSchema },
      },
      {
        success: { kind: "json", schema: emailDomainSchema },
        errorFactory: Email.CreateEmailDomainError,
      },
      options,
    );
  }

  /**
   * Remove a sending domain
   *
   * @remarks
   * Messages already sent keep their history.
   *
   * @returns Removed.
   *
   * @throws {@link Email.DeleteEmailDomainError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEmailDomain(
    request: Email.DeleteEmailDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Email.DeleteEmailDomainError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/email/domains/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Email.DeleteEmailDomainError,
      },
      options,
    );
  }

  /**
   * Retrieve a sending domain
   *
   * @returns The domain.
   *
   * @throws {@link Email.GetEmailDomainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmailDomain(
    request: Email.GetEmailDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<EmailDomain, Email.GetEmailDomainError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/email/domains/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "refresh", value: request.refresh, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: emailDomainSchema },
        errorFactory: Email.GetEmailDomainError,
      },
      options,
    );
  }

  /**
   * Retrieve a message with its events
   *
   * @returns The message; `events` lists `{ type, at, detail }` in the order they occurred.
   *
   * @throws {@link Email.GetEmailMessageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEmailMessage(
    request: Email.GetEmailMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<EmailMessage, Email.GetEmailMessageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/email/messages/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: emailMessageInternalSchema },
        errorFactory: Email.GetEmailMessageError,
      },
      options,
    );
  }

  /**
   * List sending domains
   *
   * @returns Every sending domain on the account.
   *
   * @throws {@link Email.ListEmailDomainsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEmailDomains(
    options?: RequestOptions,
  ): ApiPromise<ApiV1EmailDomainsResponse, Email.ListEmailDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/email/domains"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1EmailDomainsResponseSchema },
        errorFactory: Email.ListEmailDomainsError,
      },
      options,
    );
  }

  /**
   * List messages
   *
   * @remarks
   * Newest first, keyset-paginated. Test keys list test messages only.
   *
   * @returns A page of messages.
   *
   * @throws {@link Email.ListEmailMessagesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEmailMessages(
    request: Email.ListEmailMessagesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1EmailMessagesResponse, Email.ListEmailMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/email/messages"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status3Schema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1EmailMessagesResponseInternalSchema },
        errorFactory: Email.ListEmailMessagesError,
      },
      options,
    );
  }

  /**
   * Send an email
   *
   * @remarks
   * Send one message to up to 50 recipients (to + cc + bcc) from an address on one of your active
   * sending domains. Gates run in order: field validation, business verification, the From domain's
   * status, idempotency, a per-recipient rate on your plan, and a balance of at least `recipients ×
   * rate`. The message is handed to the sending infrastructure and answered 202 as `sent`; the
   * charge happens on acceptance. A `cn_test_` key runs every gate and then simulates. Bodies are
   * not stored after the handoff.
   *
   * @returns Accepted by the sending infrastructure; `status` is `sent` and moves on as delivery
   * events arrive. `billing` says how the message was priced.
   *
   * @throws {@link Email.SendEmailError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendEmail(
    request: Email.SendEmailRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EmailMessage, Email.SendEmailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/email/messages"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Idempotency-Key", value: request.xIdempotencyKey, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: sendEmailRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: emailMessageInternalSchema },
        errorFactory: Email.SendEmailError,
      },
      options,
    );
  }

  /**
   * Check the DNS records now
   *
   * @remarks
   * A real lookup against public DNS. Answers the domain with its new status; a failed check
   * carries `verificationError`.
   *
   * @returns The domain after the check (`active`, `verifying` or `failed`).
   *
   * @throws {@link Email.VerifyEmailDomainError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyEmailDomain(
    request: Email.VerifyEmailDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<EmailDomain, Email.VerifyEmailDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/email/domains/{id}/verify"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: emailDomainSchema },
        errorFactory: Email.VerifyEmailDomainError,
      },
      options,
    );
  }
}

export namespace Email {
  export type CreateEmailDomainRequest = {
    body: ApiV1EmailDomainsRequest;
  };

  export class CreateEmailDomainError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEmailDomainError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteEmailDomainRequest = {
    id: string;
  };

  export class DeleteEmailDomainError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEmailDomainError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEmailDomainRequest = {
    id: string;
    /**
     * When set, the status and the records' statuses are re-read from the sending infrastructure
     * first, and the answer carries `newDomainLimit`.
     */
    refresh?: string;
  };

  export class GetEmailDomainError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetEmailDomainError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetEmailMessageRequest = {
    id: string;
  };

  export class GetEmailMessageError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetEmailMessageError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListEmailDomainsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListEmailDomainsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListEmailMessagesRequest = {
    status?: Status3;
    /** @default 25 */
    limit?: number;
    /** The `nextCursor` of the previous page. */
    cursor?: string;
  };

  export const listEmailMessagesRequestSchema: Schema<ListEmailMessagesRequest> = s.lazySchema(() =>
    s.object<ListEmailMessagesRequest>({
      status: s.optional(s.lazy(() => status3Schema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
      cursor: s.optional(s.string()),
    }),
  );

  export class ListEmailMessagesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListEmailMessagesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendEmailRequestParams = {
    /** A UUID. Replaying the same key returns the original result rather than acting twice. */
    xIdempotencyKey?: string;
    body: SendEmailRequest;
  };

  export class SendEmailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendEmailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VerifyEmailDomainRequest = {
    id: string;
  };

  export class VerifyEmailDomainError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<VerifyEmailDomainError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
