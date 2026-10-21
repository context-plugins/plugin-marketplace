import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Requestor ID provided for Mastercard after onboarding to use Network Tokens. */
export type MastercardNetworkTokensRequestorId = string;

export const mastercardNetworkTokensRequestorIdSchema: Schema<MastercardNetworkTokensRequestorId> =
  s.of<MastercardNetworkTokensRequestorId>(s.union([s.string()]));
