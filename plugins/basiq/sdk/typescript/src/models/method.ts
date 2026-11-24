import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current Connector method */
export const Method = {
  Web: "web",
  OpenBanking: "open-banking",
  Csv: "csv",
  Pdf: "pdf",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
