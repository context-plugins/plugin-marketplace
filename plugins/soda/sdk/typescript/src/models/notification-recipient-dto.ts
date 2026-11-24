import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationRecipientRoleDtoSchema,
  type NotificationRecipientRoleDto,
} from "./notification-recipient-role-dto.js";
import {
  notificationRecipientTriggerDtoSchema,
  type NotificationRecipientTriggerDto,
} from "./notification-recipient-trigger-dto.js";
import {
  notificationRecipientTypeDtoSchema,
  type NotificationRecipientTypeDto,
} from "./notification-recipient-type-dto.js";

export type NotificationRecipientDto = {
  customRoleId?: string;
  email?: string;
  integrationChannel?: string;
  integrationId?: string;
  role?: NotificationRecipientRoleDto;
  triggers: NotificationRecipientTriggerDto[];
  type: NotificationRecipientTypeDto;
  userGroupId?: string;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationRecipientDtoSchema: Schema<NotificationRecipientDto> =
  s.object<NotificationRecipientDto>(
    {
      customRoleId: s.optional(s.string()),
      email: s.optional(s.string()),
      integrationChannel: s.optional(s.string()),
      integrationId: s.optional(s.string()),
      role: s.optional(s.lazy(() => notificationRecipientRoleDtoSchema)),
      triggers: s.array(s.lazy(() => notificationRecipientTriggerDtoSchema)),
      type: notificationRecipientTypeDtoSchema,
      userGroupId: s.optional(s.string()),
      userId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
