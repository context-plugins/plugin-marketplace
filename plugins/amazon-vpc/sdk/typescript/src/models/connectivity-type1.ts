import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConnectivityType1 = {
  Public: "public",
  Private: "private",
} as const;
export type ConnectivityType1 = (typeof ConnectivityType1)[keyof typeof ConnectivityType1] | (string & {});

export const connectivityType1Schema: EnumSchema<ConnectivityType1> =
  s.enumOf<ConnectivityType1>(ConnectivityType1);
