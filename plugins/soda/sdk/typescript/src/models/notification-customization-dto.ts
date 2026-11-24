import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationCustomizationTypeDtoSchema,
  type NotificationCustomizationTypeDto,
} from "./notification-customization-type-dto.js";

export type NotificationCustomizationDto = {
  message?: string;
  type: NotificationCustomizationTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationCustomizationDtoSchema: Schema<NotificationCustomizationDto> =
  s.object<NotificationCustomizationDto>(
    {
      message: s.optional(s.string()),
      type: notificationCustomizationTypeDtoSchema,
    },
    { additionalProperties: s.json() },
  );
