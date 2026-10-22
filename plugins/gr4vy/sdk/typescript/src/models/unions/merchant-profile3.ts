import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantProfileSchemeSchema, type MerchantProfileScheme } from "../merchant-profile-scheme.js";

export type MerchantProfile3 = MerchantProfileScheme;

export const merchantProfile3Schema: Schema<MerchantProfile3> = s.of<MerchantProfile3>(
  s.union([s.lazy(() => merchantProfileSchemeSchema)]),
);
