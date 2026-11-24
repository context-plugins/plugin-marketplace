import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of build environment to use for related builds. If you're using compute fleets during
 * project creation, type will be ignored. For more information, see Build environment compute types
 * in the CodeBuild user guide.
 */
export const Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
  WindowsContainer: "WINDOWS_CONTAINER",
  LinuxContainer: "LINUX_CONTAINER",
  LinuxGpuContainer: "LINUX_GPU_CONTAINER",
  ArmContainer: "ARM_CONTAINER",
  WindowsServer2019Container: "WINDOWS_SERVER_2019_CONTAINER",
  WindowsServer2022Container: "WINDOWS_SERVER_2022_CONTAINER",
  LinuxLambdaContainer: "LINUX_LAMBDA_CONTAINER",
  ArmLambdaContainer: "ARM_LAMBDA_CONTAINER",
  LinuxEc2: "LINUX_EC2",
  ArmEc2: "ARM_EC2",
  WindowsEc2: "WINDOWS_EC2",
  MacArm: "MAC_ARM",
} as const;
export type Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi =
  | (typeof Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi)[keyof typeof Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
  | (string & {});

export const type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: EnumSchema<Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.enumOf<Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
  );
