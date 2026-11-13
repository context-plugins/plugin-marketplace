import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { proposalSchema, type Proposal } from "./proposal.js";

export type DocsProposalsResponse = {
  proposals?: Proposal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsProposalsResponseSchema: Schema<DocsProposalsResponse> = s.object<DocsProposalsResponse>(
  {
    proposals: s.optional(s.array(s.lazy(() => proposalSchema))),
  },
  { additionalProperties: s.json() },
);
