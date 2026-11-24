import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state1Schema, type State1 } from "./state1.js";

export type User = {
  /** The user security ID */
  userSecurityId?: string;
  /** The user name */
  userName?: string;
  /** The user display name */
  displayName?: string;
  /** The user state */
  state?: State1;
  /** The user expiry date */
  expiryDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSchema: Schema<User> = s.object<User>(
  {
    userSecurityId: s.optional(s.string()),
    userName: s.optional(s.string()),
    displayName: s.optional(s.string()),
    state: s.optional(s.lazy(() => state1Schema)),
    expiryDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
