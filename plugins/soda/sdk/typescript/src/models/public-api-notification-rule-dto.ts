import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationCustomizationDtoSchema,
  type NotificationCustomizationDto,
} from "./notification-customization-dto.js";
import { notificationFilterDtoSchema, type NotificationFilterDto } from "./notification-filter-dto.js";
import {
  notificationRecipientDtoSchema,
  type NotificationRecipientDto,
} from "./notification-recipient-dto.js";
import {
  notificationRuleStatusDtoSchema,
  type NotificationRuleStatusDto,
} from "./notification-rule-status-dto.js";
import { publicApiRuleTypeDtoSchema, type PublicApiRuleTypeDto } from "./public-api-rule-type-dto.js";

export type PublicApiNotificationRuleDto = {
  createdAt?: Date;
  customization?: NotificationCustomizationDto;
  filter?: NotificationFilterDto;
  id?: string;
  isDefault?: boolean;
  lastTriggeredAt?: Date;
  name?: string;
  ownerId?: string;
  recipients?: NotificationRecipientDto[];
  ruleType?: PublicApiRuleTypeDto;
  status?: NotificationRuleStatusDto;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiNotificationRuleDtoSchema: Schema<PublicApiNotificationRuleDto> =
  s.object<PublicApiNotificationRuleDto>(
    {
      createdAt: s.optional(s.dateTime()),
      customization: s.optional(s.lazy(() => notificationCustomizationDtoSchema)),
      filter: s.optional(s.lazy(() => notificationFilterDtoSchema)),
      id: s.optional(s.string()),
      isDefault: s.optional(s.boolean()),
      lastTriggeredAt: s.optional(s.dateTime()),
      name: s.optional(s.string()),
      ownerId: s.optional(s.string()),
      recipients: s.optional(s.array(s.lazy(() => notificationRecipientDtoSchema))),
      ruleType: s.optional(s.lazy(() => publicApiRuleTypeDtoSchema)),
      status: s.optional(s.lazy(() => notificationRuleStatusDtoSchema)),
      updatedAt: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
