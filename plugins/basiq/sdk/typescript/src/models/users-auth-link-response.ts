import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";

export type UsersAuthLinkResponse = {
  /** A user's mobile phone, used as for authentication. */
  mobile: string;
  /** Type of the response, always "auth_link". */
  type: string;
  /** A string that uniquely identifies the user. */
  userId: string;
  /** The date time of auth link expiry. */
  expiresAt: string;
  links?: Links;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersAuthLinkResponseSchema: Schema<UsersAuthLinkResponse> = s.object<UsersAuthLinkResponse>(
  {
    mobile: s.string(),
    type: s.string(),
    userId: s.string(),
    expiresAt: s.string(),
    links: s.optional(s.lazy(() => linksSchema)),
  },
  { additionalProperties: s.json() },
);
