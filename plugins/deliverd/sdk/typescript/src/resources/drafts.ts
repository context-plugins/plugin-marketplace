import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1DraftsRequestInternalSchema,
  type ApiV1DraftsRequest,
} from "../models/api-v1-drafts-request.js";
import { apiV1DraftsResponseSchema, type ApiV1DraftsResponse } from "../models/api-v1-drafts-response.js";
import type { Servers } from "../servers.js";

export class Drafts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Publish now, claim later — no credential
   *
   * @remarks
   * For an AI with no Deliverd connection. Send an HTML document (JSON `{ html, title?, sourceTool?
   * }` or a raw `text/html` body) and give the person the `claimUrl` that comes back. They sign in,
   * or create a free account, and publish it with one click; it is private to them until they share
   * it. Nothing is served from a draft before then. Drafts are scanned for credentials, capped at 2
   * MB, rate limited per address, single use, and expire after 24 hours. Answers `413 too_large`,
   * `422 scan_blocked` or `429 rate_limited` when refused.
   *
   * @returns Draft stored; hand the claim link to the person
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Drafts(
    request: Drafts.PostApiV1DraftsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1DraftsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/drafts"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1DraftsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1DraftsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Drafts {
  export type PostApiV1DraftsRequest = {
    body?: ApiV1DraftsRequest;
  };
}
