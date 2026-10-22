import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description32Schema, type Description32 } from "./unions/description32.js";

/** Information about a permission. */
export type PermissionResponse = {
  /** Name of the permission */
  name: string;
  /** Display name of the permission */
  displayName: string;
  /** Description of the permission */
  description?: Description32;
};

export const permissionResponseSchema: Schema<PermissionResponse> = s.object<PermissionResponse>({
  name: s.string(),
  displayName: s.string(),
  description: s.optional(s.lazy(() => description32Schema)),
  _keysMap: {
    displayName: "display_name",
  },
});
