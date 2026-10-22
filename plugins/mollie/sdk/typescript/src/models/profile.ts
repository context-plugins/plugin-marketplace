import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Profile = {
  /**
   * The profile's name, this will usually reflect the trade name or brand name of the profile's
   * website or application.
   */
  name?: string;
  /**
   * The URL to the profile's website or application. Only `https` or `http` URLs are allowed. No
   * `@` signs are allowed.
   */
  url?: string;
  /**
   * The email address associated with the profile's trade name or brand.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email?: string;
  /** The phone number associated with the profile's trade name or brand. */
  phone?: string;
  /** The products or services offered by the profile's website or application. */
  description?: string | null;
  /**
   * The industry associated with the profile's trade name or brand. Please refer to the [business
   * category list](common-data-types) for all possible options.
   */
  businessCategory?: string;
};

export const profileSchema: Schema<Profile> = s.object<Profile>({
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  businessCategory: s.optional(s.string()),
});
