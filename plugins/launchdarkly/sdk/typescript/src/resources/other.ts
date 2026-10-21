import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { callerIdentityRepSchema, type CallerIdentityRep } from "../models/caller-identity-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { ipListSchema, type IpList } from "../models/ip-list.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { rootResponseSchema, type RootResponse } from "../models/root-response.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import { versionsRepSchema, type VersionsRep } from "../models/versions-rep.js";
import type { Servers } from "../servers.js";

/**
 * Other requests available in the LaunchDarkly API.
 */
export class Other {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Identify the caller
   *
   * @remarks
   * Get basic information about the identity used (session cookie, API token, SDK keys, etc.) to
   * call the API
   *
   * @returns Caller Identity
   *
   * @throws {@link Other.GetCallerIdentityError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCallerIdentity(options?: RequestOptions): ApiPromise<CallerIdentityRep, Other.GetCallerIdentityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/caller-identity"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: callerIdentityRepSchema },
        errorFactory: Other.GetCallerIdentityError,
      },
      options,
    );
  }

  /**
   * Gets the public IP list
   *
   * @remarks
   * Get a list of IP ranges the LaunchDarkly service uses. You can use this list to allow
   * LaunchDarkly through your firewall. We post upcoming changes to this list in advance on our
   * [status page](https://status.launchdarkly.com/). <br /><br />In the sandbox, click 'Play' and
   * enter any string in the 'Authorization' field to test this endpoint.
   *
   * @returns Public IP response
   *
   * @throws {@link Other.GetIpsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getIps(options?: RequestOptions): ApiPromise<IpList, Other.GetIpsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/public-ip-list"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipListSchema },
        errorFactory: Other.GetIpsError,
      },
      options,
    );
  }

  /**
   * Gets the OpenAPI spec in json
   *
   * @remarks
   * Get the latest version of the OpenAPI specification for LaunchDarkly's API in JSON format. In
   * the sandbox, click 'Play' and enter any string in the 'Authorization' field to test this
   * endpoint.
   *
   * @returns OpenAPI Spec
   *
   * @throws {@link Other.GetOpenapiSpecError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOpenapiSpec(options?: RequestOptions): ApiPromise<undefined, Other.GetOpenapiSpecError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/openapi.json"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Other.GetOpenapiSpecError,
      },
      options,
    );
  }

  /**
   * Root resource
   *
   * @remarks
   * Get all of the resource categories the API supports. In the sandbox, click 'Play' and enter any
   * string in the 'Authorization' field to test this endpoint.
   *
   * @returns Root response
   *
   * @throws {@link Other.GetRootError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRoot(options?: RequestOptions): ApiPromise<RootResponse, Other.GetRootError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rootResponseSchema },
        errorFactory: Other.GetRootError,
      },
      options,
    );
  }

  /**
   * Get version information
   *
   * @remarks
   * Get the latest API version, the list of valid API versions in ascending order, and the version
   * being used for this request. These are all in the external, date-based format.
   *
   * @returns Versions information response
   *
   * @throws {@link Other.GetVersionsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersions(options?: RequestOptions): ApiPromise<VersionsRep, Other.GetVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/versions"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: versionsRepSchema },
        errorFactory: Other.GetVersionsError,
      },
      options,
    );
  }
}

export namespace Other {
  export class GetCallerIdentityError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCallerIdentityError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetIpsError extends ApiError {
    declare readonly payload: Declared<"rateLimitedErrorRep", RateLimitedErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<GetIpsError> = [
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetOpenapiSpecError extends ApiError {
    declare readonly payload: Declared<"rateLimitedErrorRep", RateLimitedErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<GetOpenapiSpecError> = [
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetRootError extends ApiError {
    declare readonly payload: Declared<"rateLimitedErrorRep", RateLimitedErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<GetRootError> = [
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
