import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewResponse1Schema,
  type PlatformSkillSourcePreviewResponse1,
} from "./platform-skill-source-preview-response1.js";

/** Terminal success event carrying the fully assembled preview. */
export type PlatformSkillSourcePreviewStreamResult = {
  /** Event type, also sent as the SSE `event` name. @default "RESULT" */
  type?: "RESULT";
  /** The fully assembled preview response. */
  response: PlatformSkillSourcePreviewResponse1;
};

export const platformSkillSourcePreviewStreamResultSchema: Schema<PlatformSkillSourcePreviewStreamResult> =
  s.object<PlatformSkillSourcePreviewStreamResult>({
    type: s.defaulted(s.literal("RESULT"), "RESULT"),
    response: platformSkillSourcePreviewResponse1Schema,
  });
