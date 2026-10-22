import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagPrerequisitePost = {
  /** Flag key of the prerequisite flag */
  key: string;
  /** ID of a variation of the prerequisite flag */
  variationId: string;
};

export const flagPrerequisitePostSchema: Schema<FlagPrerequisitePost> = s.object<FlagPrerequisitePost>({
  key: s.string(),
  variationId: s.string(),
});
