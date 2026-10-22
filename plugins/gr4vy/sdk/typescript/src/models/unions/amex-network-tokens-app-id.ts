import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Application ID provided for American Express after onboarding to use Network Tokens. */
export type AmexNetworkTokensAppId = string;

export const amexNetworkTokensAppIdSchema: Schema<AmexNetworkTokensAppId> = s.of<AmexNetworkTokensAppId>(
  s.union([s.string()]),
);
