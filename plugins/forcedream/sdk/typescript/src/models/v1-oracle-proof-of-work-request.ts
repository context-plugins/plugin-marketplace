import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1OracleProofOfWorkRequest = {
  resourceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1OracleProofOfWorkRequestSchema: Schema<V1OracleProofOfWorkRequest> =
  s.object<V1OracleProofOfWorkRequest>(
    {
      resourceId: s.optional(s.string()),
      _keysMap: {
        resourceId: "resource_id",
      },
    },
    { additionalProperties: s.json() },
  );
