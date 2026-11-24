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

export class SecFilings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Sec Filings
   *
   * @remarks
   * Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link SecFilings.SecFilingsSecFilingsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  secFilingsSecFilingsGet(
    request: SecFilings.SecFilingsSecFilingsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, SecFilings.SecFilingsSecFilingsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sec-filings"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
          { name: "form", value: request.form, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 15) },
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
        errorFactory: SecFilings.SecFilingsSecFilingsGetError,
      },
      options,
    );
  }
}

export namespace SecFilings {
  export type SecFilingsSecFilingsGetRequest = {
    /** US stock ticker, e.g. AAPL, NVDA, TSLA */
    ticker?: string;
    /** filter by form: 8-K, 10-K, 10-Q, S-1, 4 ... */
    form?: string;
    /** @default 15 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const secFilingsSecFilingsGetRequestSchema: Schema<SecFilingsSecFilingsGetRequest> = s.lazySchema(
    () =>
      s.object<SecFilingsSecFilingsGetRequest>({
        ticker: s.optional(s.string()),
        form: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(40)), 15),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
  );

  export class SecFilingsSecFilingsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SecFilingsSecFilingsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
