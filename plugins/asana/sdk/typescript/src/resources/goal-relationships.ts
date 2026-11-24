import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  goalRelationshipsRequestSchema,
  type GoalRelationshipsRequest,
} from "../models/goal-relationships-request.js";
import {
  goalRelationshipsResponseSchema,
  type GoalRelationshipsResponse,
} from "../models/goal-relationships-response.js";
import {
  goalRelationshipsResponse2Schema,
  type GoalRelationshipsResponse2,
} from "../models/goal-relationships-response2.js";
import {
  goalsAddSupportingRelationshipRequestSchema,
  type GoalsAddSupportingRelationshipRequest,
} from "../models/goals-add-supporting-relationship-request.js";
import {
  goalsAddSupportingRelationshipResponseSchema,
  type GoalsAddSupportingRelationshipResponse,
} from "../models/goals-add-supporting-relationship-response.js";
import {
  goalsRemoveSupportingRelationshipRequestSchema,
  type GoalsRemoveSupportingRelationshipRequest,
} from "../models/goals-remove-supporting-relationship-request.js";
import {
  goalsRemoveSupportingRelationshipResponseSchema,
  type GoalsRemoveSupportingRelationshipResponse,
} from "../models/goals-remove-supporting-relationship-response.js";
import type { Servers } from "../servers.js";

/**
 * A goal relationship is an object representing the relationship between a goal and another goal, a
 * project, or a portfolio.
 */
export class GoalRelationships {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a supporting goal relationship
   *
   * @remarks
   * Creates a goal relationship by adding a supporting resource to a given goal.
   *
   * Returns the newly created goal relationship record.
   *
   * @returns Successfully created the goal relationship.
   *
   * @throws {@link GoalRelationships.AddSupportingRelationshipError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addSupportingRelationship(
    request: GoalRelationships.AddSupportingRelationshipRequest,
    options?: RequestOptions,
  ): ApiPromise<GoalsAddSupportingRelationshipResponse, GoalRelationships.AddSupportingRelationshipError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/goals/{goal_gid}/addSupportingRelationship"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "goal_gid", value: request.goalGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: goalsAddSupportingRelationshipRequestSchema },
      },
      {
        success: { kind: "json", schema: goalsAddSupportingRelationshipResponseSchema },
        errorFactory: GoalRelationships.AddSupportingRelationshipError,
      },
      options,
    );
  }

  /**
   * Get a goal relationship
   *
   * @remarks
   * Returns the complete updated goal relationship record for a single goal relationship.
   *
   * @returns Successfully retrieved the record for the goal relationship.
   *
   * @throws {@link GoalRelationships.GetGoalRelationshipError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGoalRelationship(
    request: GoalRelationships.GetGoalRelationshipRequest,
    options?: RequestOptions,
  ): ApiPromise<GoalRelationshipsResponse, GoalRelationships.GetGoalRelationshipError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/goal_relationships/{goal_relationship_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [
          { name: "goal_relationship_gid", value: request.goalRelationshipGid, schema: s.string() },
        ],
        query: [
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
        success: { kind: "json", schema: goalRelationshipsResponseSchema },
        errorFactory: GoalRelationships.GetGoalRelationshipError,
      },
      options,
    );
  }

  /**
   * Get goal relationships
   *
   * @remarks
   * Returns compact goal relationship records.
   *
   * @returns Successfully retrieved the requested goal relationships.
   *
   * @throws {@link GoalRelationships.GetGoalRelationshipsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGoalRelationships(
    request: GoalRelationships.GetGoalRelationshipsRequest,
    options?: RequestOptions,
  ): ApiPromise<GoalRelationshipsResponse2, GoalRelationships.GetGoalRelationshipsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/goal_relationships"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "supported_goal", value: request.supportedGoal, schema: s.string() },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "resource_subtype", value: request.resourceSubtype, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: goalRelationshipsResponse2Schema },
        errorFactory: GoalRelationships.GetGoalRelationshipsError,
      },
      options,
    );
  }

  /**
   * Removes a supporting goal relationship
   *
   * @remarks
   * Removes a goal relationship for a given parent goal.
   *
   * @returns Successfully removed the goal relationship.
   *
   * @throws {@link GoalRelationships.RemoveSupportingRelationshipError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeSupportingRelationship(
    request: GoalRelationships.RemoveSupportingRelationshipRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoalsRemoveSupportingRelationshipResponse,
    GoalRelationships.RemoveSupportingRelationshipError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/goals/{goal_gid}/removeSupportingRelationship"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "goal_gid", value: request.goalGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: goalsRemoveSupportingRelationshipRequestSchema },
      },
      {
        success: { kind: "json", schema: goalsRemoveSupportingRelationshipResponseSchema },
        errorFactory: GoalRelationships.RemoveSupportingRelationshipError,
      },
      options,
    );
  }

  /**
   * Update a goal relationship
   *
   * @remarks
   * An existing goal relationship can be updated by making a PUT request on the URL for that goal
   * relationship. Only the fields provided in the `data` block will be updated; any unspecified
   * fields will remain unchanged.
   *
   * Returns the complete updated goal relationship record.
   *
   * @returns Successfully updated the goal relationship.
   *
   * @throws {@link GoalRelationships.UpdateGoalRelationshipError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGoalRelationship(
    request: GoalRelationships.UpdateGoalRelationshipRequest,
    options?: RequestOptions,
  ): ApiPromise<GoalRelationshipsResponse, GoalRelationships.UpdateGoalRelationshipError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/goal_relationships/{goal_relationship_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [
          { name: "goal_relationship_gid", value: request.goalRelationshipGid, schema: s.string() },
        ],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: goalRelationshipsRequestSchema },
      },
      {
        success: { kind: "json", schema: goalRelationshipsResponseSchema },
        errorFactory: GoalRelationships.UpdateGoalRelationshipError,
      },
      options,
    );
  }
}

export namespace GoalRelationships {
  export type AddSupportingRelationshipRequest = {
    /** Globally unique identifier for the goal. */
    goalGid: string;
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
    /** The supporting resource to be added to the goal */
    body: GoalsAddSupportingRelationshipRequest;
  };

  export class AddSupportingRelationshipError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddSupportingRelationshipError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetGoalRelationshipRequest = {
    /** Globally unique identifier for the goal relationship. */
    goalRelationshipGid: string;
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

  export class GetGoalRelationshipError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGoalRelationshipError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetGoalRelationshipsRequest = {
    /** Globally unique identifier for the supported goal in the goal relationship. */
    supportedGoal: string;
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
    /** If provided, filter to goal relationships with a given resource_subtype. */
    resourceSubtype?: string;
  };

  export class GetGoalRelationshipsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGoalRelationshipsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveSupportingRelationshipRequest = {
    /** Globally unique identifier for the goal. */
    goalGid: string;
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
    /** The supporting resource to be removed from the goal */
    body: GoalsRemoveSupportingRelationshipRequest;
  };

  export class RemoveSupportingRelationshipError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveSupportingRelationshipError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateGoalRelationshipRequest = {
    /** Globally unique identifier for the goal relationship. */
    goalRelationshipGid: string;
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
    /** The updated fields for the goal relationship. */
    body: GoalRelationshipsRequest;
  };

  export class UpdateGoalRelationshipError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGoalRelationshipError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
