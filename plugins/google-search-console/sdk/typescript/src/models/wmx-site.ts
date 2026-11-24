import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { permissionLevelSchema, type PermissionLevel } from "./permission-level.js";

/**
 * Contains permission level information about a Search Console site. For more information, see
 * [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
 */
export type WmxSite = {
  /** The URL of the site. */
  siteUrl?: string;
  /** The user's permission level for the site. */
  permissionLevel?: PermissionLevel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wmxSiteSchema: Schema<WmxSite> = s.object<WmxSite>(
  {
    siteUrl: s.optional(s.string()),
    permissionLevel: s.optional(s.lazy(() => permissionLevelSchema)),
  },
  { additionalProperties: s.json() },
);
