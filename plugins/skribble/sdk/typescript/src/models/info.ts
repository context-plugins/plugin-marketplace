import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Info = {
  Validation: "validation",
  Format: "format",
  Signer: "signer",
} as const;
export type Info = (typeof Info)[keyof typeof Info] | (string & {});

export const infoSchema: EnumSchema<Info> = s.enumOf<Info>(Info);
