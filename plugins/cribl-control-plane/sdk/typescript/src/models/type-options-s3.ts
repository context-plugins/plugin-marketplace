import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsS3 = {
  S3: "s3",
} as const;
export type TypeOptionsS3 = (typeof TypeOptionsS3)[keyof typeof TypeOptionsS3] | (string & {});

export const typeOptionsS3Schema: EnumSchema<TypeOptionsS3> = s.enumOf<TypeOptionsS3>(TypeOptionsS3);
