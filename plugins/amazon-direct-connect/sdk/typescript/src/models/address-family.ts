import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The address family for the BGP peer. */
export const AddressFamily = {
  Ipv4: "ipv4",
  Ipv6: "ipv6",
} as const;
export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily] | (string & {});

export const addressFamilySchema: EnumSchema<AddressFamily> = s.enumOf<AddressFamily>(AddressFamily);
