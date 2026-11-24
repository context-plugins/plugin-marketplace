import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Donation frequencies to display. Typical values: `once`, `monthly`, `quarterly`, `yearly`. */
export type DisplayFrequencies = {
  /** @default "display_frequencies" */
  name?: "display_frequencies";
  value?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const displayFrequenciesSchema: Schema<DisplayFrequencies> = s.object<DisplayFrequencies>(
  {
    name: s.defaulted(s.literal("display_frequencies"), "display_frequencies"),
    value: s.optionalNullable(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
