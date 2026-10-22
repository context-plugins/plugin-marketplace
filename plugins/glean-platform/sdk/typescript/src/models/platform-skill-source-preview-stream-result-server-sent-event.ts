import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewStreamResultSchema,
  type PlatformSkillSourcePreviewStreamResult,
} from "./platform-skill-source-preview-stream-result.js";

export type PlatformSkillSourcePreviewStreamResultServerSentEvent = {
  id?: string;
  /** @default "RESULT" */
  event?: "RESULT";
  /** Terminal success event carrying the fully assembled preview. */
  data: PlatformSkillSourcePreviewStreamResult;
};

export const platformSkillSourcePreviewStreamResultServerSentEventSchema: Schema<PlatformSkillSourcePreviewStreamResultServerSentEvent> =
  s.object<PlatformSkillSourcePreviewStreamResultServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("RESULT"), "RESULT"),
    data: platformSkillSourcePreviewStreamResultSchema,
  });
