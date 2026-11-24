import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { askAnswerSchema, type AskAnswer } from "../ask-answer.js";
import { askFailureSchema, type AskFailure } from "../ask-failure.js";

/** Either an answer or a failure. */
export type AskResponse1 = AskAnswer | AskFailure;

export const askResponse1Schema: Schema<AskResponse1> = s.of<AskResponse1>(
  s.union([s.lazy(() => askAnswerSchema), s.lazy(() => askFailureSchema)]),
);
