import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  supportV1MetadataProductsResponseSchema,
  type SupportV1MetadataProductsResponse,
} from "../models/support-v1-metadata-products-response.js";
import type { Servers } from "../servers.js";

/**
 * Metadata about cloud services and offerings.
 */
export class Products {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List available products
   *
   * @remarks
   * Returns a list of all the available products of specific platforms.
   *
   * @returns OK - List of available products returned.
   *
   * @throws {@link Products.ListProductsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProducts(
    request: Products.ListProductsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SupportV1MetadataProductsResponse, Products.ListProductsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/support/v1/metadata/products"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "platform", value: request.platform, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportV1MetadataProductsResponseSchema },
        errorFactory: Products.ListProductsError,
      },
      options,
    );
  }
}

export namespace Products {
  export type ListProductsRequest = {
    platform?: string;
  };

  export class ListProductsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListProductsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
