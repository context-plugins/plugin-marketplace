import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { templatesResponseSchema, type TemplatesResponse } from "../models/templates-response.js";
import { templatesResponse1Schema, type TemplatesResponse1 } from "../models/templates-response1.js";
import {
  templatesSignRequestsRequestInternalSchema,
  type TemplatesSignRequestsRequest,
} from "../models/templates-sign-requests-request.js";
import {
  templatesSignRequestsResponseInternalSchema,
  type TemplatesSignRequestsResponse,
} from "../models/templates-sign-requests-response.js";
import { validationError1Schema, type ValidationError1 } from "../models/validation-error1.js";
import type { Servers } from "../servers.js";

/**
 * Reusable sign request templates
 */
export class Templates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Sign Request From Template
   *
   * @remarks
   * Create a signature request from a template, reusing its signers, signature zones, and (if
   * present) its own copy of the document. Subject, message, expiry and redirect_url can be
   * overridden. If the template has no document of its own, `document_id` is required.
   *
   * @returns Sign request created from template
   *
   * @throws {@link Templates.CreateSignRequestFromTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignRequestFromTemplate(
    request: Templates.CreateSignRequestFromTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<TemplatesSignRequestsResponse, Templates.CreateSignRequestFromTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/templates/{id}/sign-requests"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => templatesSignRequestsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: templatesSignRequestsResponseInternalSchema },
        errorFactory: Templates.CreateSignRequestFromTemplateError,
      },
      options,
    );
  }

  /**
   * Delete Template
   *
   * @remarks
   * Delete a template and its own copy of the PDF, if any.
   *
   * @returns Template deleted
   *
   * @throws {@link Templates.DeleteTemplateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTemplate(
    request: Templates.DeleteTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, Templates.DeleteTemplateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/templates/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Templates.DeleteTemplateError,
      },
      options,
    );
  }

  /**
   * Get Template
   *
   * @remarks
   * Retrieve full details of a template, including signers and signature zones.
   *
   * @returns Template details
   *
   * @throws {@link Templates.GetTemplateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTemplate(
    request: Templates.GetTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<TemplatesResponse1, Templates.GetTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/templates/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: templatesResponse1Schema },
        errorFactory: Templates.GetTemplateError,
      },
      options,
    );
  }

  /**
   * List Sign Request Templates
   *
   * @remarks
   * Retrieve reusable sign request templates for your organization.
   *
   * @returns Templates list
   *
   * @throws {@link Templates.ListTemplatesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTemplates(
    request: Templates.ListTemplatesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TemplatesResponse, Templates.ListTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/templates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: templatesResponseSchema },
        errorFactory: Templates.ListTemplatesError,
      },
      options,
    );
  }
}

export namespace Templates {
  export type CreateSignRequestFromTemplateRequest = {
    /** Resource UUID */
    id: string;
    body?: TemplatesSignRequestsRequest;
  };

  export class CreateSignRequestFromTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignRequestFromTemplateError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
    ];
  }

  export type DeleteTemplateRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DeleteTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTemplateError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type GetTemplateRequest = {
    /** Resource UUID */
    id: string;
  };

  export class GetTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTemplateError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type ListTemplatesRequest = {
    /** @default 20 */
    perPage?: number;
    /** @default 1 */
    page?: number;
  };

  export class ListTemplatesError extends ApiError {
    declare readonly payload: Declared<"messageResponse", MessageResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListTemplatesError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }
}
