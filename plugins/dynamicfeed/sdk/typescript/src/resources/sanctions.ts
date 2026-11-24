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

export class Sanctions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Sanctions Screen
   *
   * @remarks
   * Screen a name against the US OFAC SDN + UK Sanctions List (FCDO, Open Government Licence) —
   * each match tagged with its list (US-OFAC | UK). A match means the party is sanctioned — legally
   * binding the instant it's posted; models can't know recent designations. Confirm the full
   * official entry before acting. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Sanctions.SanctionsScreenSanctionsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sanctionsScreenSanctionsGet(
    request: Sanctions.SanctionsScreenSanctionsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Sanctions.SanctionsScreenSanctionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sanctions"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "program", value: request.program, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
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
        errorFactory: Sanctions.SanctionsScreenSanctionsGetError,
      },
      options,
    );
  }
}

export namespace Sanctions {
  export type SanctionsScreenSanctionsGetRequest = {
    /** name to screen against the US OFAC SDN + UK Sanctions List */
    name?: string;
    /** optional program/regime filter, e.g. IRAN, CUBA, or a UK regime */
    program?: string;
    /** @default 25 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const sanctionsScreenSanctionsGetRequestSchema: Schema<SanctionsScreenSanctionsGetRequest> =
    s.lazySchema(() =>
      s.object<SanctionsScreenSanctionsGetRequest>({
        name: s.optional(s.string()),
        program: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(100)), 25),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class SanctionsScreenSanctionsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SanctionsScreenSanctionsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
