import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Index employee people data.
 */
export class People {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk index employees
   *
   * @remarks
   * Replaces all the currently indexed employees using paginated batch API calls. Please refer to
   * the [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model)
   * documentation for an explanation of how to use bulk endpoints.
   *
   * @returns OK
   *
   * @throws {@link People.BulkIndexEmployeesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  bulkIndexEmployees(options?: RequestOptions): ApiPromise<undefined, People.BulkIndexEmployeesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/bulkindexemployees"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.BulkIndexEmployeesError,
      },
      options,
    );
  }

  /**
   * Bulk index employees
   *
   * @remarks
   * Bulk upload details of all the employees. This deletes all employees uploaded in the prior
   * batch. SOON TO BE DEPRECATED in favor of /bulkindexemployees.
   *
   * @returns OK
   *
   * @throws {@link People.BulkIndexEmployees1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  bulkIndexEmployees1(options?: RequestOptions): ApiPromise<undefined, People.BulkIndexEmployees1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexemployeelist"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.BulkIndexEmployees1Error,
      },
      options,
    );
  }

  /**
   * Bulk index teams
   *
   * @remarks
   * Replaces all the currently indexed teams using paginated batch API calls. Please refer to the
   * [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model)
   * documentation for an explanation of how to use bulk endpoints.
   *
   * @returns OK
   *
   * @throws {@link People.BulkIndexTeamsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  bulkIndexTeams(options?: RequestOptions): ApiPromise<undefined, People.BulkIndexTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/bulkindexteams"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.BulkIndexTeamsError,
      },
      options,
    );
  }

  /**
   * Delete employee
   *
   * @remarks
   * Delete an employee. Silently succeeds if employee is not present.
   *
   * @returns OK
   *
   * @throws {@link People.DeleteEmployeeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteEmployee(options?: RequestOptions): ApiPromise<undefined, People.DeleteEmployeeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/deleteemployee"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.DeleteEmployeeError,
      },
      options,
    );
  }

  /**
   * Delete team
   *
   * @remarks
   * Delete a team based on provided id.
   *
   * @returns OK
   *
   * @throws {@link People.DeleteTeamError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteTeam(options?: RequestOptions): ApiPromise<undefined, People.DeleteTeamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/deleteteam"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.DeleteTeamError,
      },
      options,
    );
  }

  /**
   * Index employee
   *
   * @remarks
   * Adds an employee or replaces the existing information about an employee.
   *
   * @returns OK
   *
   * @throws {@link People.IndexEmployeeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexEmployee(options?: RequestOptions): ApiPromise<undefined, People.IndexEmployeeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexemployee"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.IndexEmployeeError,
      },
      options,
    );
  }

  /**
   * Index team
   *
   * @remarks
   * Adds a team or updates information about a team
   *
   * @returns OK
   *
   * @throws {@link People.IndexTeamError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexTeam(options?: RequestOptions): ApiPromise<undefined, People.IndexTeamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexteam"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.IndexTeamError,
      },
      options,
    );
  }

  /**
   * Schedules the processing of uploaded employees and teams
   *
   * @remarks
   * Schedules the immediate processing of employees and teams uploaded through the indexing API. By
   * default all uploaded people data will be processed asynchronously but this API can be used to
   * schedule its processing on demand.
   *
   * @returns OK
   *
   * @throws {@link People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  schedulesTheProcessingOfUploadedEmployeesAndTeams(
    options?: RequestOptions,
  ): ApiPromise<undefined, People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/processallemployeesandteams"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.SchedulesTheProcessingOfUploadedEmployeesAndTeamsError,
      },
      options,
    );
  }
}

export namespace People {
  export class BulkIndexEmployeesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexEmployeesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class BulkIndexEmployees1Error extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexEmployees1Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class BulkIndexTeamsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexTeamsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class DeleteEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEmployeeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class DeleteTeamError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTeamError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class IndexEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexEmployeeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class IndexTeamError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexTeamError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class SchedulesTheProcessingOfUploadedEmployeesAndTeamsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SchedulesTheProcessingOfUploadedEmployeesAndTeamsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
