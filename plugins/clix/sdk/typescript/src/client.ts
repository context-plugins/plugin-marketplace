import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { allAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import {
  clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodySchema,
  type ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody,
} from "./models/clix-external-service-create-or-update-users-properties-by-device-id-body.js";
import {
  clixExternalServiceSetProjectUserIdForDeviceBodySchema,
  type ClixExternalServiceSetProjectUserIdForDeviceBody,
} from "./models/clix-external-service-set-project-user-id-for-device-body.js";
import {
  clixexternalv1HealthCheckResponseSchema,
  type Clixexternalv1HealthCheckResponse,
} from "./models/clixexternalv1-health-check-response.js";
import {
  v1CreateEventsRequestSchema,
  type V1CreateEventsRequest,
} from "./models/v1-create-events-request.js";
import {
  v1CreateEventsResponseSchema,
  type V1CreateEventsResponse,
} from "./models/v1-create-events-response.js";
import {
  v1CreateOrUpdateDevicesRequestSchema,
  type V1CreateOrUpdateDevicesRequest,
} from "./models/v1-create-or-update-devices-request.js";
import {
  v1CreateOrUpdateDevicesResponseSchema,
  type V1CreateOrUpdateDevicesResponse,
} from "./models/v1-create-or-update-devices-response.js";
import {
  v1CreateOrUpdateUsersPropertiesByDeviceIdResponseSchema,
  type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse,
} from "./models/v1-create-or-update-users-properties-by-device-id-response.js";
import { v1CreateUserRequestSchema, type V1CreateUserRequest } from "./models/v1-create-user-request.js";
import { v1CreateUserResponseSchema, type V1CreateUserResponse } from "./models/v1-create-user-response.js";
import {
  v1SendPushNotificationsRequestSchema,
  type V1SendPushNotificationsRequest,
} from "./models/v1-send-push-notifications-request.js";
import {
  v1SendPushNotificationsResponseSchema,
  type V1SendPushNotificationsResponse,
} from "./models/v1-send-push-notifications-response.js";
import {
  v1SetProjectUserIdForDeviceResponseSchema,
  type V1SetProjectUserIdForDeviceResponse,
} from "./models/v1-set-project-user-id-for-device-response.js";
import {
  v1StartLiveActivitiesRequestSchema,
  type V1StartLiveActivitiesRequest,
} from "./models/v1-start-live-activities-request.js";
import {
  v1StartLiveActivitiesResponseSchema,
  type V1StartLiveActivitiesResponse,
} from "./models/v1-start-live-activities-response.js";
import {
  v1TriggerCampaignRequestSchema,
  type V1TriggerCampaignRequest,
} from "./models/v1-trigger-campaign-request.js";
import {
  v1TriggerCampaignResponseSchema,
  type V1TriggerCampaignResponse,
} from "./models/v1-trigger-campaign-response.js";
import { v1UpdateUserRequestSchema, type V1UpdateUserRequest } from "./models/v1-update-user-request.js";
import { v1UpdateUserResponseSchema, type V1UpdateUserResponse } from "./models/v1-update-user-response.js";
import { buildServers, type Servers } from "./servers.js";

export class ClixClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CLIX_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ClixClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Event
   *
   * @returns A successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceCreateEvents(
    request: ClixClient.ClixExternalServiceCreateEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CreateEventsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/events"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1CreateEventsRequestSchema },
      },
      {
        success: { kind: "json", schema: v1CreateEventsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Device
   *
   * @returns A successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceCreateOrUpdateDevices(
    request: ClixClient.ClixExternalServiceCreateOrUpdateDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CreateOrUpdateDevicesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/devices"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1CreateOrUpdateDevicesRequestSchema },
      },
      {
        success: { kind: "json", schema: v1CreateOrUpdateDevicesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UserProperty
   *
   * @returns A successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(
    request: ClixClient.ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CreateOrUpdateUsersPropertiesByDeviceIdResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/devices/{deviceId}/user/properties"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: clixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodySchema,
        },
      },
      {
        success: { kind: "json", schema: v1CreateOrUpdateUsersPropertiesByDeviceIdResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new user
   *
   * @remarks
   * Creates a new user with the specified project_user_id
   *
   * @returns User created successfully
   *
   * @throws {@link ClixClient.ClixExternalServiceCreateUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceCreateUser(
    request: ClixClient.ClixExternalServiceCreateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CreateUserResponse, ClixClient.ClixExternalServiceCreateUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/users"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1CreateUserRequestSchema },
      },
      {
        success: { kind: "json", schema: v1CreateUserResponseSchema },
        errorFactory: ClixClient.ClixExternalServiceCreateUserError,
      },
      options,
    );
  }

  /**
   * Delete a user
   *
   * @remarks
   * Permanently deletes a user and all associated data
   *
   * @returns User deleted successfully
   *
   * @throws {@link ClixClient.ClixExternalServiceDeleteUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceDeleteUser(
    request: ClixClient.ClixExternalServiceDeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ClixClient.ClixExternalServiceDeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/users/{project_user_id}"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "project_user_id", value: request.projectUserId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ClixClient.ClixExternalServiceDeleteUserError,
      },
      options,
    );
  }

  /**
   * Clix external service health check
   *
   * @returns A successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceHealthCheck(
    options?: RequestOptions,
  ): ApiPromise<Clixexternalv1HealthCheckResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/health"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clixexternalv1HealthCheckResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Send push notifications to user devices
   *
   * @remarks
   * This endpoint sends push notifications to one or more user devices.
   *
   * @returns A successful response containing the delivery results for each push notification.
   *
   * @throws {@link ClixClient.ClixExternalServiceSendPushNotificationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceSendPushNotifications(
    request: ClixClient.ClixExternalServiceSendPushNotificationsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SendPushNotificationsResponse, ClixClient.ClixExternalServiceSendPushNotificationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/messages:send"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SendPushNotificationsRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SendPushNotificationsResponseSchema },
        errorFactory: ClixClient.ClixExternalServiceSendPushNotificationsError,
      },
      options,
    );
  }

  /**
   * Clix external service set project user id for device
   *
   * @returns A successful response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceSetProjectUserIdForDevice(
    request: ClixClient.ClixExternalServiceSetProjectUserIdForDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SetProjectUserIdForDeviceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/devices/{deviceId}/user/project-user-id"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "deviceId", value: request.deviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: clixExternalServiceSetProjectUserIdForDeviceBodySchema,
        },
      },
      {
        success: { kind: "json", schema: v1SetProjectUserIdForDeviceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Start Live Activities on user devices
   *
   * @remarks
   * This endpoint starts iOS Live Activities on one or more user devices using Push to Start.
   *
   * @returns A successful response containing the delivery results for each live activity.
   *
   * @throws {@link ClixClient.ClixExternalServiceStartLiveActivitiesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceStartLiveActivities(
    request: ClixClient.ClixExternalServiceStartLiveActivitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1StartLiveActivitiesResponse, ClixClient.ClixExternalServiceStartLiveActivitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/live-activities:start"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1StartLiveActivitiesRequestSchema },
      },
      {
        success: { kind: "json", schema: v1StartLiveActivitiesResponseSchema },
        errorFactory: ClixClient.ClixExternalServiceStartLiveActivitiesError,
      },
      options,
    );
  }

  /**
   * Trigger a campaign
   *
   * @remarks
   * Triggers an API-triggered campaign to send messages to a specific audience
   *
   * @returns Campaign triggered successfully
   *
   * @throws {@link ClixClient.ClixExternalServiceTriggerCampaignError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceTriggerCampaign(
    request: ClixClient.ClixExternalServiceTriggerCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TriggerCampaignResponse, ClixClient.ClixExternalServiceTriggerCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/campaigns/{campaign_id}:trigger"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1TriggerCampaignRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: v1TriggerCampaignResponseSchema },
        errorFactory: ClixClient.ClixExternalServiceTriggerCampaignError,
      },
      options,
    );
  }

  /**
   * Update an existing user
   *
   * @remarks
   * Updates user properties
   *
   * @returns User updated successfully
   *
   * @throws {@link ClixClient.ClixExternalServiceUpdateUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ClixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clixExternalServiceUpdateUser(
    request: ClixClient.ClixExternalServiceUpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UpdateUserResponse, ClixClient.ClixExternalServiceUpdateUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/users/{project_user_id}"),
        auth: allAuth(this.#auth.projectIdAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "project_user_id", value: request.projectUserId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UpdateUserRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UpdateUserResponseSchema },
        errorFactory: ClixClient.ClixExternalServiceUpdateUserError,
      },
      options,
    );
  }
}

export namespace ClixClient {
  export type ClixExternalServiceCreateEventsRequest = {
    /** Request body containing the event details. */
    body: V1CreateEventsRequest;
  };

  export type ClixExternalServiceCreateOrUpdateDevicesRequest = {
    /** Request body containing device information. */
    body: V1CreateOrUpdateDevicesRequest;
  };

  export type ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest = {
    deviceId: string;
    /** Request body containing user properties to create or update. */
    body: ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody;
  };

  export type ClixExternalServiceCreateUserRequest = {
    /** User data to create */
    body: V1CreateUserRequest;
  };

  export class ClixExternalServiceCreateUserError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Undeclared;

    static readonly errors: ErrorDecoders<ClixExternalServiceCreateUserError> = [
      { on: 400, kind: "error400", decode: { kind: "text", schema: s.string() } },
    ];
  }

  export type ClixExternalServiceDeleteUserRequest = {
    /** The unique identifier of the user to delete */
    projectUserId: string;
  };

  export class ClixExternalServiceDeleteUserError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Undeclared;

    static readonly errors: ErrorDecoders<ClixExternalServiceDeleteUserError> = [
      { on: 400, kind: "error400", decode: { kind: "text", schema: s.string() } },
    ];
  }

  export type ClixExternalServiceSendPushNotificationsRequest = {
    /** Request body containing the push notifications to send. */
    body: V1SendPushNotificationsRequest;
  };

  export class ClixExternalServiceSendPushNotificationsError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Undeclared;

    static readonly errors: ErrorDecoders<ClixExternalServiceSendPushNotificationsError> = [
      { on: 400, kind: "error400", decode: { kind: "text", schema: s.string() } },
    ];
  }

  export type ClixExternalServiceSetProjectUserIdForDeviceRequest = {
    deviceId: string;
    /** Request body containing the project user ID to set for the device. */
    body: ClixExternalServiceSetProjectUserIdForDeviceBody;
  };

  export type ClixExternalServiceStartLiveActivitiesRequest = {
    /** Request body containing the live activities to start. */
    body: V1StartLiveActivitiesRequest;
  };

  export class ClixExternalServiceStartLiveActivitiesError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Undeclared;

    static readonly errors: ErrorDecoders<ClixExternalServiceStartLiveActivitiesError> = [
      { on: 400, kind: "error400", decode: { kind: "text", schema: s.string() } },
    ];
  }

  export type ClixExternalServiceTriggerCampaignRequest = {
    /** The unique identifier of the campaign to trigger */
    campaignId: string;
    /** Campaign trigger configuration */
    body?: V1TriggerCampaignRequest;
  };

  export class ClixExternalServiceTriggerCampaignError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Undeclared;

    static readonly errors: ErrorDecoders<ClixExternalServiceTriggerCampaignError> = [
      { on: 400, kind: "error400", decode: { kind: "text", schema: s.string() } },
    ];
  }

  export type ClixExternalServiceUpdateUserRequest = {
    /** The unique identifier of the user to update */
    projectUserId: string;
    /** User data to update */
    body: V1UpdateUserRequest;
  };

  export class ClixExternalServiceUpdateUserError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ClixExternalServiceUpdateUserError> = [
      { on: 400, kind: "error400", decode: { kind: "text", schema: s.string() } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
