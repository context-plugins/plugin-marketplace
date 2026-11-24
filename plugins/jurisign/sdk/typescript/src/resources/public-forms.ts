import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { publicFormsRequestInternalSchema, type PublicFormsRequest } from "../models/public-forms-request.js";
import { publicFormsRequest1Schema, type PublicFormsRequest1 } from "../models/public-forms-request1.js";
import {
  publicFormsResponseInternalSchema,
  type PublicFormsResponse,
} from "../models/public-forms-response.js";
import {
  publicFormsResponse1InternalSchema,
  type PublicFormsResponse1,
} from "../models/public-forms-response1.js";
import {
  publicFormsRotateTokenResponseInternalSchema,
  type PublicFormsRotateTokenResponse,
} from "../models/public-forms-rotate-token-response.js";
import { validationError1Schema, type ValidationError1 } from "../models/validation-error1.js";
import type { Servers } from "../servers.js";

/**
 * Shareable links: each respondent signs their own generated request, no account needed
 */
export class PublicForms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Public Form
   *
   * @remarks
   * Publish a shareable link backed by one of your sign request templates. Anyone opening the link
   * fills in their details and becomes the signer of their own signature request, generated on the
   * fly. The template MUST have exactly one signer and its own copy of the PDF.
   *
   * @returns Public form created
   *
   * @throws {@link PublicForms.CreatePublicFormError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPublicForm(
    request: PublicForms.CreatePublicFormRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicFormsResponse1, PublicForms.CreatePublicFormError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/public-forms"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicFormsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: publicFormsResponse1InternalSchema },
        errorFactory: PublicForms.CreatePublicFormError,
      },
      options,
    );
  }

  /**
   * Delete Public Form
   *
   * @returns Public form deleted
   *
   * @throws {@link PublicForms.DeletePublicFormError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePublicForm(
    request: PublicForms.DeletePublicFormRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, PublicForms.DeletePublicFormError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/public-forms/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: PublicForms.DeletePublicFormError,
      },
      options,
    );
  }

  /**
   * Get Public Form
   *
   * @returns Public form details
   *
   * @throws {@link PublicForms.GetPublicFormError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPublicForm(
    request: PublicForms.GetPublicFormRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicFormsResponse1, PublicForms.GetPublicFormError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/public-forms/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicFormsResponse1InternalSchema },
        errorFactory: PublicForms.GetPublicFormError,
      },
      options,
    );
  }

  /**
   * List Public Forms
   *
   * @remarks
   * Retrieve the shareable public forms (PowerForms) of your organization.
   *
   * @returns Public forms list
   *
   * @throws {@link PublicForms.ListPublicFormsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPublicForms(
    request: PublicForms.ListPublicFormsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicFormsResponse, PublicForms.ListPublicFormsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/public-forms"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicFormsResponseInternalSchema },
        errorFactory: PublicForms.ListPublicFormsError,
      },
      options,
    );
  }

  /**
   * Rotate Public Form Token
   *
   * @remarks
   * Generate a new public token. The previous link stops working immediately — use this if a link
   * leaked or was shared too widely.
   *
   * @returns New token generated
   *
   * @throws {@link PublicForms.RotatePublicFormTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rotatePublicFormToken(
    request: PublicForms.RotatePublicFormTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicFormsRotateTokenResponse, PublicForms.RotatePublicFormTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/public-forms/{id}/rotate-token"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicFormsRotateTokenResponseInternalSchema },
        errorFactory: PublicForms.RotatePublicFormTokenError,
      },
      options,
    );
  }

  /**
   * Update Public Form
   *
   * @remarks
   * Rename, pause/reactivate, change the expiry or the daily cap.
   *
   * @returns Public form updated
   *
   * @throws {@link PublicForms.UpdatePublicFormError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePublicForm(
    request: PublicForms.UpdatePublicFormRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicFormsResponse1, PublicForms.UpdatePublicFormError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/public-forms/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicFormsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: publicFormsResponse1InternalSchema },
        errorFactory: PublicForms.UpdatePublicFormError,
      },
      options,
    );
  }
}

export namespace PublicForms {
  export type CreatePublicFormRequest = {
    body: PublicFormsRequest;
  };

  export class CreatePublicFormError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePublicFormError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
    ];
  }

  export type DeletePublicFormRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DeletePublicFormError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePublicFormError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type GetPublicFormRequest = {
    /** Resource UUID */
    id: string;
  };

  export class GetPublicFormError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPublicFormError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type ListPublicFormsRequest = {
    /** @default 20 */
    perPage?: number;
  };

  export class ListPublicFormsError extends ApiError {
    declare readonly payload: Declared<"messageResponse", MessageResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListPublicFormsError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type RotatePublicFormTokenRequest = {
    /** Resource UUID */
    id: string;
  };

  export class RotatePublicFormTokenError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RotatePublicFormTokenError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type UpdatePublicFormRequest = {
    /** Resource UUID */
    id: string;
    body?: PublicFormsRequest1;
  };

  export class UpdatePublicFormError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePublicFormError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }
}
