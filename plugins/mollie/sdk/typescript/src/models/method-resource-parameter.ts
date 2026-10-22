import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MethodResourceParameter = {
  Payments: "payments",
  Orders: "orders",
} as const;
export type MethodResourceParameter =
  | (typeof MethodResourceParameter)[keyof typeof MethodResourceParameter]
  | (string & {});

export const methodResourceParameterSchema: EnumSchema<MethodResourceParameter> =
  s.enumOf<MethodResourceParameter>(MethodResourceParameter);
