import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1OracleTaxJarLookupRequest = {
  resourceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1OracleTaxJarLookupRequestSchema: Schema<V1OracleTaxJarLookupRequest> =
  s.object<V1OracleTaxJarLookupRequest>(
    {
      resourceId: s.optional(s.string()),
      _keysMap: {
        resourceId: "resource_id",
      },
    },
    { additionalProperties: s.json() },
  );
