import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VciOfferInfoRequest = {
  /** The identifier of the credential offer. */
  identifier?: string;
};

export const vciOfferInfoRequestSchema: Schema<VciOfferInfoRequest> = s.object<VciOfferInfoRequest>({
  identifier: s.optional(s.string()),
});
