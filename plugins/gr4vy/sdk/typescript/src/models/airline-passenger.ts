import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ageGroup1Schema, type AgeGroup1 } from "./unions/age-group1.js";
import { countryCodeSchema, type CountryCode } from "./unions/country-code.js";
import { dateOfBirthSchema, type DateOfBirth } from "./unions/date-of-birth.js";
import { emailAddress1Schema, type EmailAddress1 } from "./unions/email-address1.js";
import { firstName1Schema, type FirstName1 } from "./unions/first-name1.js";
import { frequentFlyerNumberSchema, type FrequentFlyerNumber } from "./unions/frequent-flyer-number.js";
import { lastName1Schema, type LastName1 } from "./unions/last-name1.js";
import { passportNumberSchema, type PassportNumber } from "./unions/passport-number.js";
import { phoneNumberSchema, type PhoneNumber } from "./unions/phone-number.js";
import { ticketNumberSchema, type TicketNumber } from "./unions/ticket-number.js";
import { titleSchema, type Title } from "./unions/title.js";

export type AirlinePassenger = {
  /** The age group for the passenger. */
  ageGroup?: AgeGroup1;
  /** The passenger's date of birth in YYYY-MM-YY format. */
  dateOfBirth?: DateOfBirth;
  /** The email address of the passenger. */
  emailAddress?: EmailAddress1;
  /** The first name(s) or given name of the passenger. */
  firstName?: FirstName1;
  /** The passenger's frequent flyer number. */
  frequentFlyerNumber?: FrequentFlyerNumber;
  /** The last name, or family name, of the passenger. */
  lastName?: LastName1;
  /** The passenger's unique passport number. */
  passportNumber?: PassportNumber;
  /**
   * The phone number of the passenger. This number is formatted according to the E164 number
   * standard.
   */
  phoneNumber?: PhoneNumber;
  /** The ticket number for a flight. */
  ticketNumber?: TicketNumber;
  /** Title of the passenger. */
  title?: Title;
  /** The country of residence of the passenger */
  countryCode?: CountryCode;
};

export const airlinePassengerSchema: Schema<AirlinePassenger> = s.object<AirlinePassenger>({
  ageGroup: s.optional(s.lazy(() => ageGroup1Schema)),
  dateOfBirth: s.optional(s.lazy(() => dateOfBirthSchema)),
  emailAddress: s.optional(s.lazy(() => emailAddress1Schema)),
  firstName: s.optional(s.lazy(() => firstName1Schema)),
  frequentFlyerNumber: s.optional(s.lazy(() => frequentFlyerNumberSchema)),
  lastName: s.optional(s.lazy(() => lastName1Schema)),
  passportNumber: s.optional(s.lazy(() => passportNumberSchema)),
  phoneNumber: s.optional(s.lazy(() => phoneNumberSchema)),
  ticketNumber: s.optional(s.lazy(() => ticketNumberSchema)),
  title: s.optional(s.lazy(() => titleSchema)),
  countryCode: s.optional(s.lazy(() => countryCodeSchema)),
  _keysMap: {
    ageGroup: "age_group",
    dateOfBirth: "date_of_birth",
    emailAddress: "email_address",
    firstName: "first_name",
    frequentFlyerNumber: "frequent_flyer_number",
    lastName: "last_name",
    passportNumber: "passport_number",
    phoneNumber: "phone_number",
    ticketNumber: "ticket_number",
    countryCode: "country_code",
  },
});
