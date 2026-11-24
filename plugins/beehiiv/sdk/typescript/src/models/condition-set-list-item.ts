import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionSetStatus1Schema, type ConditionSetStatus1 } from "./condition-set-status1.js";

export type ConditionSetListItem = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionSetListItemSchema: Schema<ConditionSetListItem> = s.object<ConditionSetListItem>(
  {
    id: s.string(),
    name: s.string(),
    status: conditionSetStatus1Schema,
    created: s.int(),
    updated: s.int(),
    purpose: s.defaulted(s.literal("dynamic_content"), "dynamic_content"),
  },
  { additionalProperties: s.json() },
);
