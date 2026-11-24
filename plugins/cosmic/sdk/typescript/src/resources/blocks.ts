import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { blocksResponseSchema, type BlocksResponse } from "../models/blocks-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Content Blocks configured on the Bucket.
 */
export class Blocks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List content Blocks
   *
   * @remarks
   * Retrieve the content Blocks configured on the Bucket. Returns an empty array when the Bucket
   * has none.
   *
   * @returns The Bucket's content Blocks.
   *
   * @throws {@link Blocks.ListBlocksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBlocks(
    request: Blocks.ListBlocksRequest,
    options?: RequestOptions,
  ): ApiPromise<BlocksResponse, Blocks.ListBlocksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/blocks"),
        auth: this.#auth.readKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: blocksResponseSchema },
        errorFactory: Blocks.ListBlocksError,
      },
      options,
    );
  }
}

export namespace Blocks {
  export type ListBlocksRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Bucket read key. Required unless the Bucket has no read key configured. */
    readKey?: string;
    /**
     * Set to `true` to indent the JSON response for human reading. Increases response size.
     *
     * @default false
     */
    pretty?: boolean;
  };

  export class ListBlocksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBlocksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
