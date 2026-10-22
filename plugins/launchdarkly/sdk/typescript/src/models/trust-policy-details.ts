import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustPolicyStatementSchema, type TrustPolicyStatement } from "./trust-policy-statement.js";

export type TrustPolicyDetails = {
  /** The version of the trust policy */
  version?: string;
  /** The statements of the trust policy */
  statement?: TrustPolicyStatement[];
};

export const trustPolicyDetailsSchema: Schema<TrustPolicyDetails> = s.object<TrustPolicyDetails>({
  version: s.optional(s.string()),
  statement: s.optional(s.array(s.lazy(() => trustPolicyStatementSchema))),
  _keysMap: {
    version: "Version",
    statement: "Statement",
  },
});
