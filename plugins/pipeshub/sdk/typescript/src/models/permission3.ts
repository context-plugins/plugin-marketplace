import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Per-item permission when `include=permissions` is requested; otherwise `null`. */
export type Permission3 = {
  role: string;
  canEdit: boolean;
  canDelete: boolean;
};

export const permission3Schema: Schema<Permission3> = s.object<Permission3>({
  role: s.string(),
  canEdit: s.boolean(),
  canDelete: s.boolean(),
});
