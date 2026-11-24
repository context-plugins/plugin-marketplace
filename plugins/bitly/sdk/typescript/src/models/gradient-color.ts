import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GradientColor = {
  /** A color in hexadecimal format to be used in one of the gradient's <stop> elements */
  color?: string;
  /**
   * A number between 0-100 denoting the offset of the gradient color, interpreted as a percentage
   *
   * @default 0
   */
  offset?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gradientColorSchema: Schema<GradientColor> = s.object<GradientColor>(
  {
    color: s.optional(s.string()),
    offset: s.defaulted(s.int(), 0),
  },
  { additionalProperties: s.json() },
);
