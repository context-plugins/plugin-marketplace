import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1PoliciesActivateRequestInternalSchema,
  type ApiV1PoliciesActivateRequest,
} from "../models/api-v1-policies-activate-request.js";
import {
  apiV1PoliciesActivateResponseSchema,
  type ApiV1PoliciesActivateResponse,
} from "../models/api-v1-policies-activate-response.js";
import {
  apiV1PoliciesActivate403Error1Schema,
  type ApiV1PoliciesActivate403Error1,
} from "../models/api-v1-policies-activate403-error1.js";
import {
  apiV1PoliciesActivate404Error1Schema,
  type ApiV1PoliciesActivate404Error1,
} from "../models/api-v1-policies-activate404-error1.js";
import {
  apiV1PoliciesActivate409Error1Schema,
  type ApiV1PoliciesActivate409Error1,
} from "../models/api-v1-policies-activate409-error1.js";
import {
  apiV1PoliciesReplayRequestInternalSchema,
  type ApiV1PoliciesReplayRequest,
} from "../models/api-v1-policies-replay-request.js";
import {
  apiV1PoliciesReplayResponseSchema,
  type ApiV1PoliciesReplayResponse,
} from "../models/api-v1-policies-replay-response.js";
import {
  apiV1PoliciesRequestInternalSchema,
  type ApiV1PoliciesRequest,
} from "../models/api-v1-policies-request.js";
import {
  apiV1PoliciesResponseSchema,
  type ApiV1PoliciesResponse,
} from "../models/api-v1-policies-response.js";
import {
  apiV1PoliciesResponse1Schema,
  type ApiV1PoliciesResponse1,
} from "../models/api-v1-policies-response1.js";
import {
  apiV1PoliciesSimulateRequestInternalSchema,
  type ApiV1PoliciesSimulateRequest,
} from "../models/api-v1-policies-simulate-request.js";
import {
  apiV1PoliciesSimulateResponseSchema,
  type ApiV1PoliciesSimulateResponse,
} from "../models/api-v1-policies-simulate-response.js";
import {
  apiV1PoliciesTestRequestInternalSchema,
  type ApiV1PoliciesTestRequest,
} from "../models/api-v1-policies-test-request.js";
import {
  apiV1PoliciesTestResponseSchema,
  type ApiV1PoliciesTestResponse,
} from "../models/api-v1-policies-test-response.js";
import {
  apiV1PoliciesVersionsRequestInternalSchema,
  type ApiV1PoliciesVersionsRequest,
} from "../models/api-v1-policies-versions-request.js";
import {
  apiV1PoliciesVersionsResponseSchema,
  type ApiV1PoliciesVersionsResponse,
} from "../models/api-v1-policies-versions-response.js";
import {
  apiV1PoliciesVersions400Error1Schema,
  type ApiV1PoliciesVersions400Error1,
} from "../models/api-v1-policies-versions400-error1.js";
import {
  apiV1PoliciesVersions403Error1Schema,
  type ApiV1PoliciesVersions403Error1,
} from "../models/api-v1-policies-versions403-error1.js";
import {
  apiV1PoliciesVersions404Error1Schema,
  type ApiV1PoliciesVersions404Error1,
} from "../models/api-v1-policies-versions404-error1.js";
import {
  apiV1Policies400Error1Schema,
  type ApiV1Policies400Error1,
} from "../models/api-v1-policies400-error1.js";
import {
  apiV1Policies403Error1Schema,
  type ApiV1Policies403Error1,
} from "../models/api-v1-policies403-error1.js";
import {
  apiV1Policies409Error1Schema,
  type ApiV1Policies409Error1,
} from "../models/api-v1-policies409-error1.js";
import type { Servers } from "../servers.js";

