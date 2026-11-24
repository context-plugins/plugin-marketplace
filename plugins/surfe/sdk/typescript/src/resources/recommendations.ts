import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { icpDefinitionSchema, type IcpDefinition } from "../models/icp-definition.js";
import {
  recommendationsFetchRequestInternalSchema,
  type RecommendationsFetchRequest,
} from "../models/recommendations-fetch-request.js";
import {
  recommendationsFetchResponseSchema,
  type RecommendationsFetchResponse,
} from "../models/recommendations-fetch-response.js";
import type { Servers } from "../servers.js";

/**
 * ICP definition and lookalike account recommendations.
 */
export class Recommendations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch lookalike recommendations
   *
   * @remarks
   * Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.
   *
   * @returns Lookalike company recommendations.
   *
   * @throws {@link Recommendations.FetchRecommendationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecommendations(
    request: Recommendations.FetchRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecommendationsFetchResponse, Recommendations.FetchRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/recommendations/fetch"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recommendationsFetchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: recommendationsFetchResponseSchema },
        errorFactory: Recommendations.FetchRecommendationsError,
      },
      options,
    );
  }

  /**
   * Create or update ICP
   *
   * @remarks
   * Create or update the Ideal Customer Profile used to generate lookalike account recommendations.
   *
   * @returns ICP saved.
   *
   * @throws {@link Recommendations.UpsertIcpError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertIcp(
    request: Recommendations.UpsertIcpRequest,
    options?: RequestOptions,
  ): ApiPromise<IcpDefinition, Recommendations.UpsertIcpError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/recommendations/icp"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: icpDefinitionSchema },
      },
      {
        success: { kind: "json", schema: icpDefinitionSchema },
        errorFactory: Recommendations.UpsertIcpError,
      },
      options,
    );
  }
}

export namespace Recommendations {
  export type FetchRecommendationsRequest = {
    body: RecommendationsFetchRequest;
  };

  export class FetchRecommendationsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FetchRecommendationsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpsertIcpRequest = {
    body: IcpDefinition;
  };

  export class UpsertIcpError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpsertIcpError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
