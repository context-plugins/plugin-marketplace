import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Codec to use to compress the data before sending to Kafka */
export const Compression105 = {
  None: "none",
  Gzip: "gzip",
  Snappy: "snappy",
  Lz4: "lz4",
  Zstd: "zstd",
} as const;
export type Compression105 = (typeof Compression105)[keyof typeof Compression105] | (string & {});

export const compression105Schema: EnumSchema<Compression105> = s.enumOf<Compression105>(Compression105);
