import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object typed flag value */
export type OfrepObjectFlag = {
  /** Flag evaluation result */
  value: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepObjectFlagSchema: Schema<OfrepObjectFlag> = s.object<OfrepObjectFlag>(
  {
    value: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
