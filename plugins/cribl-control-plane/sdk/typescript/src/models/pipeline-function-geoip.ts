import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { functionConfSchemaGeoipSchema, type FunctionConfSchemaGeoip } from "./function-conf-schema-geoip.js";

export type PipelineFunctionGeoip = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>geoip</code> @default "geoip" */
  id?: "geoip";
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
  conf: FunctionConfSchemaGeoip;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionGeoipSchema: Schema<PipelineFunctionGeoip> = s.object<PipelineFunctionGeoip>({
  filter: s.optional(s.string()),
  id: s.defaulted(s.literal("geoip"), "geoip"),
  description: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  final: s.optional(s.boolean()),
  conf: functionConfSchemaGeoipSchema,
  groupId: s.optional(s.string()),
});
