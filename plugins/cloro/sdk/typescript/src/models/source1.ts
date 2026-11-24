import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source1 = {
  /** Position of the source in the list */
  position?: number;
  /** Label or title of the source */
  label?: string;
  /** URL of the source */
  url?: string;
  /** Description or snippet of the source */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source1Schema: Schema<Source1> = s.object<Source1>(
  {
    position: s.optional(s.int()),
    label: s.optional(s.string()),
    url: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
