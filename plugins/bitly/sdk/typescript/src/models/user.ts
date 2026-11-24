import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailSchema, type Email } from "./email.js";

export type User = {
  login: string;
  name: string;
  isActive: boolean;
  created: string;
  modified: string;
  isSsoUser: boolean;
  emails: Email[];
  is2FaEnabled: boolean;
  defaultGroupGuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSchema: Schema<User> = s.object<User>(
  {
    login: s.string(),
    name: s.string(),
    isActive: s.boolean(),
    created: s.string(),
    modified: s.string(),
    isSsoUser: s.boolean(),
    emails: s.array(s.lazy(() => emailSchema)),
    is2FaEnabled: s.boolean(),
    defaultGroupGuid: s.optional(s.string()),
    _keysMap: {
      isActive: "is_active",
      isSsoUser: "is_sso_user",
      is2FaEnabled: "is_2fa_enabled",
      defaultGroupGuid: "default_group_guid",
    },
  },
  { additionalProperties: s.json() },
);
