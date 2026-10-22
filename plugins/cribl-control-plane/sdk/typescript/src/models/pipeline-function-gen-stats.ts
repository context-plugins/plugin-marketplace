import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genStatsConfiguration1Schema, type GenStatsConfiguration1 } from "./gen-stats-configuration1.js";

export type PipelineFunctionGenStats = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>gen_stats</code> @default "gen_stats" */
  id?: "gen_stats";
  /** Brief description of the Pipeline function. */
  description?: string;
  /**
   * If <code>true</code>, disable the Pipeline function so that events are not passed through it.
   * Otherwise, <code>false</code>.
   */
  disabled?: boolean;
  /**
   * If <code>true</code>, stop passing events to downstream Pipeline Functions after the Function
   * executes. Otherwise, <code>false</code>.
   */
  final?: boolean;
  /** Configuration specific to the Pipeline Function. */
  conf: GenStatsConfiguration1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionGenStatsSchema: Schema<PipelineFunctionGenStats> =
  s.object<PipelineFunctionGenStats>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("gen_stats"), "gen_stats"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: genStatsConfiguration1Schema,
    groupId: s.optional(s.string()),
  });
