import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1EvidenceVerifyResponseSchema,
  type ApiV1EvidenceVerifyResponse,
} from "../models/api-v1-evidence-verify-response.js";
import type { Servers } from "../servers.js";

export class Evidence {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Verify an evidence pack — no credential
   *
   * @remarks
   * Send an evidence pack exactly as the JSON export produced it. The answer says whether its
   * digest recomputes (the file matches itself) and whether its Ed25519 signature checks out
   * against this deployment's current key, published at `/.well-known/deliverd-evidence-key`.
   * Nothing is stored. `deliverd verify ` makes the same check offline, which does not rely on
   * asking us.
   *
   * @returns The verdict
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1EvidenceVerify(
    request: Evidence.PostApiV1EvidenceVerifyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1EvidenceVerifyResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/evidence/verify"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: apiV1EvidenceVerifyResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Evidence {
  export type PostApiV1EvidenceVerifyRequest = {
    body?: Record<string, unknown>;
  };
}
