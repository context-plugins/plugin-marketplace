import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Compression type to use for records */
export const Compression22 = {
  None: "none",
  Gzip: "gzip",
} as const;
export type Compression22 = (typeof Compression22)[keyof typeof Compression22] | (string & {});

export const compression22Schema: EnumSchema<Compression22> = s.enumOf<Compression22>(Compression22);
