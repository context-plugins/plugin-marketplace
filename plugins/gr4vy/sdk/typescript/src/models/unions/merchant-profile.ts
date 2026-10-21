import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantProfile1Schema, type MerchantProfile1 } from "./merchant-profile1.js";

/**
 * An object containing a key for each supported card schemes, and for each key an object with the
 * 3DS profile for this service for that scheme.
 */
export type MerchantProfile = Record<string, MerchantProfile1>;

export const merchantProfileSchema: Schema<MerchantProfile> = s.of<MerchantProfile>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => merchantProfile1Schema),
    ),
  ]),
);
