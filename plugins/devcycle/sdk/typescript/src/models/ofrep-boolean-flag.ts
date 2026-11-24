import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A boolean typed flag value */
export type OfrepBooleanFlag = {
  /** Flag evaluation result */
  value: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepBooleanFlagSchema: Schema<OfrepBooleanFlag> = s.object<OfrepBooleanFlag>(
  {
    value: s.boolean(),
  },
  { additionalProperties: s.json() },
);
