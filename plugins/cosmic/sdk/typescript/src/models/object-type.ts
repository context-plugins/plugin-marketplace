import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metafieldSchema, type Metafield } from "./metafield.js";
import { optionsSchema, type Options } from "./options.js";

/** The content model shared by every Object in the type. */
export type ObjectType = {
  id?: string;
  title?: string;
  /** Singular label, used in dashboard copy such as "New Bike". */
  singular?: string;
  /** Unique within the Bucket. This is the value you pass as `type` when querying Objects. */
  slug?: string;
  /** Whether the type holds exactly one Object, as for a home page. */
  singleton?: boolean;
  /** Unicode emoji shown beside the type in the dashboard. */
  emoji?: string;
  metafields?: Metafield[];
  options?: Options;
  /** Whether Objects in this type can exist in multiple locales. */
  localization?: boolean;
  /** Locale codes available in this type. */
  locales?: string[];
  /** Default locale for new Objects in this type. */
  priorityLocale?: string | null;
  createdAt?: Date;
  modifiedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectTypeSchema: Schema<ObjectType> = s.object<ObjectType>(
  {
    id: s.optional(s.string()),
    title: s.optional(s.string()),
    singular: s.optional(s.string()),
    slug: s.optional(s.string()),
    singleton: s.optional(s.boolean()),
    emoji: s.optional(s.string()),
    metafields: s.optional(s.array(s.lazy(() => metafieldSchema))),
    options: s.optional(s.lazy(() => optionsSchema)),
    localization: s.optional(s.boolean()),
    locales: s.optional(s.array(s.string())),
    priorityLocale: s.optionalNullable(s.string()),
    createdAt: s.optional(s.dateTime()),
    modifiedAt: s.optional(s.dateTime()),
    _keysMap: {
      priorityLocale: "priority_locale",
      createdAt: "created_at",
      modifiedAt: "modified_at",
    },
  },
  { additionalProperties: s.json() },
);
