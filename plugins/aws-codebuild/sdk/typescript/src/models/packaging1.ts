import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of build output artifact to create. Valid values include: NONE: CodeBuild creates the
 * raw data in the output bucket. This is the default if packaging is not specified. ZIP: CodeBuild
 * creates a ZIP file with the raw data in the output bucket.
 */
export const Packaging1 = {
  Zip: "ZIP",
  None: "NONE",
} as const;
export type Packaging1 = (typeof Packaging1)[keyof typeof Packaging1] | (string & {});

export const packaging1Schema: EnumSchema<Packaging1> = s.enumOf<Packaging1>(Packaging1);
