import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { ResourceType, resourceTypeSchema } from "../models/resource-type.js";
import { TypeAsanaTypeaheadApi, typeAsanaTypeaheadApiSchema } from "../models/type-asana-typeahead-api.js";
import {
  workspacesTypeaheadResponseSchema,
  type WorkspacesTypeaheadResponse,
} from "../models/workspaces-typeahead-response.js";
import type { Servers } from "../servers.js";

/**
 * The typeahead search API provides search for objects from a single workspace.
 */
export class Typeahead {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get objects via typeahead
   *
   * @remarks
   * Retrieves objects in the workspace based via an auto-completion/typeahead search algorithm.
   * This feature is meant to provide results quickly, so do not rely on this API to provide
   * extremely accurate search results. The result set is limited to a single page of results with a
   * maximum size, so you won’t be able to fetch large numbers of results.
   *
   * The typeahead search API provides search for objects from a single workspace. This endpoint
   * should be used to query for objects when creating an auto-completion/typeahead search feature.
   * This API is meant to provide results quickly and should not be relied upon for accurate or
   * exhaustive search results. The results sets are limited in size and cannot be paginated.
   *
   * Queries return a compact representation of each object which is typically the gid and name
   * fields. Interested in a specific set of fields or all of the fields?! Of course you are. Use
   * field selectors to manipulate what data is included in a response.
   *
   * Resources with type `user` are returned in order of most contacted to least contacted. This is
   * determined by task assignments, adding the user to projects, and adding the user as a follower
   * to tasks, messages, etc.
   *
   * Resources with type `project` are returned in order of recency. This is determined when the
   * user visits the project, is added to the project, and completes tasks in the project.
   *
   * Resources with type `task` are returned with priority placed on tasks the user is following,
   * but no guarantee on the order of those tasks.
   *
   * Resources with type `project_template` are returned with priority placed on favorited project
   * templates.
   *
   * Leaving the `query` string empty or omitted will give you results, still following the resource
   * ordering above. This could be used to list users or projects that are relevant for the
   * requesting user's api token.
   *
   * @returns Successfully retrieved objects via a typeahead search algorithm.
   *
   * @throws {@link Typeahead.TypeaheadForWorkspaceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  typeaheadForWorkspace(
    request: Typeahead.TypeaheadForWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesTypeaheadResponse, Typeahead.TypeaheadForWorkspaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_gid}/typeahead"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "workspace_gid", value: request.workspaceGid, schema: s.string() }],
        query: [
          {
            name: "resource_type",
            value: request.resourceType,
            schema: s.defaulted(resourceTypeSchema, ResourceType.User),
          },
          {
            name: "type",
            value: request.type,
            schema: s.defaulted(typeAsanaTypeaheadApiSchema, TypeAsanaTypeaheadApi.User),
          },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesTypeaheadResponseSchema },
        errorFactory: Typeahead.TypeaheadForWorkspaceError,
      },
      options,
    );
  }
}

export namespace Typeahead {
  export type TypeaheadForWorkspaceRequest = {
    /** Globally unique identifier for the workspace or organization. */
    workspaceGid: string;
    /**
     * The type of values the typeahead should return. You can choose from one of the following:
     * `custom_field`, `project`, `project_template`, `portfolio`, `tag`, `task`, and `user`. Note
     * that unlike in the names of endpoints, the types listed here are in singular form (e.g.
     * `task`). Using multiple types is not yet supported.
     *
     * @default ResourceType.User
     */
    resourceType?: ResourceType;
    /**
     * *Deprecated: new integrations should prefer the resource_type field.*
     *
     * @default TypeAsanaTypeaheadApi.User
     */
    type?: TypeAsanaTypeaheadApi;
    /**
     * The string that will be used to search for relevant objects. If an empty string is passed in,
     * the API will return results.
     */
    query?: string;
    /**
     * The number of results to return. The default is 20 if this parameter is omitted, with a
     * minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will
     * be returned.
     */
    count?: number;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class TypeaheadForWorkspaceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TypeaheadForWorkspaceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
