import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The address family of the routes to return. The valid values are ipv4 and ipv6. */
export const AddressFamily5 = {
  Ipv4: "ipv4",
  Ipv6: "ipv6",
} as const;
export type AddressFamily5 = (typeof AddressFamily5)[keyof typeof AddressFamily5] | (string & {});

export const addressFamily5Schema: EnumSchema<AddressFamily5> = s.enumOf<AddressFamily5>(AddressFamily5);
