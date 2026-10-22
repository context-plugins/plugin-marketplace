import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentTarget = {
  values?: string[];
  contextKind?: string;
};

export const segmentTargetSchema: Schema<SegmentTarget> = s.object<SegmentTarget>({
  values: s.optional(s.array(s.string())),
  contextKind: s.optional(s.string()),
});
