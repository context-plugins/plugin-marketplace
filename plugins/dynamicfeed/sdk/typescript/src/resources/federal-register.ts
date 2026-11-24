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

export class FederalRegister {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Federal Register
   *
   * @remarks
   * Recent US Federal Register documents — rules, proposed rules, notices, executive orders
   * (keyless NARA source). Answers what regulation took effect or what the President signed.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link FederalRegister.FederalRegisterFederalRegisterGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  federalRegisterFederalRegisterGet(
    request: FederalRegister.FederalRegisterFederalRegisterGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, FederalRegister.FederalRegisterFederalRegisterGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/federal-register"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "doc_type", value: request.docType, schema: s.optional(s.string()) },
          { name: "agency", value: request.agency, schema: s.optional(s.string()) },
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 7) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
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
        errorFactory: FederalRegister.FederalRegisterFederalRegisterGetError,
      },
      options,
    );
  }
}

export namespace FederalRegister {
  export type FederalRegisterFederalRegisterGetRequest = {
    /** text search */
    query?: string;
    /** RULE | PRORULE | NOTICE | PRESDOCU */
    docType?: string;
    /** agency slug, e.g. securities-and-exchange-commission */
    agency?: string;
    /** @default 7 */
    days?: number;
    /** @default 20 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const federalRegisterFederalRegisterGetRequestSchema: Schema<FederalRegisterFederalRegisterGetRequest> =
    s.lazySchema(() =>
      s.object<FederalRegisterFederalRegisterGetRequest>({
        query: s.optional(s.string()),
        docType: s.optional(s.string()),
        agency: s.optional(s.string()),
        days: s.defaulted(s.int().check(s.gte(1), s.lte(90)), 7),
        limit: s.defaulted(s.int().check(s.lte(100)), 20),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class FederalRegisterFederalRegisterGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<FederalRegisterFederalRegisterGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
