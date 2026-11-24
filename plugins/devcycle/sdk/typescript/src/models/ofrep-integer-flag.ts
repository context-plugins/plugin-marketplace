import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An integer typed flag value */
export type OfrepIntegerFlag = {
  /** Flag evaluation result */
  value: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepIntegerFlagSchema: Schema<OfrepIntegerFlag> = s.object<OfrepIntegerFlag>(
  {
    value: s.int(),
  },
  { additionalProperties: s.json() },
);
