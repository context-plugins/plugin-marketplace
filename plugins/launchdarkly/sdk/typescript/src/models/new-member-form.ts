import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { role1Schema, type Role1 } from "./role1.js";

export type NewMemberForm = {
  /** The member's email */
  email: string;
  /** The member's password */
  password?: string;
  /** The member's first name */
  firstName?: string;
  /** The member's last name */
  lastName?: string;
  /** The member's initial role, if you are using a base role for the initial role */
  role?: Role1;
  /**
   * An array of the member's initial roles, if you are using custom roles or preset roles provided
   * by LaunchDarkly
   */
  customRoles?: string[];
  /** An array of the member's teams */
  teamKeys?: string[];
  roleAttributes?: Record<string, Record<string, unknown>>;
};

export const newMemberFormSchema: Schema<NewMemberForm> = s.object<NewMemberForm>({
  email: s.string(),
  password: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  role: s.optional(s.lazy(() => role1Schema)),
  customRoles: s.optional(s.array(s.string())),
  teamKeys: s.optional(s.array(s.string())),
  roleAttributes: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
});
