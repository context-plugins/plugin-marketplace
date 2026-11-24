import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { answerSchema, type Answer } from "./answer.js";
import {
  status1DeliverdDevCollectionsApiSchema,
  type Status1DeliverdDevCollectionsApi,
} from "./status1-deliverd-dev-collections-api.js";

export type Response = {
  respondent: string;
  status: Status1DeliverdDevCollectionsApi;
  submittedAt: string | null;
  answers: Answer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    respondent: s.string(),
    status: status1DeliverdDevCollectionsApiSchema,
    submittedAt: s.nullable(s.string()),
    answers: s.array(s.lazy(() => answerSchema)),
  },
  { additionalProperties: s.json() },
);
