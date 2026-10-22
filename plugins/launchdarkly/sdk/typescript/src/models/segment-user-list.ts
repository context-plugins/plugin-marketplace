import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SegmentUserList = {
  add?: string[];
  remove?: string[];
};

export const segmentUserListSchema: Schema<SegmentUserList> = s.object<SegmentUserList>({
  add: s.optional(s.array(s.string())),
  remove: s.optional(s.array(s.string())),
});
