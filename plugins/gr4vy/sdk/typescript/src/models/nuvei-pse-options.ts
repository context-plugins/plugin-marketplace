import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankcodeSchema, type Bankcode } from "./unions/bankcode.js";
import { fiscalnumberSchema, type Fiscalnumber } from "./unions/fiscalnumber.js";
import { userfisnumberSchema, type Userfisnumber } from "./unions/userfisnumber.js";
import { usertypeSchema, type Usertype } from "./unions/usertype.js";

export type NuveiPseOptions = {
  /** Customer type ("N" for persona natural, "J" for persona jurídica) */
  userType?: Usertype;
  /** Customer's document type */
  userFisNumber?: Userfisnumber;
  /** Customer's document number */
  fiscalNumber?: Fiscalnumber;
  /** The bank code of the selected bank */
  bankCode?: Bankcode;
};

export const nuveiPseOptionsSchema: Schema<NuveiPseOptions> = s.object<NuveiPseOptions>({
  userType: s.optional(s.lazy(() => usertypeSchema)),
  userFisNumber: s.optional(s.lazy(() => userfisnumberSchema)),
  fiscalNumber: s.optional(s.lazy(() => fiscalnumberSchema)),
  bankCode: s.optional(s.lazy(() => bankcodeSchema)),
});
