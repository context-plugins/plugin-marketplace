import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type PerUserAssistantInsight = {
  person?: Person;
  /** Total number of chat messages sent by this user over the specified time period. */
  numChatMessages?: number;
  /** Total number of summarized items by this user over the specified time period. */
  numSummarizations?: number;
  /** Total number of AI Answers interacted with by this user over the specified time period. */
  numAiAnswers?: number;
  /**
   * Total number of Gleanbot responses marked useful by this user over the specified time period.
   */
  numGleanbotInteractions?: number;
  /** Total number of days this user was active on the Assistant over the specified time period. */
  numDaysActive?: number;
};

export const perUserAssistantInsightSchema: Schema<PerUserAssistantInsight> =
  s.object<PerUserAssistantInsight>({
    person: s.optional(s.lazy(() => personSchema)),
    numChatMessages: s.optional(s.int()),
    numSummarizations: s.optional(s.int()),
    numAiAnswers: s.optional(s.int()),
    numGleanbotInteractions: s.optional(s.int()),
    numDaysActive: s.optional(s.int()),
  });
