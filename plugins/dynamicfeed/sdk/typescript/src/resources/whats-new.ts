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

export class WhatsNew {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Whats New Ep
   *
   * @remarks
   * What an AI has missed since its training cutoff — a LIVE snapshot of the current world
   * (trending model, live prices, top exploited CVE, latest versions, a headline, fastest AI API)
   * with a plain-English summary. The 'pulse' every connecting model can read. (Requires API key on
   * REST; the same tool is keyless over MCP.)
   *
   * @returns Successful Response
   *
   * @throws {@link WhatsNew.WhatsNewEpWhatsNewGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  whatsNewEpWhatsNewGet(
    request: WhatsNew.WhatsNewEpWhatsNewGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, WhatsNew.WhatsNewEpWhatsNewGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/whats-new"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "cutoff", value: request.cutoff, schema: s.optional(s.string()) }],
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
        errorFactory: WhatsNew.WhatsNewEpWhatsNewGetError,
      },
      options,
    );
  }
}

export namespace WhatsNew {
  export type WhatsNewEpWhatsNewGetRequest = {
    /** your knowledge cutoff if known, e.g. 2024-10 (optional) */
    cutoff?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class WhatsNewEpWhatsNewGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<WhatsNewEpWhatsNewGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
