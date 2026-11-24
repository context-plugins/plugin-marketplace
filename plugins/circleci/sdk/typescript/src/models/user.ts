import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User = {
  /** The login name of the user */
  login?: string;
  /** The display name of the user */
  name?: string;
  /** URL of the user avatar */
  avatarUrl?: string;
  /** Whether the user is an admin */
  admin?: boolean;
  /** All email addresses associated with the user */
  allEmails?: string[];
  /** The user selected email address */
  selectedEmail?: string;
  /** Days remaining in trial */
  daysLeftInTrial?: number;
  /** Default parallelism setting */
  parallelism?: number;
  /** When the user account was created */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userProperties: s.Shape<User> = {
  login: s.optional(s.string()),
  name: s.optional(s.string()),
  avatarUrl: s.optional(s.string()),
  admin: s.optional(s.boolean()),
  allEmails: s.optional(s.array(s.string())),
  selectedEmail: s.optional(s.string()),
  daysLeftInTrial: s.optional(s.int()),
  parallelism: s.optional(s.int()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    avatarUrl: "avatar_url",
    allEmails: "all_emails",
    selectedEmail: "selected_email",
    daysLeftInTrial: "days_left_in_trial",
    createdAt: "created_at",
  },
};

export const userInternalSchema: Schema<User> = s.object<User>(userProperties, {
  additionalProperties: s.json(),
});

export const userSchema: Schema<User> = s.lazySchema(() =>
  s.object<User>(
    {
      ...userProperties,
      avatarUrl: s.optional(s.string().check(s.url())),
      allEmails: s.optional(s.array(s.string().check(s.email()))),
      selectedEmail: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
