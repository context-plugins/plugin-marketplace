import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformSkillSourcePreviewStreamErrorSchema,
  type PlatformSkillSourcePreviewStreamError,
} from "../platform-skill-source-preview-stream-error.js";
import {
  platformSkillSourcePreviewStreamProgressSchema,
  type PlatformSkillSourcePreviewStreamProgress,
} from "../platform-skill-source-preview-stream-progress.js";
import {
  platformSkillSourcePreviewStreamResultSchema,
  type PlatformSkillSourcePreviewStreamResult,
} from "../platform-skill-source-preview-stream-result.js";
import {
  platformSkillSourcePreviewStreamScanSchema,
  type PlatformSkillSourcePreviewStreamScan,
} from "../platform-skill-source-preview-stream-scan.js";
import {
  platformSkillSourcePreviewStreamSkillSchema,
  type PlatformSkillSourcePreviewStreamSkill,
} from "../platform-skill-source-preview-stream-skill.js";

/**
 * JSON object written to the SSE `data` field of a streaming source preview. This schema is the
 * payload for SDK transform, not the raw HTTP body. Do not run JSON response conformance on stream
 * bodies. Each frame also carries an `event` name matching the payload `type`. The stream ends with
 * the RESULT event on success or the ERROR event on failure. A typical wire frame is: event: SCAN
 * data:
 * {"type":"SCAN","total":1,"skill_paths":["https://github.com/acme/skills/tree/main/skills/example"]}
 */
export type PlatformSkillSourcePreviewStreamEvent =
  | (PlatformSkillSourcePreviewStreamScan & { type: "SCAN" })
  | (PlatformSkillSourcePreviewStreamProgress & { type: "PROGRESS" })
  | (PlatformSkillSourcePreviewStreamSkill & { type: "SKILL" })
  | (PlatformSkillSourcePreviewStreamResult & { type: "RESULT" })
  | (PlatformSkillSourcePreviewStreamError & { type: "ERROR" });

export const platformSkillSourcePreviewStreamEventSchema: Schema<PlatformSkillSourcePreviewStreamEvent> =
  s.discriminatedUnion<PlatformSkillSourcePreviewStreamEvent>("type", {
    SCAN: platformSkillSourcePreviewStreamScanSchema,
    PROGRESS: platformSkillSourcePreviewStreamProgressSchema,
    SKILL: platformSkillSourcePreviewStreamSkillSchema,
    RESULT: platformSkillSourcePreviewStreamResultSchema,
    ERROR: platformSkillSourcePreviewStreamErrorSchema,
  });
