import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionSetStats2Schema, type ConditionSetStats2 } from "./condition-set-stats2.js";
import { conditionSetStatus1Schema, type ConditionSetStatus1 } from "./condition-set-status1.js";

export type ConditionSet = {
  /** The UUID of the condition set. */
  id: string;
  /** The display name of the condition set. */
  name: string;
  /** Whether the condition set is currently active or has been archived. */
  status: ConditionSetStatus1;
  /** The time the condition set was created. Measured in seconds since the Unix epoch. */
  created: number;
  /** The time the condition set was last updated. Measured in seconds since the Unix epoch. */
  updated: number;
  /** The purpose of the condition set, indicating its intended use. @default "dynamic_content" */
  purpose?: "dynamic_content";
  /**
   * Subscriber count statistics for the condition set. Included when `expand[]=stats` is specified
   * in the request.
   */
  stats?: ConditionSetStats2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionSetSchema: Schema<ConditionSet> = s.object<ConditionSet>(
  {
    id: s.string(),
    name: s.string(),
    status: conditionSetStatus1Schema,
    created: s.int(),
    updated: s.int(),
    purpose: s.defaulted(s.literal("dynamic_content"), "dynamic_content"),
    stats: s.optional(s.lazy(() => conditionSetStats2Schema)),
  },
  { additionalProperties: s.json() },
);
