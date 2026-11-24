import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Colors contains institution colors type */
export type Colors = {
  /** Primary primary institution color */
  primary?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const colorsSchema: Schema<Colors> = s.object<Colors>(
  {
    primary: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
