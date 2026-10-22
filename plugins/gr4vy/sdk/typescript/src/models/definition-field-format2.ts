import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the type of input that needs to be rendered for this field. */
export const DefinitionFieldFormat2 = {
  Text: "text",
  Multiline: "multiline",
  File: "file",
  Number: "number",
  Timezone: "timezone",
  Boolean: "boolean",
} as const;
export type DefinitionFieldFormat2 =
  | (typeof DefinitionFieldFormat2)[keyof typeof DefinitionFieldFormat2]
  | (string & {});

export const definitionFieldFormat2Schema: EnumSchema<DefinitionFieldFormat2> =
  s.enumOf<DefinitionFieldFormat2>(DefinitionFieldFormat2);
