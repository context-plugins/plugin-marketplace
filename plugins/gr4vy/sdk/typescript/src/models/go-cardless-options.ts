import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { purposeCode1Schema, type PurposeCode1 } from "./unions/purpose-code1.js";

export type GoCardlessOptions = {
  /**
   * Specifies the high-level purpose of a mandate and/or payment using a set of pre-defined
   * categories. Required for the PayTo scheme, optional for all others
   */
  purposeCode?: PurposeCode1;
};

export const goCardlessOptionsSchema: Schema<GoCardlessOptions> = s.object<GoCardlessOptions>({
  purposeCode: s.optional(s.lazy(() => purposeCode1Schema)),
  _keysMap: {
    purposeCode: "purpose_code",
  },
});
