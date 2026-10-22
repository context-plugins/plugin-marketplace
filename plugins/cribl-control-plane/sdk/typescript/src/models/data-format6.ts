import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Preserve the raw event format instead of JSONifying it */
export const DataFormat6 = {
  Json: "json",
  Raw: "raw",
} as const;
export type DataFormat6 = (typeof DataFormat6)[keyof typeof DataFormat6] | (string & {});

export const dataFormat6Schema: EnumSchema<DataFormat6> = s.enumOf<DataFormat6>(DataFormat6);
