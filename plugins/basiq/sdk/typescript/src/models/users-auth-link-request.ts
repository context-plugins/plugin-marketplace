import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsersAuthLinkRequest = {
  mobile?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersAuthLinkRequestSchema: Schema<UsersAuthLinkRequest> = s.object<UsersAuthLinkRequest>(
  {
    mobile: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
