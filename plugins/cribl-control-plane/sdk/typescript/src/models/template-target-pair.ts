import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateTargetPair = {
  /** The <code>id</code> of the Notification target to send the Notification to. */
  targetId: string;
  /** The <code>id</code> of the Notification template to use. */
  templateId: string;
};

export const templateTargetPairSchema: Schema<TemplateTargetPair> = s.object<TemplateTargetPair>({
  targetId: s.string(),
  templateId: s.string(),
});
