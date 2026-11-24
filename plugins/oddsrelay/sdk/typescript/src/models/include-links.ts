import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeLinks = {
  True: "true",
  False: "false",
} as const;
export type IncludeLinks = (typeof IncludeLinks)[keyof typeof IncludeLinks] | (string & {});

export const includeLinksSchema: EnumSchema<IncludeLinks> = s.enumOf<IncludeLinks>(IncludeLinks);
