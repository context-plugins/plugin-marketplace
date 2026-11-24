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
import { onlyIssuesSchema, type OnlyIssues } from "../models/unions/only-issues.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Status {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Status
   *
   * @remarks
   * Live up/down/degraded status for major AI & dev services. Issues first. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Status.StatusStatusGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statusStatusGet(
    request: Status.StatusStatusGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Status.StatusStatusGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/status"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.optional(s.lazy(() => categorySchema)) },
          {
            name: "only_issues",
            value: request.onlyIssues,
            schema: s.optional(s.lazy(() => onlyIssuesSchema)),
          },
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
        errorFactory: Status.StatusStatusGetError,
      },
      options,
    );
  }
}

export namespace Status {
  export type StatusStatusGetRequest = {
    /** ai | dev | infra | platform */
    category?: Category;
    /** only services currently degraded/down */
    onlyIssues?: OnlyIssues;
    /** @default 100 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const statusStatusGetRequestSchema: Schema<StatusStatusGetRequest> = s.lazySchema(() =>
    s.object<StatusStatusGetRequest>({
      category: s.optional(s.lazy(() => categorySchema)),
      onlyIssues: s.optional(s.lazy(() => onlyIssuesSchema)),
      limit: s.defaulted(s.int().check(s.lte(200)), 100),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class StatusStatusGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<StatusStatusGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
