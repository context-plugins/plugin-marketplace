import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of environment variable. Valid values include: PARAMETER_STORE: An environment variable
 * stored in Systems Manager Parameter Store. For environment variables of this type, specify the
 * name of the parameter as the value of the EnvironmentVariable. The parameter value will be
 * substituted for the name at runtime. You can also define Parameter Store environment variables in
 * the buildspec. To learn how to do so, see env/parameter-store in the CodeBuild User Guide.
 * PLAINTEXT: An environment variable in plain text format. This is the default value.
 * SECRETS_MANAGER: An environment variable sto
 */
export const Type3AwsCodeBuildSandboxeApi = {
  Plaintext: "PLAINTEXT",
  ParameterStore: "PARAMETER_STORE",
  SecretsManager: "SECRETS_MANAGER",
} as const;
export type Type3AwsCodeBuildSandboxeApi =
  | (typeof Type3AwsCodeBuildSandboxeApi)[keyof typeof Type3AwsCodeBuildSandboxeApi]
  | (string & {});

export const type3AwsCodeBuildSandboxeApiSchema: EnumSchema<Type3AwsCodeBuildSandboxeApi> =
  s.enumOf<Type3AwsCodeBuildSandboxeApi>(Type3AwsCodeBuildSandboxeApi);
