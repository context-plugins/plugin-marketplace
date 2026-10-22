import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { destinationPostSchema, type DestinationPost } from "../models/destination-post.js";
import { destinationSchema, type Destination } from "../models/destination.js";
import { destinationsSchema, type Destinations } from "../models/destinations.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  generateTrustPolicyPostRepSchema,
  type GenerateTrustPolicyPostRep,
} from "../models/generate-trust-policy-post-rep.js";
import {
  generateWarehouseDestinationKeyPairPostRepSchema,
  type GenerateWarehouseDestinationKeyPairPostRep,
} from "../models/generate-warehouse-destination-key-pair-post-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Data Export is an add-on feature > > Data Export is available as an add-on for customers on
 * a Foundation or Enterprise plan. To learn more, [read about our
 * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
 * Sales](https://launchdarkly.com/contact-sales/).
 *
 * Data Export provides a real-time export of raw analytics data, including feature flag requests,
 * analytics events, custom events, and more.
 *
 * Data Export destinations are locations that receive exported data. The Data Export destinations
 * API allows you to configure destinations so that your data can be exported.
 *
 * Several of the endpoints in the Data Export destinations API require a Data Export destination
 * ID. The Data Export destination ID is returned as part of the [Create a Data Export
 * destination](https://launchdarkly.com/docs/api/data-export-destinations/post-destination) and
 * [List destinations](https://launchdarkly.com/docs/api/data-export-destinations/get-destinations)
 * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
 *
 * To learn more, read [Data Export](https://launchdarkly.com/docs/integrations/data-export).
 */
export class DataExportDestinations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Data Export destination
   *
   * @remarks
   * Delete a Data Export destination by ID.
   *
   * @returns Destination response
   *
   * @throws {@link DataExportDestinations.DeleteDestinationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDestination(
    request: DataExportDestinations.DeleteDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DataExportDestinations.DeleteDestinationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/destinations/{projectKey}/{environmentKey}/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DataExportDestinations.DeleteDestinationError,
      },
      options,
    );
  }

  /**
   * Get destination
   *
   * @remarks
   * Get a single Data Export destination by ID.
   *
   * @returns Destination response
   *
   * @throws {@link DataExportDestinations.GetDestinationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDestination(
    request: DataExportDestinations.GetDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<Destination, DataExportDestinations.GetDestinationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/destinations/{projectKey}/{environmentKey}/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: destinationSchema },
        errorFactory: DataExportDestinations.GetDestinationError,
      },
      options,
    );
  }

  /**
   * List destinations
   *
   * @remarks
   * Get a list of Data Export destinations configured across all projects and environments.
   *
   * @returns Destination collection response
   *
   * @throws {@link DataExportDestinations.GetDestinationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDestinations(
    options?: RequestOptions,
  ): ApiPromise<Destinations, DataExportDestinations.GetDestinationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/destinations"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: destinationsSchema },
        errorFactory: DataExportDestinations.GetDestinationsError,
      },
      options,
    );
  }

  /**
   * Update Data Export destination
   *
   * @remarks
   * Update a Data Export destination. Updating a destination uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge
   * patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Destination response
   *
   * @throws {@link DataExportDestinations.PatchDestinationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchDestination(
    request: DataExportDestinations.PatchDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<Destination, DataExportDestinations.PatchDestinationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/destinations/{projectKey}/{environmentKey}/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: destinationSchema },
        errorFactory: DataExportDestinations.PatchDestinationError,
      },
      options,
    );
  }

  /**
   * Create Data Export destination
   *
   * @remarks
   *
   * Create a new Data Export destination.
   *
   * In the `config` request body parameter, the fields required depend on the type of Data Export
   * destination.
   *
   * <details> <summary>Click to expand <code>config</code> parameter details</summary>
   *
   * #### Azure Event Hubs
   *
   * To create a Data Export destination with a `kind` of `azure-event-hubs`, the `config` object
   * requires the following fields:
   *
   * * `namespace`: The Event Hub Namespace name
   * * `name`: The Event Hub name
   * * `policyName`: The shared access signature policy name. You can find your policy name in the
   *   settings of your Azure Event Hubs Namespace.
   * * `policyKey`: The shared access signature key. You can find your policy key in the settings of
   *   your Azure Event Hubs Namespace.
   *
   * #### Google Cloud Pub/Sub
   *
   * To create a Data Export destination with a `kind` of `google-pubsub`, the `config` object
   * requires the following fields:
   *
   * * `project`: The Google PubSub project ID for the project to publish to
   * * `topic`: The Google PubSub topic ID for the topic to publish to
   *
   * #### Amazon Kinesis
   *
   * To create a Data Export destination with a `kind` of `kinesis`, the `config` object requires
   * the following fields:
   *
   * * `region`: The Kinesis stream's AWS region key
   * * `roleArn`: The Amazon Resource Name (ARN) of the AWS role that will be writing to Kinesis
   * * `streamName`: The name of the Kinesis stream that LaunchDarkly is sending events to. This is
   *   not the ARN of the stream.
   *
   * #### mParticle
   *
   * To create a Data Export destination with a `kind` of `mparticle`, the `config` object requires
   * the following fields:
   *
   * * `apiKey`: The mParticle API key
   * * `secret`: The mParticle API secret
   * * `userIdentity`: The type of identifier you use to identify your end users in mParticle
   * * `anonymousUserIdentity`: The type of identifier you use to identify your anonymous end users
   *   in mParticle
   *
   * #### Segment
   *
   * To create a Data Export destination with a `kind` of `segment`, the `config` object requires
   * the following fields:
   *
   * * `writeKey`: The Segment write key. This is used to authenticate LaunchDarkly's calls to
   *   Segment.
   *
   * #### Snowflake
   *
   * To create a Data Export destination with a `kind` of `snowflake-v2`, the `config` object
   * requires the following fields:
   *
   * * `publicKey`: The `publicKey` is returned as part of the [Generate Snowflake destination key
   *   pair](https://launchdarkly.com/docs/api/data-export-destinations/post-generate-warehouse-destination-key-pair)
   *   response. It is the `public_key` field.
   * * `snowflakeHostAddress`: Your Snowflake account URL.
   *
   * </details>
   *
   * @returns Destination response
   *
   * @throws {@link DataExportDestinations.PostDestinationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postDestination(
    request: DataExportDestinations.PostDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<Destination, DataExportDestinations.PostDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/destinations/{projectKey}/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: destinationPostSchema },
      },
      {
        success: { kind: "json", schema: destinationSchema },
        errorFactory: DataExportDestinations.PostDestinationError,
      },
      options,
    );
  }

  /**
   * Generate trust policy
   *
   * @remarks
   * Trust policy to allow Data Export to assume the role and perform operations on AWS resources
   *
   * @returns Generate trust policy response
   *
   * @throws {@link DataExportDestinations.PostGenerateTrustPolicyError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postGenerateTrustPolicy(
    request: DataExportDestinations.PostGenerateTrustPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateTrustPolicyPostRep, DataExportDestinations.PostGenerateTrustPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/destinations/projects/{projKey}/environments/{envKey}/generate-trust-policy",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projKey", value: request.projKey, schema: s.string() },
          { name: "envKey", value: request.envKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateTrustPolicyPostRepSchema },
        errorFactory: DataExportDestinations.PostGenerateTrustPolicyError,
      },
      options,
    );
  }

  /**
   * Generate Snowflake destination key pair
   *
   * @remarks
   * Generate key pair to allow Data Export to authenticate into a Snowflake warehouse destination
   *
   * @returns Generate warehouse destination key pair response
   *
   * @throws {@link DataExportDestinations.PostGenerateWarehouseDestinationKeyPairError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postGenerateWarehouseDestinationKeyPair(
    options?: RequestOptions,
  ): ApiPromise<
    GenerateWarehouseDestinationKeyPairPostRep,
    DataExportDestinations.PostGenerateWarehouseDestinationKeyPairError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/destinations/generate-warehouse-destination-key-pair"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateWarehouseDestinationKeyPairPostRepSchema },
        errorFactory: DataExportDestinations.PostGenerateWarehouseDestinationKeyPairError,
      },
      options,
    );
  }
}

export namespace DataExportDestinations {
  export type DeleteDestinationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The Data Export destination ID */
    id: string;
  };

  export class DeleteDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDestinationError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetDestinationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The Data Export destination ID */
    id: string;
  };

  export class GetDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDestinationError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetDestinationsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDestinationsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchDestinationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The Data Export destination ID */
    id: string;
    body: PatchOperation[];
  };

  export class PatchDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchDestinationError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostDestinationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    body: DestinationPost;
  };

  export class PostDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostDestinationError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostGenerateTrustPolicyRequest = {
    /** The project key */
    projKey: string;
    /** The environment key */
    envKey: string;
  };

  export class PostGenerateTrustPolicyError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostGenerateTrustPolicyError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class PostGenerateWarehouseDestinationKeyPairError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostGenerateWarehouseDestinationKeyPairError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
