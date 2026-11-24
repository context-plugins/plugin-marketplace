import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GithubUrl = string;

export const githubUrlSchema: Schema<GithubUrl> = s.of<GithubUrl>(s.union([s.string()]));
