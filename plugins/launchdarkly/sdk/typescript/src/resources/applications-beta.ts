import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  applicationCollectionRepSchema,
  type ApplicationCollectionRep,
} from "../models/application-collection-rep.js";
import { applicationRepSchema, type ApplicationRep } from "../models/application-rep.js";
import {
  applicationVersionRepSchema,
  type ApplicationVersionRep,
} from "../models/application-version-rep.js";
import {
  applicationVersionsCollectionRepSchema,
  type ApplicationVersionsCollectionRep,
} from "../models/application-versions-collection-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * The applications API lets you create, update, delete, and search for applications and application
 * versions.
 *
 * Each application includes information about the app you're creating, and a set of versions of the
 * app that you've released. You can use applications to target particular application versions in
 * your feature flags more easily, and to handle unsupported application versions more gracefully.
 *
 * In addition to creating applications through the applications API, you can also create
 * applications in the LaunchDarkly user interface. To learn more, read [Applications and
 * application versions](https://launchdarkly.com/docs/home/releases/applications). LaunchDarkly
 * also creates applications and application versions automatically when a LaunchDarkly SDK
 * evaluates a feature flag for a context that includes application information. To learn more, read
 * [Automatic environment
 * attributes](https://launchdarkly.com/docs/sdk/features/environment-attributes).
 *
 * You can use an application in any project in your LaunchDarkly account.
 *
 * ### Filtering applications and application versions
 *
 * The `filter` parameter supports the following operators: `equals`, `notEquals`, `anyOf`,
 * `startsWith`.
 *
 * You can also combine filters in the following ways:
 *
 * - Use a comma (`,`) as an AND operator
 * - Use a vertical bar (`|`) as an OR operator
 * - Use parentheses (`()`) to group filters
 *
 * #### Supported fields and operators
 *
 * You can only filter certain fields in applications when using the `filter` parameter.
 * Additionally, you can only filter some fields with certain operators.
 *
 * When you search for applications, the `filter` parameter supports the following fields and
 * operators:
 *
 * |<div style="width:120px">Field</div> |Description |Supported operators |
 * |---|---|---|
 * |`key` | The application or application version key, a unique identifier |`equals`, `notEquals`, `anyOf` |
 * |`name` | The application name or application version name |`equals`, `notEquals`, `anyOf`, `startsWith` |
 * |`autoAdded` | Whether the application or application version was automatically created because it was included in a context when a LaunchDarkly SDK evaluated a feature flag, or was created through the LaunchDarkly UI or REST API |`equals`, `notEquals` |
 * |`kind` | The application kind, one of `mobile`, `server`, `browser`. Only available for [Get applications](https://launchdarkly.com/docs/api/applications-beta/get-applications). |`equals`, `notEquals`, `anyOf` |
 * |`supported` | Whether a mobile application version is supported or unsupported. Only available for [Get application versions by application key](https://launchdarkly.com/docs/api/applications-beta/get-application-versions).|`equals`, `notEquals` |
 *
 * For example, the filter `?filter=kind anyOf ["mobile", "server"]` matches applications whose
 * `kind` is either `mobile` or `server`. The filter is not case-sensitive.
 *
 * The documented values for `filter` query parameters are prior to URL encoding. For example, the
 * `[` in `?filter=kind anyOf ["mobile", "server"]` must be encoded to `%5B`.
 *
 * ### Sorting applications and application versions
 *
 * LaunchDarkly supports the following fields for sorting:
 * - `name` sorts by application name.
 * - `creationDate` sorts by the creation date of the application.
 *
 * By default, the sort is in ascending order. Use `-` to sort in descending order. For example,
 * `?sort=name` sorts the response by application name in ascending order, and `?sort=-name` sorts
 * in descending order.
 */
export class ApplicationsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete application
   *
   * @remarks
   * Delete an application.
   *
   * @returns Action succeeded
   *
   * @throws {@link ApplicationsBeta.DeleteApplicationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteApplication(
    request: ApplicationsBeta.DeleteApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApplicationsBeta.DeleteApplicationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/applications/{applicationKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "applicationKey", value: request.applicationKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApplicationsBeta.DeleteApplicationError,
      },
      options,
    );
  }

  /**
   * Delete application version
   *
   * @remarks
   * Delete an application version.
   *
   * @returns Action succeeded
   *
   * @throws {@link ApplicationsBeta.DeleteApplicationVersionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteApplicationVersion(
    request: ApplicationsBeta.DeleteApplicationVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApplicationsBeta.DeleteApplicationVersionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/applications/{applicationKey}/versions/{versionKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "applicationKey", value: request.applicationKey, schema: s.string() },
          { name: "versionKey", value: request.versionKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApplicationsBeta.DeleteApplicationVersionError,
      },
      options,
    );
  }

  /**
   * Get application by key
   *
   * @remarks
   *
   * Retrieve an application by the application key.
   *
   * ### Expanding the application response
   *
   * LaunchDarkly supports expanding the "Get application" response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `flags` includes details on the flags that have been evaluated by the application
   *
   * For example, use `?expand=flags` to include the `flags` field in the response. By default, this
   * field is **not** included in the response.
   *
   * @returns Application response
   *
   * @throws {@link ApplicationsBeta.GetApplicationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApplication(
    request: ApplicationsBeta.GetApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplicationRep, ApplicationsBeta.GetApplicationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/applications/{applicationKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "applicationKey", value: request.applicationKey, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applicationRepSchema },
        errorFactory: ApplicationsBeta.GetApplicationError,
      },
      options,
    );
  }

  /**
   * Get application versions by application key
   *
   * @remarks
   * Get a list of versions for a specific application in an account.
   *
   * @returns Application versions response
   *
   * @throws {@link ApplicationsBeta.GetApplicationVersionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApplicationVersions(
    request: ApplicationsBeta.GetApplicationVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplicationVersionsCollectionRep, ApplicationsBeta.GetApplicationVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/applications/{applicationKey}/versions"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "applicationKey", value: request.applicationKey, schema: s.string() }],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applicationVersionsCollectionRepSchema },
        errorFactory: ApplicationsBeta.GetApplicationVersionsError,
      },
      options,
    );
  }

  /**
   * Get applications
   *
   * @remarks
   *
   * Get a list of applications.
   *
   * ### Expanding the applications response
   *
   * LaunchDarkly supports expanding the "Get applications" response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `flags` includes details on the flags that have been evaluated by the application
   *
   * For example, use `?expand=flags` to include the `flags` field in the response. By default, this
   * field is **not** included in the response.
   *
   * @returns Applications response
   *
   * @throws {@link ApplicationsBeta.GetApplicationsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApplications(
    request: ApplicationsBeta.GetApplicationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplicationCollectionRep, ApplicationsBeta.GetApplicationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/applications"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applicationCollectionRepSchema },
        errorFactory: ApplicationsBeta.GetApplicationsError,
      },
      options,
    );
  }

  /**
   * Update application
   *
   * @remarks
   * Update an application. You can update the `description` and `kind` fields. Requires a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to
   * the application. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Application response
   *
   * @throws {@link ApplicationsBeta.PatchApplicationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchApplication(
    request: ApplicationsBeta.PatchApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplicationRep, ApplicationsBeta.PatchApplicationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/applications/{applicationKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "applicationKey", value: request.applicationKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: applicationRepSchema },
        errorFactory: ApplicationsBeta.PatchApplicationError,
      },
      options,
    );
  }

  /**
   * Update application version
   *
   * @remarks
   * Update an application version. You can update the `supported` field. Requires a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to
   * the application version. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Application version response
   *
   * @throws {@link ApplicationsBeta.PatchApplicationVersionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchApplicationVersion(
    request: ApplicationsBeta.PatchApplicationVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplicationVersionRep, ApplicationsBeta.PatchApplicationVersionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/applications/{applicationKey}/versions/{versionKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "applicationKey", value: request.applicationKey, schema: s.string() },
          { name: "versionKey", value: request.versionKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: applicationVersionRepSchema },
        errorFactory: ApplicationsBeta.PatchApplicationVersionError,
      },
      options,
    );
  }
}

export namespace ApplicationsBeta {
  export type DeleteApplicationRequest = {
    /** The application key */
    applicationKey: string;
  };

  export class DeleteApplicationError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApplicationError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type DeleteApplicationVersionRequest = {
    /** The application key */
    applicationKey: string;
    /** The application version key */
    versionKey: string;
  };

  export class DeleteApplicationVersionError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApplicationVersionError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetApplicationRequest = {
    /** The application key */
    applicationKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Options: `flags`.
     */
    expand?: string;
  };

  export class GetApplicationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApplicationError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetApplicationVersionsRequest = {
    /** The application key */
    applicationKey: string;
    /**
     * Accepts filter by `key`, `name`, `supported`, and `autoAdded`. To learn more about the filter
     * syntax, read [Filtering applications and application
     * versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions).
     */
    filter?: string;
    /** The number of versions to return. Defaults to 50. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * Accepts sorting order and fields. Fields can be comma separated. Possible fields are
     * `creationDate`, `name`. Examples: `sort=name` sort by names ascending,
     * `sort=-name,creationDate` sort by names descending and creationDate ascending.
     */
    sort?: string;
  };

  export class GetApplicationVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApplicationVersionsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetApplicationsRequest = {
    /**
     * Accepts filter by `key`, `name`, `kind`, and `autoAdded`. To learn more about the filter
     * syntax, read [Filtering applications and application
     * versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions).
     */
    filter?: string;
    /** The number of applications to return. Defaults to 10. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * Accepts sorting order and fields. Fields can be comma separated. Possible fields are
     * `creationDate`, `name`. Examples: `sort=name` sort by names ascending,
     * `sort=-name,creationDate` sort by names descending and creationDate ascending.
     */
    sort?: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Options: `flags`.
     */
    expand?: string;
  };

  export class GetApplicationsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApplicationsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchApplicationRequest = {
    /** The application key */
    applicationKey: string;
    body: PatchOperation[];
  };

  export class PatchApplicationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchApplicationError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchApplicationVersionRequest = {
    /** The application key */
    applicationKey: string;
    /** The application version key */
    versionKey: string;
    body: PatchOperation[];
  };

  export class PatchApplicationVersionError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchApplicationVersionError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
