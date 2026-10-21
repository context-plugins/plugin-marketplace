import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { structuredResultSchema, type StructuredResult } from "./structured-result.js";

export type Result = {
  /** An array of entities in the work graph retrieved via a data request. */
  structuredResults?: StructuredResult[];
  /**
   * An opaque token that represents this particular result in this particular query. To be used for
   * /feedback reporting.
   */
  trackingToken?: string;
};

export const resultSchema: Schema<Result> = s.object<Result>({
  structuredResults: s.optional(s.array(s.lazy(() => structuredResultSchema))),
  trackingToken: s.optional(s.string()),
});
