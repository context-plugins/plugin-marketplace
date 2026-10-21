import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Codec to use to compress the persisted data */
export const Compression = {
  None: "none",
  Gzip: "gzip",
} as const;
export type Compression = (typeof Compression)[keyof typeof Compression] | (string & {});

export const compressionSchema: EnumSchema<Compression> = s.enumOf<Compression>(Compression);
