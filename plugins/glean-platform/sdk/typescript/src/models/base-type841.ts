import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseType841 = {
  /** An unidentified group has a restricted identity. @default "True" */
  isIdentityRestricted?: "True";
};

export const baseType841Schema: Schema<BaseType841> = s.object<BaseType841>({
  isIdentityRestricted: s.defaulted(s.literal("True"), "True"),
  _keysMap: {
    isIdentityRestricted: "is_identity_restricted",
  },
});
