import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The definition type of the attribute. */
export const DefinitionType = {
  DefinitionTypeUnspecified: "DEFINITION_TYPE_UNSPECIFIED",
  SystemDefined: "SYSTEM_DEFINED",
  UserDefined: "USER_DEFINED",
} as const;
export type DefinitionType = (typeof DefinitionType)[keyof typeof DefinitionType] | (string & {});

export const definitionTypeSchema: EnumSchema<DefinitionType> = s.enumOf<DefinitionType>(DefinitionType);
