import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type48, type48Schema } from "./type48.js";
import { address1Schema, type Address1 } from "./unions/address1.js";
import { buyerId14Schema, type BuyerId14 } from "./unions/buyer-id14.js";
import { emailAddress3Schema, type EmailAddress3 } from "./unions/email-address3.js";
import { firstName2Schema, type FirstName2 } from "./unions/first-name2.js";
import { id7Schema, type Id7 } from "./unions/id7.js";
import { lastName2Schema, type LastName2 } from "./unions/last-name2.js";
import { phoneNumber1Schema, type PhoneNumber1 } from "./unions/phone-number1.js";

export type ShippingDetails = {
  /** The first name(s) or given name for the buyer. */
  firstName?: FirstName2;
  /** The last name, or family name, of the buyer. */
  lastName?: LastName2;
  /** The email address for the buyer. */
  emailAddress?: EmailAddress3;
  /**
   * The phone number for the buyer which should be formatted according to the E164 number standard.
   */
  phoneNumber?: PhoneNumber1;
  /** The billing address for the buyer. */
  address?: Address1;
  /** The ID for the shipping details. */
  id?: Id7;
  /** The ID for the buyer. */
  buyerId?: BuyerId14;
  /** Always `shipping-details`. @default Type48.ShippingDetails */
  type?: Type48;
};

export const shippingDetailsSchema: Schema<ShippingDetails> = s.object<ShippingDetails>({
  firstName: s.optional(s.lazy(() => firstName2Schema)),
  lastName: s.optional(s.lazy(() => lastName2Schema)),
  emailAddress: s.optional(s.lazy(() => emailAddress3Schema)),
  phoneNumber: s.optional(s.lazy(() => phoneNumber1Schema)),
  address: s.optional(s.lazy(() => address1Schema)),
  id: s.optional(s.lazy(() => id7Schema)),
  buyerId: s.optional(s.lazy(() => buyerId14Schema)),
  type: s.defaulted(type48Schema, Type48.ShippingDetails),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    buyerId: "buyer_id",
  },
});
