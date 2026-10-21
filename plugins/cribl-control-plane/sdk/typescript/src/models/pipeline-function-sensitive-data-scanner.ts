import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaSensitiveDataScannerSchema,
  type FunctionConfSchemaSensitiveDataScanner,
} from "./function-conf-schema-sensitive-data-scanner.js";

export type PipelineFunctionSensitiveDataScanner = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /**
   * Identifier of the Function. Always <code>sensitive_data_scanner</code>
   *
   * @default "sensitive_data_scanner"
   */
  id?: "sensitive_data_scanner";
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
  conf: FunctionConfSchemaSensitiveDataScanner;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionSensitiveDataScannerSchema: Schema<PipelineFunctionSensitiveDataScanner> =
  s.object<PipelineFunctionSensitiveDataScanner>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("sensitive_data_scanner"), "sensitive_data_scanner"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaSensitiveDataScannerSchema,
    groupId: s.optional(s.string()),
  });
