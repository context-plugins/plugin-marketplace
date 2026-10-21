import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReviewOutput = {
  id: string;
  kind: string;
  creationDate?: number;
  comment?: string;
  memberId?: string;
  serviceTokenId?: string;
};

export const reviewOutputSchema: Schema<ReviewOutput> = s.object<ReviewOutput>({
  id: s.string(),
  kind: s.string(),
  creationDate: s.optional(s.int()),
  comment: s.optional(s.string()),
  memberId: s.optional(s.string()),
  serviceTokenId: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
});
