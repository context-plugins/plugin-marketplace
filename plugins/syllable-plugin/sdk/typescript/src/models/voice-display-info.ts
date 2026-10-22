import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Display metadata for a canonical voice identifier. */
export type VoiceDisplayInfo = {
  displayName: string;
  provider: string;
};

export const voiceDisplayInfoSchema: Schema<VoiceDisplayInfo> = s.object<VoiceDisplayInfo>({
  displayName: s.string(),
  provider: s.string(),
  _keysMap: {
    displayName: "display_name",
  },
});
