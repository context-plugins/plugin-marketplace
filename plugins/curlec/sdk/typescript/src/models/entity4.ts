import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity4 = {
  BankAccount: "bank_account",
} as const;
export type Entity4 = (typeof Entity4)[keyof typeof Entity4] | (string & {});

export const entity4Schema: EnumSchema<Entity4> = s.enumOf<Entity4>(Entity4);
