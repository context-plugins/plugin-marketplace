import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchEngineExportConfigurationSchema,
  type SearchEngineExportConfiguration,
} from "./search-engine-export-configuration.js";

export type PipelineFunctionSearchEngineExport = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /**
   * Identifier of the Function. Always <code>search_engine_export</code>
   *
   * @default "search_engine_export"
   */
  id?: "search_engine_export";
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
  conf: SearchEngineExportConfiguration;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionSearchEngineExportSchema: Schema<PipelineFunctionSearchEngineExport> =
  s.object<PipelineFunctionSearchEngineExport>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("search_engine_export"), "search_engine_export"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: searchEngineExportConfigurationSchema,
    groupId: s.optional(s.string()),
  });
