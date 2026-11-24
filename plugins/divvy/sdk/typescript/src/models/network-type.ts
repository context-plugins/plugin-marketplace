import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for different types of network. */
export const NetworkType = {
  Bill: "BILL",
  Rpps: "RPPS",
} as const;
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType] | (string & {});

export const networkTypeSchema: EnumSchema<NetworkType> = s.enumOf<NetworkType>(NetworkType);
