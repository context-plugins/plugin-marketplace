import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GitSubmodulesConfig = {
  /** Set to true to fetch Git submodules for your CodeBuild build project. */
  fetchSubmodules: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gitSubmodulesConfigSchema: Schema<GitSubmodulesConfig> = s.object<GitSubmodulesConfig>(
  {
    fetchSubmodules: s.boolean(),
  },
  { additionalProperties: s.json() },
);
