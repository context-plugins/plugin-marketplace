import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaTrimTimestamp = {
  /**
   * Name of field in which to save the timestamp. (If empty, timestamp will not be saved to a
   * field.)
   */
  field?: string;
};

export const functionConfSchemaTrimTimestampSchema: Schema<FunctionConfSchemaTrimTimestamp> =
  s.object<FunctionConfSchemaTrimTimestamp>({
    field: s.optional(s.string()),
  });
