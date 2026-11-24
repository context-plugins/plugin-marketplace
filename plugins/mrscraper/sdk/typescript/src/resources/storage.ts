import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { storage400Error1Schema, type Storage400Error1 } from "../models/storage400-error1.js";
import { storage403Error1Schema, type Storage403Error1 } from "../models/storage403-error1.js";
import { storage404Error1Schema, type Storage404Error1 } from "../models/storage404-error1.js";
import { storage503Error1Schema, type Storage503Error1 } from "../models/storage503-error1.js";
import type { Servers } from "../servers.js";

export class Storage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a stored result
   *
   * @remarks
   * Returns the stored body directly with application/json content type, without a message/data
   * envelope. The key may contain multiple path segments and must belong to the authenticated user.
   *
   * @returns Raw stored result body; its shape depends on the saved result
   *
   * @throws {@link Storage.GetStorageByKeyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MrScraperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStorageByKey(
    request: Storage.GetStorageByKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Storage.GetStorageByKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultScraperServiceGatewayAuthApi("/storage/{key}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.bearerAuth),
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Storage.GetStorageByKeyError,
      },
      options,
    );
  }
}

export namespace Storage {
  export type GetStorageByKeyRequest = {
    /** Full storage key, for example results/<user-scope>/<uuid>.json */
    key: string;
  };

  export class GetStorageByKeyError extends ApiError {
    declare readonly payload:
      | Declared<"storage400Error1", Storage400Error1>
      | Declared<"error401", Record<string, unknown>>
      | Declared<"storage403Error1", Storage403Error1>
      | Declared<"storage404Error1", Storage404Error1>
      | Declared<"storage503Error1", Storage503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStorageByKeyError> = [
      { on: 400, kind: "storage400Error1", decode: { kind: "json", schema: storage400Error1Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
      { on: 403, kind: "storage403Error1", decode: { kind: "json", schema: storage403Error1Schema } },
      { on: 404, kind: "storage404Error1", decode: { kind: "json", schema: storage404Error1Schema } },
      { on: 503, kind: "storage503Error1", decode: { kind: "json", schema: storage503Error1Schema } },
    ];
  }
}
