import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RenderBundleEdit = {
  /**
   * Exact text to find in the CURRENT stored bundle (fetch it via getCustomViewAuthoring first — it
   * may have been hand-edited). Must match exactly once unless `replaceAll` is true; include enough
   * surrounding context to make it unique.
   */
  oldText: string;
  /** Replacement text. May be empty to delete the matched text. */
  newText: string;
  /**
   * Replace every occurrence instead of requiring a unique match (e.g. renaming a variable or
   * color). Default false.
   */
  replaceAll?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const renderBundleEditSchema: Schema<RenderBundleEdit> = s.object<RenderBundleEdit>(
  {
    oldText: s.string(),
    newText: s.string(),
    replaceAll: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
