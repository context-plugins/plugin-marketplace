import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Default donation frequency. Typically `once`, `monthly`, `quarterly`, or `yearly`. */
export type DefaultFrequency = {
  /** @default "default_frequency" */
  name?: "default_frequency";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaultFrequencySchema: Schema<DefaultFrequency> = s.object<DefaultFrequency>(
  {
    name: s.defaulted(s.literal("default_frequency"), "default_frequency"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
