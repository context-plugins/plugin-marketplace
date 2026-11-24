import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metafieldSchema, type Metafield } from "./metafield.js";

export type ObjectTypeCreate = {
  title: string;
  singular?: string;
  /** Derived from `title` when omitted. */
  slug?: string;
  singleton?: boolean;
  emoji?: string;
  metafields?: Metafield[];
  options?: Record<string, unknown>;
  /** @default false */
  localization?: boolean;
  locales?: string[];
  priorityLocale?: string;
};

export const objectTypeCreateSchema: Schema<ObjectTypeCreate> = s.object<ObjectTypeCreate>({
  title: s.string(),
  singular: s.optional(s.string()),
  slug: s.optional(s.string()),
  singleton: s.optional(s.boolean()),
  emoji: s.optional(s.string()),
  metafields: s.optional(s.array(s.lazy(() => metafieldSchema))),
  options: s.optional(s.record(s.string(), s.unknown())),
  localization: s.defaulted(s.boolean(), false),
  locales: s.optional(s.array(s.string())),
  priorityLocale: s.optional(s.string()),
  _keysMap: {
    priorityLocale: "priority_locale",
  },
});
