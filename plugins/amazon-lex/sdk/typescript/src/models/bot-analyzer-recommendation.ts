import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { issueLocationSchema, type IssueLocation } from "./issue-location.js";
import { prioritySchema, type Priority } from "./priority.js";

export type BotAnalyzerRecommendation = {
  issueLocation: IssueLocation;
  /** The priority level of the recommendation. Valid Values: High | Medium | Low */
  priority: Priority;
  /** A detailed description of the identified configuration issue. */
  issueDescription: string;
  /** The recommended solution to address the identified issue. */
  proposedFix: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAnalyzerRecommendationSchema: Schema<BotAnalyzerRecommendation> =
  s.object<BotAnalyzerRecommendation>(
    {
      issueLocation: issueLocationSchema,
      priority: prioritySchema,
      issueDescription: s.string(),
      proposedFix: s.string(),
    },
    { additionalProperties: s.json() },
  );
