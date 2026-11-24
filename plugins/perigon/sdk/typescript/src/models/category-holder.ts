import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google Content Categories most strongly associated with the story. */
export type CategoryHolder = {
  /** Content category assigned to the article. */
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryHolderSchema: Schema<CategoryHolder> = s.object<CategoryHolder>(
  {
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
