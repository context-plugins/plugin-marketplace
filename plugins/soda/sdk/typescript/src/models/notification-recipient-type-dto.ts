import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationRecipientTypeDto = {
  Email: "email",
  User: "user",
  UserGroup: "userGroup",
  Integration: "integration",
  ResourceRole: "resourceRole",
  CustomRole: "customRole",
} as const;
export type NotificationRecipientTypeDto =
  | (typeof NotificationRecipientTypeDto)[keyof typeof NotificationRecipientTypeDto]
  | (string & {});

export const notificationRecipientTypeDtoSchema: EnumSchema<NotificationRecipientTypeDto> =
  s.enumOf<NotificationRecipientTypeDto>(NotificationRecipientTypeDto);
