import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type DisableRecurring = {
  /** @default "disable_recurring" */
  name?: "disable_recurring";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disableRecurringSchema: Schema<DisableRecurring> = s.object<DisableRecurring>(
  {
    name: s.defaulted(s.literal("disable_recurring"), "disable_recurring"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
