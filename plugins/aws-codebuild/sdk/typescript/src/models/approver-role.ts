import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApproverRole = {
  GithubRead: "GITHUB_READ",
  GithubTriage: "GITHUB_TRIAGE",
  GithubWrite: "GITHUB_WRITE",
  GithubMaintain: "GITHUB_MAINTAIN",
  GithubAdmin: "GITHUB_ADMIN",
  GitlabGuest: "GITLAB_GUEST",
  GitlabPlanner: "GITLAB_PLANNER",
  GitlabReporter: "GITLAB_REPORTER",
  GitlabDeveloper: "GITLAB_DEVELOPER",
  GitlabMaintainer: "GITLAB_MAINTAINER",
  GitlabOwner: "GITLAB_OWNER",
  BitbucketRead: "BITBUCKET_READ",
  BitbucketWrite: "BITBUCKET_WRITE",
  BitbucketAdmin: "BITBUCKET_ADMIN",
} as const;
export type ApproverRole = (typeof ApproverRole)[keyof typeof ApproverRole] | (string & {});

export const approverRoleSchema: EnumSchema<ApproverRole> = s.enumOf<ApproverRole>(ApproverRole);
