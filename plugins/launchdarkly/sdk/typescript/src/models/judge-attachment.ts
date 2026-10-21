import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JudgeAttachment = {
  /** Key of the judge AI Config */
  judgeConfigKey: string;
  /** Sampling rate for this judge attachment (0.0 to 1.0) */
  samplingRate: number;
};

export const judgeAttachmentSchema: Schema<JudgeAttachment> = s.object<JudgeAttachment>({
  judgeConfigKey: s.string(),
  samplingRate: s.float64(),
});
