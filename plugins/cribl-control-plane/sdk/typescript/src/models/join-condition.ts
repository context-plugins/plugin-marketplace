import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JoinCondition = {
  /** The field name to join on, on the left side. */
  leftFieldName: string;
  /**
   * The field name on the right side of the data, i.e. the stage results, that we are joining with
   */
  rightFieldName: string;
};

export const joinConditionSchema: Schema<JoinCondition> = s.object<JoinCondition>({
  leftFieldName: s.string(),
  rightFieldName: s.string(),
});
