import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaTrimTimestamp1 = {
  /**
   * Name of field in which to save the timestamp. (If empty, timestamp will not be saved to a
   * field.)
   */
  field?: string;
};

export const functionConfSchemaTrimTimestamp1Schema: Schema<FunctionConfSchemaTrimTimestamp1> =
  s.object<FunctionConfSchemaTrimTimestamp1>({
    field: s.optional(s.string()),
  });
