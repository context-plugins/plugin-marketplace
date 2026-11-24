import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamMemberFailureSchema, type TeamMemberFailure } from "./team-member-failure.js";

/** Memberships the change applied to, and why it did not apply to the rest. */
export type TeamMemberBatchResponse = {
  succeeded: number[];
  failed: TeamMemberFailure[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamMemberBatchResponseSchema: Schema<TeamMemberBatchResponse> =
  s.object<TeamMemberBatchResponse>(
    {
      succeeded: s.array(s.int()),
      failed: s.array(s.lazy(() => teamMemberFailureSchema)),
    },
    { additionalProperties: s.json() },
  );
