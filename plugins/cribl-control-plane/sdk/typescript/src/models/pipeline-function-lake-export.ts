import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lakeExportConfigurationSchema, type LakeExportConfiguration } from "./lake-export-configuration.js";

export type PipelineFunctionLakeExport = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>lake_export</code> @default "lake_export" */
  id?: "lake_export";
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
  conf: LakeExportConfiguration;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionLakeExportSchema: Schema<PipelineFunctionLakeExport> =
  s.object<PipelineFunctionLakeExport>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("lake_export"), "lake_export"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: lakeExportConfigurationSchema,
    groupId: s.optional(s.string()),
  });
