import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Application ID provided for Discover after onboarding to use Network Tokens. */
export type DiscoverNetworkTokensAppId = string;

export const discoverNetworkTokensAppIdSchema: Schema<DiscoverNetworkTokensAppId> =
  s.of<DiscoverNetworkTokensAppId>(s.union([s.string()]));
