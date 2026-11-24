import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryExceptionSchema, type CategoryException } from "./category-exception.js";
import { restrictionSchema, type Restriction } from "./restriction.js";

/** Settings for a custom category */
export type CustomCategorySettings = {
  /** The action applied when the custom category is matched */
  restriction: Restriction;
  /** Optional block/warning page identifier */
  page?: string;
  /** Per-entity overrides keyed by entity identifier */
  exceptions?: Record<string, CategoryException>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customCategorySettingsSchema: Schema<CustomCategorySettings> = s.object<CustomCategorySettings>(
  {
    restriction: restrictionSchema,
    page: s.optional(s.string()),
    exceptions: s.optional(
      s.record(
        s.string(),
        s.lazy(() => categoryExceptionSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
