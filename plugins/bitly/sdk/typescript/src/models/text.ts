import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object describing text with color */
export type Text = {
  /** The text to be used */
  content: string;
  /** The color of the text in hex code format @default "#ffffff" */
  color?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textSchema: Schema<Text> = s.object<Text>(
  {
    content: s.string(),
    color: s.defaulted(s.string(), "#ffffff"),
  },
  { additionalProperties: s.json() },
);
