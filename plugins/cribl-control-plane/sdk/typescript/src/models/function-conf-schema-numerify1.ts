import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { format2Schema, type Format2 } from "./format2.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaNumerify1 = {
  /**
   * Depth to which the Numerify Function will search within a nested event. Depth greater than 5
   * (the default) could decrease performance.
   */
  depth?: number;
  /**
   * Fields to NOT numerify. Takes precedence over 'Include expression' when set. Supports
   * wildcards. A '!' before field name(s) means: numerify all fields EXCEPT these. For syntax
   * details, see [Wildcard
   * Lists](https://docs.cribl.io/stream/introduction-reference/#wildcard-lists).
   */
  ignoreFields?: string[];
  /**
   * Optional JavaScript expression to determine whether a field should be numerified. If left
   * blank, all fields will be numerified. Use the 'name' and 'value' global variables to access
   * fields' names/values. Examples: `value != null`, `name=='fieldname'`. You can access other
   * fields' values via `__e.<fieldName>`.
   */
  filterExpr?: string;
  /** Numeric format to apply after type conversion. */
  format?: Format2;
  /** Number of digits after the decimal point, between 0 and 20. If left blank, defaults to 2. */
  digits?: number;
};

export const functionConfSchemaNumerify1Schema: Schema<FunctionConfSchemaNumerify1> =
  s.object<FunctionConfSchemaNumerify1>({
    depth: s.optional(s.int()),
    ignoreFields: s.optional(s.array(s.string())),
    filterExpr: s.optional(s.string()),
    format: s.optional(s.lazy(() => format2Schema)),
    digits: s.optional(s.float64()),
  });
