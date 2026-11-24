import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of checkout key to create */
export const Type1CircleCiRestApiV1SshKeyApi = {
  DeployKey: "deploy-key",
  GithubUserKey: "github-user-key",
} as const;
export type Type1CircleCiRestApiV1SshKeyApi =
  | (typeof Type1CircleCiRestApiV1SshKeyApi)[keyof typeof Type1CircleCiRestApiV1SshKeyApi]
  | (string & {});

export const type1CircleCiRestApiV1SshKeyApiSchema: EnumSchema<Type1CircleCiRestApiV1SshKeyApi> =
  s.enumOf<Type1CircleCiRestApiV1SshKeyApi>(Type1CircleCiRestApiV1SshKeyApi);
