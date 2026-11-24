import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorContentstackPersonalizeManagementAttributesApiSchema,
  type ErrorContentstackPersonalizeManagementAttributesApi,
} from "../models/error-contentstack-personalize-management-attributes-api.js";
import {
  mergeUserAttributesRequestSchema,
  type MergeUserAttributesRequest,
} from "../models/merge-user-attributes-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for setting, updating, and merging user attribute data used to determine audience
 * membership and personalized content targeting.
 */
export class UserAttributes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Merge user attributes
   *
   * @remarks
   * Merges the attributes of a source user identity into a target user identity. This is used in
   * identity resolution scenarios where an anonymous user record needs to be combined with an
   * authenticated user record upon login, preserving all accumulated behavioral and attribute data.
   *
   * @returns User attributes merged successfully.
   *
   * @throws {@link UserAttributes.MergeUserAttributesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mergeUserAttributes(
    request: UserAttributes.MergeUserAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserAttributes.MergeUserAttributesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackEventsApi("/user-attributes/actions/merge"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: mergeUserAttributesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserAttributes.MergeUserAttributesError,
      },
      options,
    );
  }

  /**
   * Set and update user attributes
   *
   * @remarks
   * Persists custom user attribute values at the Personalize Edge for use in audience rule
   * evaluation. Attributes set via this endpoint are stored against the user's identifier and used
   * in all subsequent manifest requests. Use this endpoint to update attributes based on user
   * actions or profile data from external systems.
   *
   * @returns User attributes added or updated successfully.
   *
   * @throws {@link UserAttributes.SetUserAttributesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setUserAttributes(
    request: UserAttributes.SetUserAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserAttributes.SetUserAttributesError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultContentstackEventsApi("/user-attributes"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          {
            name: "x-cs-personalize-user-uid",
            value: request.xCsPersonalizeUserUid,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserAttributes.SetUserAttributesError,
      },
      options,
    );
  }
}

export namespace UserAttributes {
  export type MergeUserAttributesRequestParams = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: MergeUserAttributesRequest;
  };

  export class MergeUserAttributesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MergeUserAttributesError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 403,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type SetUserAttributesRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    /**
     * The unique identifier for the end user. If not provided, a new anonymous user will be created
     * and the UID returned in the response headers.
     */
    xCsPersonalizeUserUid?: string;
    body: Record<string, unknown>;
  };

  export class SetUserAttributesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<SetUserAttributesError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 403,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }
}
