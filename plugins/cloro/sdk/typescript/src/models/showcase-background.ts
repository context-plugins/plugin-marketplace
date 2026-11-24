import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Background styling for a product showcase */
export type ShowcaseBackground = {
  type?: string;
  primary?: string;
  secondary?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const showcaseBackgroundSchema: Schema<ShowcaseBackground> = s.object<ShowcaseBackground>(
  {
    type: s.optional(s.string()),
    primary: s.optional(s.string()),
    secondary: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
