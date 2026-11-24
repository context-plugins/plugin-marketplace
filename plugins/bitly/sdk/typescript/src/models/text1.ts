import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { textSchema, type Text } from "./text.js";

/** The text to be inserted into the QR code's frame */
export type Text1 = {
  /** An object describing text with color */
  primary?: Text;
  /** An object describing text with color */
  secondary?: Text;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const text1Schema: Schema<Text1> = s.object<Text1>(
  {
    primary: s.optional(s.lazy(() => textSchema)),
    secondary: s.optional(s.lazy(() => textSchema)),
  },
  { additionalProperties: s.json() },
);
