import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1OracleTranslationRequest = {
  resourceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1OracleTranslationRequestSchema: Schema<V1OracleTranslationRequest> =
  s.object<V1OracleTranslationRequest>(
    {
      resourceId: s.optional(s.string()),
      _keysMap: {
        resourceId: "resource_id",
      },
    },
    { additionalProperties: s.json() },
  );
