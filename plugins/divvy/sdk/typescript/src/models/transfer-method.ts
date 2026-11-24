import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** International Payment Transfer Method. */
export const TransferMethod = {
  Wire: "WIRE",
  Local: "LOCAL",
  Undefined: "UNDEFINED",
} as const;
export type TransferMethod = (typeof TransferMethod)[keyof typeof TransferMethod] | (string & {});

export const transferMethodSchema: EnumSchema<TransferMethod> = s.enumOf<TransferMethod>(TransferMethod);
