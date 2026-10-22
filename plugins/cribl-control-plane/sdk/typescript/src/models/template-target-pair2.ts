import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateTargetPair2 = {
  /** ID of the notification template to use */
  templateId: string;
  /** ID of the notification target (output) */
  targetId: string;
};

export const templateTargetPair2Schema: Schema<TemplateTargetPair2> = s.object<TemplateTargetPair2>({
  templateId: s.string(),
  targetId: s.string(),
});
