import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { binarySchema, type Binary } from "../models/binary.js";
import type { Servers } from "../servers.js";

/**
 * Raw clinical document content.
 */
export class BinaryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve raw document content
   *
   * @returns The document content (CCDA, PDF, or other format).
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readBinary(request: BinaryApi.ReadBinaryRequest, options?: RequestOptions): ApiPromise<Binary, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Binary/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: binarySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace BinaryApi {
  export type ReadBinaryRequest = {
    /** The logical id of the resource. */
    id: string;
  };
}
