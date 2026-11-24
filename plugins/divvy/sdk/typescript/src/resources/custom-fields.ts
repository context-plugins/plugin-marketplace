import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  createCustomFieldRequestDtoSchema,
  type CreateCustomFieldRequestDto,
} from "../models/create-custom-field-request-dto.js";
import {
  createCustomFieldValueRequestDtoInternalSchema,
  createCustomFieldValueRequestDtoSchema,
  type CreateCustomFieldValueRequestDto,
} from "../models/create-custom-field-value-request-dto.js";
import {
  customFieldResponseDtoSchema,
  type CustomFieldResponseDto,
} from "../models/custom-field-response-dto.js";
import {
  customFieldValueResponseDtoSchema,
  type CustomFieldValueResponseDto,
} from "../models/custom-field-value-response-dto.js";
import {
  deleteCustomFieldValuesRequestDtoInternalSchema,
  deleteCustomFieldValuesRequestDtoSchema,
  type DeleteCustomFieldValuesRequestDto,
} from "../models/delete-custom-field-values-request-dto.js";
import {
  paginationResponseDtoCustomFieldResponseDtoSchema,
  type PaginationResponseDtoCustomFieldResponseDto,
} from "../models/pagination-response-dto-custom-field-response-dto.js";
import {
  paginationResponseDtoCustomFieldValueResponseDtoSchema,
  type PaginationResponseDtoCustomFieldValueResponseDto,
} from "../models/pagination-response-dto-custom-field-value-response-dto.js";
import {
  updateCustomFieldRequestDtoSchema,
  type UpdateCustomFieldRequestDto,
} from "../models/update-custom-field-request-dto.js";
import type { Servers } from "../servers.js";

