import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type ViewerInfo = {
  /**
   * DEPRECATED - use permissions instead. Viewer's role on the specific document.
   *
   * @deprecated
   */
  role?: Role;
  lastViewedTime?: Date;
};

export const viewerInfoSchema: Schema<ViewerInfo> = s.object<ViewerInfo>({
  role: s.optional(s.lazy(() => roleSchema)),
  lastViewedTime: s.optional(s.dateTime()),
});
