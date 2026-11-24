import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  connectionResponseResourceSchema,
  type ConnectionResponseResource,
} from "../models/connection-response-resource.js";
import { jobsMfaRequestSchema, type JobsMfaRequest } from "../models/jobs-mfa-request.js";
import { jobsMfa400Error1Schema, type JobsMfa400Error1 } from "../models/jobs-mfa400-error1.js";
import { jobsMfa401Error1Schema, type JobsMfa401Error1 } from "../models/jobs-mfa401-error1.js";
import { jobsMfa403Error1Schema, type JobsMfa403Error1 } from "../models/jobs-mfa403-error1.js";
import { jobsMfa404Error1Schema, type JobsMfa404Error1 } from "../models/jobs-mfa404-error1.js";
import { jobsMfa500Error1Schema, type JobsMfa500Error1 } from "../models/jobs-mfa500-error1.js";
import { jobs400Error1Schema, type Jobs400Error1 } from "../models/jobs400-error1.js";
import { jobs401Error1Schema, type Jobs401Error1 } from "../models/jobs401-error1.js";
import { jobs403Error1Schema, type Jobs403Error1 } from "../models/jobs403-error1.js";
import { jobs404Error1Schema, type Jobs404Error1 } from "../models/jobs404-error1.js";
import { jobs500Error1Schema, type Jobs500Error1 } from "../models/jobs500-error1.js";
import { jobsResponse3Schema, type JobsResponse3 } from "../models/unions/jobs-response3.js";
import { usersJobsResponseSchema, type UsersJobsResponse } from "../models/users-jobs-response.js";
import { usersJobs400Error1Schema, type UsersJobs400Error1 } from "../models/users-jobs400-error1.js";
import { usersJobs401Error1Schema, type UsersJobs401Error1 } from "../models/users-jobs401-error1.js";
import { usersJobs403Error1Schema, type UsersJobs403Error1 } from "../models/users-jobs403-error1.js";
import { usersJobs404Error1Schema, type UsersJobs404Error1 } from "../models/users-jobs404-error1.js";
import { usersJobs500Error1Schema, type UsersJobs500Error1 } from "../models/users-jobs500-error1.js";
import type { Servers } from "../servers.js";

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
   * Retrieve a job
   *
   * @remarks
   * Retrieves the details of an existing job. You need only supply the unique job identifier that
   * was returned upon job creation.
   *
   * @returns Returns a job details if a valid job ID was provided.
   *
   * @throws {@link Jobs.GetJobsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getJobs(
    request: Jobs.GetJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<JobsResponse3, Jobs.GetJobsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/jobs/{jobId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: jobsResponse3Schema },
        errorFactory: Jobs.GetJobsError,
      },
      options,
    );
  }

  /**
   * Get user jobs
   *
   * @remarks
   * Retrieves the details of all existing and previous jobs associated with a user.
   *
   * **Note:** This endpoint only returns jobs that are less than 7 days old.
   *
   * @returns Returns a list of jobs with details.
   *
   * @throws {@link Jobs.GetUserJobsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserJobs(
    request: Jobs.GetUserJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersJobsResponse, Jobs.GetUserJobsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/jobs"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersJobsResponseSchema },
        errorFactory: Jobs.GetUserJobsError,
      },
      options,
    );
  }

  /**
   * Create MFA response
   *
   * @remarks
   * Ensure that you generate an authentication token with scope = CLIENT_ACCESS and basiq-version =
   * 3.0 to create this resource
   *
   * @returns Returns a job if MFA response was correct. Returns an error otherwise.
   *
   * @throws {@link Jobs.PostJobMfaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postJobMfa(
    request: Jobs.PostJobMfaRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionResponseResource, Jobs.PostJobMfaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/jobs/{jobId}/mfa"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jobsMfaRequestSchema },
      },
      {
        success: { kind: "json", schema: connectionResponseResourceSchema },
        errorFactory: Jobs.PostJobMfaError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type GetJobsRequest = {
    /** The identifier of the job to be retrieved. */
    jobId: string;
  };

  export class GetJobsError extends ApiError {
    declare readonly payload:
      | Declared<"jobs400Error1", Jobs400Error1>
      | Declared<"jobs401Error1", Jobs401Error1>
      | Declared<"jobs403Error1", Jobs403Error1>
      | Declared<"jobs404Error1", Jobs404Error1>
      | Declared<"jobs500Error1", Jobs500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetJobsError> = [
      { on: 400, kind: "jobs400Error1", decode: { kind: "json", schema: jobs400Error1Schema } },
      { on: 401, kind: "jobs401Error1", decode: { kind: "json", schema: jobs401Error1Schema } },
      { on: 403, kind: "jobs403Error1", decode: { kind: "json", schema: jobs403Error1Schema } },
      { on: 404, kind: "jobs404Error1", decode: { kind: "json", schema: jobs404Error1Schema } },
      { on: 500, kind: "jobs500Error1", decode: { kind: "json", schema: jobs500Error1Schema } },
    ];
  }

  export type GetUserJobsRequest = {
    /** User identifier */
    userId: string;
    /** Connection identification filter. e.g. connection.id.eq('ab63cd') */
    filter?: string;
  };

  export class GetUserJobsError extends ApiError {
    declare readonly payload:
      | Declared<"usersJobs400Error1", UsersJobs400Error1>
      | Declared<"usersJobs401Error1", UsersJobs401Error1>
      | Declared<"usersJobs403Error1", UsersJobs403Error1>
      | Declared<"usersJobs404Error1", UsersJobs404Error1>
      | Declared<"usersJobs500Error1", UsersJobs500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserJobsError> = [
      { on: 400, kind: "usersJobs400Error1", decode: { kind: "json", schema: usersJobs400Error1Schema } },
      { on: 401, kind: "usersJobs401Error1", decode: { kind: "json", schema: usersJobs401Error1Schema } },
      { on: 403, kind: "usersJobs403Error1", decode: { kind: "json", schema: usersJobs403Error1Schema } },
      { on: 404, kind: "usersJobs404Error1", decode: { kind: "json", schema: usersJobs404Error1Schema } },
      { on: 500, kind: "usersJobs500Error1", decode: { kind: "json", schema: usersJobs500Error1Schema } },
    ];
  }

  export type PostJobMfaRequest = {
    /** The identifier of the job. */
    jobId: string;
    body: JobsMfaRequest;
  };

  export class PostJobMfaError extends ApiError {
    declare readonly payload:
      | Declared<"jobsMfa400Error1", JobsMfa400Error1>
      | Declared<"jobsMfa401Error1", JobsMfa401Error1>
      | Declared<"jobsMfa403Error1", JobsMfa403Error1>
      | Declared<"jobsMfa404Error1", JobsMfa404Error1>
      | Declared<"jobsMfa500Error1", JobsMfa500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostJobMfaError> = [
      { on: 400, kind: "jobsMfa400Error1", decode: { kind: "json", schema: jobsMfa400Error1Schema } },
      { on: 401, kind: "jobsMfa401Error1", decode: { kind: "json", schema: jobsMfa401Error1Schema } },
      { on: 403, kind: "jobsMfa403Error1", decode: { kind: "json", schema: jobsMfa403Error1Schema } },
      { on: 404, kind: "jobsMfa404Error1", decode: { kind: "json", schema: jobsMfa404Error1Schema } },
      { on: 500, kind: "jobsMfa500Error1", decode: { kind: "json", schema: jobsMfa500Error1Schema } },
    ];
  }
}
