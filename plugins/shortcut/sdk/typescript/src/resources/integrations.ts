import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createGenericIntegrationInternalSchema,
  type CreateGenericIntegration,
} from "../models/create-generic-integration.js";
import type { Servers } from "../servers.js";

export class Integrations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Generic Integration
   *
   * @returns No Content
   *
   * @throws {@link Integrations.CreateGenericIntegrationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGenericIntegration(
    request: Integrations.CreateGenericIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Integrations.CreateGenericIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/integrations/webhook"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createGenericIntegrationInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Integrations.CreateGenericIntegrationError,
      },
      options,
    );
  }

  /**
   * Delete Generic Integration
   *
   * @returns No Content
   *
   * @throws {@link Integrations.DeleteGenericIntegrationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGenericIntegration(
    request: Integrations.DeleteGenericIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Integrations.DeleteGenericIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/integrations/webhook/{integration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "integration-public-id", value: request.integrationPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Integrations.DeleteGenericIntegrationError,
      },
      options,
    );
  }

  /**
   * Get Generic Integration
   *
   * @returns Resource
   *
   * @throws {@link Integrations.GetGenericIntegrationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGenericIntegration(
    request: Integrations.GetGenericIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Integrations.GetGenericIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/integrations/webhook/{integration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "integration-public-id", value: request.integrationPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Integrations.GetGenericIntegrationError,
      },
      options,
    );
  }
}

export namespace Integrations {
  export type CreateGenericIntegrationRequest = {
    body: CreateGenericIntegration;
  };

  export class CreateGenericIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGenericIntegrationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteGenericIntegrationRequest = {
    integrationPublicId: number;
  };

  export class DeleteGenericIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGenericIntegrationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetGenericIntegrationRequest = {
    integrationPublicId: number;
  };

  export class GetGenericIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGenericIntegrationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
