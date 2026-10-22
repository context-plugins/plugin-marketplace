import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentMetadata = {
  envId?: string;
  segmentId?: string;
  version?: number;
  includedCount?: number;
  excludedCount?: number;
  lastModified?: number;
  deleted?: boolean;
};

export const segmentMetadataSchema: Schema<SegmentMetadata> = s.object<SegmentMetadata>({
  envId: s.optional(s.string()),
  segmentId: s.optional(s.string()),
  version: s.optional(s.int()),
  includedCount: s.optional(s.int()),
  excludedCount: s.optional(s.int()),
  lastModified: s.optional(s.int()),
  deleted: s.optional(s.boolean()),
});
