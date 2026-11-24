import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { orgSchema, type Org } from "../models/unions/org.js";
import { querySchema, type Query } from "../models/unions/query.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class AiModels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Ai Models Ep
   *
   * @remarks
   * Current & trending AI models from the open-model ecosystem (Hugging Face) — name, org, task,
   * popularity, release date. Complements /models (closed-flagship pricing & versions). (Requires
   * API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link AiModels.AiModelsEpAiModelsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  aiModelsEpAiModelsGet(
    request: AiModels.AiModelsEpAiModelsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, AiModels.AiModelsEpAiModelsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ai-models"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.optional(s.lazy(() => querySchema)) },
          { name: "org", value: request.org, schema: s.optional(s.lazy(() => orgSchema)) },
          { name: "task", value: request.task, schema: s.defaulted(s.string(), "text-generation") },
          { name: "sort", value: request.sort, schema: s.defaulted(s.string(), "trending") },
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
        errorFactory: AiModels.AiModelsEpAiModelsGetError,
      },
      options,
    );
  }
}

export namespace AiModels {
  export type AiModelsEpAiModelsGetRequest = {
    /** search a model name (e.g. llama, qwen, whisper) */
    query?: Query;
    /** filter by org/author (e.g. meta-llama, deepseek-ai) */
    org?: Org;
    /** text-generation (default), text-to-image, ... or 'any' @default "text-generation" */
    task?: string;
    /** trending | newest | downloads @default "trending" */
    sort?: string;
    /** @default 25 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const aiModelsEpAiModelsGetRequestSchema: Schema<AiModelsEpAiModelsGetRequest> = s.lazySchema(() =>
    s.object<AiModelsEpAiModelsGetRequest>({
      query: s.optional(s.lazy(() => querySchema)),
      org: s.optional(s.lazy(() => orgSchema)),
      task: s.defaulted(s.string(), "text-generation"),
      sort: s.defaulted(s.string(), "trending"),
      limit: s.defaulted(s.int().check(s.lte(50)), 25),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class AiModelsEpAiModelsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AiModelsEpAiModelsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
