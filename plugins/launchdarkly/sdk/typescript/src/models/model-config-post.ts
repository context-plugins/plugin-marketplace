import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ModelConfigPost = {
  /** Human readable name of the model */
  name: string;
  /** Unique key for the model */
  key: string;
  /** Identifier for the model, for use with third party providers */
  id: string;
  /** Icon for the model */
  icon?: string;
  /** Provider for the model */
  provider?: string;
  params?: Record<string, unknown>;
  customParams?: Record<string, unknown>;
  tags?: string[];
  /** Cost per input token in USD */
  costPerInputToken?: number;
  /** Cost per output token in USD */
  costPerOutputToken?: number;
};

export const modelConfigPostSchema: Schema<ModelConfigPost> = s.object<ModelConfigPost>({
  name: s.string(),
  key: s.string(),
  id: s.string(),
  icon: s.optional(s.string()),
  provider: s.optional(s.string()),
  params: s.optional(s.record(s.string(), s.unknown())),
  customParams: s.optional(s.record(s.string(), s.unknown())),
  tags: s.optional(s.array(s.string())),
  costPerInputToken: s.optional(s.float64()),
  costPerOutputToken: s.optional(s.float64()),
});
