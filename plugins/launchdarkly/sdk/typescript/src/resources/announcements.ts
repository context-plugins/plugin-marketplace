import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  announcementPatchOperationSchema,
  type AnnouncementPatchOperation,
} from "../models/announcement-patch-operation.js";
import { announcementResponseSchema, type AnnouncementResponse } from "../models/announcement-response.js";
import {
  createAnnouncementBodySchema,
  type CreateAnnouncementBody,
} from "../models/create-announcement-body.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  getAnnouncementsPublic200ResponseSchema,
  type GetAnnouncementsPublic200Response,
} from "../models/get-announcements-public200-response.js";
import { status9Schema, type Status9 } from "../models/status9.js";
import type { Servers } from "../servers.js";

/**
 * The announcements API lets you create and update a custom announcement banner that appears in the
 * LaunchDarkly user interface for everyone in your organization. You can use the banner to display
 * organization-wide information, such as upcoming holidays, code freeze periods, or reminders on
 * best practices. You can have one banner visible at a time.
 *
 * To learn more, read [Organization
 * announcements](https://launchdarkly.com/docs/home/account/org-announcements).
 */
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
   * Create an announcement
   *
   * @remarks
   * Create an announcement
   *
   * @returns Created announcement
   *
   * @throws {@link Announcements.CreateAnnouncementPublicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAnnouncementPublic(
    request: Announcements.CreateAnnouncementPublicRequest,
    options?: RequestOptions,
  ): ApiPromise<AnnouncementResponse, Announcements.CreateAnnouncementPublicError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/announcements"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createAnnouncementBodySchema },
      },
      {
        success: { kind: "json", schema: announcementResponseSchema },
        errorFactory: Announcements.CreateAnnouncementPublicError,
      },
      options,
    );
  }

  /**
   * Delete an announcement
   *
   * @remarks
   * Delete an announcement
   *
   * @returns No content
   *
   * @throws {@link Announcements.DeleteAnnouncementPublicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAnnouncementPublic(
    request: Announcements.DeleteAnnouncementPublicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Announcements.DeleteAnnouncementPublicError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/announcements/{announcementId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "announcementId", value: request.announcementId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Announcements.DeleteAnnouncementPublicError,
      },
      options,
    );
  }

  /**
   * Get announcements
   *
   * @remarks
   * Get announcements
   *
   * @returns Announcement response
   *
   * @throws {@link Announcements.GetAnnouncementsPublicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAnnouncementsPublic(
    request: Announcements.GetAnnouncementsPublicRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAnnouncementsPublic200Response, Announcements.GetAnnouncementsPublicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/announcements"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status9Schema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAnnouncementsPublic200ResponseSchema },
        errorFactory: Announcements.GetAnnouncementsPublicError,
      },
      options,
    );
  }

  /**
   * Update an announcement
   *
   * @remarks
   * Update an announcement
   *
   * @returns Updated announcement
   *
   * @throws {@link Announcements.UpdateAnnouncementPublicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateAnnouncementPublic(
    request: Announcements.UpdateAnnouncementPublicRequest,
    options?: RequestOptions,
  ): ApiPromise<AnnouncementResponse, Announcements.UpdateAnnouncementPublicError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/announcements/{announcementId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "announcementId", value: request.announcementId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => announcementPatchOperationSchema)),
        },
      },
      {
        success: { kind: "json", schema: announcementResponseSchema },
        errorFactory: Announcements.UpdateAnnouncementPublicError,
      },
      options,
    );
  }
}

export namespace Announcements {
  export type CreateAnnouncementPublicRequest = {
    /** Announcement request body */
    body: CreateAnnouncementBody;
  };

  export class CreateAnnouncementPublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAnnouncementPublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAnnouncementPublicRequest = {
    announcementId: string;
  };

  export class DeleteAnnouncementPublicError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAnnouncementPublicError> = [
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAnnouncementsPublicRequest = {
    /** Filter announcements by status. */
    status?: Status9;
    /** The number of announcements to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
  };

  export class GetAnnouncementsPublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAnnouncementsPublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateAnnouncementPublicRequest = {
    announcementId: string;
    /** Update announcement request body */
    body: AnnouncementPatchOperation[];
  };

  export class UpdateAnnouncementPublicError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAnnouncementPublicError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
