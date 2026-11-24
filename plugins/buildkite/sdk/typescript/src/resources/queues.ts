import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class Queues {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Queues For A Cluster
   *
   * @returns A list of queues
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQueues(request: Queues.ListQueuesRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{org}/clusters/{cluster}/queues"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "cluster", value: request.cluster, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Queues {
  export type ListQueuesRequest = {
    /** Organization slug */
    org: string;
    /** Cluster UUID */
    cluster: string;
  };
}
