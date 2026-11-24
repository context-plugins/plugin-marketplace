import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the change. */
export const Type8 = {
  NodeCreate: "NODE_CREATE",
  NodeUpdate: "NODE_UPDATE",
  NodeDelete: "NODE_DELETE",
} as const;
export type Type8 = (typeof Type8)[keyof typeof Type8] | (string & {});

export const type8Schema: EnumSchema<Type8> = s.enumOf<Type8>(Type8);
