import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListAnswersRequest = {
  /** The Answer Board Id to list answers on. */
  boardId?: number;
};

export const listAnswersRequestSchema: Schema<ListAnswersRequest> = s.object<ListAnswersRequest>({
  boardId: s.optional(s.int()),
});
