import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION. */
export const Scope = {
  GithubOrganization: "GITHUB_ORGANIZATION",
  GithubGlobal: "GITHUB_GLOBAL",
  GitlabGroup: "GITLAB_GROUP",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
