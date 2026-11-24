import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  activityTypeConfigurationSchema,
  type ActivityTypeConfiguration,
} from "./activity-type-configuration.js";
import { activityTypeInfoSchema, type ActivityTypeInfo } from "./activity-type-info.js";

export type ActivityTypeDetail = {
  typeInfo: ActivityTypeInfo;
  configuration: ActivityTypeConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTypeDetailSchema: Schema<ActivityTypeDetail> = s.object<ActivityTypeDetail>(
  {
    typeInfo: activityTypeInfoSchema,
    configuration: activityTypeConfigurationSchema,
  },
  { additionalProperties: s.json() },
);
