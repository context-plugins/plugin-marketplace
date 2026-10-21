import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  userAttributeNamesRepSchema,
  type UserAttributeNamesRep,
} from "../models/user-attribute-names-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
 * contexts instead of users, you should use [Contexts](https://launchdarkly.com/docs/api/contexts)
 * instead of these endpoints. To learn more, read
 * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
 *
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * LaunchDarkly creates a record for each user passed in to `variation` calls. This record powers
 * the autocomplete functionality on the feature flag dashboard, as well as the Users page. To learn
 * more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts)
 *
 * LaunchDarkly also offers an API that lets you access this data. You can use the users API to see
 * what user data is available to LaunchDarkly, as well as determine which flag values a user will
 * receive. You can also explicitly set which flag value a user will receive with this API.
 *
 * Users are always scoped within both a project and an environment. Each environment has its own
 * set of user records.
 */
export class UsersBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get user attribute names
   *
   * @remarks
   * > ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts
   * instead of users, you should use [Get context attribute names
   * ](https://launchdarkly.com/docs/api/contexts/get-context-attribute-names) instead of this
   * endpoint.
   *
   * Get all in-use user attributes in the specified environment. The set of in-use attributes
   * typically consists of all attributes seen within the past 30 days.
   *
   * @returns User attribute names response
   *
   * @throws {@link UsersBeta.GetUserAttributeNamesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getUserAttributeNames(
    request: UsersBeta.GetUserAttributeNamesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserAttributeNamesRep, UsersBeta.GetUserAttributeNamesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/user-attributes/{projectKey}/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userAttributeNamesRepSchema },
        errorFactory: UsersBeta.GetUserAttributeNamesError,
      },
      options,
    );
  }
}

export namespace UsersBeta {
  export type GetUserAttributeNamesRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class GetUserAttributeNamesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserAttributeNamesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }
}
