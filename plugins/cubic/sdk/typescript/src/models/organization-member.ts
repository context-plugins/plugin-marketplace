import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";
import { githubLoginSchema, type GithubLogin } from "./unions/github-login.js";
import { workEmailSchema, type WorkEmail } from "./unions/work-email.js";

export type OrganizationMember = {
  githubUserId: string;
  githubLogin: GithubLogin;
  workEmail: WorkEmail;
  role: Role;
  seat: boolean;
  isBot: boolean;
};

export const organizationMemberSchema: Schema<OrganizationMember> = s.object<OrganizationMember>({
  githubUserId: s.string(),
  githubLogin: githubLoginSchema,
  workEmail: workEmailSchema,
  role: roleSchema,
  seat: s.boolean(),
  isBot: s.boolean(),
});
