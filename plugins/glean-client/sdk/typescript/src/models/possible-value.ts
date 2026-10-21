import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Possible value of a specific parameter */
export type PossibleValue = {
  /** Possible value */
  value?: string;
  /** User-friendly label associated with the value */
  label?: string;
};

export const possibleValueSchema: Schema<PossibleValue> = s.object<PossibleValue>({
  value: s.optional(s.string()),
  label: s.optional(s.string()),
});
