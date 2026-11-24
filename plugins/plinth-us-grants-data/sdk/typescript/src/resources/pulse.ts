import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { pulseCreateSchema, type PulseCreate } from "../models/pulse-create.js";
import { pulsePatchSchema, type PulsePatch } from "../models/pulse-patch.js";
import { checks2Schema, type Checks2 } from "../models/unions/checks2.js";
import { format1Schema, type Format1 } from "../models/unions/format1.js";
import type { Servers } from "../servers.js";

/**
 * Recurring monitoring over a set of EINs: compliance, filings, grants, government funding,
 * governance, and web signals, delivered as a page, email, or PDF. Pro keys only.
 */
export class Pulse {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a monitoring subscription
   *
   * @remarks
   * Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the
   * organizations against the last run and reports what moved: compliance screen changes, new Form
   * 990 data, new grants in and out of the graph, government funding movement, officer and trustee
   * roster changes, and web press and job-posting signals. The digest is available as JSON, an HTML
   * page, a PDF, and optionally by email.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.CreatePulseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPulse(
    request: Pulse.CreatePulseRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.CreatePulseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/pulse"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pulseCreateSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.CreatePulseError,
      },
      options,
    );
  }

  /**
   * Delete a subscription and its stored runs
   *
   * @remarks
   * Removes the subscription, its check state and every stored digest. There is no undo; pausing
   * with `active: false` is the reversible form.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.DeletePulseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deletePulse(
    request: Pulse.DeletePulseRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.DeletePulseError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/pulse/{sub_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "sub_id", value: request.subId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.DeletePulseError,
      },
      options,
    );
  }

  /**
   * One subscription, with its latest run summary
   *
   * @remarks
   * The subscription's configuration plus the id, timestamp and severity totals of its most recent
   * digest, if one has run.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.GetPulseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPulse(
    request: Pulse.GetPulseRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.GetPulseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pulse/{sub_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "sub_id", value: request.subId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.GetPulseError,
      },
      options,
    );
  }

  /**
   * The most recent digest (JSON, HTML, or PDF)
   *
   * @remarks
   * The digest payload as JSON by default; `format=html` renders the self-contained page (the same
   * document the email carries), `format=pdf` the retainable report. Every finding is dated and
   * carries its source; the provenance footer states the filing lag and what was not checked.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.GetPulseLatestError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPulseLatest(
    request: Pulse.GetPulseLatestRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.GetPulseLatestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pulse/{sub_id}/latest"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "sub_id", value: request.subId, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.GetPulseLatestError,
      },
      options,
    );
  }

  /**
   * One stored digest (JSON, HTML, or PDF)
   *
   * @remarks
   * A specific past digest, unchanged since it ran — the same three formats as /latest.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.GetPulseRunError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPulseRun(
    request: Pulse.GetPulseRunRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.GetPulseRunError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pulse/{sub_id}/runs/{run_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "sub_id", value: request.subId, schema: s.string() },
          { name: "run_id", value: request.runId, schema: s.string() },
        ],
        query: [{ name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.GetPulseRunError,
      },
      options,
    );
  }

  /**
   * List your monitoring subscriptions
   *
   * @remarks
   * Every subscription created with this key, newest first. Subscriptions are scoped to the key
   * that created them; another key's subscriptions are not listed and answer 404 by id.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.ListPulseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listPulse(options?: RequestOptions): ApiPromise<Record<string, unknown>, Pulse.ListPulseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pulse"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.ListPulseError,
      },
      options,
    );
  }

  /**
   * Run history for a subscription
   *
   * @remarks
   * Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.ListPulseRunsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listPulseRuns(
    request: Pulse.ListPulseRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.ListPulseRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pulse/{sub_id}/runs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "sub_id", value: request.subId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.ListPulseRunsError,
      },
      options,
    );
  }

  /**
   * Run now and return the digest
   *
   * @remarks
   * Runs the checks synchronously and returns the digest. The first run is a baseline: it records
   * what is on file today and reports changes from the next run on. `checks` narrows the run;
   * `format=html|pdf` renders it.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.RunPulseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  runPulse(
    request: Pulse.RunPulseRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.RunPulseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/pulse/{sub_id}/run"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "sub_id", value: request.subId, schema: s.string() }],
        query: [
          { name: "checks", value: request.checks, schema: s.optional(s.lazy(() => checks2Schema)) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.RunPulseError,
      },
      options,
    );
  }

  /**
   * Update EINs, frequency, checks, delivery, or pause
   *
   * @remarks
   * Any field omitted is left as it is. Changing the frequency re-anchors the next run from now;
   * `active: false` pauses scheduled runs without deleting state, so unpausing resumes the diff
   * rather than re-baselining.
   *
   * @returns Successful Response
   *
   * @throws {@link Pulse.UpdatePulseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updatePulse(
    request: Pulse.UpdatePulseRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Pulse.UpdatePulseError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/pulse/{sub_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "sub_id", value: request.subId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pulsePatchSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Pulse.UpdatePulseError,
      },
      options,
    );
  }
}

export namespace Pulse {
  export type CreatePulseRequest = {
    body: PulseCreate;
  };

  export class CreatePulseError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePulseError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeletePulseRequest = {
    subId: string;
  };

  export class DeletePulseError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePulseError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetPulseRequest = {
    subId: string;
  };

  export class GetPulseError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPulseError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetPulseLatestRequest = {
    subId: string;
    /** json (default) or xml. */
    format?: Format1;
  };

  export class GetPulseLatestError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPulseLatestError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetPulseRunRequest = {
    subId: string;
    runId: string;
    /** json (default) or xml. */
    format?: Format1;
  };

  export class GetPulseRunError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPulseRunError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export class ListPulseError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPulseError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListPulseRunsRequest = {
    subId: string;
  };

  export class ListPulseRunsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPulseRunsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RunPulseRequest = {
    subId: string;
    /**
     * Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people,
     * web. Omit for the subscription's full set.
     */
    checks?: Checks2;
    /** json (default) or xml. */
    format?: Format1;
  };

  export class RunPulseError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunPulseError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdatePulseRequest = {
    subId: string;
    body: PulsePatch;
  };

  export class UpdatePulseError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePulseError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
