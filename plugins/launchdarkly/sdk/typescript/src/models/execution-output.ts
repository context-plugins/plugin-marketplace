import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExecutionOutput = {
  /** The status of the execution of this workflow stage */
  status: string;
  stopDate?: number;
};

export const executionOutputSchema: Schema<ExecutionOutput> = s.object<ExecutionOutput>({
  status: s.string(),
  stopDate: s.optional(s.int()),
});
