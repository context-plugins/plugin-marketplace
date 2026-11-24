import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AutomationsCopyRequest = {
  sourceTeamId: string;
  targetTeamId: string;
  flowId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AutomationsCopyRequestSchema: Schema<ApiV1AutomationsCopyRequest> =
  s.object<ApiV1AutomationsCopyRequest>(
    {
      sourceTeamId: s.string(),
      targetTeamId: s.string(),
      flowId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
