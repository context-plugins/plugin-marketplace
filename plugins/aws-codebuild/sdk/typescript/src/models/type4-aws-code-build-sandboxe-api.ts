import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the file system. The one supported type is EFS. */
export const Type4AwsCodeBuildSandboxeApi = {
  Efs: "EFS",
} as const;
export type Type4AwsCodeBuildSandboxeApi =
  | (typeof Type4AwsCodeBuildSandboxeApi)[keyof typeof Type4AwsCodeBuildSandboxeApi]
  | (string & {});

export const type4AwsCodeBuildSandboxeApiSchema: EnumSchema<Type4AwsCodeBuildSandboxeApi> =
  s.enumOf<Type4AwsCodeBuildSandboxeApi>(Type4AwsCodeBuildSandboxeApi);
