import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountVerifiedSchema, type AccountVerified } from "./unions/account-verified.js";
import {
  cardHolderAuthenticatedSchema,
  type CardHolderAuthenticated,
} from "./unions/card-holder-authenticated.js";

/** The assurance details provided by Google Pay */
export type GooglePayAssuranceDetails = {
  /** Defines if an account was verified. */
  accountVerified?: AccountVerified;
  /** Defines if the card holder was authenticated. */
  cardHolderAuthenticated?: CardHolderAuthenticated;
};

export const googlePayAssuranceDetailsSchema: Schema<GooglePayAssuranceDetails> =
  s.object<GooglePayAssuranceDetails>({
    accountVerified: s.optional(s.lazy(() => accountVerifiedSchema)),
    cardHolderAuthenticated: s.optional(s.lazy(() => cardHolderAuthenticatedSchema)),
    _keysMap: {
      accountVerified: "account_verified",
      cardHolderAuthenticated: "card_holder_authenticated",
    },
  });
