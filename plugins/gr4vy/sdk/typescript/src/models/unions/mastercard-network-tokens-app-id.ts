import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Application ID provided for Mastercard after onboarding to use Network Tokens. */
export type MastercardNetworkTokensAppId = string;

export const mastercardNetworkTokensAppIdSchema: Schema<MastercardNetworkTokensAppId> =
  s.of<MastercardNetworkTokensAppId>(s.union([s.string()]));
