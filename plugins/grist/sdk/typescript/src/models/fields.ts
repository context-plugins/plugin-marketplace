import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Fields = {
  /**
   * Column type, by default Any. Ref, RefList and DateTime types requires a postfix, e.g.
   * <code>DateTime:America/New_York</code>, <code>Ref:Users</code>
   */
  type?: Type;
  /** Column label. */
  label?: string;
  /** A python formula, e.g.: <code>$A + Table1.lookupOne(B=$B)</code> */
  formula?: string;
  /**
   * Use "true" to indicate that the column is a formula column. Use "false" for trigger formula
   * column.
   */
  isFormula?: boolean;
  /**
   * A JSON object with widget options, e.g.: <code>{"choices": ["cat", "dog"], "alignment":
   * "right"}</code>
   */
  widgetOptions?: string;
  /**
   * Use "true" to indicate that the column label should not be used as the column identifier. Use
   * "false" to use the label as the identifier.
   */
  untieColIdFromLabel?: boolean;
  /**
   * A number indicating when the column should be recalculated. <ol start='0'><li>On new records or
   * when any field in recalcDeps changes, it's a 'data-cleaning'.</li><li>Never.</li><li>Calculate
   * on new records and on manual updates to any data field.</li></ol>
   */
  recalcWhen?: number;
  /** For Ref and RefList columns, the colRef of a column to display */
  visibleCol?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldsSchema: Schema<Fields> = s.object<Fields>(
  {
    type: s.optional(s.lazy(() => typeSchema)),
    label: s.optional(s.string()),
    formula: s.optional(s.string()),
    isFormula: s.optional(s.boolean()),
    widgetOptions: s.optional(s.string()),
    untieColIdFromLabel: s.optional(s.boolean()),
    recalcWhen: s.optional(s.int()),
    visibleCol: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
