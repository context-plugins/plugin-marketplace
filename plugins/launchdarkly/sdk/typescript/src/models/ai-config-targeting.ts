import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigTargetingDefaultsSchema,
  type AiConfigTargetingDefaults,
} from "./ai-config-targeting-defaults.js";
import {
  aiConfigTargetingEnvironmentSchema,
  type AiConfigTargetingEnvironment,
} from "./ai-config-targeting-environment.js";
import {
  aiConfigTargetingVariationSchema,
  type AiConfigTargetingVariation,
} from "./ai-config-targeting-variation.js";
import {
  aiConfigsExperimentInfoRepSchema,
  type AiConfigsExperimentInfoRep,
} from "./ai-configs-experiment-info-rep.js";

export type AiConfigTargeting = {
  /** Unix timestamp in milliseconds */
  createdAt: number;
  defaults?: AiConfigTargetingDefaults;
  environments: Record<string, AiConfigTargetingEnvironment>;
  experiments: AiConfigsExperimentInfoRep;
  key: string;
  name: string;
  tags: string[];
  variations: AiConfigTargetingVariation[];
  version: number;
};

export const aiConfigTargetingSchema: Schema<AiConfigTargeting> = s.object<AiConfigTargeting>({
  createdAt: s.int(),
  defaults: s.optional(s.lazy(() => aiConfigTargetingDefaultsSchema)),
  environments: s.record(
    s.string(),
    s.lazy(() => aiConfigTargetingEnvironmentSchema),
  ),
  experiments: aiConfigsExperimentInfoRepSchema,
  key: s.string(),
  name: s.string(),
  tags: s.array(s.string()),
  variations: s.array(s.lazy(() => aiConfigTargetingVariationSchema)),
  version: s.int(),
  _keysMap: {
    version: "_version",
  },
});
