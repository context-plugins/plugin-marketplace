import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** RPC message type reported by the node. */
export const Type17 = {
  Info: "info",
  Req: "req",
  Resp: "resp",
} as const;
export type Type17 = (typeof Type17)[keyof typeof Type17] | (string & {});

export const type17Schema: EnumSchema<Type17> = s.enumOf<Type17>(Type17);
