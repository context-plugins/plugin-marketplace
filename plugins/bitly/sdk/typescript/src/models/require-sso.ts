import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * SSO authentication requirement for this organization. Possible values: "none", "any". Omitted
 * when no auth requirements are configured.
 */
export const RequireSso = {
  None: "none",
  Any: "any",
} as const;
export type RequireSso = (typeof RequireSso)[keyof typeof RequireSso] | (string & {});

export const requireSsoSchema: EnumSchema<RequireSso> = s.enumOf<RequireSso>(RequireSso);
