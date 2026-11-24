import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not
 * specified, it defaults to ALWAYS.
 */
export const UriOverrideEnforceMode = {
  UriOverrideEnforceModeUnspecified: "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED",
  IfNotExists: "IF_NOT_EXISTS",
  Always: "ALWAYS",
} as const;
export type UriOverrideEnforceMode =
  | (typeof UriOverrideEnforceMode)[keyof typeof UriOverrideEnforceMode]
  | (string & {});

export const uriOverrideEnforceModeSchema: EnumSchema<UriOverrideEnforceMode> =
  s.enumOf<UriOverrideEnforceMode>(UriOverrideEnforceMode);
