import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySettingsSchema, type CategorySettings } from "./category-settings.js";

/** Wrapper for category data with inheritance flag */
export type CategoryBlock = {
  /** Whether the categories are inherited from the base policy */
  inheritsFromBase: boolean;
  /** Category restrictions keyed by category name */
  restrictions: Record<string, CategorySettings>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryBlockSchema: Schema<CategoryBlock> = s.object<CategoryBlock>(
  {
    inheritsFromBase: s.boolean(),
    restrictions: s.record(
      s.string(),
      s.lazy(() => categorySettingsSchema),
    ),
  },
  { additionalProperties: s.json() },
);
