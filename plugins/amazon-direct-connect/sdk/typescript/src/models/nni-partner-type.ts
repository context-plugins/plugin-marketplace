import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of network-to-network interface (NNI) partner. The partner type will be one of the
 * following: V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or
 * 500Mbps subgigabit connections. V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted
 * connections. nonPartner: The customer is not a partner.
 */
export const NniPartnerType = {
  V1: "v1",
  V2: "v2",
  NonPartner: "nonPartner",
} as const;
export type NniPartnerType = (typeof NniPartnerType)[keyof typeof NniPartnerType] | (string & {});

export const nniPartnerTypeSchema: EnumSchema<NniPartnerType> = s.enumOf<NniPartnerType>(NniPartnerType);
