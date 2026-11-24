import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { edgeDbApiResponseSchema, type EdgeDbApiResponse } from "../models/edge-db-api-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { userDataEdgeDbInternalSchema, type UserDataEdgeDb } from "../models/user-data-edge-db.js";
import type { Servers } from "../servers.js";

export class EdgeDb {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Update EdgeDB data based on unique id and project id
   *
   * @returns Client SDK API Response
   *
   * @throws {@link EdgeDb.PatchV1EdgedbByUserIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchV1EdgedbByUserId(
    request: EdgeDb.PatchV1EdgedbByUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<EdgeDbApiResponse, EdgeDb.PatchV1EdgedbByUserIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/v1/edgedb/{user_id}"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [{ name: "sdkKey", value: request.sdkKey, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userDataEdgeDbInternalSchema },
      },
      {
        success: { kind: "json", schema: edgeDbApiResponseSchema },
        errorFactory: EdgeDb.PatchV1EdgedbByUserIdError,
      },
      options,
    );
  }
}

export namespace EdgeDb {
  export type PatchV1EdgedbByUserIdRequest = {
    /** A unique id used to fetch and update the EdgeDB data */
    userId: string;
    /**
     * SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization
     * header or "sdkKey" query parameter is required to be set.
     */
    sdkKey?: string;
    /** User properties to update the EdgeDB data */
    body: UserDataEdgeDb;
  };

  export class PatchV1EdgedbByUserIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchV1EdgedbByUserIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
