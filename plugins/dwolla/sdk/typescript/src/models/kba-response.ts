import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links28Schema, type Links28 } from "./links28.js";
import { questionSchema, type Question } from "./question.js";

export type KbaResponse = {
  links: Links28;
  id: string;
  questions: Question[];
};

export const kbaResponseSchema: Schema<KbaResponse> = s.object<KbaResponse>({
  links: links28Schema,
  id: s.string(),
  questions: s.array(s.lazy(() => questionSchema)),
  _keysMap: {
    links: "_links",
  },
});
