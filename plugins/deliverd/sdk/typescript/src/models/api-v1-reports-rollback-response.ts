import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsRollbackResponse = {
  ok: boolean;
  version: number;
  versionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsRollbackResponseSchema: Schema<ApiV1ReportsRollbackResponse> =
  s.object<ApiV1ReportsRollbackResponse>(
    {
      ok: s.boolean(),
      version: s.float64(),
      versionId: s.string(),
    },
    { additionalProperties: s.json() },
  );
