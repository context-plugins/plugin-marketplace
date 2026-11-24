import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideOtherOption = {
  /** @default "hide_other_option" */
  name?: "hide_other_option";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideOtherOptionSchema: Schema<HideOtherOption> = s.object<HideOtherOption>(
  {
    name: s.defaulted(s.literal("hide_other_option"), "hide_other_option"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
