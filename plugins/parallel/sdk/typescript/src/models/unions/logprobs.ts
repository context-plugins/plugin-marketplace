import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { choiceLogprobsSchema, type ChoiceLogprobs } from "../choice-logprobs.js";

export type Logprobs = ChoiceLogprobs;

export const logprobsSchema: Schema<Logprobs> = s.of<Logprobs>(s.union([s.lazy(() => choiceLogprobsSchema)]));
