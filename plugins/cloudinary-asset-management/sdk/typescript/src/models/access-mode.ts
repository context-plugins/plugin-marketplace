import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deprecated. Use access_control instead. Allows the asset to behave as if it's of the
 * authenticated delivery type while still using the default 'upload' type in delivery URLs. The
 * asset can later be made public by changing its access_mode via the Admin API, without having to
 * update any delivery URLs.
 */
export const AccessMode = {
  Public: "public",
  Authenticated: "authenticated",
} as const;
export type AccessMode = (typeof AccessMode)[keyof typeof AccessMode] | (string & {});

export const accessModeSchema: EnumSchema<AccessMode> = s.enumOf<AccessMode>(AccessMode);
