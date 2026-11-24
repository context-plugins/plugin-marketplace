import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryExceptionSchema, type CategoryException } from "./category-exception.js";
import { restriction2Schema, type Restriction2 } from "./restriction2.js";

/** Settings for a dope category */
export type CategorySettings = {
  /** The action applied when the category is matched */
  restriction: Restriction2;
  /** Optional block/warning page identifier */
  page?: string;
  /** Category description */
  description?: string;
  /** Per-entity overrides keyed by entity identifier */
  exceptions?: Record<string, CategoryException>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categorySettingsSchema: Schema<CategorySettings> = s.object<CategorySettings>(
  {
    restriction: restriction2Schema,
    page: s.optional(s.string()),
    description: s.optional(s.string()),
    exceptions: s.optional(
      s.record(
        s.string(),
        s.lazy(() => categoryExceptionSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
