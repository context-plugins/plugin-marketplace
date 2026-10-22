import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls whether the sender should send compressed data to the server. Select 'Disabled' to
 * reject compressed connections or 'Always' to ignore server's configuration and send compressed
 * data.
 */
export const Compression102 = {
  Disabled: "disabled",
  Auto: "auto",
  Always: "always",
} as const;
export type Compression102 = (typeof Compression102)[keyof typeof Compression102] | (string & {});

export const compression102Schema: EnumSchema<Compression102> = s.enumOf<Compression102>(Compression102);
