import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigTargetingEnvironmentFallthroughSchema,
  type AiConfigTargetingEnvironmentFallthrough,
} from "./ai-config-targeting-environment-fallthrough.js";
import {
  aiConfigTargetingEnvironmentRuleSchema,
  type AiConfigTargetingEnvironmentRule,
} from "./ai-config-targeting-environment-rule.js";
import {
  aiConfigTargetingEnvironmentTargetSchema,
  type AiConfigTargetingEnvironmentTarget,
} from "./ai-config-targeting-environment-target.js";

export type AiConfigTargetingEnvironment = {
  contextTargets: AiConfigTargetingEnvironmentTarget[];
  enabled: boolean;
  fallthrough: AiConfigTargetingEnvironmentFallthrough;
  lastModified: number;
  offVariation?: number;
  rules: AiConfigTargetingEnvironmentRule[];
  targets: AiConfigTargetingEnvironmentTarget[];
  trackEvents: boolean;
  trackEventsFallthrough: boolean;
  environmentName: string;
  version: number;
};

export const aiConfigTargetingEnvironmentSchema: Schema<AiConfigTargetingEnvironment> =
  s.object<AiConfigTargetingEnvironment>({
    contextTargets: s.array(s.lazy(() => aiConfigTargetingEnvironmentTargetSchema)),
    enabled: s.boolean(),
    fallthrough: aiConfigTargetingEnvironmentFallthroughSchema,
    lastModified: s.int(),
    offVariation: s.optional(s.int()),
    rules: s.array(s.lazy(() => aiConfigTargetingEnvironmentRuleSchema)),
    targets: s.array(s.lazy(() => aiConfigTargetingEnvironmentTargetSchema)),
    trackEvents: s.boolean(),
    trackEventsFallthrough: s.boolean(),
    environmentName: s.string(),
    version: s.int(),
    _keysMap: {
      environmentName: "_environmentName",
      version: "_version",
    },
  });
