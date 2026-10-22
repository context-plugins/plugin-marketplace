import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewerInfo1 = {
  /** Whether the viewer has dismissed the announcement. */
  isDismissed?: boolean;
  /** Whether the viewer has read the announcement. */
  isRead?: boolean;
};

export const viewerInfo1Schema: Schema<ViewerInfo1> = s.object<ViewerInfo1>({
  isDismissed: s.optional(s.boolean()),
  isRead: s.optional(s.boolean()),
});
