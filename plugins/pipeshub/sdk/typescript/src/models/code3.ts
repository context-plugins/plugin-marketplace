import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Machine-readable error code mapped from the Zod issue code. */
export const Code3 = {
  InvalidType: "INVALID_TYPE",
  InvalidLiteral: "INVALID_LITERAL",
  InvalidEnum: "INVALID_ENUM",
  InvalidUnion: "INVALID_UNION",
  InvalidDiscriminator: "INVALID_DISCRIMINATOR",
  InvalidArguments: "INVALID_ARGUMENTS",
  TooSmall: "TOO_SMALL",
  TooBig: "TOO_BIG",
} as const;
export type Code3 = (typeof Code3)[keyof typeof Code3] | (string & {});

export const code3Schema: EnumSchema<Code3> = s.enumOf<Code3>(Code3);
