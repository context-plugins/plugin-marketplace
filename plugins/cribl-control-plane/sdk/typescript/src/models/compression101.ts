import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data compression format. Default is gzip. */
export const Compression101 = {
  None: "none",
  Gzip: "gzip",
} as const;
export type Compression101 = (typeof Compression101)[keyof typeof Compression101] | (string & {});

export const compression101Schema: EnumSchema<Compression101> = s.enumOf<Compression101>(Compression101);
