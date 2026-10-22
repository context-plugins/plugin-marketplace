import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  dependentFlagsByEnvironmentSchema,
  type DependentFlagsByEnvironment,
} from "../models/dependent-flags-by-environment.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  multiEnvironmentDependentFlagsSchema,
  type MultiEnvironmentDependentFlags,
} from "../models/multi-environment-dependent-flags.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 */
export class FeatureFlagsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List dependent feature flags
   *
   * @remarks
   * > ### Flag prerequisites is an Enterprise feature > > Flag prerequisites is available to
   * customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * List dependent flags across all environments for the flag specified in the path parameters. A
   * dependent flag is a flag that uses another flag as a prerequisite. To learn more, read [Flag
   * prerequisites](https://launchdarkly.com/docs/home/flags/prereqs).
   *
   * @returns Multi environment dependent flags collection response
   *
   * @throws {@link FeatureFlagsBeta.GetDependentFlagsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDependentFlags(
    request: FeatureFlagsBeta.GetDependentFlagsRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiEnvironmentDependentFlags, FeatureFlagsBeta.GetDependentFlagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: multiEnvironmentDependentFlagsSchema },
        errorFactory: FeatureFlagsBeta.GetDependentFlagsError,
      },
      options,
    );
  }

  /**
   * List dependent feature flags by environment
   *
   * @remarks
   * > ### Flag prerequisites is an Enterprise feature > > Flag prerequisites is available to
   * customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * List dependent flags across all environments for the flag specified in the path parameters. A
   * dependent flag is a flag that uses another flag as a prerequisite. To learn more, read [Flag
   * prerequisites](https://launchdarkly.com/docs/home/flags/prereqs).
   *
   * @returns Dependent flags collection response
   *
   * @throws {@link FeatureFlagsBeta.GetDependentFlagsByEnvError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDependentFlagsByEnv(
    request: FeatureFlagsBeta.GetDependentFlagsByEnvRequest,
    options?: RequestOptions,
  ): ApiPromise<DependentFlagsByEnvironment, FeatureFlagsBeta.GetDependentFlagsByEnvError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dependentFlagsByEnvironmentSchema },
        errorFactory: FeatureFlagsBeta.GetDependentFlagsByEnvError,
      },
      options,
    );
  }
}

export namespace FeatureFlagsBeta {
  export type GetDependentFlagsRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
  };

  export class GetDependentFlagsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDependentFlagsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetDependentFlagsByEnvRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
  };

  export class GetDependentFlagsByEnvError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDependentFlagsByEnvError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
