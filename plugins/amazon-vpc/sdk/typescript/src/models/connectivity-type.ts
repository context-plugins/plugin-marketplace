import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the NAT gateway supports public or private connectivity */
export const ConnectivityType = {
  Public: "public",
  Private: "private",
} as const;
export type ConnectivityType = (typeof ConnectivityType)[keyof typeof ConnectivityType] | (string & {});

export const connectivityTypeSchema: EnumSchema<ConnectivityType> =
  s.enumOf<ConnectivityType>(ConnectivityType);
