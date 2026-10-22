import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayloadIntegrity1 = {
  Fail: "fail",
} as const;
export type PayloadIntegrity1 = (typeof PayloadIntegrity1)[keyof typeof PayloadIntegrity1] | (string & {});

export const payloadIntegrity1Schema: EnumSchema<PayloadIntegrity1> =
  s.enumOf<PayloadIntegrity1>(PayloadIntegrity1);
