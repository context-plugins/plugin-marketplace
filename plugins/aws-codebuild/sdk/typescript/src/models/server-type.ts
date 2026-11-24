import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source provider used for this project. */
export const ServerType = {
  Github: "GITHUB",
  Bitbucket: "BITBUCKET",
  GithubEnterprise: "GITHUB_ENTERPRISE",
  Gitlab: "GITLAB",
  GitlabSelfManaged: "GITLAB_SELF_MANAGED",
} as const;
export type ServerType = (typeof ServerType)[keyof typeof ServerType] | (string & {});

export const serverTypeSchema: EnumSchema<ServerType> = s.enumOf<ServerType>(ServerType);
