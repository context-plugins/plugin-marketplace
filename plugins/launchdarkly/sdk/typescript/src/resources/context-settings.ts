import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import { valuePutSchema, type ValuePut } from "../models/value-put.js";
import type { Servers } from "../servers.js";

/**
 * You can use the context settings API to assign a context to a specific variation for any feature
 * flag. To learn more, read [View and manage
 * contexts](https://launchdarkly.com/docs/home/observability/context-attributes#view-and-manage-contexts).
 */
export class ContextSettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Update flag settings for context
   *
   * @remarks
   *
   * Enable or disable a feature flag for a context based on its context kind and key.
   *
   * In the request body, the `setting` should be the variation value to set for the context. It
   * must match the flag's variation type. For example, for a boolean flag you can use `"setting":
   * true` or `"setting": false` in the request body. For a string flag, you can use `"setting":
   * "existing_variation_value_to_use"`.
   *
   * Omitting the `setting` attribute from the request body, or including a `setting` of `null`,
   * erases the current setting for a context.
   *
   * If you previously patched the flag, and the patch included the context's data, LaunchDarkly
   * continues to use that data. If LaunchDarkly has never encountered the combination of the
   * context's key and kind before, it calculates the flag values based on the context kind and key.
   *
   * @returns Action succeeded
   *
   * @throws {@link ContextSettings.PutContextFlagSettingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putContextFlagSetting(
    request: ContextSettings.PutContextFlagSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ContextSettings.PutContextFlagSettingError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "contextKind", value: request.contextKind, schema: s.string() },
          { name: "contextKey", value: request.contextKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: valuePutSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ContextSettings.PutContextFlagSettingError,
      },
      options,
    );
  }
}

export namespace ContextSettings {
  export type PutContextFlagSettingRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The context kind */
    contextKind: string;
    /** The context key */
    contextKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    body: ValuePut;
  };

  export class PutContextFlagSettingError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutContextFlagSettingError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
