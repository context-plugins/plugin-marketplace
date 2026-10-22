import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Requestor ID provided for Visa after onboarding to use Network Tokens. */
export type VisaNetworkTokensRequestorId = string;

export const visaNetworkTokensRequestorIdSchema: Schema<VisaNetworkTokensRequestorId> =
  s.of<VisaNetworkTokensRequestorId>(s.union([s.string()]));
