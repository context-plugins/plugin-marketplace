import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of compression to apply to messages sent to the OpenTelemetry endpoint */
export const Compression106 = {
  None: "none",
  Deflate: "deflate",
  Gzip: "gzip",
} as const;
export type Compression106 = (typeof Compression106)[keyof typeof Compression106] | (string & {});

export const compression106Schema: EnumSchema<Compression106> = s.enumOf<Compression106>(Compression106);
