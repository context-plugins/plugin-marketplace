import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PostInsightGroupParams = {
  /** The name of the insight group */
  name: string;
  /** The key of the insight group */
  key: string;
  /** The projectKey to be associated with the insight group */
  projectKey: string;
  /** The environmentKey to be associated with the insight group */
  environmentKey: string;
  /**
   * The application keys to associate with the insight group. If not provided, the insight group
   * will include data from all applications.
   */
  applicationKeys?: string[];
};

export const postInsightGroupParamsSchema: Schema<PostInsightGroupParams> = s.object<PostInsightGroupParams>({
  name: s.string(),
  key: s.string(),
  projectKey: s.string(),
  environmentKey: s.string(),
  applicationKeys: s.optional(s.array(s.string())),
});
