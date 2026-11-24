import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { categorySchema, type Category } from "../models/unions/category.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class NaturalEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Natural Events
   *
   * @remarks
   * Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods,
   * sea/lake ice. "What natural events are happening on Earth right now?". (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link NaturalEvents.NaturalEventsNaturalEventsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  naturalEventsNaturalEventsGet(
    request: NaturalEvents.NaturalEventsNaturalEventsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, NaturalEvents.NaturalEventsNaturalEventsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/natural-events"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.optional(s.lazy(() => categorySchema)) },
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 30) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) },
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
        errorFactory: NaturalEvents.NaturalEventsNaturalEventsGetError,
      },
      options,
    );
  }
}

export namespace NaturalEvents {
  export type NaturalEventsNaturalEventsGetRequest = {
    /** wildfires | severeStorms | volcanoes | floods | seaLakeIce */
    category?: Category;
    /** look-back window in days @default 30 */
    days?: number;
    /** @default 30 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const naturalEventsNaturalEventsGetRequestSchema: Schema<NaturalEventsNaturalEventsGetRequest> =
    s.lazySchema(() =>
      s.object<NaturalEventsNaturalEventsGetRequest>({
        category: s.optional(s.lazy(() => categorySchema)),
        days: s.defaulted(s.int().check(s.gte(1), s.lte(365)), 30),
        limit: s.defaulted(s.int().check(s.lte(100)), 30),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class NaturalEventsNaturalEventsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<NaturalEventsNaturalEventsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
