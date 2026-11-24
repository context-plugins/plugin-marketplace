import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authoritySchema, type Authority } from "./authority.js";
import { blockerSchema, type Blocker } from "./blocker.js";
import { scoreSchema, type Score } from "./score.js";

export type ApiV1TasksGovernanceGateResponse = {
  allowed: boolean;
  reason: string;
  missingControls: string[];
  blockers: Blocker[];
  scores: Score[];
  taskId: string;
  authority: Authority | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TasksGovernanceGateResponseSchema: Schema<ApiV1TasksGovernanceGateResponse> =
  s.object<ApiV1TasksGovernanceGateResponse>(
    {
      allowed: s.boolean(),
      reason: s.string(),
      missingControls: s.array(s.string()),
      blockers: s.array(s.lazy(() => blockerSchema)),
      scores: s.array(s.lazy(() => scoreSchema)),
      taskId: s.string(),
      authority: s.nullable(s.lazy(() => authoritySchema)),
    },
    { additionalProperties: s.json() },
  );
