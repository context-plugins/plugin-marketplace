import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How this record's own permissions combine with its ancestors'. OPEN: an accessible parent, or a
 * direct grant, is enough. STRICT: every ancestor up to the connector must be accessible too.
 * RESTRICTED: strict, and a grant on the record itself is required. Absent on records written
 * before the field existed; read as OPEN.
 */
export const AccessRule = {
  Open: "OPEN",
  Strict: "STRICT",
  Restricted: "RESTRICTED",
} as const;
export type AccessRule = (typeof AccessRule)[keyof typeof AccessRule] | (string & {});

export const accessRuleSchema: EnumSchema<AccessRule> = s.enumOf<AccessRule>(AccessRule);
