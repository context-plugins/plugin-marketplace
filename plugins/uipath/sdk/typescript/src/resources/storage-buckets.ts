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
  oDataStorageBucketCollectionSchema,
  type ODataStorageBucketCollection,
} from "../models/odata-storage-bucket-collection.js";
import type { Servers } from "../servers.js";

/**
 * Manage cloud storage buckets for storing automation artifacts
 */
export class StorageBuckets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath List Storage Buckets
   *
   * @remarks
   * Retrieves a list of storage buckets defined in the current folder. Storage buckets provide file
   * storage capabilities for automation processes, backed by providers such as Azure Blob, Amazon
   * S3, or the UiPath internal storage.
   *
   * @returns A list of storage buckets
   *
   * @throws {@link StorageBuckets.ListStorageBucketsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStorageBuckets(
    request: StorageBuckets.ListStorageBucketsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataStorageBucketCollection, StorageBuckets.ListStorageBucketsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/StorageBuckets"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
        ],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oDataStorageBucketCollectionSchema },
        errorFactory: StorageBuckets.ListStorageBucketsError,
      },
      options,
    );
  }
}

export namespace StorageBuckets {
  export type ListStorageBucketsRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
    /** Maximum number of records to return (default 100, max 1000) */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export const listStorageBucketsRequestSchema: Schema<ListStorageBucketsRequest> = s.lazySchema(() =>
    s.object<ListStorageBucketsRequest>({
      filter: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
      xUipathOrganizationUnitId: s.optional(s.int()),
    }),
  );

  export class ListStorageBucketsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListStorageBucketsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
