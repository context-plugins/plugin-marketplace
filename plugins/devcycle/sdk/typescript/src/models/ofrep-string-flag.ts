import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A string typed flag value */
export type OfrepStringFlag = {
  /** Flag evaluation result */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepStringFlagSchema: Schema<OfrepStringFlag> = s.object<OfrepStringFlag>(
  {
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
