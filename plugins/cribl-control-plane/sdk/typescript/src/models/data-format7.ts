import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format of the output data. */
export const DataFormat7 = {
  Json: "json",
  Raw: "raw",
} as const;
export type DataFormat7 = (typeof DataFormat7)[keyof typeof DataFormat7] | (string & {});

export const dataFormat7Schema: EnumSchema<DataFormat7> = s.enumOf<DataFormat7>(DataFormat7);
