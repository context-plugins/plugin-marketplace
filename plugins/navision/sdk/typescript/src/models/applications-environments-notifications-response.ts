import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationRecipientInternalSchema,
  notificationRecipientSchema,
  type NotificationRecipient,
} from "./notification-recipient.js";

export type ApplicationsEnvironmentsNotificationsResponse = {
  value?: NotificationRecipient[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const applicationsEnvironmentsNotificationsResponseProperties: s.Shape<ApplicationsEnvironmentsNotificationsResponse> =
  {
    value: s.optional(s.array(s.lazy(() => notificationRecipientInternalSchema))),
  };

export const applicationsEnvironmentsNotificationsResponseInternalSchema: Schema<ApplicationsEnvironmentsNotificationsResponse> =
  s.object<ApplicationsEnvironmentsNotificationsResponse>(
    applicationsEnvironmentsNotificationsResponseProperties,
    { additionalProperties: s.json() },
  );

export const applicationsEnvironmentsNotificationsResponseSchema: Schema<ApplicationsEnvironmentsNotificationsResponse> =
  s.lazySchema(() =>
    s.object<ApplicationsEnvironmentsNotificationsResponse>(
      {
        ...applicationsEnvironmentsNotificationsResponseProperties,
        value: s.optional(s.array(s.lazy(() => notificationRecipientSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
