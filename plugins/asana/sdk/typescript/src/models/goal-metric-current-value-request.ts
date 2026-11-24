import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoalMetricCurrentValueRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** *Conditional*. This number is the current value of a goal metric of type number. */
  currentNumberValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalMetricCurrentValueRequestSchema: Schema<GoalMetricCurrentValueRequest> =
  s.object<GoalMetricCurrentValueRequest>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      currentNumberValue: s.optional(s.float64()),
      _keysMap: {
        resourceType: "resource_type",
        currentNumberValue: "current_number_value",
      },
    },
    { additionalProperties: s.json() },
  );
