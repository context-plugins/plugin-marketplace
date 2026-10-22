import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentBody = {
  /** A human-friendly name for the segment */
  name: string;
  /** A unique key used to reference the segment */
  key: string;
  /** A description of the segment's purpose */
  description?: string;
  /** Tags for the segment */
  tags?: string[];
  /**
   * Whether to create a standard segment (<code>false</code>) or a big segment (<code>true</code>).
   * Standard segments include rule-based and smaller list-based segments. Big segments include
   * larger list-based segments and synced segments. Only use a big segment if you need to add more
   * than 15,000 individual targets.
   */
  unbounded?: boolean;
  /** For big segments, the targeted context kind. */
  unboundedContextKind?: string;
};

export const segmentBodySchema: Schema<SegmentBody> = s.object<SegmentBody>({
  name: s.string(),
  key: s.string(),
  description: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  unbounded: s.optional(s.boolean()),
  unboundedContextKind: s.optional(s.string()),
});
