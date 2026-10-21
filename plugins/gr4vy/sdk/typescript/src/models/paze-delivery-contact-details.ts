import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactPhoneNumberSchema, type ContactPhoneNumber } from "./unions/contact-phone-number.js";
import { contactfullnameSchema, type Contactfullname } from "./unions/contactfullname.js";

export type PazeDeliveryContactDetails = {
  /** Consumer-provided name of the contact person. */
  contactFullName: Contactfullname;
  contactPhoneNumber: ContactPhoneNumber;
};

export const pazeDeliveryContactDetailsSchema: Schema<PazeDeliveryContactDetails> =
  s.object<PazeDeliveryContactDetails>({
    contactFullName: contactfullnameSchema,
    contactPhoneNumber: contactPhoneNumberSchema,
  });
