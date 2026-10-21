import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User = {
  /** The user key. This is the only mandatory user attribute. */
  key?: string;
  /** If provided, used with the user key to generate a variation in percentage rollouts */
  secondary?: string;
  /** The user's IP address */
  ip?: string;
  /** The user's country */
  country?: string;
  /** The user's email */
  email?: string;
  /** The user's first name */
  firstName?: string;
  /** The user's last name */
  lastName?: string;
  /** An absolute URL to an avatar image. */
  avatar?: string;
  /** The user's full name */
  name?: string;
  /**
   * Whether the user is anonymous. If true, this user does not appear on the Contexts list in the
   * LaunchDarkly user interface.
   */
  anonymous?: boolean;
  /**
   * Any other custom attributes for this user. Custom attributes contain any other user data that
   * you would like to use to conditionally target your users.
   */
  custom?: Record<string, Record<string, unknown>>;
  /**
   * A list of attribute names that are marked as private. You can use these attributes in targeting
   * rules and segments. If you are using a server-side SDK, the SDK will not send the private
   * attribute back to LaunchDarkly. If you are using a client-side SDK, the SDK will send the
   * private attribute back to LaunchDarkly for evaluation. However, the SDK won't send the
   * attribute to LaunchDarkly in events data, LaunchDarkly won't store the private attribute, and
   * the private attribute will not appear on the Contexts list.
   */
  privateAttrs?: string[];
};

export const userSchema: Schema<User> = s.object<User>({
  key: s.optional(s.string()),
  secondary: s.optional(s.string()),
  ip: s.optional(s.string()),
  country: s.optional(s.string()),
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  avatar: s.optional(s.string()),
  name: s.optional(s.string()),
  anonymous: s.optional(s.boolean()),
  custom: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  privateAttrs: s.optional(s.array(s.string())),
});
