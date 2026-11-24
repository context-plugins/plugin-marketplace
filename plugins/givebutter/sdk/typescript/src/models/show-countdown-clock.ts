import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type ShowCountdownClock = {
  /** @default "show_countdown_clock" */
  name?: "show_countdown_clock";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const showCountdownClockSchema: Schema<ShowCountdownClock> = s.object<ShowCountdownClock>(
  {
    name: s.defaulted(s.literal("show_countdown_clock"), "show_countdown_clock"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
