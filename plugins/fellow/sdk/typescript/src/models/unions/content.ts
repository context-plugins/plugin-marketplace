import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { recapActionItemSchema, type RecapActionItem } from "../recap-action-item.js";
import { recapDecisionSchema, type RecapDecision } from "../recap-decision.js";
import { recapKeyMomentSchema, type RecapKeyMoment } from "../recap-key-moment.js";
import { recapTopicSchema, type RecapTopic } from "../recap-topic.js";

export type Content = RecapKeyMoment[] | RecapTopic[] | RecapActionItem[] | RecapDecision[] | string;

export const contentSchema: Schema<Content> = s.of<Content>(
  s.union([
    s.array(s.lazy(() => recapKeyMomentSchema)),
    s.array(s.lazy(() => recapTopicSchema)),
    s.array(s.lazy(() => recapActionItemSchema)),
    s.array(s.lazy(() => recapDecisionSchema)),
    s.string(),
  ]),
);
