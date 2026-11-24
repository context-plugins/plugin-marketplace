import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OPTIONAL. Whether the uploaded file is public or not regarding AWS link. */
export const IsPublic = {
  True: "true",
  False: "false",
} as const;
export type IsPublic = (typeof IsPublic)[keyof typeof IsPublic] | (string & {});

export const isPublicSchema: EnumSchema<IsPublic> = s.enumOf<IsPublic>(IsPublic);
