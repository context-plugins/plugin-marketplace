import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProblemDetailError = {
  type: string;
  title: string;
  status: number;
  detail?: string;
  instance?: string;
  code?: string;
};

export const problemDetailErrorSchema: Schema<ProblemDetailError> = s.object<ProblemDetailError>({
  type: s.string(),
  title: s.string(),
  status: s.int(),
  detail: s.optional(s.string()),
  instance: s.optional(s.string()),
  code: s.optional(s.string()),
});
