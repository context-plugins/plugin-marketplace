import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ResourceLinks contains resource links */
export type Links1 = {
  /** URL to resource itself */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links1Schema: Schema<Links1> = s.object<Links1>(
  {
    self: s.string(),
  },
  { additionalProperties: s.json() },
);
