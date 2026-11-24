import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";

export type UndeprecateActivityTypeInput = {
  /** The name of the domain of the deprecated activity type. */
  domain: string;
  activityType: ActivityType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const undeprecateActivityTypeInputSchema: Schema<UndeprecateActivityTypeInput> =
  s.object<UndeprecateActivityTypeInput>(
    {
      domain: s.string(),
      activityType: activityTypeSchema,
    },
    { additionalProperties: s.json() },
  );
