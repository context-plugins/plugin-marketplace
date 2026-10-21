import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Answer2 = {
  questionId: string;
  answerId: string;
};

export const answer2Schema: Schema<Answer2> = s.object<Answer2>({
  questionId: s.string(),
  answerId: s.string(),
});
