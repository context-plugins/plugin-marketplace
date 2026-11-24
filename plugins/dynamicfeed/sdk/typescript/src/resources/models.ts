import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { maxInputPriceSchema, type MaxInputPrice } from "../models/unions/max-input-price.js";
import { minContextSchema, type MinContext } from "../models/unions/min-context.js";
import { needsVisionSchema, type NeedsVision } from "../models/unions/needs-vision.js";
import { providerSchema, type Provider } from "../models/unions/provider.js";
import { qSchema, type Q } from "../models/unions/q.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Models {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Models
   *
   * @remarks
   * Search current AI models by price, context, capability. Cheapest first. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ModelsModelsGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modelsModelsGet(
    request: Models.ModelsModelsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Models.ModelsModelsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/models"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.lazy(() => qSchema)) },
          { name: "provider", value: request.provider, schema: s.optional(s.lazy(() => providerSchema)) },
          {
            name: "max_input_price",
            value: request.maxInputPrice,
            schema: s.optional(s.lazy(() => maxInputPriceSchema)),
          },
          {
            name: "min_context",
            value: request.minContext,
            schema: s.optional(s.lazy(() => minContextSchema)),
          },
          {
            name: "needs_vision",
            value: request.needsVision,
            schema: s.optional(s.lazy(() => needsVisionSchema)),
          },
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
        errorFactory: Models.ModelsModelsGetError,
      },
      options,
    );
  }
}

export namespace Models {
  export type ModelsModelsGetRequest = {
    /** match model name/id */
    q?: Q;
    /** openai, anthropic, google, ... */
    provider?: Provider;
    /** max USD per 1M input tokens */
    maxInputPrice?: MaxInputPrice;
    /** min context window in tokens */
    minContext?: MinContext;
    /** only models that accept images */
    needsVision?: NeedsVision;
    /** @default 50 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const modelsModelsGetRequestSchema: Schema<ModelsModelsGetRequest> = s.lazySchema(() =>
    s.object<ModelsModelsGetRequest>({
      q: s.optional(s.lazy(() => qSchema)),
      provider: s.optional(s.lazy(() => providerSchema)),
      maxInputPrice: s.optional(s.lazy(() => maxInputPriceSchema)),
      minContext: s.optional(s.lazy(() => minContextSchema)),
      needsVision: s.optional(s.lazy(() => needsVisionSchema)),
      limit: s.defaulted(s.int().check(s.lte(200)), 50),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class ModelsModelsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ModelsModelsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
