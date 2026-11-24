import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { enumsRequestSchema, type EnumsRequest } from "../models/enums-request.js";
import { fieldsRequestSchema, type FieldsRequest } from "../models/fields-request.js";
import { typesRequestSchema, type TypesRequest } from "../models/types-request.js";
import type { Servers } from "../servers.js";

/**
 * Custom fields, enums, object types.
 */
export class Registry {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a value to an enum group (idempotent)
   *
   * @returns Updated value set
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEnumValue(
    request: Registry.CreateEnumValueRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/enums"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: enumsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Register a custom field on an object
   *
   * @returns Field set
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createField(
    request: Registry.CreateFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/fields"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fieldsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Register a custom object type (schema grouping only)
   *
   * @returns Type set
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createType(
    request: Registry.CreateTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/types"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: typesRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * All enum groups and their values
   *
   * @returns Enum groups
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEnums(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/enums"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Registry {
  export type CreateEnumValueRequest = {
    body: EnumsRequest;
  };

  export type CreateFieldRequest = {
    body: FieldsRequest;
  };

  export type CreateTypeRequest = {
    body: TypesRequest;
  };
}
