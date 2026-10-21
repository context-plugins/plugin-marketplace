import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callResultSaveMappingSchema, type CallResultSaveMapping } from "./call-result-save-mapping.js";

/** Deterministic result-capture configuration for a call action's tool response. */
export type CallResult = {
  /** Field mappings extracted from the tool response into workflow state. */
  save?: CallResultSaveMapping[];
};

export const callResultSchema: Schema<CallResult> = s.object<CallResult>({
  save: s.optional(s.array(s.lazy(() => callResultSaveMappingSchema))),
});
