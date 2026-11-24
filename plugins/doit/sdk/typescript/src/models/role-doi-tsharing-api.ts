import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The role assigned to the user, defining their level of access to the resource. */
export const RoleDoiTSharingApi = {
  Owner: "owner",
  Editor: "editor",
  Viewer: "viewer",
} as const;
export type RoleDoiTSharingApi = (typeof RoleDoiTSharingApi)[keyof typeof RoleDoiTSharingApi] | (string & {});

export const roleDoiTSharingApiSchema: EnumSchema<RoleDoiTSharingApi> =
  s.enumOf<RoleDoiTSharingApi>(RoleDoiTSharingApi);
