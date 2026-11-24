import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Flow type for VPA receivers. */
export const Flow = {
  UpiQr: "upi_qr",
} as const;
export type Flow = (typeof Flow)[keyof typeof Flow] | (string & {});

export const flowSchema: EnumSchema<Flow> = s.enumOf<Flow>(Flow);
