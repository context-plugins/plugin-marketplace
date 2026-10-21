import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrycodeModelSchema, type CountrycodeModel } from "./unions/countrycode-model.js";
import { firstnameModelSchema, type FirstnameModel } from "./unions/firstname-model.js";
import { languagecodeSchema, type Languagecode } from "./unions/languagecode.js";
import { lastnameModelSchema, type LastnameModel } from "./unions/lastname-model.js";
import { mobileNumberSchema, type MobileNumber } from "./unions/mobile-number.js";

export type PazeConsumer = {
  /** First name of the consumer. */
  firstName: FirstnameModel;
  /** Last name of the consumer. */
  lastName: LastnameModel;
  /** Full name of the consumer. */
  fullName: string;
  /** ISO 3166-1 alpha-2 country code. */
  countryCode: CountrycodeModel;
  /** ISO 639-1 language code associated with the wallet. */
  languageCode: Languagecode;
  /** Email address of the consumer. */
  emailAddress: string;
  mobileNumber: MobileNumber;
};

export const pazeConsumerSchema: Schema<PazeConsumer> = s.object<PazeConsumer>({
  firstName: firstnameModelSchema,
  lastName: lastnameModelSchema,
  fullName: s.string(),
  countryCode: countrycodeModelSchema,
  languageCode: languagecodeSchema,
  emailAddress: s.string(),
  mobileNumber: mobileNumberSchema,
});
