import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindHudPlatformQaAgentsApi = {
  ScenarioSetup: "scenario_setup",
  ScenarioEvaluate: "scenario_evaluate",
} as const;
export type KindHudPlatformQaAgentsApi =
  | (typeof KindHudPlatformQaAgentsApi)[keyof typeof KindHudPlatformQaAgentsApi]
  | (string & {});

export const kindHudPlatformQaAgentsApiSchema: EnumSchema<KindHudPlatformQaAgentsApi> =
  s.enumOf<KindHudPlatformQaAgentsApi>(KindHudPlatformQaAgentsApi);
