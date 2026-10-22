import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Codec to use to compress the data before sending */
export const Compression103 = {
  None: "none",
  Gzip: "gzip",
} as const;
export type Compression103 = (typeof Compression103)[keyof typeof Compression103] | (string & {});

export const compression103Schema: EnumSchema<Compression103> = s.enumOf<Compression103>(Compression103);
