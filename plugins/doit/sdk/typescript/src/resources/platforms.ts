import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  supportV1MetadataPlatformsResponseSchema,
  type SupportV1MetadataPlatformsResponse,
} from "../models/support-v1-metadata-platforms-response.js";
import type { Servers } from "../servers.js";

/**
 * Metadata about supported cloud providers.
 */
export class Platforms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List available platforms
   *
   * @remarks
   * Returns a list of all the available platforms.
   *
   * @returns OK - List of available platforms returned.
   *
   * @throws {@link Platforms.ListPlatformsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPlatforms(
    options?: RequestOptions,
  ): ApiPromise<SupportV1MetadataPlatformsResponse, Platforms.ListPlatformsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/support/v1/metadata/platforms"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportV1MetadataPlatformsResponseSchema },
        errorFactory: Platforms.ListPlatformsError,
      },
      options,
    );
  }
}

export namespace Platforms {
  export class ListPlatformsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPlatformsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
