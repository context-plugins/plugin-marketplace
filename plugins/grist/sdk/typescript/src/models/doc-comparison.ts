import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailsSchema, type Details } from "./details.js";
import { leftSchema, type Left } from "./left.js";
import { parentSchema, type Parent } from "./parent.js";
import { rightSchema, type Right } from "./right.js";
import { summarySchema, type Summary } from "./summary.js";

/** Comparison result between two document versions */
export type DocComparison = {
  /** Left/local document state */
  left: Left;
  /** Right/remote document state */
  right: Right;
  /** Most recent common ancestor state */
  parent: Parent | null;
  /**
   * Relationship summary:
   * - same: documents have the same most recent state
   * - left: the left document has actions not yet in the right
   * - right: the right document has actions not yet in the left
   * - both: both documents have changes (possible divergence)
   * - unrelated: no common history found
   */
  summary: Summary;
  /** Detailed change information (when requested) */
  details?: Details;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docComparisonSchema: Schema<DocComparison> = s.object<DocComparison>(
  {
    left: leftSchema,
    right: rightSchema,
    parent: s.nullable(s.lazy(() => parentSchema)),
    summary: summarySchema,
    details: s.optional(s.lazy(() => detailsSchema)),
  },
  { additionalProperties: s.json() },
);
