import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaMvPull = {
  /**
   * Field name of the array within events that contains the data objects of interest. Can be a
   * path.
   */
  arrayPath?: string;
  /** Extract the K-V pair's key from this field, relative to the data object. */
  relativeKeyPath?: string;
  /** Extract the K-V pair's value from this field, relative to the data object. */
  relativeValuePath?: string;
  /**
   * Optionally, specify a bag as the target for K-V entries. If not specified, these entries are
   * stored on each top-level event.
   */
  targetBagPath?: string;
  /**
   * Toggle this on to remove each original array of data objects after extraction. If toggled off,
   * arrays are retained.
   */
  deleteOriginal?: boolean;
};

export const functionConfSchemaMvPullSchema: Schema<FunctionConfSchemaMvPull> =
  s.object<FunctionConfSchemaMvPull>({
    arrayPath: s.optional(s.string()),
    relativeKeyPath: s.optional(s.string()),
    relativeValuePath: s.optional(s.string()),
    targetBagPath: s.optional(s.string()),
    deleteOriginal: s.optional(s.boolean()),
  });
