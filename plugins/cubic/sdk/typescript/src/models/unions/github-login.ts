import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GithubLogin = string;

export const githubLoginSchema: Schema<GithubLogin> = s.of<GithubLogin>(s.union([s.string()]));
