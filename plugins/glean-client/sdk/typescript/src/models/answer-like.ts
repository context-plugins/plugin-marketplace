import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type AnswerLike = {
  user?: Person;
  /** The time the user liked the answer in ISO format (ISO 8601). */
  createTime?: Date;
};

export const answerLikeSchema: Schema<AnswerLike> = s.object<AnswerLike>({
  user: s.optional(s.lazy(() => personSchema)),
  createTime: s.optional(s.dateTime()),
});
