import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import {
  customAudienceCreateInternalSchema,
  type CustomAudienceCreate,
} from "../models/custom-audience-create.js";
import { customAudienceListSchema, type CustomAudienceList } from "../models/custom-audience-list.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Create and manage custom audiences for ad targeting based on customer data, website visitors, or
 * app users.
 */
export class CustomAudiences {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Create a custom audience
   *
   * @remarks
   * Creates a new custom audience for ad targeting. Supports customer file audiences, website
   * custom audiences, app activity audiences, and lookalike audiences.
   *
   * @returns Custom audience created successfully
   *
   * @throws {@link CustomAudiences.CreateCustomAudienceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createCustomAudience(
    request: CustomAudiences.CreateCustomAudienceRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, CustomAudiences.CreateCustomAudienceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/customaudiences"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customAudienceCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: CustomAudiences.CreateCustomAudienceError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager List custom audiences
   *
   * @remarks
   * Retrieves all custom audiences for the specified ad account. Returns audience configurations
   * and approximate sizes.
   *
   * @returns Successfully retrieved list of custom audiences
   *
   * @throws {@link CustomAudiences.ListCustomAudiencesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCustomAudiences(
    request: CustomAudiences.ListCustomAudiencesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomAudienceList, CustomAudiences.ListCustomAudiencesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/customaudiences"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customAudienceListSchema },
        errorFactory: CustomAudiences.ListCustomAudiencesError,
      },
      options,
    );
  }
}

export namespace CustomAudiences {
  export type CreateCustomAudienceRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    body: CustomAudienceCreate;
  };

  export class CreateCustomAudienceError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomAudienceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCustomAudiencesRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    /**
     * Comma-separated list of fields to include in the response. If omitted, default fields are
     * returned.
     */
    fields?: string;
    /** Maximum number of objects to return per page. Default is 25. @default 25 */
    limit?: number;
    /** Cursor for pagination to retrieve the next page of results */
    after?: string;
  };

  export const listCustomAudiencesRequestSchema: Schema<ListCustomAudiencesRequest> = s.lazySchema(() =>
    s.object<ListCustomAudiencesRequest>({
      adAccountId: s.string(),
      fields: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      after: s.optional(s.string()),
    }),
  );

  export class ListCustomAudiencesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomAudiencesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
