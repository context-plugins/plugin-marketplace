import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayloadIntegrity = {
  Pass: "pass",
} as const;
export type PayloadIntegrity = (typeof PayloadIntegrity)[keyof typeof PayloadIntegrity] | (string & {});

export const payloadIntegritySchema: EnumSchema<PayloadIntegrity> =
  s.enumOf<PayloadIntegrity>(PayloadIntegrity);
