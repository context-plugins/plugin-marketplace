import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type TokenFailRequest = {
  /** The ticket issued from Authlete `/auth/token` API. */
  ticket: string;
  /** The reason of the failure of the token request. */
  reason: Reason1;
};

export const tokenFailRequestSchema: Schema<TokenFailRequest> = s.object<TokenFailRequest>({
  ticket: s.string(),
  reason: reason1Schema,
});
