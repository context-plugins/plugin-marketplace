import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity3 = {
  BankTransfer: "bank_transfer",
} as const;
export type Entity3 = (typeof Entity3)[keyof typeof Entity3] | (string & {});

export const entity3Schema: EnumSchema<Entity3> = s.enumOf<Entity3>(Entity3);
