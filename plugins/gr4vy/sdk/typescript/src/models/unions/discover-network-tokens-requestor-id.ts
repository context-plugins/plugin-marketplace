import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Requestor ID provided for Discover after onboarding to use Network Tokens. */
export type DiscoverNetworkTokensRequestorId = string;

export const discoverNetworkTokensRequestorIdSchema: Schema<DiscoverNetworkTokensRequestorId> =
  s.of<DiscoverNetworkTokensRequestorId>(s.union([s.string()]));
