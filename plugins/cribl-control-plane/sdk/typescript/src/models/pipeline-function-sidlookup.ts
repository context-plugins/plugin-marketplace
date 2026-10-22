import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaSidlookup1Schema,
  type FunctionConfSchemaSidlookup1,
} from "./function-conf-schema-sidlookup1.js";

export type PipelineFunctionSidlookup = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>sidlookup</code> @default "sidlookup" */
  id?: "sidlookup";
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
  conf: FunctionConfSchemaSidlookup1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionSidlookupSchema: Schema<PipelineFunctionSidlookup> =
  s.object<PipelineFunctionSidlookup>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("sidlookup"), "sidlookup"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaSidlookup1Schema,
    groupId: s.optional(s.string()),
  });
