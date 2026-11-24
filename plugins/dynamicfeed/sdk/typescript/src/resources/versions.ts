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
import { onlyLtsSchema, type OnlyLts } from "../models/unions/only-lts.js";
import { onlySupportedSchema, type OnlySupported } from "../models/unions/only-supported.js";
import { productSchema, type Product } from "../models/unions/product.js";
import { qSchema, type Q } from "../models/unions/q.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Versions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Versions
   *
   * @remarks
   * Latest stable versions & end-of-life dates for languages, runtimes, frameworks, databases &
   * OSes. Answers 'what's the latest X?' and 'is version Y still supported?'. Each row has a
   * `status` (supported/nearing-eol/end-of-life) + provenance. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Versions.VersionsVersionsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  versionsVersionsGet(
    request: Versions.VersionsVersionsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Versions.VersionsVersionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/versions"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "product", value: request.product, schema: s.optional(s.lazy(() => productSchema)) },
          { name: "q", value: request.q, schema: s.optional(s.lazy(() => qSchema)) },
          { name: "category", value: request.category, schema: s.optional(s.lazy(() => categorySchema)) },
          {
            name: "only_supported",
            value: request.onlySupported,
            schema: s.optional(s.lazy(() => onlySupportedSchema)),
          },
          { name: "only_lts", value: request.onlyLts, schema: s.optional(s.lazy(() => onlyLtsSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
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
        errorFactory: Versions.VersionsVersionsGetError,
      },
      options,
    );
  }
}

export namespace Versions {
  export type VersionsVersionsGetRequest = {
    /** exact product, e.g. python, nodejs, postgresql */
    product?: Product;
    /** match a product name */
    q?: Q;
    /** language | runtime | framework | database | os | tool */
    category?: Category;
    /** exclude end-of-life release lines */
    onlySupported?: OnlySupported;
    /** only long-term-support lines */
    onlyLts?: OnlyLts;
    /** @default 100 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const versionsVersionsGetRequestSchema: Schema<VersionsVersionsGetRequest> = s.lazySchema(() =>
    s.object<VersionsVersionsGetRequest>({
      product: s.optional(s.lazy(() => productSchema)),
      q: s.optional(s.lazy(() => qSchema)),
      category: s.optional(s.lazy(() => categorySchema)),
      onlySupported: s.optional(s.lazy(() => onlySupportedSchema)),
      onlyLts: s.optional(s.lazy(() => onlyLtsSchema)),
      limit: s.defaulted(s.int().check(s.lte(300)), 100),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class VersionsVersionsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VersionsVersionsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
