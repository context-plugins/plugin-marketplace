import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { customFieldInternalSchema, type CustomField } from "../models/custom-field.js";
import { dataConflictErrorSchema, type DataConflictError } from "../models/data-conflict-error.js";
import { updateCustomFieldInternalSchema, type UpdateCustomField } from "../models/update-custom-field.js";
import type { Servers } from "../servers.js";

export class CustomFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Custom Field
   *
   * @returns No Content
   *
   * @throws {@link CustomFields.DeleteCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomField(
    request: CustomFields.DeleteCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomFields.DeleteCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/custom-fields/{custom-field-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "custom-field-public-id", value: request.customFieldPublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomFields.DeleteCustomFieldError,
      },
      options,
    );
  }

  /**
   * Get Custom Field
   *
   * @returns Resource
   *
   * @throws {@link CustomFields.GetCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomField(
    request: CustomFields.GetCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomField, CustomFields.GetCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/custom-fields/{custom-field-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "custom-field-public-id", value: request.customFieldPublicId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldInternalSchema },
        errorFactory: CustomFields.GetCustomFieldError,
      },
      options,
    );
  }

  /**
   * List Custom Fields
   *
   * @returns Resource
   *
   * @throws {@link CustomFields.ListCustomFieldsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomFields(options?: RequestOptions): ApiPromise<CustomField[], CustomFields.ListCustomFieldsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/custom-fields"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customFieldInternalSchema)) },
        errorFactory: CustomFields.ListCustomFieldsError,
      },
      options,
    );
  }

  /**
   * Update Custom Field
   *
   * @remarks
   * Update Custom Field can be used to update the definition of a Custom Field. The order of items
   * in the 'values' collection is interpreted to be their ascending sort order.To delete an
   * existing enum value, simply omit it from the 'values' collection. New enum values may be
   * created inline by including an object in the 'values' collection having a 'value' entry with no
   * 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).
   *
   * @returns Resource
   *
   * @throws {@link CustomFields.UpdateCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomField(
    request: CustomFields.UpdateCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomField, CustomFields.UpdateCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/custom-fields/{custom-field-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "custom-field-public-id", value: request.customFieldPublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomFieldInternalSchema },
      },
      {
        success: { kind: "json", schema: customFieldInternalSchema },
        errorFactory: CustomFields.UpdateCustomFieldError,
      },
      options,
    );
  }
}

export namespace CustomFields {
  export type DeleteCustomFieldRequest = {
    /** The unique ID of the CustomField. */
    customFieldPublicId: string;
  };

  export class DeleteCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomFieldError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetCustomFieldRequest = {
    /** The unique ID of the CustomField. */
    customFieldPublicId: string;
  };

  export class GetCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomFieldError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListCustomFieldsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomFieldsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateCustomFieldRequest = {
    /** The unique ID of the CustomField. */
    customFieldPublicId: string;
    body: UpdateCustomField;
  };

  export class UpdateCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"dataConflictError", DataConflictError>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomFieldError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "dataConflictError", decode: { kind: "json", schema: dataConflictErrorSchema } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
