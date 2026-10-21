import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { judgeConfigurationSchema, type JudgeConfiguration } from "./judge-configuration.js";
import { messageSchema, type Message } from "./message.js";
import { variationToolPostSchema, type VariationToolPost } from "./variation-tool-post.js";

export type AiConfigVariationPost = {
  /** Human-readable description of this variation */
  comment?: string;
  /** Returns the description for the agent. This is only returned for agent variations. */
  description?: string;
  /** Returns the instructions for the agent. This is only returned for agent variations. */
  instructions?: string;
  key: string;
  messages?: Message[];
  model?: Record<string, unknown>;
  name: string;
  modelConfigKey?: string;
  /** List of tools to use for this variation. The latest version of the tool will be used. */
  tools?: VariationToolPost[];
  /** List of tool keys to use for this variation. The latest version of the tool will be used. */
  toolKeys?: string[];
  judgeConfiguration?: JudgeConfiguration;
};

export const aiConfigVariationPostSchema: Schema<AiConfigVariationPost> = s.object<AiConfigVariationPost>({
  comment: s.optional(s.string()),
  description: s.optional(s.string()),
  instructions: s.optional(s.string()),
  key: s.string(),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
  model: s.optional(s.record(s.string(), s.unknown())),
  name: s.string(),
  modelConfigKey: s.optional(s.string()),
  tools: s.optional(s.array(s.lazy(() => variationToolPostSchema))),
  toolKeys: s.optional(s.array(s.string())),
  judgeConfiguration: s.optional(s.lazy(() => judgeConfigurationSchema)),
});
