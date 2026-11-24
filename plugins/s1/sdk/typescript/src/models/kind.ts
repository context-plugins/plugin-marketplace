import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What a `github` result is: a repository, an issue, a pull request, or a discussion. Only present
 * for `search_service: "github"`.
 */
export const Kind = {
  Repo: "repo",
  Issue: "issue",
  Pr: "pr",
  Discussion: "discussion",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
