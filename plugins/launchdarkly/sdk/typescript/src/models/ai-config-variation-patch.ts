import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { judgeConfigurationSchema, type JudgeConfiguration } from "./judge-configuration.js";
import { messageSchema, type Message } from "./message.js";
import { variationToolPostSchema, type VariationToolPost } from "./variation-tool-post.js";

export type AiConfigVariationPatch = {
  /** Human-readable description of what this patch changes */
  comment?: string;
  /** Description for agent when AI Config is in agent mode. */
  description?: string;
  /** Instructions for agent when AI Config is in agent mode. */
  instructions?: string;
  messages?: Message[];
  model?: Record<string, unknown>;
  modelConfigKey?: string;
  name?: string;
  published?: boolean;
  /** One of 'archived', 'published' */
  state?: string;
  /** List of tools to use for this variation. The latest version of the tool will be used. */
  tools?: VariationToolPost[];
  /** List of tool keys to use for this variation. The latest version of the tool will be used. */
  toolKeys?: string[];
  judgeConfiguration?: JudgeConfiguration;
};

export const aiConfigVariationPatchSchema: Schema<AiConfigVariationPatch> = s.object<AiConfigVariationPatch>({
  comment: s.optional(s.string()),
  description: s.optional(s.string()),
  instructions: s.optional(s.string()),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
  model: s.optional(s.record(s.string(), s.unknown())),
  modelConfigKey: s.optional(s.string()),
  name: s.optional(s.string()),
  published: s.optional(s.boolean()),
  state: s.optional(s.string()),
  tools: s.optional(s.array(s.lazy(() => variationToolPostSchema))),
  toolKeys: s.optional(s.array(s.string())),
  judgeConfiguration: s.optional(s.lazy(() => judgeConfigurationSchema)),
});
