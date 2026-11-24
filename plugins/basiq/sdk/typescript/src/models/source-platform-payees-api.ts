import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SourcePlatformPayeesApi = {
  /** String indicating which URI query parameter caused the error. */
  parameter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourcePlatformPayeesApiSchema: Schema<SourcePlatformPayeesApi> =
  s.object<SourcePlatformPayeesApi>(
    {
      parameter: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
