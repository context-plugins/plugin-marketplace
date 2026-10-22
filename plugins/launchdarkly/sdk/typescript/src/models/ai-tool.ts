import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigsAccessSchema, type AiConfigsAccess } from "./ai-configs-access.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";
import { aiConfigMaintainerSchema, type AiConfigMaintainer } from "./unions/ai-config-maintainer.js";

export type AiTool = {
  key: string;
  access?: AiConfigsAccess;
  /** The location and content type of related resources */
  links?: ParentAndSelfLinks;
  maintainer?: AiConfigMaintainer;
  description?: string;
  /** JSON Schema defining the tool's parameters for LLM consumption */
  schema: Record<string, unknown>;
  /** Custom metadata and configuration for application-level use (not sent to LLM) */
  customParameters?: Record<string, unknown>;
  version: number;
  createdAt: number;
};

export const aiToolSchema: Schema<AiTool> = s.object<AiTool>({
  key: s.string(),
  access: s.optional(s.lazy(() => aiConfigsAccessSchema)),
  links: s.optional(s.lazy(() => parentAndSelfLinksSchema)),
  maintainer: s.optional(s.lazy(() => aiConfigMaintainerSchema)),
  description: s.optional(s.string()),
  schema: s.record(s.string(), s.unknown()),
  customParameters: s.optional(s.record(s.string(), s.unknown())),
  version: s.int(),
  createdAt: s.int(),
  _keysMap: {
    access: "_access",
    links: "_links",
    maintainer: "_maintainer",
  },
});
