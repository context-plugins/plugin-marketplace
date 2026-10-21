import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { email2Schema, type Email2 } from "./unions/email2.js";
import { firstName5Schema, type FirstName5 } from "./unions/first-name5.js";
import { lastName5Schema, type LastName5 } from "./unions/last-name5.js";

export type ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails = {
  /** First name of the beneficiary. */
  firstName?: FirstName5;
  /** Last name of the beneficiary. */
  lastName?: LastName5;
  /** Email address of the beneficiary. */
  email?: Email2;
};

export const forterAntiFraudOptionsCartItemBeneficiaryPersonalDetailsSchema: Schema<ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails> =
  s.object<ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails>({
    firstName: s.optional(s.lazy(() => firstName5Schema)),
    lastName: s.optional(s.lazy(() => lastName5Schema)),
    email: s.optional(s.lazy(() => email2Schema)),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
    },
  });
