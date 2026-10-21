import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RealtimeConfig = {
  supported?: boolean;
  connectionType?: string;
};

export const realtimeConfigSchema: Schema<RealtimeConfig> = s.object<RealtimeConfig>({
  supported: s.optional(s.boolean()),
  connectionType: s.optional(s.string()),
});
