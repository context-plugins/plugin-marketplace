import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Who uses it: one person for their work, a team or function, or the whole organisation */
export const UseScope = {
  Personal: "personal",
  Functional: "functional",
  Organisation: "organisation",
} as const;
export type UseScope = (typeof UseScope)[keyof typeof UseScope] | (string & {});

export const useScopeSchema: EnumSchema<UseScope> = s.enumOf<UseScope>(UseScope);