export class Policies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * The policies this organisation has
   *
   * @returns Newest first, each saying which version is in force. Owners and administrators only.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Policies(
    request: Policies.GetApiV1PoliciesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PoliciesResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/policies"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PoliciesResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Write a policy: what a registered action costs
   *
   * @remarks
   * A policy is an identity that survives editing; a version is an immutable rule set. Pass `rules`
   * to store them as version 1 and `activate: true` to put that version in force, so a push is one
   * request rather than three that can fail between each other. Not an upsert, unlike registering
   * an action: a second policy of the same name is refused, because overwriting one would silently
   * replace the rules an organisation is running under. The key's holder must be an owner or an
   * administrator — writing a rule is how authority is granted, so the scope alone is not enough —
   * and an agent principal is refused outright, since policy decides whether an agent needs a
   * person.
   *
   * @returns The policy, and the first version if one was sent
   *
   * @throws {@link Policies.PostApiV1PoliciesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Policies(
    request: Policies.PostApiV1PoliciesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PoliciesResponse, Policies.PostApiV1PoliciesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/policies"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PoliciesRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PoliciesResponseSchema },
        errorFactory: Policies.PostApiV1PoliciesError,
      },
      options,
    );
  }

  /**
   * Put a version in force
   *
   * @remarks
   * Supersedes whichever version was active. A superseded version cannot be revived: copy its rules
   * into a new version instead, because bringing one back would change what every decision pointing
   * at it meant.
   *
   * @returns The version now in force
   *
   * @throws {@link Policies.PostApiV1PoliciesByIdActivateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PoliciesByIdActivate(
    request: Policies.PostApiV1PoliciesByIdActivateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PoliciesActivateResponse, Policies.PostApiV1PoliciesByIdActivateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/policies/{id}/activate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PoliciesActivateRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PoliciesActivateResponseSchema },
        errorFactory: Policies.PostApiV1PoliciesByIdActivateError,
      },
      options,
    );
  }

  /**
   * Add a version: the next complete rule set
   *
   * @remarks
   * The whole rule set, not a patch — a version has to be readable on its own, because it is what a
   * past decision points at. It lands as a draft unless `activate` is set. Rules are validated
   * against the action registry now rather than at activation: a condition naming a field the
   * action's schema does not declare is refused here, since a rule that silently matches nothing
   * looks exactly like one that has not fired yet. A version that has been in force can never be
   * edited — the database refuses it, not only this endpoint.
   *
   * @returns The stored version
   *
   * @throws {@link Policies.PostApiV1PoliciesByIdVersionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PoliciesByIdVersions(
    request: Policies.PostApiV1PoliciesByIdVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PoliciesVersionsResponse, Policies.PostApiV1PoliciesByIdVersionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/policies/{id}/versions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PoliciesVersionsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PoliciesVersionsResponseSchema },
        errorFactory: Policies.PostApiV1PoliciesByIdVersionsError,
      },
      options,
    );
  }

  /**
   * What a proposed policy would have done to past decisions
   *
   * @remarks
   * Re-evaluates the organisation's recorded gate requests from the last `days` (default 30, newest
   * 5,000) twice: under the rules in force, and with the proposal standing in for its policy's
   * version in force. The proposal is a stored version (`policyId` and `version`) or a policy file
   * not yet pushed (`name` and `rules`). Reports how many decisions change and which way, and the
   * requests a person rejected that would now be allowed. `fail` applies `failOn`, for CI. Policy
   * rules only: ethics checks are not replayed. Nothing is written.
   *
   * @returns The difference.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PoliciesReplay(
    request: Policies.PostApiV1PoliciesReplayRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PoliciesReplayResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/policies/replay"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PoliciesReplayRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PoliciesReplayResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * What would happen to this request, with nothing happening
   *
   * @remarks
   * Evaluates a request against the rules in force and returns the decision and the rule that made
   * it. Not scoped to one policy, because enforcement flattens every active version into one rule
   * set and takes the first decisive rule by priority — simulating one policy in isolation would
   * report that its rule fires when a higher-priority deny elsewhere is what a real request would
   * meet. It runs the same evaluation enforcement runs, so the action must exist and the input must
   * satisfy its schema here exactly as in production. Nothing is recorded: a simulation that wrote
   * a decision row would put invented traffic into the autonomy rate.
   *
   * @returns The decision. `governed` is false when nothing matched — that is the fail-closed
   * default asking for a person, not a rule that did.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PoliciesSimulate(
    request: Policies.PostApiV1PoliciesSimulateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PoliciesSimulateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/policies/simulate"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PoliciesSimulateRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PoliciesSimulateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Run a policy file's test cases
   *
   * @remarks
   * Evaluates each test case against the proposal, with every other policy in force as it is, after
   * validating its input against the action's schema as a real request would be. A case passes when
   * the effect, and the deciding rule when `expect.rule` is given, match. Nothing is written.
   *
   * @returns Each case, passed or failed with the reason.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PoliciesTest(
    request: Policies.PostApiV1PoliciesTestRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PoliciesTestResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/policies/test"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PoliciesTestRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PoliciesTestResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Policies {
  export type GetApiV1PoliciesRequest = {
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
  };

  export const getApiV1PoliciesRequestSchema: Schema<GetApiV1PoliciesRequest> = s.lazySchema(() =>
    s.object<GetApiV1PoliciesRequest>({
      limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
      cursor: s.optional(s.string()),
    }),
  );

  export type PostApiV1PoliciesRequest = {
    body?: ApiV1PoliciesRequest;
  };

  export class PostApiV1PoliciesError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Policies400Error1", ApiV1Policies400Error1>
      | Declared<"apiV1Policies403Error1", ApiV1Policies403Error1>
      | Declared<"apiV1Policies409Error1", ApiV1Policies409Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PoliciesError> = [
      {
        on: 400,
        kind: "apiV1Policies400Error1",
        decode: { kind: "json", schema: apiV1Policies400Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Policies403Error1",
        decode: { kind: "json", schema: apiV1Policies403Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1Policies409Error1",
        decode: { kind: "json", schema: apiV1Policies409Error1Schema },
      },
    ];
  }

  export type PostApiV1PoliciesByIdActivateRequest = {
    /** The policy */
    id: string;
    body?: ApiV1PoliciesActivateRequest;
  };

  export class PostApiV1PoliciesByIdActivateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PoliciesActivate403Error1", ApiV1PoliciesActivate403Error1>
      | Declared<"apiV1PoliciesActivate404Error1", ApiV1PoliciesActivate404Error1>
      | Declared<"apiV1PoliciesActivate409Error1", ApiV1PoliciesActivate409Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PoliciesByIdActivateError> = [
      {
        on: 403,
        kind: "apiV1PoliciesActivate403Error1",
        decode: { kind: "json", schema: apiV1PoliciesActivate403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PoliciesActivate404Error1",
        decode: { kind: "json", schema: apiV1PoliciesActivate404Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1PoliciesActivate409Error1",
        decode: { kind: "json", schema: apiV1PoliciesActivate409Error1Schema },
      },
    ];
  }

  export type PostApiV1PoliciesByIdVersionsRequest = {
    /** The policy */
    id: string;
    body?: ApiV1PoliciesVersionsRequest;
  };

  export class PostApiV1PoliciesByIdVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PoliciesVersions400Error1", ApiV1PoliciesVersions400Error1>
      | Declared<"apiV1PoliciesVersions403Error1", ApiV1PoliciesVersions403Error1>
      | Declared<"apiV1PoliciesVersions404Error1", ApiV1PoliciesVersions404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PoliciesByIdVersionsError> = [
      {
        on: 400,
        kind: "apiV1PoliciesVersions400Error1",
        decode: { kind: "json", schema: apiV1PoliciesVersions400Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PoliciesVersions403Error1",
        decode: { kind: "json", schema: apiV1PoliciesVersions403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PoliciesVersions404Error1",
        decode: { kind: "json", schema: apiV1PoliciesVersions404Error1Schema },
      },
    ];
  }

  export type PostApiV1PoliciesReplayRequest = {
    body?: ApiV1PoliciesReplayRequest;
  };

  export type PostApiV1PoliciesSimulateRequest = {
    body?: ApiV1PoliciesSimulateRequest;
  };

  export type PostApiV1PoliciesTestRequest = {
    body?: ApiV1PoliciesTestRequest;
  };
}
