import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Repository scan started; names every skill path found. */
export type PlatformSkillSourcePreviewStreamScan = {
  /** Event type, also sent as the SSE `event` name. @default "SCAN" */
  type?: "SCAN";
  /** Number of skill paths found in the scan. */
  total: number;
  /** Skill paths found in the scan. */
  skillPaths: string[];
};

export const platformSkillSourcePreviewStreamScanSchema: Schema<PlatformSkillSourcePreviewStreamScan> =
  s.object<PlatformSkillSourcePreviewStreamScan>({
    type: s.defaulted(s.literal("SCAN"), "SCAN"),
    total: s.int(),
    skillPaths: s.array(s.string()),
    _keysMap: {
      skillPaths: "skill_paths",
    },
  });
