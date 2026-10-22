import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `transaction-authorization-increment`. */
export const Type73 = {
  TransactionAuthorizationIncrement: "transaction-authorization-increment",
} as const;
export type Type73 = (typeof Type73)[keyof typeof Type73] | (string & {});

export const type73Schema: EnumSchema<Type73> = s.enumOf<Type73>(Type73);
