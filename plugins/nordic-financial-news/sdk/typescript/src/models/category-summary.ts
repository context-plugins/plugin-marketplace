import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CategorySummary = {
  /** Unique category identifier */
  id: string;
  /** Category display name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categorySummarySchema: Schema<CategorySummary> = s.object<CategorySummary>(
  {
    id: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
