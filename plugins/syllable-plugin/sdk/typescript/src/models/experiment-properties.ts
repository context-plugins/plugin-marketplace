import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExperimentProperties = {
  Id: "id",
  Name: "name",
  NameExact: "name_exact",
  Description: "description",
  Status: "status",
  TargetId: "target_id",
  AgentId: "agent_id",
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  StartedAt: "started_at",
  StoppedAt: "stopped_at",
} as const;
export type ExperimentProperties =
  | (typeof ExperimentProperties)[keyof typeof ExperimentProperties]
  | (string & {});

export const experimentPropertiesSchema: EnumSchema<ExperimentProperties> =
  s.enumOf<ExperimentProperties>(ExperimentProperties);
