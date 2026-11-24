import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { ecosystemSchema, type Ecosystem } from "../models/unions/ecosystem.js";
import { ecosystem1Schema, type Ecosystem1 } from "../models/unions/ecosystem1.js";
import { minCvssSchema, type MinCvss } from "../models/unions/min-cvss.js";
import { packageSchema, type Package } from "../models/unions/package.js";
import { qSchema, type Q } from "../models/unions/q.js";
import { severitySchema, type Severity } from "../models/unions/severity.js";
import { versionSchema, type Version } from "../models/unions/version.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Advisories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Advisories
   *
   * @remarks
   * Recent security advisories / CVEs — affected package, vulnerable version range, patched
   * version, severity & CVSS. Filter by package/ecosystem/severity. Newest first. Pairs with
   * /versions: is my stack current AND safe? (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Advisories.AdvisoriesAdvisoriesGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  advisoriesAdvisoriesGet(
    request: Advisories.AdvisoriesAdvisoriesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Advisories.AdvisoriesAdvisoriesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/advisories"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.lazy(() => qSchema)) },
          { name: "package", value: request.package, schema: s.optional(s.lazy(() => packageSchema)) },
          { name: "ecosystem", value: request.ecosystem, schema: s.optional(s.lazy(() => ecosystemSchema)) },
          { name: "severity", value: request.severity, schema: s.optional(s.lazy(() => severitySchema)) },
          { name: "min_cvss", value: request.minCvss, schema: s.optional(s.lazy(() => minCvssSchema)) },
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
        errorFactory: Advisories.AdvisoriesAdvisoriesGetError,
      },
      options,
    );
  }

  /**
   * Advisories Check
   *
   * @remarks
   * Is this exact package@version vulnerable? FULL historical lookup across the entire OSV.dev
   * corpus (Google) — returns every matching advisory + the versions that fix it. For Maven, pass
   * the full 'group:artifact' coordinate; a bare artifact name returns a hint, not a misleading
   * 'not vulnerable'. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Advisories.AdvisoriesCheckAdvisoriesCheckGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  advisoriesCheckAdvisoriesCheckGet(
    request: Advisories.AdvisoriesCheckAdvisoriesCheckGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Advisories.AdvisoriesCheckAdvisoriesCheckGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/advisories/check"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "package", value: request.package, schema: s.string() },
          { name: "version", value: request.version, schema: s.optional(s.lazy(() => versionSchema)) },
          { name: "ecosystem", value: request.ecosystem, schema: s.optional(s.lazy(() => ecosystem1Schema)) },
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
        errorFactory: Advisories.AdvisoriesCheckAdvisoriesCheckGetError,
      },
      options,
    );
  }
}

export namespace Advisories {
  export type AdvisoriesAdvisoriesGetRequest = {
    /** match summary / package / CVE / GHSA id */
    q?: Q;
    /** affected package name, e.g. lodash, requests */
    package?: Package;
    /** npm | pip | maven | go | rubygems | nuget | composer | ... */
    ecosystem?: Ecosystem;
    /** low | moderate | high | critical */
    severity?: Severity;
    /** minimum CVSS score (0-10) */
    minCvss?: MinCvss;
    /** @default 50 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const advisoriesAdvisoriesGetRequestSchema: Schema<AdvisoriesAdvisoriesGetRequest> = s.lazySchema(
    () =>
      s.object<AdvisoriesAdvisoriesGetRequest>({
        q: s.optional(s.lazy(() => qSchema)),
        package: s.optional(s.lazy(() => packageSchema)),
        ecosystem: s.optional(s.lazy(() => ecosystemSchema)),
        severity: s.optional(s.lazy(() => severitySchema)),
        minCvss: s.optional(s.lazy(() => minCvssSchema)),
        limit: s.defaulted(s.int().check(s.lte(200)), 50),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
  );

  export class AdvisoriesAdvisoriesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AdvisoriesAdvisoriesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type AdvisoriesCheckAdvisoriesCheckGetRequest = {
    /**
     * package name, e.g. lodash, requests. Maven needs the full 'group:artifact' coordinate, e.g.
     * org.apache.logging.log4j:log4j-core
     */
    package: string;
    /** exact version, e.g. 4.17.10 */
    version?: Version;
    /** npm | pip | maven | go | rubygems | nuget | cargo | composer */
    ecosystem?: Ecosystem1;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class AdvisoriesCheckAdvisoriesCheckGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AdvisoriesCheckAdvisoriesCheckGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
