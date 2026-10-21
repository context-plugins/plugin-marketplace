import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DefinitionFieldFormat = {
  Text: "text",
  Multiline: "multiline",
  File: "file",
  Number: "number",
  Timezone: "timezone",
  Boolean: "boolean",
} as const;
export type DefinitionFieldFormat =
  | (typeof DefinitionFieldFormat)[keyof typeof DefinitionFieldFormat]
  | (string & {});

export const definitionFieldFormatSchema: EnumSchema<DefinitionFieldFormat> =
  s.enumOf<DefinitionFieldFormat>(DefinitionFieldFormat);
