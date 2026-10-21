import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data compression format to apply to HTTP content before it is delivered */
export const Compression104 = {
  None: "none",
  Gzip: "gzip",
} as const;
export type Compression104 = (typeof Compression104)[keyof typeof Compression104] | (string & {});

export const compression104Schema: EnumSchema<Compression104> = s.enumOf<Compression104>(Compression104);
