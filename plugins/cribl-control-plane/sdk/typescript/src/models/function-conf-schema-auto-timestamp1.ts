import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalTimestampSchema, type AdditionalTimestamp } from "./additional-timestamp.js";
import { defaultTimeSchema, type DefaultTime } from "./default-time.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaAutoTimestamp1 = {
  /** Field to search for a timestamp */
  srcField?: string;
  /** Field to place timestamp in */
  dstField?: string;
  /** Timezone to assign to timestamps without timezone info */
  defaultTimezone?: string;
  /**
   * Expression to use to format time. Current time, as a JavaScript Date object, is in global
   * `time`. You can access other fields' values via __e.<fieldName>.
   */
  timeExpression?: string;
  /** The offset into the string from which to look for a timestamp */
  offset?: number;
  /** Maximum string length at which to look for a timestamp */
  maxLen?: number;
  /** How to set the time field if no timestamp is found */
  defaultTime?: DefaultTime;
  /**
   * The latest timestamp value allowed relative to now, such as +42days. Parsed values after this
   * date will be set to the Default time.
   */
  latestDateAllowed?: string;
  /** UI layout spacer; no effect on event processing. */
  spacer?: string;
  /**
   * The earliest timestamp value allowed relative to now, such as -42years. Parsed values prior to
   * this date will be set to the Default time.
   */
  earliestDateAllowed?: string;
  /** Add regex/strptime pairs to extract additional timestamp formats */
  timestamps?: AdditionalTimestamp[];
};

export const functionConfSchemaAutoTimestamp1Schema: Schema<FunctionConfSchemaAutoTimestamp1> =
  s.object<FunctionConfSchemaAutoTimestamp1>({
    srcField: s.optional(s.string()),
    dstField: s.optional(s.string()),
    defaultTimezone: s.optional(s.string()),
    timeExpression: s.optional(s.string()),
    offset: s.optional(s.float64()),
    maxLen: s.optional(s.float64()),
    defaultTime: s.optional(s.lazy(() => defaultTimeSchema)),
    latestDateAllowed: s.optional(s.string()),
    spacer: s.optional(s.string()),
    earliestDateAllowed: s.optional(s.string()),
    timestamps: s.optional(s.array(s.lazy(() => additionalTimestampSchema))),
  });
