import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `refund`. */
export const Type62 = {
  Refund: "refund",
} as const;
export type Type62 = (typeof Type62)[keyof typeof Type62] | (string & {});

export const type62Schema: EnumSchema<Type62> = s.enumOf<Type62>(Type62);
