import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data Key Type used for custom data */
export const DataKeyType = {
  String: "String",
  Boolean: "Boolean",
  Number: "Number",
} as const;
export type DataKeyType = (typeof DataKeyType)[keyof typeof DataKeyType] | (string & {});

export const dataKeyTypeSchema: EnumSchema<DataKeyType> = s.enumOf<DataKeyType>(DataKeyType);
