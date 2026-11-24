import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  packagedComponentInputSchema,
  type PackagedComponentInput,
} from "../models/packaged-component-input.js";
import { packagedComponentSchema, type PackagedComponent } from "../models/packaged-component.js";
import type { Servers } from "../servers.js";

/**
 * Manage packaged components and integration pack attachments.
 */
export class Components {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Create a packaged component
   *
   * @remarks
   * Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed
   * to environments.
   *
   * @returns The created packaged component.
   *
   * @throws {@link Components.CreatePackagedComponentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPackagedComponent(
    request: Components.CreatePackagedComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<PackagedComponent, Components.CreatePackagedComponentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/PackagedComponent"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: packagedComponentInputSchema },
      },
      {
        success: { kind: "json", schema: packagedComponentSchema },
        errorFactory: Components.CreatePackagedComponentError,
      },
      options,
    );
  }

  /**
   * Boomi Get a packaged component
   *
   * @remarks
   * Retrieves the details of a specific packaged component by its ID.
   *
   * @returns The packaged component object.
   *
   * @throws {@link Components.GetPackagedComponentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPackagedComponent(
    request: Components.GetPackagedComponentRequest,
    options?: RequestOptions,
  ): ApiPromise<PackagedComponent, Components.GetPackagedComponentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/PackagedComponent/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: packagedComponentSchema },
        errorFactory: Components.GetPackagedComponentError,
      },
      options,
    );
  }
}

export namespace Components {
  export type CreatePackagedComponentRequest = {
    body: PackagedComponentInput;
  };

  export class CreatePackagedComponentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePackagedComponentError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPackagedComponentRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class GetPackagedComponentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPackagedComponentError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
