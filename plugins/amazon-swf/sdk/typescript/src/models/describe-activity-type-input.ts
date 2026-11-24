import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";

export type DescribeActivityTypeInput = {
  /** The name of the domain in which the activity type is registered. */
  domain: string;
  activityType: ActivityType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeActivityTypeInputSchema: Schema<DescribeActivityTypeInput> =
  s.object<DescribeActivityTypeInput>(
    {
      domain: s.string(),
      activityType: activityTypeSchema,
    },
    { additionalProperties: s.json() },
  );
