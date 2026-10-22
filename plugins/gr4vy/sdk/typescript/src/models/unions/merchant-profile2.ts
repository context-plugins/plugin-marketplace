import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantProfile3Schema, type MerchantProfile3 } from "./merchant-profile3.js";

/**
 * An object containing a key for each supported card schemes, and for each key an object with the
 * 3DS profile for this service for that scheme.
 */
export type MerchantProfile2 = Record<string, MerchantProfile3>;

export const merchantProfile2Schema: Schema<MerchantProfile2> = s.of<MerchantProfile2>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => merchantProfile3Schema),
    ),
  ]),
);
