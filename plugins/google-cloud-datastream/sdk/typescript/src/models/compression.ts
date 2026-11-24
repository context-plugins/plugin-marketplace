import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Compression of the loaded JSON file. */
export const Compression = {
  JsonCompressionUnspecified: "JSON_COMPRESSION_UNSPECIFIED",
  NoCompression: "NO_COMPRESSION",
  Gzip: "GZIP",
} as const;
export type Compression = (typeof Compression)[keyof typeof Compression] | (string & {});

export const compressionSchema: EnumSchema<Compression> = s.enumOf<Compression>(Compression);
