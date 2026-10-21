import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind1Schema, type Kind1 } from "./kind1.js";

export type ReviewResponse = {
  /** The approval request ID */
  id: string;
  /** The type of review action to take */
  kind: Kind1;
  creationDate?: number;
  /** A comment describing the approval response */
  comment?: string;
  /** ID of account member that reviewed request */
  memberId?: string;
  /** ID of account service token that reviewed request */
  serviceTokenId?: string;
};

export const reviewResponseSchema: Schema<ReviewResponse> = s.object<ReviewResponse>({
  id: s.string(),
  kind: kind1Schema,
  creationDate: s.optional(s.int()),
  comment: s.optional(s.string()),
  memberId: s.optional(s.string()),
  serviceTokenId: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
});
