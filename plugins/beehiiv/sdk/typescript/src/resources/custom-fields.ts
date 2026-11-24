import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  customFieldIndexResponseSchema,
  type CustomFieldIndexResponse,
} from "../models/custom-field-index-response.js";
import { customFieldResponseSchema, type CustomFieldResponse } from "../models/custom-field-response.js";
import {
  customFieldsDeleteResponseSchema,
  type CustomFieldsDeleteResponse,
} from "../models/custom-fields-delete-response.js";
import {
  customFieldsPatchResponseSchema,
  type CustomFieldsPatchResponse,
} from "../models/custom-fields-patch-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsCustomFieldsRequestSchema,
  type PublicationsCustomFieldsRequest,
} from "../models/publications-custom-fields-request.js";
import {
  publicationsCustomFieldsRequest1Schema,
  type PublicationsCustomFieldsRequest1,
} from "../models/publications-custom-fields-request1.js";
import type { Servers } from "../servers.js";

export class CustomFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create custom field OAuth Scope: custom_fields:write
   *
   * @remarks
   * Create a custom field on a publication, for use in subscriptions.
   *
   * @returns OK
   *
   * @throws {@link CustomFields.Create4Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create4(
    request: CustomFields.Create4Request,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldResponse, CustomFields.Create4Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/custom_fields"),
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
          schema: s.optional(s.lazy(() => publicationsCustomFieldsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customFieldResponseSchema },
        errorFactory: CustomFields.Create4Error,
      },
      options,
    );
  }

  /**
   * Delete custom field OAuth Scope: custom_fields:write
   *
   * @remarks
   * Delete a custom field from a publication.
   *
   * @returns No Content
   *
   * @throws {@link CustomFields.DeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete(
    request: CustomFields.DeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsDeleteResponse, CustomFields.DeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/publications/{publicationId}/custom_fields/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldsDeleteResponseSchema },
        errorFactory: CustomFields.DeleteError,
      },
      options,
    );
  }

  /**
   * List custom fields OAuth Scope: custom_fields:read
   *
   * @remarks
   * List all custom fields on a publication.
   *
   * @returns OK
   *
   * @throws {@link CustomFields.Index10Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index10(
    request: CustomFields.Index10Request,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldIndexResponse, CustomFields.Index10Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/custom_fields"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldIndexResponseSchema },
        errorFactory: CustomFields.Index10Error,
      },
      options,
    );
  }

  /**
   * Update custom field OAuth Scope: custom_fields:write
   *
   * @remarks
   * Update a custom field on a publication.
   *
   * @returns OK
   *
   * @throws {@link CustomFields.Patch2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patch2(
    request: CustomFields.Patch2Request,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldsPatchResponse, CustomFields.Patch2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/publications/{publicationId}/custom_fields/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsCustomFieldsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: customFieldsPatchResponseSchema },
        errorFactory: CustomFields.Patch2Error,
      },
      options,
    );
  }

  /**
   * Update custom field OAuth Scope: custom_fields:write
   *
   * @remarks
   * Update a custom field on a publication.
   *
   * @returns OK
   *
   * @throws {@link CustomFields.Put2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  put2(
    request: CustomFields.Put2Request,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldResponse, CustomFields.Put2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/publications/{publicationId}/custom_fields/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsCustomFieldsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: customFieldResponseSchema },
        errorFactory: CustomFields.Put2Error,
      },
      options,
    );
  }

  /**
   * Get custom field OAuth Scope: custom_fields:read
   *
   * @remarks
   * View a specific custom field on a publication.
   *
   * @returns OK
   *
   * @throws {@link CustomFields.Show7Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show7(
    request: CustomFields.Show7Request,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldResponse, CustomFields.Show7Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/custom_fields/{id}"),
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
        success: { kind: "json", schema: customFieldResponseSchema },
        errorFactory: CustomFields.Show7Error,
      },
      options,
    );
  }
}

export namespace CustomFields {
  export type Create4Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsCustomFieldsRequest;
  };

  export class Create4Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create4Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the Custom Fields object */
    id: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class DeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index10Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index10Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index10Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Patch2Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the Custom Fields object */
    id: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsCustomFieldsRequest1;
  };

  export class Patch2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Patch2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Put2Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the Custom Fields object */
    id: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsCustomFieldsRequest1;
  };

  export class Put2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Put2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show7Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the Custom Fields object */
    id: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show7Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show7Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
