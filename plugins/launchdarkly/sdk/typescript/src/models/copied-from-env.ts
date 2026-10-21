import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CopiedFromEnv = {
  /** Key of feature flag copied */
  key: string;
  /** Version of feature flag copied */
  version?: number;
};

export const copiedFromEnvSchema: Schema<CopiedFromEnv> = s.object<CopiedFromEnv>({
  key: s.string(),
  version: s.optional(s.int()),
});
