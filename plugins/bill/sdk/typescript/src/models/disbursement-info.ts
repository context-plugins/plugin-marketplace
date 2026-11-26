import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { achDisbursement2Schema, type AchDisbursement2 } from "./ach-disbursement2.js";
import { checkDisbursement2Schema, type CheckDisbursement2 } from "./check-disbursement2.js";
import {
  internationalDisbursement2Schema,
  type InternationalDisbursement2,
} from "./international-disbursement2.js";
import { rppsDisbursement2Schema, type RppsDisbursement2 } from "./rpps-disbursement2.js";
import { vcardDisbursement1Schema, type VcardDisbursement1 } from "./vcard-disbursement1.js";
import { walletDisbursement2Schema, type WalletDisbursement2 } from "./wallet-disbursement2.js";

/** Disbursement info. */
export type DisbursementInfo = {
  /** Set as `true` if the payment disbursement type can be voided */
  isVoidable?: boolean;
  checkDisbursement?: CheckDisbursement2;
  achDisbursement?: AchDisbursement2;
  rppsDisbursement?: RppsDisbursement2;
  internationalDisbursement?: InternationalDisbursement2;
  vcardDisbursement?: VcardDisbursement1;
  walletDisbursement?: WalletDisbursement2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disbursementInfoSchema: Schema<DisbursementInfo> = s.object<DisbursementInfo>(
  {
    isVoidable: s.optional(s.boolean()),
    checkDisbursement: s.optional(s.lazy(() => checkDisbursement2Schema)),
    achDisbursement: s.optional(s.lazy(() => achDisbursement2Schema)),
    rppsDisbursement: s.optional(s.lazy(() => rppsDisbursement2Schema)),
    internationalDisbursement: s.optional(s.lazy(() => internationalDisbursement2Schema)),
    vcardDisbursement: s.optional(s.lazy(() => vcardDisbursement1Schema)),
    walletDisbursement: s.optional(s.lazy(() => walletDisbursement2Schema)),
  },
  { additionalProperties: s.json() },
);
