import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModelVersionDto = {
  _3: "3",
  _4: "4",
} as const;
export type ModelVersionDto = (typeof ModelVersionDto)[keyof typeof ModelVersionDto] | (string & {});

export const modelVersionDtoSchema: EnumSchema<ModelVersionDto> = s.enumOf<ModelVersionDto>(ModelVersionDto);
