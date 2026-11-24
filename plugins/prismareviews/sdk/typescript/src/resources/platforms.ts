import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { platformIdSchema, type PlatformId } from "../models/platform-id.js";
import { platformListInternalSchema, type PlatformList } from "../models/platform-list.js";
import { platformInternalSchema, type Platform } from "../models/platform.js";
import type { Servers } from "../servers.js";

/**
 * How each platform connects, the fields it needs and whether your workspace can connect it.
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
   * Get a platform
   *
   * @remarks
   * One platform of `GET /v1/platforms`.
   *
   * @returns The platform.
   *
   * @throws {@link Platforms.GetPlatformError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlatform(
    request: Platforms.GetPlatformRequest,
    options?: RequestOptions,
  ): ApiPromise<Platform, Platforms.GetPlatformError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/platforms/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: platformIdSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformInternalSchema },
        errorFactory: Platforms.GetPlatformError,
      },
      options,
    );
  }

  /**
   * List platforms
   *
   * @remarks
   * Every platform with how it connects, the exact fields `POST /v1/connections` expects, setup
   * steps for the account owner, an example body and whether this workspace can connect it now.
   * Enough to connect a platform without reading the docs.
   *
   * @returns All platforms.
   *
   * @throws {@link Platforms.ListPlatformsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPlatforms(options?: RequestOptions): ApiPromise<PlatformList, Platforms.ListPlatformsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/platforms"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformListInternalSchema },
        errorFactory: Platforms.ListPlatformsError,
      },
      options,
    );
  }
}

export namespace Platforms {
  export type GetPlatformRequest = {
    /** Platform ID. */
    id: PlatformId;
  };

  export class GetPlatformError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlatformError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class ListPlatformsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPlatformsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
