import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `transaction-cancel`. */
export const Type74 = {
  TransactionCancel: "transaction-cancel",
} as const;
export type Type74 = (typeof Type74)[keyof typeof Type74] | (string & {});

export const type74Schema: EnumSchema<Type74> = s.enumOf<Type74>(Type74);
