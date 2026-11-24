import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** PDF page margins as CSS values (e.g. '1cm', '24px'). */
export type Margin = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marginSchema: Schema<Margin> = s.object<Margin>(
  {
    top: s.optional(s.string()),
    right: s.optional(s.string()),
    bottom: s.optional(s.string()),
    left: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
