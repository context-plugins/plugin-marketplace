import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of build output artifact. Valid values include: CODEPIPELINE: The build project has
 * build output generated through CodePipeline. The CODEPIPELINE type is not supported for
 * secondaryArtifacts. NO_ARTIFACTS: The build project does not produce any build output. S3: The
 * build project stores build output in Amazon S3.
 */
export const Type6 = {
  Codepipeline: "CODEPIPELINE",
  S3: "S3",
  NoArtifacts: "NO_ARTIFACTS",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
