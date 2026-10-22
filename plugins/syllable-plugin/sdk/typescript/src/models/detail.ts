import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail = {
  /** Identifies a legacy session link @default "legacy_session_link" */
  code?: "legacy_session_link";
  /** The requested transcript ID */
  sessionId: string;
  /** The transcript path to open */
  redirectTo: string;
  /** Why this request was rejected */
  message: string;
};

export const detailSchema: Schema<Detail> = s.object<Detail>({
  code: s.defaulted(s.literal("legacy_session_link"), "legacy_session_link"),
  sessionId: s.string(),
  redirectTo: s.string(),
  message: s.string(),
  _keysMap: {
    sessionId: "session_id",
    redirectTo: "redirect_to",
  },
});
