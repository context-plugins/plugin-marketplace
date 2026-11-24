import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Sports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Sports
   *
   * @remarks
   * Global ATTENTION + official schedule for a sporting event/team/competition — e.g. the 2026 FIFA
   * World Cup. Attention = daily Wikipedia article views by language edition, with 7-day momentum &
   * peak; plus hosts, start/end dates and sport from Wikidata. Source: Wikimedia Pageviews +
   * Wikidata (CC0) — this is the neutral global-attention layer, NOT live scores, fixtures or odds.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Sports.SportsSportsGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sportsSportsGet(
    request: Sports.SportsSportsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Sports.SportsSportsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sports"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "topic", value: request.topic, schema: s.defaulted(s.string(), "2026 FIFA World Cup") },
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 30) },
          { name: "lang", value: request.lang, schema: s.defaulted(s.string(), "en") },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Sports.SportsSportsGetError,
      },
      options,
    );
  }

  /**
   * Worldcup Route
   *
   * @remarks
   * 2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers
   * the homepage World Cup section and any agent. See also the keyless `world_cup` MCP tool.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  worldcupRouteWorldcupGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/worldcup"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Sports {
  export type SportsSportsGetRequest = {
    /** event/team/competition, e.g. '2026 FIFA World Cup' @default "2026 FIFA World Cup" */
    topic?: string;
    /** attention window in days @default 30 */
    days?: number;
    /** primary Wikipedia language edition (en, es, pt, fr, ...) @default "en" */
    lang?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const sportsSportsGetRequestSchema: Schema<SportsSportsGetRequest> = s.lazySchema(() =>
    s.object<SportsSportsGetRequest>({
      topic: s.defaulted(s.string(), "2026 FIFA World Cup"),
      days: s.defaulted(s.int().check(s.gte(7), s.lte(90)), 30),
      lang: s.defaulted(s.string(), "en"),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class SportsSportsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SportsSportsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
