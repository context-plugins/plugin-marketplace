import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Energy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Energy Grid
   *
   * @remarks
   * Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel
   * mix by region/operator. Hourly. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Energy.EnergyGridEnergyGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  energyGridEnergyGet(
    request: Energy.EnergyGridEnergyGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Energy.EnergyGridEnergyGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/energy"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "region", value: request.region, schema: s.defaulted(s.string(), "US48") },
          { name: "metric", value: request.metric, schema: s.defaulted(s.string(), "demand") },
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
        errorFactory: Energy.EnergyGridEnergyGetError,
      },
      options,
    );
  }
}

export namespace Energy {
  export type EnergyGridEnergyGetRequest = {
    /**
     * US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA
     *
     * @default "US48"
     */
    region?: string;
    /** demand | generation | mix @default "demand" */
    metric?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class EnergyGridEnergyGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<EnergyGridEnergyGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
