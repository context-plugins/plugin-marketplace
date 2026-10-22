import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeType = {
  PeopleWithoutManager: "PEOPLE_WITHOUT_MANAGER",
  InvalidEntities: "INVALID_ENTITIES",
} as const;
export type IncludeType = (typeof IncludeType)[keyof typeof IncludeType] | (string & {});

export const includeTypeSchema: EnumSchema<IncludeType> = s.enumOf<IncludeType>(IncludeType);
