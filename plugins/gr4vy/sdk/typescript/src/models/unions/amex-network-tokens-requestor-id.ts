import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Requestor ID provided for American Express after onboarding to use Network Tokens. */
export type AmexNetworkTokensRequestorId = string;

export const amexNetworkTokensRequestorIdSchema: Schema<AmexNetworkTokensRequestorId> =
  s.of<AmexNetworkTokensRequestorId>(s.union([s.string()]));
