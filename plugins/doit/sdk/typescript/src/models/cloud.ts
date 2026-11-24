import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cloud the scope belongs to. */
export const Cloud = {
  Aws: "aws",
  Gcp: "gcp",
} as const;
export type Cloud = (typeof Cloud)[keyof typeof Cloud] | (string & {});

export const cloudSchema: EnumSchema<Cloud> = s.enumOf<Cloud>(Cloud);
