import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidateProjectCacheInput = {
  /** The name of the CodeBuild build project that the cache is reset for. */
  projectName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidateProjectCacheInputSchema: Schema<InvalidateProjectCacheInput> =
  s.object<InvalidateProjectCacheInput>(
    {
      projectName: s.string(),
    },
    { additionalProperties: s.json() },
  );
