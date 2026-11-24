import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Scenario = {
  ScenarioUnspecified: "SCENARIO_UNSPECIFIED",
  Scaling: "SCALING",
  BroadcastHashJoin: "BROADCAST_HASH_JOIN",
  Memory: "MEMORY",
  None: "NONE",
  Auto: "AUTO",
} as const;
export type Scenario = (typeof Scenario)[keyof typeof Scenario] | (string & {});

export const scenarioSchema: EnumSchema<Scenario> = s.enumOf<Scenario>(Scenario);
