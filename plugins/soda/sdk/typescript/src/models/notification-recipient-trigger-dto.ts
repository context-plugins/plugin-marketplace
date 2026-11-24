import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationLevelDtoSchema, type NotificationLevelDto } from "./notification-level-dto.js";
import {
  notificationScanStateDtoSchema,
  type NotificationScanStateDto,
} from "./notification-scan-state-dto.js";
import {
  notificationTriggerTypeDtoSchema,
  type NotificationTriggerTypeDto,
} from "./notification-trigger-type-dto.js";

export type NotificationRecipientTriggerDto = {
  level?: NotificationLevelDto;
  scanState?: NotificationScanStateDto;
  type: NotificationTriggerTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationRecipientTriggerDtoSchema: Schema<NotificationRecipientTriggerDto> =
  s.object<NotificationRecipientTriggerDto>(
    {
      level: s.optional(s.lazy(() => notificationLevelDtoSchema)),
      scanState: s.optional(s.lazy(() => notificationScanStateDtoSchema)),
      type: notificationTriggerTypeDtoSchema,
    },
    { additionalProperties: s.json() },
  );
