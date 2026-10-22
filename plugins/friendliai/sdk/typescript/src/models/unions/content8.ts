import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesReasoningTextSchema, type ResponsesReasoningText } from "../responses-reasoning-text.js";

/** Reasoning text content. */
export type Content8 = ResponsesReasoningText[];

export const content8Schema: Schema<Content8> = s.of<Content8>(
  s.union([s.array(s.lazy(() => responsesReasoningTextSchema))]),
);
