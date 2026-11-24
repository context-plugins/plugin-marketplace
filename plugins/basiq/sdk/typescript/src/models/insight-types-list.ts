import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTypeItemSchema, type InsightTypeItem } from "./insight-type-item.js";

/**
 * Response envelope for GET /insights/types. Contains a list of all supported Insight types and
 * their Insight-specific input schemas.
 */
export type InsightTypesList = {
  /** Resource type identifier, always `list`. @default "list" */
  type?: "list";
  /** Total number of Insight types returned. */
  count: number;
  /** Array of Insight type objects. */
  data: InsightTypeItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightTypesListSchema: Schema<InsightTypesList> = s.object<InsightTypesList>(
  {
    type: s.defaulted(s.literal("list"), "list"),
    count: s.int(),
    data: s.array(s.lazy(() => insightTypeItemSchema)),
  },
  { additionalProperties: s.json() },
);
