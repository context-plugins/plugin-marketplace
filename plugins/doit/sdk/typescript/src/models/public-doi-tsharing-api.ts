import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of permissions users in the entire organization have for this resource */
export const PublicDoiTSharingApi = {
  Editor: "editor",
  Viewer: "viewer",
} as const;
export type PublicDoiTSharingApi =
  | (typeof PublicDoiTSharingApi)[keyof typeof PublicDoiTSharingApi]
  | (string & {});

export const publicDoiTSharingApiSchema: EnumSchema<PublicDoiTSharingApi> =
  s.enumOf<PublicDoiTSharingApi>(PublicDoiTSharingApi);
