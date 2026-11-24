import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The command type. */
export const TypeAwsCodeBuildCommandExecutionApi = {
  Shell: "SHELL",
} as const;
export type TypeAwsCodeBuildCommandExecutionApi =
  | (typeof TypeAwsCodeBuildCommandExecutionApi)[keyof typeof TypeAwsCodeBuildCommandExecutionApi]
  | (string & {});

export const typeAwsCodeBuildCommandExecutionApiSchema: EnumSchema<TypeAwsCodeBuildCommandExecutionApi> =
  s.enumOf<TypeAwsCodeBuildCommandExecutionApi>(TypeAwsCodeBuildCommandExecutionApi);
