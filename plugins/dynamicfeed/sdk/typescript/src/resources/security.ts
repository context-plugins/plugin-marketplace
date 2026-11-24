import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { versionSchema, type Version } from "../models/unions/version.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Security {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Package Health Ep
   *
   * @remarks
   * Package health & security posture from deps.dev (Google Open Source Insights): latest version,
   * license, known-advisory count, the OpenSSF Scorecard (0-10 + weakest checks) and popularity.
   * The 'should I depend on this?' check — pairs with /advisories/check and /versions. (Requires
   * API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Security.PackageHealthEpPackageHealthGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  packageHealthEpPackageHealthGet(
    request: Security.PackageHealthEpPackageHealthGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Security.PackageHealthEpPackageHealthGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/package-health"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "package", value: request.package, schema: s.string() },
          { name: "ecosystem", value: request.ecosystem, schema: s.defaulted(s.string(), "npm") },
          { name: "version", value: request.version, schema: s.optional(s.lazy(() => versionSchema)) },
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
        errorFactory: Security.PackageHealthEpPackageHealthGetError,
      },
      options,
    );
  }
}

export namespace Security {
  export type PackageHealthEpPackageHealthGetRequest = {
    /** package name, e.g. lodash, requests, django */
    package: string;
    /** npm | pypi | go | maven | cargo | nuget | rubygems @default "npm" */
    ecosystem?: string;
    /** exact version (optional; defaults to latest) */
    version?: Version;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class PackageHealthEpPackageHealthGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PackageHealthEpPackageHealthGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
