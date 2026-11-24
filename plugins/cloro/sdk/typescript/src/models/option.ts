import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

export type Option = {
  /** The text ChatGPT shows for the option. */
  label: string;
  /**
   * The value that the option puts in the follow-up prompt. It can differ from `label`. `true` for
   * a checkbox that stands alone.
   */
  value: Value;
  /** Whether ChatGPT selects the option by default. */
  selected: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionSchema: Schema<Option> = s.object<Option>(
  {
    label: s.string(),
    value: valueSchema,
    selected: s.boolean(),
  },
  { additionalProperties: s.json() },
);
