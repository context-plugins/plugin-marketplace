import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object of named colors denoting which color should go to which area of the frame */
export type Colors = {
  /** The primary color of the frame in hex code format */
  primary?: string;
  /** The secondary color of the frame in hex code format */
  secondary?: string;
  /** The background color of the frame in hex code format */
  background?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const colorsSchema: Schema<Colors> = s.object<Colors>(
  {
    primary: s.optional(s.string()),
    secondary: s.optional(s.string()),
    background: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
