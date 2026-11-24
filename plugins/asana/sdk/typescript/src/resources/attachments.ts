import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  attachmentsResponseInternalSchema,
  type AttachmentsResponse,
} from "../models/attachments-response.js";
import { attachmentsResponse1Schema, type AttachmentsResponse1 } from "../models/attachments-response1.js";
import { attachmentsResponse2Schema, type AttachmentsResponse2 } from "../models/attachments-response2.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { resourceSubtype1Schema, type ResourceSubtype1 } from "../models/resource-subtype1.js";
import type { Servers } from "../servers.js";

/**
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded
 * file or one associated via a third-party service such as Dropbox or Google Drive.
 */
export class Attachments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Upload an attachment
   *
   * @remarks
   * Upload an attachment.
   *
   * This method uploads an attachment on an object and returns the compact record for the created
   * attachment object. This is possible by either:
   *
   * - Providing the URL of the external resource being attached, or
   * - Downloading the file content first and then uploading it as any other attachment. Note that
   *   it is not possible to attach files from third party services such as Dropbox, Box, Vimeo &
   *   Google Drive via the API
   *
   * The 100MB size limit on attachments in Asana is enforced on this endpoint.
   *
   * This endpoint expects a multipart/form-data encoded request containing the full contents of the
   * file to be uploaded.
   *
   * Requests made should follow the HTTP/1.1 specification that line terminators are of the form
   * `CRLF` or `\r\n` outlined here in order for the server to reliably and properly handle the
   * request.
   *
   * @returns Successfully uploaded the attachment to the parent object.
   *
   * @throws {@link Attachments.CreateAttachmentForObjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAttachmentForObject(
    request: Attachments.CreateAttachmentForObjectRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AttachmentsResponse, Attachments.CreateAttachmentForObjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/attachments"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "resource_subtype",
              value: request.resourceSubtype,
              schema: s.optional(s.lazy(() => resourceSubtype1Schema)),
            },
            { kind: "file", name: "file", value: request.file },
            { kind: "text", name: "parent", value: request.parent, schema: s.optional(s.string()) },
            { kind: "text", name: "url", value: request.url, schema: s.optional(s.string()) },
            { kind: "text", name: "name", value: request.name, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "connect_to_app",
              value: request.connectToApp,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: attachmentsResponseInternalSchema },
        errorFactory: Attachments.CreateAttachmentForObjectError,
      },
      options,
    );
  }

  /**
   * Delete an attachment
   *
   * @remarks
   * Deletes a specific, existing attachment.
   *
   * Returns an empty data record.
   *
   * @returns Successfully deleted the specified attachment.
   *
   * @throws {@link Attachments.DeleteAttachmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAttachment(
    request: Attachments.DeleteAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentsResponse1, Attachments.DeleteAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/attachments/{attachment_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "attachment_gid", value: request.attachmentGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentsResponse1Schema },
        errorFactory: Attachments.DeleteAttachmentError,
      },
      options,
    );
  }

  /**
   * Get an attachment
   *
   * @remarks
   * Get the full record for a single attachment.
   *
   * @returns Successfully retrieved the record for a single attachment.
   *
   * @throws {@link Attachments.GetAttachmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAttachment(
    request: Attachments.GetAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentsResponse, Attachments.GetAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/attachments/{attachment_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "attachment_gid", value: request.attachmentGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentsResponseInternalSchema },
        errorFactory: Attachments.GetAttachmentError,
      },
      options,
    );
  }

  /**
   * Get attachments from an object
   *
   * @remarks
   * Returns the compact records for all attachments on the object.
   *
   * There are three possible `parent` values for this request: `project`, `project_brief`, and
   * `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section
   * in the project Overview. For a project brief, an attachment refers to inline files in the
   * project brief itself. For a task, an attachment refers to a file directly associated to that
   * task.
   *
   * @returns Successfully retrieved the specified object's attachments.
   *
   * @throws {@link Attachments.GetAttachmentsForObjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAttachmentsForObject(
    request: Attachments.GetAttachmentsForObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentsResponse2, Attachments.GetAttachmentsForObjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/attachments"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "parent", value: request.parent, schema: s.string() },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentsResponse2Schema },
        errorFactory: Attachments.GetAttachmentsForObjectError,
      },
      options,
    );
  }
}

export namespace Attachments {
  export type CreateAttachmentForObjectRequest = {
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * The type of the attachment. Must be one of the given values. If not specified, a file
     * attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is
     * `external`, a `parent`, `name`, and `url` must also be provided.
     */
    resourceSubtype?: ResourceSubtype1;
    /** Required for `asana` attachments. */
    file?: FileInput;
    /** Required identifier of the parent task, project, or project_brief, as a string. */
    parent?: string;
    /**
     * The URL of the external resource being attached. Required for attachments of type `external`.
     */
    url?: string;
    /**
     * The name of the external resource being attached. Required for attachments of type
     * `external`.
     */
    name?: string;
    /**
     * *Optional*. Only relevant for external attachments with a parent task. A boolean indicating
     * whether the current app should be connected with the attachment for the purposes of showing
     * an app components widget. Requires the app to have been added to a project the parent task is
     * in.
     */
    connectToApp?: boolean;
  };

  export class CreateAttachmentForObjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAttachmentForObjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteAttachmentRequest = {
    /** Globally unique identifier for the attachment. */
    attachmentGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class DeleteAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAttachmentError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAttachmentRequest = {
    /** Globally unique identifier for the attachment. */
    attachmentGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class GetAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Declared<"errorResponse9", ErrorResponse>
      | Declared<"errorResponse10", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAttachmentError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 424, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 501, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse9", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 504, kind: "errorResponse10", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAttachmentsForObjectRequest = {
    /**
     * Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`,
     * `project_brief`, or `task`.
     */
    parent: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetAttachmentsForObjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAttachmentsForObjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
