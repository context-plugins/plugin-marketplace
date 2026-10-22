import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { judgeAttachmentSchema, type JudgeAttachment } from "./judge-attachment.js";

export type JudgeConfiguration = {
  /**
   * List of judges for this variation. When updating, this replaces all existing judge attachments,
   * and if empty, removes all judge attachments.
   */
  judges?: JudgeAttachment[];
};

export const judgeConfigurationSchema: Schema<JudgeConfiguration> = s.object<JudgeConfiguration>({
  judges: s.optional(s.array(s.lazy(() => judgeAttachmentSchema))),
});
