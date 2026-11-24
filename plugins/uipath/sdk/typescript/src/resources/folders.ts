import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  oDataFolderCollectionSchema,
  type ODataFolderCollection,
} from "../models/odata-folder-collection.js";
import type { Servers } from "../servers.js";

/**
 * Manage organizational folders for grouping automation resources
 */
export class Folders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath List Folders
   *
   * @remarks
   * Retrieves a list of organizational folders accessible to the authenticated user. Folders group
   * automation resources such as processes, robots, assets, and queues. Each folder has a unique ID
   * used in the X-UIPATH-OrganizationUnitId request header.
   *
   * @returns A list of folders
   *
   * @throws {@link Folders.ListFoldersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFolders(
    request: Folders.ListFoldersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataFolderCollection, Folders.ListFoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/Folders"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oDataFolderCollectionSchema },
        errorFactory: Folders.ListFoldersError,
      },
      options,
    );
  }
}

export namespace Folders {
  export type ListFoldersRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
    /** Maximum number of records to return (default 100, max 1000) */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
  };

  export const listFoldersRequestSchema: Schema<ListFoldersRequest> = s.lazySchema(() =>
    s.object<ListFoldersRequest>({
      filter: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class ListFoldersError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListFoldersError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
