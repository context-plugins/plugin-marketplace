import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkTokenSchema, type NetworkToken } from "./network-token.js";

export type NetworkTokens = {
  /** A list of items returned for this request. */
  items: NetworkToken[];
};

export const networkTokensSchema: Schema<NetworkTokens> = s.object<NetworkTokens>({
  items: s.array(s.lazy(() => networkTokenSchema)),
});
