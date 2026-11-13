import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsProposalsApplyResponse = {
  proposalId?: number;
  /** Summary of changes applied */
  changes?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsProposalsApplyResponseSchema: Schema<DocsProposalsApplyResponse> =
  s.object<DocsProposalsApplyResponse>(
    {
      proposalId: s.optional(s.int()),
      changes: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
