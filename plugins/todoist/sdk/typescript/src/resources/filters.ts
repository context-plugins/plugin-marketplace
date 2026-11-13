import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

/**
 * Filters are created and updated via the `/sync` endpoint. They can also be deleted with the
 * endpoint below.
 */
export class Filters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Filter
   *
   * @remarks
   * Delete a personal filter.
   *
   * Only available on plans that include filters. Returns a not found error if the filter doesn't
   * exist, was already deleted, or belongs to another user. Workspace filters can't be deleted with
   * this endpoint.
   *
   * @returns Successful Response
   *
   * @throws {@link Filters.DeleteFilterApiV1FiltersFilterIdDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFilterApiV1FiltersFilterIdDelete(
    request: Filters.DeleteFilterApiV1FiltersFilterIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Filters.DeleteFilterApiV1FiltersFilterIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/filters/{filter_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "filter_id", value: request.filterId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Filters.DeleteFilterApiV1FiltersFilterIdDeleteError,
      },
      options,
    );
  }
}

export namespace Filters {
  export type DeleteFilterApiV1FiltersFilterIdDeleteRequest = {
    filterId: number;
  };

  export class DeleteFilterApiV1FiltersFilterIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFilterApiV1FiltersFilterIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
