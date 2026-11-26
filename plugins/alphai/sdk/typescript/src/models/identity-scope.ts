import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IdentityScope = {
  IssuerCik: "issuer_cik",
} as const;
export type IdentityScope = (typeof IdentityScope)[keyof typeof IdentityScope] | (string & {});

export const identityScopeSchema: EnumSchema<IdentityScope> = s.enumOf<IdentityScope>(IdentityScope);
