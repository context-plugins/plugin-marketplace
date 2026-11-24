import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Options = {
  /** Whether editors can see and edit the slug field. */
  slugField?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionsSchema: Schema<Options> = s.object<Options>(
  {
    slugField: s.optional(s.boolean()),
    _keysMap: {
      slugField: "slug_field",
    },
  },
  { additionalProperties: s.json() },
);
