import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { symbolSchema, type Symbol } from "../models/unions/symbol.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Consensus {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Consensus
   *
   * @remarks
   * PROPRIETARY: real-time cross-exchange price consensus — the median price across several
   * independent venues plus how tightly they agree (spread in basis points), the min/max, and the
   * per-venue breakdown. Tells an AI tool the real price AND whether to trust it. Measured by
   * Dynamic Feed; available nowhere else. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Consensus.ConsensusConsensusGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  consensusConsensusGet(
    request: Consensus.ConsensusConsensusGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Consensus.ConsensusConsensusGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/consensus"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.lazy(() => symbolSchema)) },
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
        errorFactory: Consensus.ConsensusConsensusGetError,
      },
      options,
    );
  }
}

export namespace Consensus {
  export type ConsensusConsensusGetRequest = {
    /** exact symbol, e.g. BTC, ETH, SOL */
    symbol?: Symbol;
    /** @default 50 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const consensusConsensusGetRequestSchema: Schema<ConsensusConsensusGetRequest> = s.lazySchema(() =>
    s.object<ConsensusConsensusGetRequest>({
      symbol: s.optional(s.lazy(() => symbolSchema)),
      limit: s.defaulted(s.int().check(s.lte(100)), 50),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class ConsensusConsensusGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ConsensusConsensusGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
