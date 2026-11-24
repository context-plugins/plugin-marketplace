import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SpaceGroupCreateRequest = {
  /** name of space group */
  name: string;
  /** whether AI will be enabled */
  isLlmEnabled?: boolean;
  /** whether review system will be enabled */
  isReviewSystemEnabled?: boolean;
  /** whether branching will be enabled */
  isBranchingSystemEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spaceGroupCreateRequestSchema: Schema<SpaceGroupCreateRequest> =
  s.object<SpaceGroupCreateRequest>(
    {
      name: s.string(),
      isLlmEnabled: s.optional(s.boolean()),
      isReviewSystemEnabled: s.optional(s.boolean()),
      isBranchingSystemEnabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
