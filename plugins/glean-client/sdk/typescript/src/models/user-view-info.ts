import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserViewInfo = {
  /** Unique Glean Document ID of the associated document. */
  docId?: string;
  /** Title of associated document. */
  docTitle?: string;
  /** URL of associated document. */
  docUrl?: string;
};

export const userViewInfoSchema: Schema<UserViewInfo> = s.object<UserViewInfo>({
  docId: s.optional(s.string()),
  docTitle: s.optional(s.string()),
  docUrl: s.optional(s.string()),
});
