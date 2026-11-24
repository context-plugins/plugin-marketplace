import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1AudiencesResolveRequestInternalSchema,
  type ApiV1AudiencesResolveRequest,
} from "../models/api-v1-audiences-resolve-request.js";
import {
  apiV1AudiencesResolveResponseInternalSchema,
  type ApiV1AudiencesResolveResponse,
} from "../models/api-v1-audiences-resolve-response.js";
import type { Servers } from "../servers.js";

export class Audiences {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Resolve natural-language audience phrases
   *
   * @returns Resolution result with disambiguation candidates
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1AudiencesResolve(
    request: Audiences.PostApiV1AudiencesResolveRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AudiencesResolveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/audiences/resolve"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AudiencesResolveRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AudiencesResolveResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Audiences {
  export type PostApiV1AudiencesResolveRequest = {
    body?: ApiV1AudiencesResolveRequest;
  };
}
