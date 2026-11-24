import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfilePhoneApi = {
  /**
   * The phone number in international format
   * - Example: `+1 234-555-6789`
   */
  number?: string;
  /**
   * The phone number in E.164 format
   * - Example: `+12345556789`
   */
  e164?: string | null;
  /**
   * The country code associated with the phone number
   * - Example: `1` for United States
   */
  countryCode?: string | null;
  /**
   * The phone extension, if applicable
   * - Example: `123`
   */
  extension?: string | null;
  /**
   * The type of phone number. Options are `mobile`, `direct dial`, or `other`.
   * - Example: `mobile`
   *
   * @default "unknown"
   */
  type?: string;
  /**
   * Phone confidence grade.
   * - `A` = Best: Confirmed as valid phone and strong identity match signals.
   * - `A-` = Likely: Confirmed as valid phone, but unable to confirm identity.
   * - `B` = Possible: Worth trying, especially if better options are not available.
   */
  grade?: string;
  /**
   * validity deprecated, please use `grade` instead.
   *
   * @deprecated
   *
   * @default "unknown"
   */
  validity?: string;
  /**
   * Indicates whether this is the recommended phone number to use as the best option for connecting
   * with the person.
   * - Example: `true`
   *
   * @default false
   */
  recommended?: boolean;
  /**
   * `premium` deprecated
   *
   * @deprecated
   *
   * @default false
   */
  premium?: boolean;
  /**
   * `last_checked` deprecated
   *
   * @deprecated
   */
  lastChecked?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profilePhoneApiSchema: Schema<ProfilePhoneApi> = s.object<ProfilePhoneApi>(
  {
    number: s.optional(s.string()),
    e164: s.optionalNullable(s.string()),
    countryCode: s.optionalNullable(s.string()),
    extension: s.optionalNullable(s.string()),
    type: s.defaulted(s.string(), "unknown"),
    grade: s.optional(s.string()),
    validity: s.defaulted(s.string(), "unknown"),
    recommended: s.defaulted(s.boolean(), false),
    premium: s.defaulted(s.boolean(), false),
    lastChecked: s.optional(s.dateTime()),
    _keysMap: {
      countryCode: "country_code",
      lastChecked: "last_checked",
    },
  },
  { additionalProperties: s.json() },
);
