import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The address family of the route. The valid values are ipv4 and ipv6. */
export const AddressFamily6 = {
  Ipv4: "ipv4",
  Ipv6: "ipv6",
} as const;
export type AddressFamily6 = (typeof AddressFamily6)[keyof typeof AddressFamily6] | (string & {});

export const addressFamily6Schema: EnumSchema<AddressFamily6> = s.enumOf<AddressFamily6>(AddressFamily6);
