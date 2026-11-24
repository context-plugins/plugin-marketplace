import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dataDeletionRequestIndexResponseSchema,
  type DataDeletionRequestIndexResponse,
} from "../models/data-deletion-request-index-response.js";
import {
  dataDeletionRequestResponseSchema,
  type DataDeletionRequestResponse,
} from "../models/data-deletion-request-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsDataPrivacyDeletionRequestsRequestSchema,
  type PublicationsDataPrivacyDeletionRequestsRequest,
} from "../models/publications-data-privacy-deletion-requests-request.js";
import type { Servers } from "../servers.js";

export class DataDeletion {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create data deletion request OAuth Scope: data_deletion:write
   *
   * @remarks
   * This is a gated feature that requires enablement. Contact support to enable Data Deletion API
   * access for your organization.
   *
   * Creates a data deletion request for a subscriber within your organization. The subscriber's
   * data will be redacted from all publications in the organization after a 14-day safety delay.
   * This action cannot be undone once processing begins.
   *
   * API keys restricted to specific publications cannot access this endpoint and will receive a 403
   * response, since deletion requests apply to the entire workspace.
   *
   * @returns Created
   *
   * @throws {@link DataDeletion.Create5Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create5(
    request: DataDeletion.Create5Request,
    options?: RequestOptions,
  ): ApiPromise<DataDeletionRequestResponse, DataDeletion.Create5Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/data_privacy/deletion_requests"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsDataPrivacyDeletionRequestsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: dataDeletionRequestResponseSchema },
        errorFactory: DataDeletion.Create5Error,
      },
      options,
    );
  }

  /**
   * List data deletion requests OAuth Scope: data_deletion:read
   *
   * @remarks
   * This is a gated feature that requires enablement. Contact support to enable Data Deletion API
   * access for your organization.
   *
   * List all data deletion requests for your organization.
   *
   * API keys restricted to specific publications cannot access this endpoint and will receive a 403
   * response, since deletion requests apply to the entire workspace.
   *
   * @returns OK
   *
   * @throws {@link DataDeletion.Index11Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index11(
    request: DataDeletion.Index11Request,
    options?: RequestOptions,
  ): ApiPromise<DataDeletionRequestIndexResponse, DataDeletion.Index11Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/data_privacy/deletion_requests"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataDeletionRequestIndexResponseSchema },
        errorFactory: DataDeletion.Index11Error,
      },
      options,
    );
  }

  /**
   * Get data deletion request OAuth Scope: data_deletion:read
   *
   * @remarks
   * This is a gated feature that requires enablement. Contact support to enable Data Deletion API
   * access for your organization.
   *
   * Retrieve the details and current status of a specific data deletion request.
   *
   * API keys restricted to specific publications cannot access this endpoint and will receive a 403
   * response, since deletion requests apply to the entire workspace.
   *
   * @returns OK
   *
   * @throws {@link DataDeletion.Show8Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show8(
    request: DataDeletion.Show8Request,
    options?: RequestOptions,
  ): ApiPromise<DataDeletionRequestResponse, DataDeletion.Show8Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/data_privacy/deletion_requests/{id}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataDeletionRequestResponseSchema },
        errorFactory: DataDeletion.Show8Error,
      },
      options,
    );
  }
}

export namespace DataDeletion {
  export type Create5Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsDataPrivacyDeletionRequestsRequest;
  };

  export class Create5Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create5Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index11Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index11Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index11Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show8Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the data deletion request */
    id: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show8Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show8Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
