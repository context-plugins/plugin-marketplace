import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1ActionsRequestInternalSchema,
  type ApiV1ActionsRequest,
} from "../models/api-v1-actions-request.js";
import { apiV1ActionsResponseSchema, type ApiV1ActionsResponse } from "../models/api-v1-actions-response.js";
import {
  apiV1ActionsResponse1Schema,
  type ApiV1ActionsResponse1,
} from "../models/api-v1-actions-response1.js";
import type { Servers } from "../servers.js";

export class Actions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * What this organisation has registered
   *
   * @returns Newest first. Titles and risk reflect any administrator override; sensitivity labels
   * are not returned, because telling the caller which values are confidential tells it which are
   * worth taking.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Actions(
    request: Actions.GetApiV1ActionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ActionsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/actions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ActionsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Register an action: something consequential software may do
   *
   * @remarks
   * Actions are stable organisational vocabulary and tools are implementation details — several
   * agents calling three differently named functions may all be performing finance.refund, and
   * policy is written about the business action rather than the function name. Upsert, not create:
   * this runs on every deploy, so registering the same id again is the normal case. It overwrites
   * only the half the code owns; an administrator's title, risk and sensitivity overrides survive
   * it, and no administrator can edit the input schema, because a schema they could loosen is a
   * check the code no longer performs. An agent principal is refused: policy is keyed on the action
   * id, so an agent able to name actions could name its way around the rule that governs it.
   *
   * @returns The action as registered
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Actions(
    request: Actions.PostApiV1ActionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ActionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/actions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ActionsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ActionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Actions {
  export type GetApiV1ActionsRequest = {
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
  };

  export const getApiV1ActionsRequestSchema: Schema<GetApiV1ActionsRequest> = s.lazySchema(() =>
    s.object<GetApiV1ActionsRequest>({
      limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
      cursor: s.optional(s.string()),
    }),
  );

  export type PostApiV1ActionsRequest = {
    body?: ApiV1ActionsRequest;
  };
}
