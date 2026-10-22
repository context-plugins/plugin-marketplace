import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BranchInfo = {
  /**
   * Fleet or group id this entity was inherited from when served by a Config Helper for a child
   * fleet. Present when inherited from parent, including when the child has a local overlay.
   * Omitted when the entity is local and not inherited. Display-only; never persisted.
   */
  srcGroup?: string;
  /**
   * If true, the child fleet has a local overlay on an inherited entity. Omitted when inherited and
   * unmodified, or when local and not inherited. Display-only; never persisted.
   */
  srcOverridden?: boolean;
  /** Unique identifier. */
  id: string;
};

export const branchInfoSchema: Schema<BranchInfo> = s.object<BranchInfo>({
  srcGroup: s.optional(s.string()),
  srcOverridden: s.optional(s.boolean()),
  id: s.string(),
  _keysMap: {
    srcGroup: "__srcGroup",
    srcOverridden: "__srcOverridden",
  },
});
