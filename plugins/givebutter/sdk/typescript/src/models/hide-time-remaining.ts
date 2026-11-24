import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideTimeRemaining = {
  /** @default "hide_time_remaining" */
  name?: "hide_time_remaining";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideTimeRemainingSchema: Schema<HideTimeRemaining> = s.object<HideTimeRemaining>(
  {
    name: s.defaulted(s.literal("hide_time_remaining"), "hide_time_remaining"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
