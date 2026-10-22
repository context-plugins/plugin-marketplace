import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { segmentUserListSchema, type SegmentUserList } from "./segment-user-list.js";

export type SegmentUserState = {
  included?: SegmentUserList;
  excluded?: SegmentUserList;
};

export const segmentUserStateSchema: Schema<SegmentUserState> = s.object<SegmentUserState>({
  included: s.optional(s.lazy(() => segmentUserListSchema)),
  excluded: s.optional(s.lazy(() => segmentUserListSchema)),
});
