import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformSkillSourcePreviewStreamErrorServerSentEventSchema,
  type PlatformSkillSourcePreviewStreamErrorServerSentEvent,
} from "../platform-skill-source-preview-stream-error-server-sent-event.js";
import {
  platformSkillSourcePreviewStreamProgressServerSentEventSchema,
  type PlatformSkillSourcePreviewStreamProgressServerSentEvent,
} from "../platform-skill-source-preview-stream-progress-server-sent-event.js";
import {
  platformSkillSourcePreviewStreamResultServerSentEventSchema,
  type PlatformSkillSourcePreviewStreamResultServerSentEvent,
} from "../platform-skill-source-preview-stream-result-server-sent-event.js";
import {
  platformSkillSourcePreviewStreamScanServerSentEventSchema,
  type PlatformSkillSourcePreviewStreamScanServerSentEvent,
} from "../platform-skill-source-preview-stream-scan-server-sent-event.js";
import {
  platformSkillSourcePreviewStreamSkillServerSentEventSchema,
  type PlatformSkillSourcePreviewStreamSkillServerSentEvent,
} from "../platform-skill-source-preview-stream-skill-server-sent-event.js";

/** A typed server-sent event. */
export type PlatformSkillSourcePreviewStreamEventServerSentEvent =
  | (PlatformSkillSourcePreviewStreamScanServerSentEvent & { event: "SCAN" })
  | (PlatformSkillSourcePreviewStreamProgressServerSentEvent & { event: "PROGRESS" })
  | (PlatformSkillSourcePreviewStreamSkillServerSentEvent & { event: "SKILL" })
  | (PlatformSkillSourcePreviewStreamResultServerSentEvent & { event: "RESULT" })
  | (PlatformSkillSourcePreviewStreamErrorServerSentEvent & { event: "ERROR" });

export const platformSkillSourcePreviewStreamEventServerSentEventSchema: Schema<PlatformSkillSourcePreviewStreamEventServerSentEvent> =
  s.discriminatedUnion<PlatformSkillSourcePreviewStreamEventServerSentEvent>("event", {
    SCAN: platformSkillSourcePreviewStreamScanServerSentEventSchema,
    PROGRESS: platformSkillSourcePreviewStreamProgressServerSentEventSchema,
    SKILL: platformSkillSourcePreviewStreamSkillServerSentEventSchema,
    RESULT: platformSkillSourcePreviewStreamResultServerSentEventSchema,
    ERROR: platformSkillSourcePreviewStreamErrorServerSentEventSchema,
  });
