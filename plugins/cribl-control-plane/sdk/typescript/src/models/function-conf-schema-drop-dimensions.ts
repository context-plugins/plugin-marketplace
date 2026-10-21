import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaDropDimensions = {
  /**
   * The time span of the tumbling window for aggregating events. Must be a valid time string (such
   * as 10s).
   */
  timeWindow?: string;
  /**
   * One or more dimensions to be dropped. Supports wildcard expressions. Warning: Using wildcard
   * '*' causes all dimensions in the event to be dropped.
   */
  dropDimensions?: string[];
  /**
   * Flush aggregations when an input stream is closed. If disabled, aggregations are flushed based
   * on Time Window Settings instead.
   */
  flushOnInputClose?: boolean;
};

export const functionConfSchemaDropDimensionsSchema: Schema<FunctionConfSchemaDropDimensions> =
  s.object<FunctionConfSchemaDropDimensions>({
    timeWindow: s.optional(s.string()),
    dropDimensions: s.optional(s.array(s.string())),
    flushOnInputClose: s.optional(s.boolean()),
  });
