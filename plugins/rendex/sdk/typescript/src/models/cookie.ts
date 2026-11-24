import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sameSiteSchema, type SameSite } from "./same-site.js";

export type Cookie = {
  name: string;
  value: string;
  domain?: string;
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: SameSite;
  /** Unix timestamp (seconds) for cookie expiration */
  expires?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cookieSchema: Schema<Cookie> = s.object<Cookie>(
  {
    name: s.string(),
    value: s.string(),
    domain: s.optional(s.string()),
    path: s.optional(s.string()),
    httpOnly: s.optional(s.boolean()),
    secure: s.optional(s.boolean()),
    sameSite: s.optional(s.lazy(() => sameSiteSchema)),
    expires: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
