import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createRequestSchema, type CreateRequest } from "../models/create-request.js";
import type { Servers } from "../servers.js";

export class Rest {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create an Instacart link to the shopping list of ingredients
   *
   * @returns Instacart link to the shopping list of ingredients.
   *
   * @throws {@link Rest.CreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create(
    request: Rest.CreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Rest.CreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultInstacartRestApi("/rest/llm_integration/openapi/v2_1/recipes"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Rest.CreateError,
      },
      options,
    );
  }
}

export namespace Rest {
  export type CreateRequestParams = {
    body: CreateRequest;
  };

  export class CreateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
