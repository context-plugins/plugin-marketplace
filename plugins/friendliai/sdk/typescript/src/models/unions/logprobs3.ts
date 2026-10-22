import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { completionsLogprobsSchema, type CompletionsLogprobs } from "../completions-logprobs.js";

export type Logprobs3 = CompletionsLogprobs;

export const logprobs3Schema: Schema<Logprobs3> = s.of<Logprobs3>(
  s.union([s.lazy(() => completionsLogprobsSchema)]),
);
