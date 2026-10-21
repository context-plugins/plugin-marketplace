import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aliasSchema, type Alias } from "./alias.js";
import { currentAddressSchema, type CurrentAddress } from "./current-address.js";
import { emailSchema, type Email } from "./email.js";
import { idNumberSchema, type IdNumber } from "./id-number.js";
import { phoneSchema, type Phone } from "./phone.js";
import { placeOfBirthSchema, type PlaceOfBirth } from "./place-of-birth.js";
import { previousAddressSchema, type PreviousAddress } from "./previous-address.js";
import { relatedPersonSchema, type RelatedPerson } from "./related-person.js";
import { socialSchema, type Social } from "./social.js";

export type Subject1 = {
  /** Title of an individual such as Mr, Mrs, Dr, Sir */
  title?: string;
  /** A person's name used by their collegues and friends to address them */
  firstName?: string;
  /** Any other registered names used by the individual, not aliases */
  middleNames?: string[];
  /** Any family names for the individual */
  lastNames?: string[];
  /** Any family names for the individual */
  lastNamesAtBirth?: string[];
  aliases?: Alias[];
  relatedPersons?: RelatedPerson[];
  /**
   * Specified in year, month and day separated by -. For example 2017-1-1 or 2017-01-01 which
   * conforms to ISO 8601
   */
  dateOfBirth?: string;
  gender?: string;
  currentAddress?: CurrentAddress;
  previousAddresses?: PreviousAddress[];
  placeOfBirth?: PlaceOfBirth;
  idNumbers?: IdNumber[];
  phones?: Phone[];
  emails?: Email[];
  socials?: Social[];
  /** The subject's mother's maiden name, used for identity verification */
  mothersMaidenName?: string;
};

export const subject1Schema: Schema<Subject1> = s.object<Subject1>({
  title: s.optional(s.string()),
  firstName: s.optional(s.string()),
  middleNames: s.optional(s.array(s.string())),
  lastNames: s.optional(s.array(s.string())),
  lastNamesAtBirth: s.optional(s.array(s.string())),
  aliases: s.optional(s.array(s.lazy(() => aliasSchema))),
  relatedPersons: s.optional(s.array(s.lazy(() => relatedPersonSchema))),
  dateOfBirth: s.optional(s.string()),
  gender: s.optional(s.string()),
  currentAddress: s.optional(s.lazy(() => currentAddressSchema)),
  previousAddresses: s.optional(s.array(s.lazy(() => previousAddressSchema))),
  placeOfBirth: s.optional(s.lazy(() => placeOfBirthSchema)),
  idNumbers: s.optional(s.array(s.lazy(() => idNumberSchema))),
  phones: s.optional(s.array(s.lazy(() => phoneSchema))),
  emails: s.optional(s.array(s.lazy(() => emailSchema))),
  socials: s.optional(s.array(s.lazy(() => socialSchema))),
  mothersMaidenName: s.optional(s.string()),
});
