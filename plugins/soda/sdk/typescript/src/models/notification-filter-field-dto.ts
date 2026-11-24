import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationFilterFieldTypeDtoSchema,
  type NotificationFilterFieldTypeDto,
} from "./notification-filter-field-type-dto.js";

export type NotificationFilterFieldDto = {
  attributeName?: string;
  field: NotificationFilterFieldTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationFilterFieldDtoSchema: Schema<NotificationFilterFieldDto> =
  s.object<NotificationFilterFieldDto>(
    {
      attributeName: s.optional(s.string()),
      field: notificationFilterFieldTypeDtoSchema,
    },
    { additionalProperties: s.json() },
  );
