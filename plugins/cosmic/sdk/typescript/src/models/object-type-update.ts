import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metafieldSchema, type Metafield } from "./metafield.js";

/** Only the properties sent are changed. Sending `metafields` replaces the entire array. */
export type ObjectTypeUpdate = {
  title?: string;
  singular?: string;
  slug?: string;
  singleton?: boolean;
  emoji?: string;
  metafields?: Metafield[];
  options?: Record<string, unknown>;
  localization?: boolean;
  locales?: string[];
  priorityLocale?: string;
};

export const objectTypeUpdateSchema: Schema<ObjectTypeUpdate> = s.object<ObjectTypeUpdate>({
  title: s.optional(s.string()),
  singular: s.optional(s.string()),
  slug: s.optional(s.string()),
  singleton: s.optional(s.boolean()),
  emoji: s.optional(s.string()),
  metafields: s.optional(s.array(s.lazy(() => metafieldSchema))),
  options: s.optional(s.record(s.string(), s.unknown())),
  localization: s.optional(s.boolean()),
  locales: s.optional(s.array(s.string())),
  priorityLocale: s.optional(s.string()),
  _keysMap: {
    priorityLocale: "priority_locale",
  },
});
