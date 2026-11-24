import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FunderType = {
  PrivateFoundation: "private_foundation",
  PublicCharity: "public_charity",
  DafOrPassthrough: "daf_or_passthrough",
} as const;
export type FunderType = (typeof FunderType)[keyof typeof FunderType] | (string & {});

export const funderTypeSchema: EnumSchema<FunderType> = s.enumOf<FunderType>(FunderType);
