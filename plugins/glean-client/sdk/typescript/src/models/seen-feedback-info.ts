import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SeenFeedbackInfo = {
  /**
   * The confidence of the user seeing the object is high because they explicitly interacted with it
   * e.g. answer impression in SERP with additional user interaction.
   */
  isExplicit?: boolean;
};

export const seenFeedbackInfoSchema: Schema<SeenFeedbackInfo> = s.object<SeenFeedbackInfo>({
  isExplicit: s.optional(s.boolean()),
});