export class CustomFields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a custom field
   *
   * @remarks
   * Create a new custom field.
   *
   * See Transactions in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a custom field response
   *
   * @throws {@link CustomFields.CreateCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomField(
    request: CustomFields.CreateCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldResponseDto, CustomFields.CreateCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/custom-fields"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createCustomFieldRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: customFieldResponseDtoSchema },
        errorFactory: CustomFields.CreateCustomFieldError,
      },
      options,
    );
  }

  /**
   * Create a custom field value
   *
   * @remarks
   * Create a new value for an existing custom field.
   *
   * @returns Create a custom field value response
   *
   * @throws {@link CustomFields.CreateCustomFieldValuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomFieldValues(
    request: CustomFields.CreateCustomFieldValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldValueResponseDto[], CustomFields.CreateCustomFieldValuesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/custom-fields/{customFieldId}/values"),
        auth: noneAuth,
        pathParams: [{ name: "customFieldId", value: request.customFieldId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createCustomFieldValueRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customFieldValueResponseDtoSchema)) },
        errorFactory: CustomFields.CreateCustomFieldValuesError,
      },
      options,
    );
  }

  /**
   * Delete a custom field
   *
   * @remarks
   * Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom
   * field is not available in the list of custom fields.
   *
   * @returns Delete a custom field response
   *
   * @throws {@link CustomFields.DeleteCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.default("/v3/spend/custom-fields/{customFieldId}"),
        auth: noneAuth,
        pathParams: [{ name: "customFieldId", value: request.customFieldId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Delete a custom field value
   *
   * @remarks
   * Delete an existing custom field value.
   *
   * A deleted value cannot be restored. The deleted value is not available in the list of custom
   * field values. In addition, the deleted value cannot be assigned to current or future
   * transactions. The deleted value will continue to be assigned to past transactions.
   *
   * @returns Delete a custom field value response
   *
   * @throws {@link CustomFields.DeleteCustomFieldValueError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomFieldValue(
    request: CustomFields.DeleteCustomFieldValueRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomFields.DeleteCustomFieldValueError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/custom-fields/{customFieldId}/values"),
        auth: noneAuth,
        pathParams: [{ name: "customFieldId", value: request.customFieldId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deleteCustomFieldValuesRequestDtoInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomFields.DeleteCustomFieldValueError,
      },
      options,
    );
  }

  /**
   * Get custom field details
   *
   * @remarks
   * Get details about an existing custom field.
   *
   * @returns Get custom field details response
   *
   * @throws {@link CustomFields.GetCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomField(
    request: CustomFields.GetCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldResponseDto, CustomFields.GetCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/custom-fields/{customFieldId}"),
        auth: noneAuth,
        pathParams: [{ name: "customFieldId", value: request.customFieldId, schema: s.string() }],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldResponseDtoSchema },
        errorFactory: CustomFields.GetCustomFieldError,
      },
      options,
    );
  }

  /**
   * Get custom field value details
   *
   * @remarks
   * Get details about an existing custom field value.
   *
   * @returns Get custom field value details response
   *
   * @throws {@link CustomFields.GetCustomFieldValuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomFieldValues(
    request: CustomFields.GetCustomFieldValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldValueResponseDto, CustomFields.GetCustomFieldValuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/spend/custom-fields/{customFieldId}/values/{customFieldValueId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "customFieldId", value: request.customFieldId, schema: s.string() },
          { name: "customFieldValueId", value: request.customFieldValueId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customFieldValueResponseDtoSchema },
        errorFactory: CustomFields.GetCustomFieldValuesError,
      },
      options,
    );
  }

  /**
   * Get list of custom field values
   *
   * @remarks
   * Get a list of custom field value objects. By default, you get 20 results on one page of
   * results. Set `max` in your request to get up to 100 results on one page.
   *
   * @returns Get list of custom field values response
   *
   * @throws {@link CustomFields.ListCustomFieldValuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomFieldValues(
    request: CustomFields.ListCustomFieldValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoCustomFieldValueResponseDto, CustomFields.ListCustomFieldValuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/custom-fields/{customFieldId}/values"),
        auth: noneAuth,
        pathParams: [{ name: "customFieldId", value: request.customFieldId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoCustomFieldValueResponseDtoSchema },
        errorFactory: CustomFields.ListCustomFieldValuesError,
      },
      options,
    );
  }

  /**
   * Get list of custom fields
   *
   * @remarks
   * Get a list of custom field objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * @returns Get list of custom fields response
   *
   * @throws {@link CustomFields.ListCustomFieldsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomFields(
    request: CustomFields.ListCustomFieldsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoCustomFieldResponseDto, CustomFields.ListCustomFieldsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/custom-fields"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoCustomFieldResponseDtoSchema },
        errorFactory: CustomFields.ListCustomFieldsError,
      },
      options,
    );
  }

  /**
   * Update a custom field
   *
   * @remarks
   * Update details about an existing custom field.
   *
   * @returns Update a custom field response
   *
   * @throws {@link CustomFields.UpdateCustomFieldError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomField(
    request: CustomFields.UpdateCustomFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomFieldResponseDto, CustomFields.UpdateCustomFieldError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/spend/custom-fields/{customFieldId}"),
        auth: noneAuth,
        pathParams: [{ name: "customFieldId", value: request.customFieldId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateCustomFieldRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: customFieldResponseDtoSchema },
        errorFactory: CustomFields.UpdateCustomFieldError,
      },
      options,
    );
  }
}

export namespace CustomFields {
  export type CreateCustomFieldRequest = {
    apiToken?: string | null;
    body: CreateCustomFieldRequestDto;
  };

  export class CreateCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomFieldError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateCustomFieldValuesRequest = {
    customFieldId: string;
    apiToken?: string | null;
    body: CreateCustomFieldValueRequestDto;
  };

  export const createCustomFieldValuesRequestSchema: Schema<CreateCustomFieldValuesRequest> = s.lazySchema(
    () =>
      s.object<CreateCustomFieldValuesRequest>({
        customFieldId: s.string().check(s.minLength(1)),
        apiToken: s.optionalNullable(s.string()),
        body: createCustomFieldValueRequestDtoSchema,
      }),
  );

  export class CreateCustomFieldValuesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomFieldValuesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeleteCustomFieldRequest = {
    customFieldId: string;
    apiToken?: string | null;
  };

  export const deleteCustomFieldRequestSchema: Schema<DeleteCustomFieldRequest> = s.lazySchema(() =>
    s.object<DeleteCustomFieldRequest>({
      customFieldId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomFieldError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeleteCustomFieldValueRequest = {
    customFieldId: string;
    apiToken?: string | null;
    body: DeleteCustomFieldValuesRequestDto;
  };

  export const deleteCustomFieldValueRequestSchema: Schema<DeleteCustomFieldValueRequest> = s.lazySchema(() =>
    s.object<DeleteCustomFieldValueRequest>({
      customFieldId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: deleteCustomFieldValuesRequestDtoSchema,
    }),
  );

  export class DeleteCustomFieldValueError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomFieldValueError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCustomFieldRequest = {
    customFieldId: string;
    apiToken?: string | null;
  };

  export const getCustomFieldRequestSchema: Schema<GetCustomFieldRequest> = s.lazySchema(() =>
    s.object<GetCustomFieldRequest>({
      customFieldId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomFieldError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCustomFieldValuesRequest = {
    customFieldId: string;
    customFieldValueId: string;
    apiToken?: string | null;
  };

  export const getCustomFieldValuesRequestSchema: Schema<GetCustomFieldValuesRequest> = s.lazySchema(() =>
    s.object<GetCustomFieldValuesRequest>({
      customFieldId: s.string().check(s.minLength(1)),
      customFieldValueId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetCustomFieldValuesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomFieldValuesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListCustomFieldValuesRequest = {
    customFieldId: string;
    max?: number | null;
    nextPage?: string | null;
    prevPage?: string | null;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listCustomFieldValuesRequestSchema: Schema<ListCustomFieldValuesRequest> = s.lazySchema(() =>
    s.object<ListCustomFieldValuesRequest>({
      customFieldId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListCustomFieldValuesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomFieldValuesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListCustomFieldsRequest = {
    max?: number | null;
    nextPage?: string | null;
    prevPage?: string | null;
    sort?: string | null;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listCustomFieldsRequestSchema: Schema<ListCustomFieldsRequest> = s.lazySchema(() =>
    s.object<ListCustomFieldsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListCustomFieldsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomFieldsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateCustomFieldRequest = {
    customFieldId: string;
    apiToken?: string | null;
    body: UpdateCustomFieldRequestDto;
  };

  export const updateCustomFieldRequestSchema: Schema<UpdateCustomFieldRequest> = s.lazySchema(() =>
    s.object<UpdateCustomFieldRequest>({
      customFieldId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: updateCustomFieldRequestDtoSchema,
    }),
  );

  export class UpdateCustomFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomFieldError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
