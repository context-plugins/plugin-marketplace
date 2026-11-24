import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ByokScope = {
  Member: "member",
  Team: "team",
} as const;
export type ByokScope = (typeof ByokScope)[keyof typeof ByokScope] | (string & {});

export const byokScopeSchema: EnumSchema<ByokScope> = s.enumOf<ByokScope>(ByokScope);
