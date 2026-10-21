import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  platformListDepartmentsResponseSchema,
  type PlatformListDepartmentsResponse,
} from "../models/platform-list-departments-response.js";
import type { Servers } from "../servers.js";

export class Departments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List departments
   *
   * @remarks
   * List the departments in the Glean directory, ordered by display_name and then by department_id.
   * The list includes every department that at least one user belongs to or that a usage limit
   * names, so a caller can show the name of a department that a usage limit still names after its
   * users leave it. Department names are exact, so names that differ only by case are different
   * departments.
   *
   * @returns Successful response.
   *
   * @throws {@link Departments.PlatformDepartmentsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformDepartmentsList(
    request: Departments.PlatformDepartmentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformListDepartmentsResponse, Departments.PlatformDepartmentsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/departments"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformListDepartmentsResponseSchema },
        errorFactory: Departments.PlatformDepartmentsListError,
      },
      options,
    );
  }
}

export namespace Departments {
  export type PlatformDepartmentsListRequest = {
    /** Maximum number of departments to return. Defaults to 50. Maximum is 100. @default 50 */
    pageSize?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
  };

  export class PlatformDepartmentsListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformDepartmentsListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
