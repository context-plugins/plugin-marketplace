import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A variant, with the name of the agent it runs resolved for display. */
export type DaoExperimentVariantDetail = {
  /** The internal ID of the variant */
  id: number;
  /** The name of the variant, which is the grouping key in reports */
  name: string;
  /**
   * The percentage of the channel target's traffic this variant answers. The weights of an
   * experiment's variants must add up to 100. (E.g., two variants with a weight of 50 each split
   * the traffic evenly.)
   */
  weight: number;
  /** Whether this is the reference variant the others are measured against */
  isControl: boolean;
  /** The agent this variant runs */
  agentId: number;
  /** The name of that agent */
  agentName: string;
};

export const daoExperimentVariantDetailSchema: Schema<DaoExperimentVariantDetail> =
  s.object<DaoExperimentVariantDetail>({
    id: s.int(),
    name: s.string(),
    weight: s.int(),
    isControl: s.boolean(),
    agentId: s.int(),
    agentName: s.string(),
    _keysMap: {
      isControl: "is_control",
      agentId: "agent_id",
      agentName: "agent_name",
    },
  });
