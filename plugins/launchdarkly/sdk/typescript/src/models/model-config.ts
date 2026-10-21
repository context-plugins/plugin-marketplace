import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigsAccessSchema, type AiConfigsAccess } from "./ai-configs-access.js";

export type ModelConfig = {
  access?: AiConfigsAccess;
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
  /** Whether the model is global */
  global: boolean;
  params?: Record<string, unknown>;
  customParams?: Record<string, unknown>;
  tags: string[];
  version: number;
  /** Cost per input token in USD */
  costPerInputToken?: number;
  /** Cost per output token in USD */
  costPerOutputToken?: number;
  /** Whether the model is restricted */
  isRestricted: boolean;
};

export const modelConfigSchema: Schema<ModelConfig> = s.object<ModelConfig>({
  access: s.optional(s.lazy(() => aiConfigsAccessSchema)),
  name: s.string(),
  key: s.string(),
  id: s.string(),
  icon: s.optional(s.string()),
  provider: s.optional(s.string()),
  global: s.boolean(),
  params: s.optional(s.record(s.string(), s.unknown())),
  customParams: s.optional(s.record(s.string(), s.unknown())),
  tags: s.array(s.string()),
  version: s.int(),
  costPerInputToken: s.optional(s.float64()),
  costPerOutputToken: s.optional(s.float64()),
  isRestricted: s.boolean(),
  _keysMap: {
    access: "_access",
  },
});
