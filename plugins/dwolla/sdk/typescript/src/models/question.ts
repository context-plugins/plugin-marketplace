import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answer1Schema, type Answer1 } from "./answer1.js";

export type Question = {
  id: string;
  text: string;
  answers: Answer1[];
};

export const questionSchema: Schema<Question> = s.object<Question>({
  id: s.string(),
  text: s.string(),
  answers: s.array(s.lazy(() => answer1Schema)),
});
