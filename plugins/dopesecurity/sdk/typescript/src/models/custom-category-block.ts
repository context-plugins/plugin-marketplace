import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customCategorySettingsSchema, type CustomCategorySettings } from "./custom-category-settings.js";

/** Wrapper for custom category data with inheritance flag */
export type CustomCategoryBlock = {
  /** Whether the custom categories are inherited from the base policy */
  inheritsFromBase: boolean;
  /** Custom category restrictions keyed by custom category name */
  restrictions: Record<string, CustomCategorySettings>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customCategoryBlockSchema: Schema<CustomCategoryBlock> = s.object<CustomCategoryBlock>(
  {
    inheritsFromBase: s.boolean(),
    restrictions: s.record(
      s.string(),
      s.lazy(() => customCategorySettingsSchema),
    ),
  },
  { additionalProperties: s.json() },
);
