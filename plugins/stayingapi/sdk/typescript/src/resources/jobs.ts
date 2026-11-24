import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorEnvelopeInternalSchema, type ErrorEnvelope } from "../models/error-envelope.js";
import { jobResponseInternalSchema, type JobResponse } from "../models/unions/job-response.js";
import type { Servers } from "../servers.js";

/**
 * Async job polling
 */
export class Jobs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Poll an async job (always 0 credits)
   *
   * @remarks
   * Poll until status is terminal (completed | failed). While pending/running the response carries
   * a Retry-After header. Enforces jobs.user_id == caller; unknown/not-owned/expired →
   * job_not_found (404).
   *
   * @returns Job status. pending/running carry a Retry-After header; completed carries the payload
   * at data.result; FAILED is HTTP 200 with the failure nested at data.error (NOT a top-level
   * error) and creditsCharged 0. Branch on data.status — see JobResponse.
   *
   * @throws {@link Jobs.PollJobError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pollJob(
    request: Jobs.PollJobRequest,
    options?: RequestOptions,
  ): ApiPromise<JobResponse, Jobs.PollJobError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/jobs/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobResponseInternalSchema },
        errorFactory: Jobs.PollJobError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type PollJobRequest = {
    /** job_-prefixed id. */
    jobId: string;
  };

  export class PollJobError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<PollJobError> = [
      { on: 401, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 404, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }
}
