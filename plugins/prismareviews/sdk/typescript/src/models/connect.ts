import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How `POST /v1/connections` connects it. */
export const Connect = {
  Oauth: "oauth",
  Credentials: "credentials",
  ListingUrl: "listing_url",
} as const;
export type Connect = (typeof Connect)[keyof typeof Connect] | (string & {});

export const connectSchema: EnumSchema<Connect> = s.enumOf<Connect>(Connect);
