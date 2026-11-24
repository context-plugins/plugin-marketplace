import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { countrySchema, type Country } from "../models/unions/country.js";
import { eventTypeSchema, type EventType } from "../models/unions/event-type.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class GlobalDisasters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Global Disasters Ep
   *
   * @remarks
   * Worldwide multi-hazard disaster alerts (GDACS) — earthquakes, tropical cyclones, floods,
   * droughts, volcanoes — with a Green/Orange/Red humanitarian-impact level + affected countries.
   * The 'how bad, where, who's affected' severity layer. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  globalDisastersEpGlobalDisastersGet(
    request: GlobalDisasters.GlobalDisastersEpGlobalDisastersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/global-disasters"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "alert_level", value: request.alertLevel, schema: s.defaulted(s.string(), "Orange;Red") },
          { name: "event_type", value: request.eventType, schema: s.optional(s.lazy(() => eventTypeSchema)) },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => countrySchema)) },
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 7) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
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
        errorFactory: GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError,
      },
      options,
    );
  }
}

export namespace GlobalDisasters {
  export type GlobalDisastersEpGlobalDisastersGetRequest = {
    /** Green;Orange;Red (semicolon-separated) @default "Orange;Red" */
    alertLevel?: string;
    /** EQ | TC | FL | DR | VO | WF */
    eventType?: EventType;
    /** country name or ISO3 (e.g. PHL) */
    country?: Country;
    /** look-back window in days @default 7 */
    days?: number;
    /** @default 50 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const globalDisastersEpGlobalDisastersGetRequestSchema: Schema<GlobalDisastersEpGlobalDisastersGetRequest> =
    s.lazySchema(() =>
      s.object<GlobalDisastersEpGlobalDisastersGetRequest>({
        alertLevel: s.defaulted(s.string(), "Orange;Red"),
        eventType: s.optional(s.lazy(() => eventTypeSchema)),
        country: s.optional(s.lazy(() => countrySchema)),
        days: s.defaulted(s.int().check(s.gte(1), s.lte(90)), 7),
        limit: s.defaulted(s.int().check(s.lte(100)), 50),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class GlobalDisastersEpGlobalDisastersGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GlobalDisastersEpGlobalDisastersGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
