import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bySchema, type By } from "./by.js";

export type Lookup = {
  /**
   * How the list was resolved. `category` means your `regionCode`/`languageCode` were applied;
   * `location` means they could not be (the location has no primary category or no region code,
   * which is common for service-area businesses) and the attributes are the location's defaults
   * instead.
   */
  by: By;
  categoryName?: string;
  regionCode?: string;
  languageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lookupSchema: Schema<Lookup> = s.object<Lookup>(
  {
    by: bySchema,
    categoryName: s.optional(s.string()),
    regionCode: s.optional(s.string()),
    languageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
