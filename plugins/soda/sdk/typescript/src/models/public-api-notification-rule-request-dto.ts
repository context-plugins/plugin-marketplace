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

export type PublicApiNotificationRuleRequestDto = {
  customization?: NotificationCustomizationDto;
  filter?: NotificationFilterDto;
  name: string;
  recipients: NotificationRecipientDto[];
  ruleType: PublicApiRuleTypeDto;
  status?: NotificationRuleStatusDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiNotificationRuleRequestDtoSchema: Schema<PublicApiNotificationRuleRequestDto> =
  s.object<PublicApiNotificationRuleRequestDto>(
    {
      customization: s.optional(s.lazy(() => notificationCustomizationDtoSchema)),
      filter: s.optional(s.lazy(() => notificationFilterDtoSchema)),
      name: s.string(),
      recipients: s.array(s.lazy(() => notificationRecipientDtoSchema)),
      ruleType: publicApiRuleTypeDtoSchema,
      status: s.optional(s.lazy(() => notificationRuleStatusDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
