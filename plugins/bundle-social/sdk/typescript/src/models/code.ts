import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  InvalidType: "invalid_type",
  InvalidLiteral: "invalid_literal",
  Custom: "custom",
  InvalidUnion: "invalid_union",
  InvalidUnionDiscriminator: "invalid_union_discriminator",
  InvalidEnumValue: "invalid_enum_value",
  UnrecognizedKeys: "unrecognized_keys",
  InvalidArguments: "invalid_arguments",
  InvalidReturnType: "invalid_return_type",
  InvalidDate: "invalid_date",
  InvalidString: "invalid_string",
  TooSmall: "too_small",
  TooBig: "too_big",
  InvalidIntersectionTypes: "invalid_intersection_types",
  NotMultipleOf: "not_multiple_of",
  NotFinite: "not_finite",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
