import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `transaction-void`. */
export const Type78 = {
  TransactionVoid: "transaction-void",
} as const;
export type Type78 = (typeof Type78)[keyof typeof Type78] | (string & {});

export const type78Schema: EnumSchema<Type78> = s.enumOf<Type78>(Type78);
