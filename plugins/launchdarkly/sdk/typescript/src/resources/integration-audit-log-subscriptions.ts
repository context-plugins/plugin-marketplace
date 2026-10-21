import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { integrationSchema, type Integration } from "../models/integration.js";
import { integrationsSchema, type Integrations } from "../models/integrations.js";
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
import { subscriptionPostSchema, type SubscriptionPost } from "../models/subscription-post.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * Audit log integration subscriptions allow you to send audit log events hooks to one of dozens of
 * external tools. For example, you can send flag change event webhooks to external third party
 * software. To learn more, read [Building your own
 * integrations](https://launchdarkly.com/docs/integrations/building-integrations#building-your-own-integrations).
 *
 * You can use the integration subscriptions API to create, delete, and manage your integration
 * audit log subscriptions.
 *
 * Each of these operations requires an `integrationKey` that refers to the type of integration. The
 * required `config` fields to create a subscription vary depending on the `integrationKey`. You can
 * find a full list of the fields for each integration below.
 *
 * Several of these operations require a subscription ID. The subscription ID is returned as part of
 * the [Create audit log
 * subscription](https://launchdarkly.com/docs/api/integration-audit-log-subscriptions/create-subscription)
 * and [Get audit log subscriptions by
 * integration](https://launchdarkly.com/docs/api/integration-audit-log-subscriptions/get-subscriptions)
 * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
 *
 * ### Configuration bodies by integrationKey
 *
 * #### datadog
 *
 * `apiKey` is a sensitive value.
 *
 * `hostURL` must evaluate to either `"https://api.datadoghq.com"` or `"https://api.datadoghq.eu"`
 * and will default to the former if not explicitly defined.
 *
 * ```
 * "config": {
 *     "apiKey": <string, optional>, # sensitive value
 *     "hostURL": <string, optional>
 * }
 * ```
 *
 * #### dynatrace
 *
 * `apiToken` is a sensitive value.
 *
 * `entity` must evaluate to one of the following fields and will default to `"APPLICATION"` if not
 * explicitly defined:
 *
 * <details> <summary>Click to expand list of fields</summary> <br/> "APPLICATION"<br/>
 * "APPLICATION_METHOD"<br/> "APPLICATION_METHOD_GROUP"<br/> "AUTO_SCALING_GROUP"<br/>
 * "AUXILIARY_SYNTHETIC_TEST"<br/> "AWS_APPLICATION_LOAD_BALANCER"<br/> "AWS_AVAILABILITY_ZONE"<br/>
 * "AWS_CREDENTIALS"<br/> "AWS_LAMBDA_FUNCTION"<br/> "AWS_NETWORK_LOAD_BALANCER"<br/>
 * "AZURE_API_MANAGEMENT_SERVICE"<br/> "AZURE_APPLICATION_GATEWAY"<br/> "AZURE_COSMOS_DB"<br/>
 * "AZURE_CREDENTIALS"<br/> "AZURE_EVENT_HUB"<br/> "AZURE_EVENT_HUB_NAMESPACE"<br/>
 * "AZURE_FUNCTION_APP"<br/> "AZURE_IOT_HUB"<br/> "AZURE_LOAD_BALANCER"<br/> "AZURE_MGMT_GROUP"<br/>
 * "AZURE_REDIS_CACHE"<br/> "AZURE_REGION"<br/> "AZURE_SERVICE_BUS_NAMESPACE"<br/>
 * "AZURE_SERVICE_BUS_QUEUE"<br/> "AZURE_SERVICE_BUS_TOPIC"<br/> "AZURE_SQL_DATABASE"<br/>
 * "AZURE_SQL_ELASTIC_POOL"<br/> "AZURE_SQL_SERVER"<br/> "AZURE_STORAGE_ACCOUNT"<br/>
 * "AZURE_SUBSCRIPTION"<br/> "AZURE_TENANT"<br/> "AZURE_VM"<br/> "AZURE_VM_SCALE_SET"<br/>
 * "AZURE_WEB_APP"<br/> "CF_APPLICATION"<br/> "CF_FOUNDATION"<br/> "CINDER_VOLUME"<br/>
 * "CLOUD_APPLICATION"<br/> "CLOUD_APPLICATION_INSTANCE"<br/> "CLOUD_APPLICATION_NAMESPACE"<br/>
 * "CONTAINER_GROUP"<br/> "CONTAINER_GROUP_INSTANCE"<br/> "CUSTOM_APPLICATION"<br/>
 * "CUSTOM_DEVICE"<br/> "CUSTOM_DEVICE_GROUP"<br/> "DCRUM_APPLICATION"<br/> "DCRUM_SERVICE"<br/>
 * "DCRUM_SERVICE_INSTANCE"<br/> "DEVICE_APPLICATION_METHOD"<br/> "DISK"<br/>
 * "DOCKER_CONTAINER_GROUP_INSTANCE"<br/> "DYNAMO_DB_TABLE"<br/> "EBS_VOLUME"<br/>
 * "EC2_INSTANCE"<br/> "ELASTIC_LOAD_BALANCER"<br/> "ENVIRONMENT"<br/>
 * "EXTERNAL_SYNTHETIC_TEST_STEP"<br/> "GCP_ZONE"<br/> "GEOLOCATION"<br/> "GEOLOC_SITE"<br/>
 * "GOOGLE_COMPUTE_ENGINE"<br/> "HOST"<br/> "HOST_GROUP"<br/> "HTTP_CHECK"<br/>
 * "HTTP_CHECK_STEP"<br/> "HYPERVISOR"<br/> "KUBERNETES_CLUSTER"<br/> "KUBERNETES_NODE"<br/>
 * "MOBILE_APPLICATION"<br/> "NETWORK_INTERFACE"<br/> "NEUTRON_SUBNET"<br/> "OPENSTACK_PROJECT"<br/>
 * "OPENSTACK_REGION"<br/> "OPENSTACK_VM"<br/> "OS"<br/> "PROCESS_GROUP"<br/>
 * "PROCESS_GROUP_INSTANCE"<br/> "RELATIONAL_DATABASE_SERVICE"<br/> "SERVICE"<br/>
 * "SERVICE_INSTANCE"<br/> "SERVICE_METHOD"<br/> "SERVICE_METHOD_GROUP"<br/> "SWIFT_CONTAINER"<br/>
 * "SYNTHETIC_LOCATION"<br/> "SYNTHETIC_TEST"<br/> "SYNTHETIC_TEST_STEP"<br/> "VIRTUALMACHINE"<br/>
 * "VMWARE_DATACENTER" </details>
 *
 * ```
 * "config": {
 *     "apiToken": <string, required>,
 *     "url": <string, required>,
 *     "entity": <string, optional>
 * }
 * ```
 *
 * #### elastic
 *
 * `token` is a sensitive field.
 *
 * ```
 * "config": {
 *     "url": <string, required>,
 *     "token": <string, required>,
 *     "index": <string, required>
 * }
 * ```
 *
 * #### honeycomb
 *
 * `apiKey` is a sensitive field.
 *
 * ```
 * "config": {
 *     "datasetName": <string, required>,
 *     "apiKey": <string, required>
 * }
 * ```
 *
 * #### logdna
 *
 * `ingestionKey` is a sensitive field.
 *
 * ```
 * "config": {
 *     "ingestionKey": <string, required>,
 *     "level": <string, optional>
 * }
 * ```
 *
 * #### msteams
 *
 * ```
 * "config": {
 *     "url": <string, required>
 * }
 * ```
 *
 * #### new-relic-apm
 *
 * `apiKey` is a sensitive field.
 *
 * `domain` must evaluate to either `"api.newrelic.com"` or `"api.eu.newrelic.com"` and will default
 * to the former if not explicitly defined.
 *
 * ```
 * "config": {
 *     "apiKey": <string, required>,
 *     "applicationId": <string, required>,
 *     "domain": <string, optional>
 * }
 * ```
 *
 * #### signalfx
 *
 * `accessToken` is a sensitive field.
 *
 * ```
 * "config": {
 *     "accessToken": <string, required>,
 *     "realm": <string, required>
 * }
 * ```
 *
 * #### splunk
 *
 * `token` is a sensitive field.
 *
 * ```
 * "config": {
 *     "base-url": <string, required>,
 *     "token": <string, required>,
 *     "skip-ca-verification": <boolean, required>
 * }
 * ```
 */
export class IntegrationAuditLogSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create audit log subscription
   *
   * @remarks
   * Create an audit log subscription.<br /><br />For each subscription, you must specify the set of
   * resources you wish to subscribe to audit log notifications for. You can describe these
   * resources using a custom role policy. To learn more, read [Custom role
   * concepts](https://launchdarkly.com/docs/home/account/role-concepts).
   *
   * @returns Integration response
   *
   * @throws {@link IntegrationAuditLogSubscriptions.CreateSubscriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSubscription(
    request: IntegrationAuditLogSubscriptions.CreateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Integration, IntegrationAuditLogSubscriptions.CreateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/integrations/{integrationKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "integrationKey", value: request.integrationKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionPostSchema },
      },
      {
        success: { kind: "json", schema: integrationSchema },
        errorFactory: IntegrationAuditLogSubscriptions.CreateSubscriptionError,
      },
      options,
    );
  }

  /**
   * Delete audit log subscription
   *
   * @remarks
   * Delete an audit log subscription.
   *
   * @returns Action succeeded
   *
   * @throws {@link IntegrationAuditLogSubscriptions.DeleteSubscriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteSubscription(
    request: IntegrationAuditLogSubscriptions.DeleteSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, IntegrationAuditLogSubscriptions.DeleteSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/integrations/{integrationKey}/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: IntegrationAuditLogSubscriptions.DeleteSubscriptionError,
      },
      options,
    );
  }

  /**
   * Get audit log subscription by ID
   *
   * @remarks
   * Get an audit log subscription by ID.
   *
   * @returns Integration response
   *
   * @throws {@link IntegrationAuditLogSubscriptions.GetSubscriptionByIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSubscriptionById(
    request: IntegrationAuditLogSubscriptions.GetSubscriptionByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Integration, IntegrationAuditLogSubscriptions.GetSubscriptionByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/integrations/{integrationKey}/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationSchema },
        errorFactory: IntegrationAuditLogSubscriptions.GetSubscriptionByIdError,
      },
      options,
    );
  }

  /**
   * Get audit log subscriptions by integration
   *
   * @remarks
   * Get all audit log subscriptions associated with a given integration.
   *
   * @returns Integrations collection response
   *
   * @throws {@link IntegrationAuditLogSubscriptions.GetSubscriptionsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSubscriptions(
    request: IntegrationAuditLogSubscriptions.GetSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Integrations, IntegrationAuditLogSubscriptions.GetSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/integrations/{integrationKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "integrationKey", value: request.integrationKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationsSchema },
        errorFactory: IntegrationAuditLogSubscriptions.GetSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Update audit log subscription
   *
   * @remarks
   * Update an audit log subscription configuration. Updating an audit log subscription uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Integration response
   *
   * @throws {@link IntegrationAuditLogSubscriptions.UpdateSubscriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSubscription(
    request: IntegrationAuditLogSubscriptions.UpdateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Integration, IntegrationAuditLogSubscriptions.UpdateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/integrations/{integrationKey}/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "integrationKey", value: request.integrationKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: integrationSchema },
        errorFactory: IntegrationAuditLogSubscriptions.UpdateSubscriptionError,
      },
      options,
    );
  }
}

export namespace IntegrationAuditLogSubscriptions {
  export type CreateSubscriptionRequest = {
    /** The integration key */
    integrationKey: string;
    body: SubscriptionPost;
  };

  export class CreateSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSubscriptionError> = [
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

  export type DeleteSubscriptionRequest = {
    /** The integration key */
    integrationKey: string;
    /** The subscription ID */
    id: string;
  };

  export class DeleteSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSubscriptionError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetSubscriptionByIdRequest = {
    /** The integration key */
    integrationKey: string;
    /** The subscription ID */
    id: string;
  };

  export class GetSubscriptionByIdError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscriptionByIdError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetSubscriptionsRequest = {
    /** The integration key */
    integrationKey: string;
  };

  export class GetSubscriptionsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscriptionsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type UpdateSubscriptionRequest = {
    /** The integration key */
    integrationKey: string;
    /** The ID of the audit log subscription */
    id: string;
    body: PatchOperation[];
  };

  export class UpdateSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSubscriptionError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
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
