import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of compression to apply to messages sent to the OpenTelemetry endpoint */
export const Compression107 = {
  None: "none",
  Gzip: "gzip",
} as const;
export type Compression107 = (typeof Compression107)[keyof typeof Compression107] | (string & {});

export const compression107Schema: EnumSchema<Compression107> = s.enumOf<Compression107>(Compression107);
