import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Application ID provided for Visa after onboarding to use Network Tokens. */
export type VisaNetworkTokensAppId = string;

export const visaNetworkTokensAppIdSchema: Schema<VisaNetworkTokensAppId> = s.of<VisaNetworkTokensAppId>(
  s.union([s.string()]),
);
