import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewStreamProgressSchema,
  type PlatformSkillSourcePreviewStreamProgress,
} from "./platform-skill-source-preview-stream-progress.js";

export type PlatformSkillSourcePreviewStreamProgressServerSentEvent = {
  id?: string;
  /** @default "PROGRESS" */
  event?: "PROGRESS";
  /** One skill finished inspecting; names the skill in progress. */
  data: PlatformSkillSourcePreviewStreamProgress;
};

export const platformSkillSourcePreviewStreamProgressServerSentEventSchema: Schema<PlatformSkillSourcePreviewStreamProgressServerSentEvent> =
  s.object<PlatformSkillSourcePreviewStreamProgressServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("PROGRESS"), "PROGRESS"),
    data: platformSkillSourcePreviewStreamProgressSchema,
  });
