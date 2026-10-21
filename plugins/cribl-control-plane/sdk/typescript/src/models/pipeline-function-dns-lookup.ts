import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaDnsLookup1Schema,
  type FunctionConfSchemaDnsLookup1,
} from "./function-conf-schema-dns-lookup1.js";

export type PipelineFunctionDnsLookup = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /** Identifier of the Function. Always <code>dns_lookup</code> @default "dns_lookup" */
  id?: "dns_lookup";
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
  conf: FunctionConfSchemaDnsLookup1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionDnsLookupSchema: Schema<PipelineFunctionDnsLookup> =
  s.object<PipelineFunctionDnsLookup>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("dns_lookup"), "dns_lookup"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaDnsLookup1Schema,
    groupId: s.optional(s.string()),
  });
