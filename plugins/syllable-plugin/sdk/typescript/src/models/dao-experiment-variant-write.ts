import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * One variant of an experiment as it is written.
 *
 * Variants are always written as a complete set, because a weight only means anything next to the
 * other weights, so there is no model for writing one on its own.
 */
export type DaoExperimentVariantWrite = {
  /** The name of the variant, unique within the experiment */
  name: string;
  /**
   * The percentage of the channel target's traffic this variant answers. The weights of an
   * experiment's variants must add up to 100. (E.g., two variants with a weight of 50 each split
   * the traffic evenly.)
   */
  weight: number;
  /** Whether this is the reference variant the others are measured against @default false */
  isControl?: boolean;
  /** The agent this variant runs */
  agentId: number;
};

export const daoExperimentVariantWriteSchema: Schema<DaoExperimentVariantWrite> =
  s.object<DaoExperimentVariantWrite>({
    name: s.string(),
    weight: s.int(),
    isControl: s.defaulted(s.boolean(), false),
    agentId: s.int(),
    _keysMap: {
      isControl: "is_control",
      agentId: "agent_id",
    },
  });
