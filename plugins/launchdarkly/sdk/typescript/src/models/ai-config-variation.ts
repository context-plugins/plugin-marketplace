import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { judgeConfigurationSchema, type JudgeConfiguration } from "./judge-configuration.js";
import { messageSchema, type Message } from "./message.js";
import { parentLinkSchema, type ParentLink } from "./parent-link.js";
import { variationToolSchema, type VariationTool } from "./variation-tool.js";

export type AiConfigVariation = {
  links?: ParentLink;
  color?: string;
  comment?: string;
  /** Returns the description for the agent. This is only returned for agent variations. */
  description?: string;
  /** Returns the instructions for the agent. This is only returned for agent variations. */
  instructions?: string;
  key: string;
  id: string;
  messages?: Message[];
  model: Record<string, unknown>;
  modelConfigKey?: string;
  name: string;
  createdAt: number;
  version: number;
  state?: string;
  archivedAt?: number;
  publishedAt?: number;
  tools?: VariationTool[];
  judgeConfiguration?: JudgeConfiguration;
  judgingConfigKeys?: string[];
};

export const aiConfigVariationSchema: Schema<AiConfigVariation> = s.object<AiConfigVariation>({
  links: s.optional(s.lazy(() => parentLinkSchema)),
  color: s.optional(s.string()),
  comment: s.optional(s.string()),
  description: s.optional(s.string()),
  instructions: s.optional(s.string()),
  key: s.string(),
  id: s.string(),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
  model: s.record(s.string(), s.unknown()),
  modelConfigKey: s.optional(s.string()),
  name: s.string(),
  createdAt: s.int(),
  version: s.int(),
  state: s.optional(s.string()),
  archivedAt: s.optional(s.int()),
  publishedAt: s.optional(s.int()),
  tools: s.optional(s.array(s.lazy(() => variationToolSchema))),
  judgeConfiguration: s.optional(s.lazy(() => judgeConfigurationSchema)),
  judgingConfigKeys: s.optional(s.array(s.string())),
  _keysMap: {
    links: "_links",
    id: "_id",
    archivedAt: "_archivedAt",
    publishedAt: "_publishedAt",
  },
});
