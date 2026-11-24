import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  automateRecycleKeyJsonResponseSchema,
  type AutomateRecycleKeyJsonResponse,
} from "../models/automate-recycle-key-json-response.js";
import type { Servers } from "../servers.js";

/**
 * Operations on Automate access keys.
 */
export class AccessKey {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Recycle access key
   *
   * @remarks
   * Generates a new access key, invalidating the old one.
   *
   * @returns New access key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recycleAccessKey(options?: RequestOptions): ApiPromise<AutomateRecycleKeyJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/automate/recycle_key.json"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automateRecycleKeyJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
