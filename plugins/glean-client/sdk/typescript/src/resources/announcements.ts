import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { announcementSchema, type Announcement } from "../models/announcement.js";
import {
  createAnnouncementRequestSchema,
  type CreateAnnouncementRequest,
} from "../models/create-announcement-request.js";
import {
  deleteAnnouncementRequestSchema,
  type DeleteAnnouncementRequest,
} from "../models/delete-announcement-request.js";
import {
  updateAnnouncementRequestSchema,
  type UpdateAnnouncementRequest,
} from "../models/update-announcement-request.js";
import type { Servers } from "../servers.js";

export class Announcements {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Announcement
   *
   * @remarks
   * Create a textual announcement visible to some set of users based on department and location.
   *
   * @returns OK
   *
   * @throws {@link Announcements.CreateannouncementError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createannouncement(
    request: Announcements.CreateannouncementRequest,
    options?: RequestOptions,
  ): ApiPromise<Announcement, Announcements.CreateannouncementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/createannouncement"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createAnnouncementRequestSchema },
      },
      {
        success: { kind: "json", schema: announcementSchema },
        errorFactory: Announcements.CreateannouncementError,
      },
      options,
    );
  }

  /**
   * Delete Announcement
   *
   * @remarks
   * Delete an existing user-generated announcement.
   *
   * @returns OK
   *
   * @throws {@link Announcements.DeleteannouncementError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteannouncement(
    request: Announcements.DeleteannouncementRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Announcements.DeleteannouncementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/deleteannouncement"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deleteAnnouncementRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Announcements.DeleteannouncementError,
      },
      options,
    );
  }

  /**
   * Update Announcement
   *
   * @remarks
   * Update a textual announcement visible to some set of users based on department and location.
   *
   * @returns OK
   *
   * @throws {@link Announcements.UpdateannouncementError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateannouncement(
    request: Announcements.UpdateannouncementRequest,
    options?: RequestOptions,
  ): ApiPromise<Announcement, Announcements.UpdateannouncementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/updateannouncement"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateAnnouncementRequestSchema },
      },
      {
        success: { kind: "json", schema: announcementSchema },
        errorFactory: Announcements.UpdateannouncementError,
      },
      options,
    );
  }
}

export namespace Announcements {
  export type CreateannouncementRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Announcement content */
    body: CreateAnnouncementRequest;
  };

  export class CreateannouncementError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateannouncementError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteannouncementRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Delete announcement request */
    body: DeleteAnnouncementRequest;
  };

  export class DeleteannouncementError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteannouncementError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateannouncementRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Announcement content. Id need to be specified for the announcement. */
    body: UpdateAnnouncementRequest;
  };

  export class UpdateannouncementError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateannouncementError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
