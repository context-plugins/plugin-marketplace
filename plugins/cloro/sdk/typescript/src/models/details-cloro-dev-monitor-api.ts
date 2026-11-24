import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetailsCloroDevMonitorApi = {
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailsCloroDevMonitorApiSchema: Schema<DetailsCloroDevMonitorApi> =
  s.object<DetailsCloroDevMonitorApi>(
    {
      limit: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
