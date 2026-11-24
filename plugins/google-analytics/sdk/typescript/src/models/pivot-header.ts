import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pivotDimensionHeaderSchema, type PivotDimensionHeader } from "./pivot-dimension-header.js";

/** Dimensions' values in a single pivot. */
export type PivotHeader = {
  /**
   * The cardinality of the pivot. The total number of rows for this pivot's fields regardless of
   * how the parameters `offset` and `limit` are specified in the request.
   */
  rowCount?: number;
  /** The size is the same as the cardinality of the corresponding dimension combinations. */
  pivotDimensionHeaders?: PivotDimensionHeader[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pivotHeaderSchema: Schema<PivotHeader> = s.object<PivotHeader>(
  {
    rowCount: s.optional(s.int()),
    pivotDimensionHeaders: s.optional(s.array(s.lazy(() => pivotDimensionHeaderSchema))),
  },
  { additionalProperties: s.json() },
);
