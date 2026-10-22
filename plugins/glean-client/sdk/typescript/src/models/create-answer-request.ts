import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerCreationDataSchema, type AnswerCreationData } from "./answer-creation-data.js";

export type CreateAnswerRequest = {
  data: AnswerCreationData;
};

export const createAnswerRequestSchema: Schema<CreateAnswerRequest> = s.object<CreateAnswerRequest>({
  data: answerCreationDataSchema,
});
