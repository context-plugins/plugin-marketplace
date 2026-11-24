import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Along with path and name, the pattern that CodeBuild uses to determine the name and location to
 * store the output artifact: If type is set to CODEPIPELINE, CodePipeline ignores this value if
 * specified. This is because CodePipeline manages its build output names instead of CodeBuild. If
 * type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is
 * produced. If type is set to S3, valid values include: BUILD_ID: Include the build ID in the
 * location of the build output artifact. NONE: Do not include the build ID. This is the default if
 * namespaceType is not specified. F
 */
export const NamespaceType = {
  None: "NONE",
  BuildId: "BUILD_ID",
} as const;
export type NamespaceType = (typeof NamespaceType)[keyof typeof NamespaceType] | (string & {});

export const namespaceTypeSchema: EnumSchema<NamespaceType> = s.enumOf<NamespaceType>(NamespaceType);
