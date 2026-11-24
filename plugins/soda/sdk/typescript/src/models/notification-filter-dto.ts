import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationFilterFieldDtoSchema,
  type NotificationFilterFieldDto,
} from "./notification-filter-field-dto.js";
import {
  notificationFilterTypeDtoSchema,
  type NotificationFilterTypeDto,
} from "./notification-filter-type-dto.js";

export type NotificationFilterDto = {
  expression?: NotificationFilterDto;
  expressions?: NotificationFilterDto[];
  field?: NotificationFilterFieldDto;
  type: NotificationFilterTypeDto;
  value?: string;
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationFilterDtoSchema: Schema<NotificationFilterDto> = s.object<NotificationFilterDto>(
  {
    expression: s.optional(s.lazy(() => notificationFilterDtoSchema)),
    expressions: s.optional(s.array(s.lazy(() => notificationFilterDtoSchema))),
    field: s.optional(s.lazy(() => notificationFilterFieldDtoSchema)),
    type: notificationFilterTypeDtoSchema,
    value: s.optional(s.string()),
    values: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
