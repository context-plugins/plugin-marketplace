import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode10Schema, type Mode10 } from "./mode10.js";

export type V2ProfilesRequest = {
  /**
   * The profile's name, this will usually reflect the trade name or brand name of the profile's
   * website or application.
   */
  name?: string | null;
  /**
   * The URL to the profile's website or application. Only `https` or `http` URLs are allowed. No
   * `@` signs are allowed.
   */
  website?: string | null;
  /**
   * The email address associated with the profile's trade name or brand.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email?: string | null;
  /** The phone number associated with the profile's trade name or brand. */
  phone?: string | null;
  /** The products or services offered by the profile's website or application. */
  description?: string | null;
  /**
   * A list of countries where you expect that the majority of the profile's customers reside, in
   * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  countriesOfActivity?: string[] | null;
  /**
   * The industry associated with the profile's trade name or brand. Please refer to the [business
   * category list](common-data-types) for all possible options.
   */
  businessCategory?: string | null;
  /**
   * Updating a profile from `test` mode to `live` mode will trigger a verification process, where
   * we review the profile before it can start accepting payments.
   */
  mode?: Mode10;
};

export const v2ProfilesRequestSchema: Schema<V2ProfilesRequest> = s.object<V2ProfilesRequest>({
  name: s.optionalNullable(s.string()),
  website: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  countriesOfActivity: s.optionalNullable(s.array(s.string())),
  businessCategory: s.optionalNullable(s.string()),
  mode: s.optional(s.lazy(() => mode10Schema)),
});
