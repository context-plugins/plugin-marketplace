import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataStandardSortFieldDto = {
  Name: "name",
  Label: "label",
} as const;
export type DataStandardSortFieldDto =
  | (typeof DataStandardSortFieldDto)[keyof typeof DataStandardSortFieldDto]
  | (string & {});

export const dataStandardSortFieldDtoSchema: EnumSchema<DataStandardSortFieldDto> =
  s.enumOf<DataStandardSortFieldDto>(DataStandardSortFieldDto);
