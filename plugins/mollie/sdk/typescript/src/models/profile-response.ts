import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links15Schema, type Links15 } from "./links15.js";
import { modeSchema, type Mode } from "./mode.js";
import { profileStatusResponseSchema, type ProfileStatusResponse } from "./profile-status-response.js";
import { review1Schema, type Review1 } from "./review1.js";

export type ProfileResponse = {
  /**
   * Indicates the response contains a profile object. Will always contain the string `profile` for
   * this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this profile. Example: `pfl_v9hTwCvYqw`. */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * The profile's name, this will usually reflect the trade name or brand name of the profile's
   * website or application.
   */
  name: string;
  /**
   * The URL to the profile's website or application. Only `https` or `http` URLs are allowed. No
   * `@` signs are allowed.
   */
  website: string;
  /**
   * The email address associated with the profile's trade name or brand.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email: string;
  /** The phone number associated with the profile's trade name or brand. */
  phone: string;
  /** The products or services offered by the profile's website or application. */
  description?: string;
  /**
   * A list of countries where you expect that the majority of the profile's customers reside, in
   * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  countriesOfActivity?: string[];
  /**
   * The industry associated with the profile's trade name or brand. Please refer to the [business
   * category list](common-data-types#business-category) for all possible options.
   */
  businessCategory: string | null;
  status: ProfileStatusResponse;
  /**
   * Present if changes have been made that have not yet been approved by Mollie. Changes to test
   * profiles are approved automatically, unless a switch to a live profile has been requested. The
   * review object will therefore usually be `null` in test mode.
   */
  review?: Review1;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links15;
};

export const profileResponseSchema: Schema<ProfileResponse> = s.object<ProfileResponse>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  name: s.string(),
  website: s.string(),
  email: s.string(),
  phone: s.string(),
  description: s.optional(s.string()),
  countriesOfActivity: s.optional(s.array(s.string())),
  businessCategory: s.nullable(s.string()),
  status: profileStatusResponseSchema,
  review: s.optional(s.lazy(() => review1Schema)),
  createdAt: s.string(),
  links: links15Schema,
  _keysMap: {
    links: "_links",
  },
});
