import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detectionRules1Schema, type DetectionRules1 } from "./detection-rules1.js";

export type PipelineFunctionDetectionRules = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>detection_rules</code> @default "detection_rules" */
  id?: "detection_rules";
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
  conf: DetectionRules1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionDetectionRulesSchema: Schema<PipelineFunctionDetectionRules> =
  s.object<PipelineFunctionDetectionRules>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("detection_rules"), "detection_rules"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: detectionRules1Schema,
    groupId: s.optional(s.string()),
  });
