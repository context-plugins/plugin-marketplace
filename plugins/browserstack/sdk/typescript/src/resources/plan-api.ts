import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { planSchema, type Plan } from "../models/plan.js";
import type { Servers } from "../servers.js";

/**
 * Operations describing the current Automate subscription plan and capacity.
 */
export class PlanApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get plan details
   *
   * @remarks
   * Returns details of the current Automate subscription plan including parallel session capacity
   * and current usage.
   *
   * @returns Plan details
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlan(options?: RequestOptions): ApiPromise<Plan, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/plan.json"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: planSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
