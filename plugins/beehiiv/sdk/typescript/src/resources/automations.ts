import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  automationEmailsListResponseSchema,
  type AutomationEmailsListResponse,
} from "../models/automation-emails-list-response.js";
import {
  automationsGetRequestExpandItemSchema,
  type AutomationsGetRequestExpandItem,
} from "../models/automations-get-request-expand-item.js";
import {
  automationsGetResponseSchema,
  type AutomationsGetResponse,
} from "../models/automations-get-response.js";
import {
  automationsListRequestExpandItemSchema,
  type AutomationsListRequestExpandItem,
} from "../models/automations-list-request-expand-item.js";
import {
  automationsListResponseSchema,
  type AutomationsListResponse,
} from "../models/automations-list-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Automations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List automations OAuth Scope: automations:read
   *
   * @remarks
   * Retrieve automations for a publication.
   *
   * @returns OK
   *
   * @throws {@link Automations.Index6Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index6(
    request: Automations.Index6Request,
    options?: RequestOptions,
  ): ApiPromise<AutomationsListResponse, Automations.Index6Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/automations"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => automationsListRequestExpandItemSchema)),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationsListResponseSchema },
        errorFactory: Automations.Index6Error,
      },
      options,
    );
  }

  /**
   * List automation emails
   *
   * @remarks
   * Retrieve all emails belonging to a specific automation, including engagement statistics for
   * each email.
   *
   * @returns OK
   *
   * @throws {@link Automations.ListEmailsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEmails(
    request: Automations.ListEmailsRequest,
    options?: RequestOptions,
  ): ApiPromise<AutomationEmailsListResponse, Automations.ListEmailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/automations/{automationId}/emails"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "automationId", value: request.automationId, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationEmailsListResponseSchema },
        errorFactory: Automations.ListEmailsError,
      },
      options,
    );
  }

  /**
   * Get automation OAuth Scope: automations:read
   *
   * @remarks
   * Retrieve a single automation for a publication.
   *
   * @returns OK
   *
   * @throws {@link Automations.Show3Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show3(
    request: Automations.Show3Request,
    options?: RequestOptions,
  ): ApiPromise<AutomationsGetResponse, Automations.Show3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/automations/{automationId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "automationId", value: request.automationId, schema: s.string() },
        ],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => automationsGetRequestExpandItemSchema)),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationsGetResponseSchema },
        errorFactory: Automations.Show3Error,
      },
      options,
    );
  }
}

export namespace Automations {
  export type Index6Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Optional list of expandable objects. */
    expand?: AutomationsListRequestExpandItem;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified
     * by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index6Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index6Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListEmailsRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the automation object */
    automationId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next
     * page of results. Obtain it from the `next_cursor` field of a previous response.
     */
    cursor?: string;
    /**
     * **Deprecated**: Use `cursor` instead. Pagination returns the results in pages. Limited to 100
     * pages maximum.
     */
    page?: number;
    /** Bearer authentication */
    authorization: string;
  };

  export class ListEmailsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEmailsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show3Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the automation object */
    automationId: string;
    /** Optional list of expandable objects. */
    expand?: AutomationsGetRequestExpandItem;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show3Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
