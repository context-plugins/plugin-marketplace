import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the service that interpreted the input. */
export const InterpretationSource = {
  Bedrock: "Bedrock",
  Lex: "Lex",
} as const;
export type InterpretationSource =
  | (typeof InterpretationSource)[keyof typeof InterpretationSource]
  | (string & {});

export const interpretationSourceSchema: EnumSchema<InterpretationSource> =
  s.enumOf<InterpretationSource>(InterpretationSource);
