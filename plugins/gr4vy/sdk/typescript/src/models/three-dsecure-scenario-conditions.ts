import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount7Schema, type Amount7 } from "./unions/amount7.js";
import { cardNumberSchema, type CardNumber } from "./unions/card-number.js";
import { emailAddress7Schema, type EmailAddress7 } from "./unions/email-address7.js";
import { externalIdentifier31Schema, type ExternalIdentifier31 } from "./unions/external-identifier31.js";
import { firstName8Schema, type FirstName8 } from "./unions/first-name8.js";
import { lastName8Schema, type LastName8 } from "./unions/last-name8.js";

export type ThreeDSecureScenarioConditions = {
  /** First name of the buyer to match. */
  firstName?: FirstName8;
  /** Last name of the buyer to match. */
  lastName?: LastName8;
  /** Email address of the buyer to match. */
  emailAddress?: EmailAddress7;
  /** Amount of the transaction to match. */
  amount?: Amount7;
  /** External identifier to match. */
  externalIdentifier?: ExternalIdentifier31;
  /** Card number to match. */
  cardNumber?: CardNumber;
};

export const threeDSecureScenarioConditionsSchema: Schema<ThreeDSecureScenarioConditions> =
  s.object<ThreeDSecureScenarioConditions>({
    firstName: s.optional(s.lazy(() => firstName8Schema)),
    lastName: s.optional(s.lazy(() => lastName8Schema)),
    emailAddress: s.optional(s.lazy(() => emailAddress7Schema)),
    amount: s.optional(s.lazy(() => amount7Schema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier31Schema)),
    cardNumber: s.optional(s.lazy(() => cardNumberSchema)),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      emailAddress: "email_address",
      externalIdentifier: "external_identifier",
      cardNumber: "card_number",
    },
  });
