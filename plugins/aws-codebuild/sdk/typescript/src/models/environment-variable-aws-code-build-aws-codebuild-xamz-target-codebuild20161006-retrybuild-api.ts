import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type4AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type Type4AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./type4-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";

export type EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
  /** The name or key of the environment variable. */
  name: string;
  /**
   * The value of the environment variable. We strongly discourage the use of PLAINTEXT environment
   * variables to store sensitive values, especially Amazon Web Services secret key IDs. PLAINTEXT
   * environment variables can be displayed in plain text using the CodeBuild console and the CLI.
   * For sensitive values, we recommend you use an environment variable of type PARAMETER_STORE or
   * SECRETS_MANAGER.
   */
  value: string;
  /**
   * The type of environment variable. Valid values include: PARAMETER_STORE: An environment
   * variable stored in Systems Manager Parameter Store. For environment variables of this type,
   * specify the name of the parameter as the value of the EnvironmentVariable. The parameter value
   * will be substituted for the name at runtime. You can also define Parameter Store environment
   * variables in the buildspec. To learn how to do so, see env/parameter-store in the CodeBuild
   * User Guide. PLAINTEXT: An environment variable in plain text format. This is the default value.
   * SECRETS_MANAGER: An environment variable sto
   */
  type?: Type4AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: Schema<EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.object<EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    {
      name: s.string(),
      value: s.string(),
      type: s.optional(
        s.lazy(() => type4AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
