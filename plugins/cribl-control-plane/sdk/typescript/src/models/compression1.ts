import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls whether to support reading compressed data from a forwarder. Select 'Automatic' to match
 * the forwarder's configuration, or 'Disabled' to reject compressed connections.
 */
export const Compression1 = {
  Disabled: "disabled",
  Auto: "auto",
  Always: "always",
} as const;
export type Compression1 = (typeof Compression1)[keyof typeof Compression1] | (string & {});

export const compression1Schema: EnumSchema<Compression1> = s.enumOf<Compression1>(Compression1);
