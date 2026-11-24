import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1OracleLeadScoreRequest = {
  resourceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1OracleLeadScoreRequestSchema: Schema<V1OracleLeadScoreRequest> =
  s.object<V1OracleLeadScoreRequest>(
    {
      resourceId: s.optional(s.string()),
      _keysMap: {
        resourceId: "resource_id",
      },
    },
    { additionalProperties: s.json() },
  );
