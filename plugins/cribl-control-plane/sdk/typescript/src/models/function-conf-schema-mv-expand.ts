import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bagExpansionModeSchema, type BagExpansionMode } from "./bag-expansion-mode.js";

export type FunctionConfSchemaMvExpand = {
  /** Array of property-/field-names to expand */
  sourceFields?: string[];
  /** stores the value as new target field name */
  targetNames?: string[];
  /** max. number of rows generated out of every source events */
  rowLimit?: number;
  /** name of an optional index property generated into the output */
  itemIndexName?: string;
  /** decides if bag-values are expanded to bags or arrays */
  bagExpansionMode?: BagExpansionMode;
};

export const functionConfSchemaMvExpandSchema: Schema<FunctionConfSchemaMvExpand> =
  s.object<FunctionConfSchemaMvExpand>({
    sourceFields: s.optional(s.array(s.string())),
    targetNames: s.optional(s.array(s.string())),
    rowLimit: s.optional(s.float64()),
    itemIndexName: s.optional(s.string()),
    bagExpansionMode: s.optional(s.lazy(() => bagExpansionModeSchema)),
  });
