import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB,
 * GITLAB_SELF_MANAGED, or BITBUCKET.
 */
export const ServerType1 = {
  Github: "GITHUB",
  Bitbucket: "BITBUCKET",
  GithubEnterprise: "GITHUB_ENTERPRISE",
  Gitlab: "GITLAB",
  GitlabSelfManaged: "GITLAB_SELF_MANAGED",
} as const;
export type ServerType1 = (typeof ServerType1)[keyof typeof ServerType1] | (string & {});

export const serverType1Schema: EnumSchema<ServerType1> = s.enumOf<ServerType1>(ServerType1);
