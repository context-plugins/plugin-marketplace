import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  applicationsEnvironmentsNotificationsResponseInternalSchema,
  type ApplicationsEnvironmentsNotificationsResponse,
} from "../models/applications-environments-notifications-response.js";
import {
  errorResponseBusinessCentralAdministrationCenterNotificationsApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterNotificationsApi,
} from "../models/error-response-business-central-administration-center-notifications-api.js";
import {
  notificationRecipientInternalSchema,
  type NotificationRecipient,
} from "../models/notification-recipient.js";
import type { Servers } from "../servers.js";

/**
 * Manage administrative notifications
 */
export class Notifications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a Notification Recipient
   *
   * @remarks
   * Adds a new notification recipient for the environment.
   *
   * @returns Notification recipient added
   *
   * @throws {@link Notifications.AddNotificationRecipientError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  addNotificationRecipient(
    request: Notifications.AddNotificationRecipientRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationRecipient, Notifications.AddNotificationRecipientError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/notifications",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          {
            name: "applicationFamily",
            value: request.applicationFamily,
            schema: s.defaulted(s.string(), "BusinessCentral"),
          },
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: notificationRecipientInternalSchema },
      },
      {
        success: { kind: "json", schema: notificationRecipientInternalSchema },
        errorFactory: Notifications.AddNotificationRecipientError,
      },
      options,
    );
  }

  /**
   * List Notification Recipients
   *
   * @remarks
   * Returns a list of notification recipients for the environment.
   *
   * @returns Successfully retrieved notification recipients
   *
   * @throws {@link Notifications.ListNotificationRecipientsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listNotificationRecipients(
    request: Notifications.ListNotificationRecipientsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApplicationsEnvironmentsNotificationsResponse,
    Notifications.ListNotificationRecipientsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/notifications",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          {
            name: "applicationFamily",
            value: request.applicationFamily,
            schema: s.defaulted(s.string(), "BusinessCentral"),
          },
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applicationsEnvironmentsNotificationsResponseInternalSchema },
        errorFactory: Notifications.ListNotificationRecipientsError,
      },
      options,
    );
  }
}

export namespace Notifications {
  export type AddNotificationRecipientRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
    body: NotificationRecipient;
  };

  export class AddNotificationRecipientError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterNotificationsApi",
          ErrorResponseBusinessCentralAdministrationCenterNotificationsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<AddNotificationRecipientError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterNotificationsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterNotificationsApiSchema,
        },
      },
    ];
  }

  export type ListNotificationRecipientsRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class ListNotificationRecipientsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterNotificationsApi",
          ErrorResponseBusinessCentralAdministrationCenterNotificationsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListNotificationRecipientsError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterNotificationsApi",
        decode: {
          kind: "json",
          schema: errorResponseBusinessCentralAdministrationCenterNotificationsApiSchema,
        },
      },
    ];
  }
}
