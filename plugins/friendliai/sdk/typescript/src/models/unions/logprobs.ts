import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chatLogprobsSchema, type ChatLogprobs } from "../chat-logprobs.js";

export type Logprobs = ChatLogprobs;

export const logprobsSchema: Schema<Logprobs> = s.of<Logprobs>(s.union([s.lazy(() => chatLogprobsSchema)]));
