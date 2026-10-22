import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User = {
  /**
   * An opaque user ID for the claimed authority (i.e., the actas param, or the origid if actas is
   * not specified).
   */
  userId?: string;
  /** An opaque user ID for the authenticated user (ignores actas). */
  origId?: string;
};

export const userSchema: Schema<User> = s.object<User>({
  userId: s.optional(s.string()),
  origId: s.optional(s.string()),
  _keysMap: {
    userId: "userID",
    origId: "origID",
  },
});
