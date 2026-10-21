import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bigSegmentStoreIntegrationCollectionSchema,
  type BigSegmentStoreIntegrationCollection,
} from "../models/big-segment-store-integration-collection.js";
import {
  bigSegmentStoreIntegrationSchema,
  type BigSegmentStoreIntegration,
} from "../models/big-segment-store-integration.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  integrationDeliveryConfigurationPostSchema,
  type IntegrationDeliveryConfigurationPost,
} from "../models/integration-delivery-configuration-post.js";
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
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * ### Persistent store integrations
 *
 * Persistent store integrations, also called "big segment" store integrations, are required when
 * you use a server-side SDK and big segments. You can use the persistent store integrations API
 * endpoints to manage these integrations.
 *
 * > ### Synced segments and larger list-based segments are an Enterprise feature > > Segments
 * synced from external tools and larger list-based segments with more than 15,000 entries are the
 * two kinds of "big segment." LaunchDarkly uses different implementations for different types of
 * segments so that all of your segments have good performance. > > These segments are available to
 * customers on an Enterprise plan. To learn more, [read about our
 * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
 * Sales](https://launchdarkly.com/contact-sales/).
 *
 * [Segments synced from external tools](https://launchdarkly.com/docs/home/flags/synced-segments)
 * and [larger list-based segments](https://launchdarkly.com/docs/home/flags/list-based-segments)
 * are the two kinds of big segment. If you are using server-side SDKs, these segments require a
 * persistent store within your infrastructure. LaunchDarkly keeps the persistent store up to date
 * and consults it during flag evaluation.
 *
 * You need either a persistent store integration or a [Relay
 * Proxy](https://launchdarkly.com/docs/sdk/relay-proxy) to support these segments. The persistent
 * store integrations API lets you manage the persistent store integrations.
 *
 * To learn more about segments, read [Segments](https://launchdarkly.com/docs/home/flags/segments)
 * and [Segment configuration](https://launchdarkly.com/docs/home/flags/segment-config).
 *
 * Several of the endpoints in the persistent store integrations API require an integration ID. The
 * integration ID is returned as part of the [Create big segment store
 * integration](https://launchdarkly.com/docs/api/persistent-store-integrations-beta/create-big-segment-store-integration)
 * response, in the `_id` field. It is also returned as part of the [List all big segment store
 * integrations](https://launchdarkly.com/docs/api/persistent-store-integrations-beta/get-big-segment-store-integrations)
 * response, in the `_id` field of each element in the `items` array.
 *
 * You can find other APIs for working with big segments under
 * [Segments](https://launchdarkly.com/docs/api/segments).
 */
export class PersistentStoreIntegrationsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create big segment store integration
   *
   * @remarks
   *
   * Create a persistent store integration.
   *
   * If you are using server-side SDKs, segments synced from external tools and larger list-based
   * segments require a persistent store within your infrastructure. LaunchDarkly keeps the
   * persistent store up to date and consults it during flag evaluation.
   *
   * You can use either Redis or DynamoDB as your persistent store. When you create a persistent
   * store integration, the fields in the `config` object in the request vary depending on which
   * persistent store you use.
   *
   * If you are using Redis to create your persistent store integration, you will need to know:
   *
   * * Your Redis host
   * * Your Redis port
   * * Your Redis username
   * * Your Redis password
   * * Whether or not LaunchDarkly should connect using TLS
   *
   * If you are using DynamoDB to create your persistent store integration, you will need to know:
   *
   * * Your DynamoDB table name. The table must have the following schema:
   *   * Partition key: `namespace` (string)
   *   * Sort key: `key` (string)
   * * Your DynamoDB Amazon Web Services (AWS) region.
   * * Your AWS role Amazon Resource Name (ARN). This is the role that LaunchDarkly will assume to
   *   manage your DynamoDB table.
   * * The External ID you specified when creating your Amazon Resource Name (ARN).
   *
   * To learn more, read [Segment
   * configuration](https://launchdarkly.com/docs/home/flags/segment-config).
   *
   * @returns Big segment store response
   *
   * @throws {@link PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createBigSegmentStoreIntegration(
    request: PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BigSegmentStoreIntegration,
    PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: integrationDeliveryConfigurationPostSchema },
      },
      {
        success: { kind: "json", schema: bigSegmentStoreIntegrationSchema },
        errorFactory: PersistentStoreIntegrationsBeta.CreateBigSegmentStoreIntegrationError,
      },
      options,
    );
  }

  /**
   * Delete big segment store integration
   *
   * @remarks
   * Delete a persistent store integration. Each integration uses either Redis or DynamoDB.
   *
   * @returns Action completed successfully
   *
   * @throws {@link PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteBigSegmentStoreIntegration(
    request: PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "integrationId", value: request.integrationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PersistentStoreIntegrationsBeta.DeleteBigSegmentStoreIntegrationError,
      },
      options,
    );
  }

  /**
   * Get big segment store integration by ID
   *
   * @remarks
   * Get a big segment store integration by ID.
   *
   * @returns Big segment store response
   *
   * @throws {@link PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getBigSegmentStoreIntegration(
    request: PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BigSegmentStoreIntegration,
    PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "integrationId", value: request.integrationId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bigSegmentStoreIntegrationSchema },
        errorFactory: PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationError,
      },
      options,
    );
  }

  /**
   * List all big segment store integrations
   *
   * @remarks
   * List all big segment store integrations.
   *
   * @returns Big segment store collection response
   *
   * @throws {@link PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getBigSegmentStoreIntegrations(
    options?: RequestOptions,
  ): ApiPromise<
    BigSegmentStoreIntegrationCollection,
    PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/integration-capabilities/big-segment-store"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bigSegmentStoreIntegrationCollectionSchema },
        errorFactory: PersistentStoreIntegrationsBeta.GetBigSegmentStoreIntegrationsError,
      },
      options,
    );
  }

  /**
   * Update big segment store integration
   *
   * @remarks
   * Update a big segment store integration. Updating a big segment store requires a [JSON
   * Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Big segment store response
   *
   * @throws {@link PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchBigSegmentStoreIntegration(
    request: PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BigSegmentStoreIntegration,
    PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "integrationId", value: request.integrationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: bigSegmentStoreIntegrationSchema },
        errorFactory: PersistentStoreIntegrationsBeta.PatchBigSegmentStoreIntegrationError,
      },
      options,
    );
  }
}

export namespace PersistentStoreIntegrationsBeta {
  export type CreateBigSegmentStoreIntegrationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key, either `redis` or `dynamodb` */
    integrationKey: string;
    body: IntegrationDeliveryConfigurationPost;
  };

  export class CreateBigSegmentStoreIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBigSegmentStoreIntegrationError> = [
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

  export type DeleteBigSegmentStoreIntegrationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key, either `redis` or `dynamodb` */
    integrationKey: string;
    /** The integration ID */
    integrationId: string;
  };

  export class DeleteBigSegmentStoreIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBigSegmentStoreIntegrationError> = [
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

  export type GetBigSegmentStoreIntegrationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key, either `redis` or `dynamodb` */
    integrationKey: string;
    /** The integration ID */
    integrationId: string;
  };

  export class GetBigSegmentStoreIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBigSegmentStoreIntegrationError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetBigSegmentStoreIntegrationsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBigSegmentStoreIntegrationsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchBigSegmentStoreIntegrationRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The integration key, either `redis` or `dynamodb` */
    integrationKey: string;
    /** The integration ID */
    integrationId: string;
    body: PatchOperation[];
  };

  export class PatchBigSegmentStoreIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchBigSegmentStoreIntegrationError> = [
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
}
