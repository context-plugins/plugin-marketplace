import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationRecipientRoleDto = {
  DatasetOwner: "datasetOwner",
  MonitorOwner: "monitorOwner",
} as const;
export type NotificationRecipientRoleDto =
  | (typeof NotificationRecipientRoleDto)[keyof typeof NotificationRecipientRoleDto]
  | (string & {});

export const notificationRecipientRoleDtoSchema: EnumSchema<NotificationRecipientRoleDto> =
  s.enumOf<NotificationRecipientRoleDto>(NotificationRecipientRoleDto);
