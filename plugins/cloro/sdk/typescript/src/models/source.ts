import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source = {
  /** The position index of the source in the response */
  position?: number;
  /** The URL of the source */
  url?: string;
  /** The display label for the source */
  label?: string;
  /** A description of the source content */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    position: s.optional(s.float64()),
    url: s.optional(s.string()),
    label: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
