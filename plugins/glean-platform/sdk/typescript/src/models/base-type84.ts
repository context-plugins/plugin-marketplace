import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isIdentityRestrictedSchema, type IsIdentityRestricted } from "./is-identity-restricted.js";

export type BaseType84 = {
  /** An identified group is not restricted. */
  isIdentityRestricted?: IsIdentityRestricted;
};

export const baseType84Schema: Schema<BaseType84> = s.object<BaseType84>({
  isIdentityRestricted: s.optional(s.lazy(() => isIdentityRestrictedSchema)),
  _keysMap: {
    isIdentityRestricted: "is_identity_restricted",
  },
});
