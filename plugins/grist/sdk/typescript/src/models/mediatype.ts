import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Mediatype = {
  TextCsv: "text/csv",
} as const;
export type Mediatype = (typeof Mediatype)[keyof typeof Mediatype] | (string & {});

export const mediatypeSchema: EnumSchema<Mediatype> = s.enumOf<Mediatype>(Mediatype);
