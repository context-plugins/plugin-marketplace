import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DatasetOwnerTypeDto = {
  User: "user",
  UserGroup: "userGroup",
} as const;
export type DatasetOwnerTypeDto =
  | (typeof DatasetOwnerTypeDto)[keyof typeof DatasetOwnerTypeDto]
  | (string & {});

export const datasetOwnerTypeDtoSchema: EnumSchema<DatasetOwnerTypeDto> =
  s.enumOf<DatasetOwnerTypeDto>(DatasetOwnerTypeDto);
