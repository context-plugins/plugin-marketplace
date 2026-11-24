import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentInternalSchema, agentSchema, type Agent } from "./agent.js";
import { Category, categorySchema } from "./category.js";

export type FeedbackRequest = {
  message: string;
  intent?: string;
  /** @default Category.Other */
  category?: Category;
  requestId?: string;
  agent?: Agent;
};

const feedbackRequestProperties: s.Shape<FeedbackRequest> = {
  message: s.string(),
  intent: s.optional(s.string()),
  category: s.defaulted(categorySchema, Category.Other),
  requestId: s.optional(s.string()),
  agent: s.optional(s.lazy(() => agentInternalSchema)),
  _keysMap: {
    requestId: "request_id",
  },
};

export const feedbackRequestInternalSchema: Schema<FeedbackRequest> =
  s.object<FeedbackRequest>(feedbackRequestProperties);

export const feedbackRequestSchema: Schema<FeedbackRequest> = s.lazySchema(() =>
  s.object<FeedbackRequest>({
    ...feedbackRequestProperties,
    message: s.string().check(s.minLength(1), s.maxLength(4000)),
    intent: s.optional(s.string().check(s.maxLength(2000))),
    requestId: s.optional(s.string().check(s.maxLength(256))),
    agent: s.optional(s.lazy(() => agentSchema)),
  }),
);
