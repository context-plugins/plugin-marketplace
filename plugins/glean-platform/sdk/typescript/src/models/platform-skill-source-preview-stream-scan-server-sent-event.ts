import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewStreamScanSchema,
  type PlatformSkillSourcePreviewStreamScan,
} from "./platform-skill-source-preview-stream-scan.js";

export type PlatformSkillSourcePreviewStreamScanServerSentEvent = {
  id?: string;
  /** @default "SCAN" */
  event?: "SCAN";
  /** Repository scan started; names every skill path found. */
  data: PlatformSkillSourcePreviewStreamScan;
};

export const platformSkillSourcePreviewStreamScanServerSentEventSchema: Schema<PlatformSkillSourcePreviewStreamScanServerSentEvent> =
  s.object<PlatformSkillSourcePreviewStreamScanServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("SCAN"), "SCAN"),
    data: platformSkillSourcePreviewStreamScanSchema,
  });
