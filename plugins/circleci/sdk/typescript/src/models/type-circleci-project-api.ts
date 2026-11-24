import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of checkout key */
export const TypeCircleciProjectApi = {
  DeployKey: "deploy-key",
  GithubUserKey: "github-user-key",
} as const;
export type TypeCircleciProjectApi =
  | (typeof TypeCircleciProjectApi)[keyof typeof TypeCircleciProjectApi]
  | (string & {});

export const typeCircleciProjectApiSchema: EnumSchema<TypeCircleciProjectApi> =
  s.enumOf<TypeCircleciProjectApi>(TypeCircleciProjectApi);
